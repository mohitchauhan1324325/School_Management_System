import express from "express";
import { addStudents } from "../controllers/student.controller";

const router = express.Router();

router.post("/students", addStudents);