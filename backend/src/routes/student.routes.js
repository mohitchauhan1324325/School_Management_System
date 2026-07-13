import express from "express";
import { addStudents, deleteStudentById, deleteStudents, getStudentById, getStudents } from "../controllers/student.controller.js";
// import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/students", addStudents);

router.get("/students", getStudents);

router.get("/students/:id", getStudentById);

router.delete("/students/:id", deleteStudentById);

router.delete("/students", deleteStudents);

export default router;
