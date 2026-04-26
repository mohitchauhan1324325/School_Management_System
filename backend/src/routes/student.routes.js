import express from "express";
import { addStudents, deleteStudentById, deleteStudents, getStudents } from "../controllers/student.controller.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/students", protect, addStudents);

router.get("/students", getStudents);

router.delete("/students/:id", protect, deleteStudentById);

router.delete("/students", protect, deleteStudents);

export default router;
