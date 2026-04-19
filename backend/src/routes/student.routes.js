import express from "express";
import { addStudents, deleteStudentById, deleteStudents, getStudents } from "../controllers/student.controller.js";

const router = express.Router();

router.post("/students", addStudents);

router.get("/students", getStudents);

router.delete("/students/:id", deleteStudentById);

router.delete("/students", deleteStudents);

export default router;
