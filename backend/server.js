import express from "express";
import cors from "cors";
import subscribeHandler from "./api/subscribe.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
console.log("Loaded MONGODB_URI:", process.env.MONGODB_URI);
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/subscribe", subscribeHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
