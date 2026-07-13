import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express";
import dotenv from "dotenv";
import { PORT } from "./constants.js";
import studentRoutes from "./routes/student.routes.js";
import cors from "cors";
import pool from "./config/db.js";
// import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();


app.use(express.json());

app.use(cors());

// app.use("/api", authRoutes);
app.use("/api", studentRoutes);

try {
  await pool.query("SELECT NOW()");
  console.log("✅ PostgreSQL Connected");
} catch (error) {
  console.log("❌ Database Connection Error:", error.message);
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})