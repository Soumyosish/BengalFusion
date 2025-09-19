import dotenv from "dotenv";
dotenv.config();

import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI is not defined");
}

const ownerEmail = process.env.OWNER_EMAIL; // Owner email to receive copy

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db();
  cachedClient = client;
  cachedDb = db;
  console.log("MongoDB connected successfully.");
  return { client, db };
}

async function sendConfirmationEmail(toEmail) {
  // Configure nodemailer transporter (e.g., Gmail SMTP or other provider)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptionsUser = {
    from: process.env.SMTP_USER,
    to: toEmail,
    subject: "Newsletter Subscription Confirmation",
    text: "Thank you for subscribing to our newsletter!",
  };

  const mailOptionsOwner = {
    from: process.env.SMTP_USER,
    to: ownerEmail,
    subject: `New Newsletter Subscription: ${toEmail}`,
    text: `New subscriber: ${toEmail}`,
  };

  // Send email to user and owner copy
  await transporter.sendMail(mailOptionsUser);
  await transporter.sendMail(mailOptionsOwner);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;
  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Valid email required" });
  }

  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("subscribers");

    // Check if email exists
    const existing = await collection.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ message: "You have already subscribed" });
    }

    // Insert new subscriber
    await collection.insertOne({
      email: email.toLowerCase(),
      subscribedAt: new Date(),
    });

    // Send confirmation emails
    await sendConfirmationEmail(email);

    return res
      .status(200)
      .json({ message: "You have subscribed to the newsletter" });
  } catch (error) {
    console.error("Subscription error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
