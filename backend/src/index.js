import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express"
import dotenv from "dotenv"
import { PORT } from "./constants.js"
import dbConnect from "./db/dbConnect.js"

dotenv.config()

const app = express()

app.use(express.json())

dbConnect()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})