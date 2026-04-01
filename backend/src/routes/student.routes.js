import express from "express";
import { addStudents, getStudents } from "../controllers/student.controller.js";

const router = express.Router();

router.post("/students", addStudents);

router.get("/students", getStudents);

export default router;
