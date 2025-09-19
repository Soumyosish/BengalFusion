import express from "express";
import cors from "cors";
import subscribeHandler from "./api/subscribe.js";
import dotenv from "dotenv";

dotenv.config();
console.log("Loaded MONGODB_URI:", process.env.MONGODB_URI);

const app = express();

app.use(cors());
app.use(express.json());

// Status route to verify backend is running
app.get("/api/status", (req, res) => {
  res.status(200).json({ message: "BengalFusion backend is running!" });
});

// Subscribe API
app.post("/api/subscribe", subscribeHandler);

// 404 handler for unmatched API routes
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Do NOT call app.listen() on Vercel
// Export the app for Vercel's serverless invocation
export default app;
