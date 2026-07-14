import express from "express";
import { addStudents, deleteStudentById, deleteStudents, getAllClasses, getStudentById, getStudents, updateStudents } from "../controllers/student.controller.js";
// import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/students", addStudents);

router.get("/students", getStudents);

router.get("/students/classes", getAllClasses);

router.get("/students/:id", getStudentById);

router.delete("/students/:id", deleteStudentById);

router.delete("/students", deleteStudents);

router.put("/students/:id", updateStudents);



export default router;
