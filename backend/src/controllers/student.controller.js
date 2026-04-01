import Student from "../models/student.models.js";

export const addStudents = async(req, res) => {
    try {
        const student = new Student(req.body);
        const saveStudent = await student.save();

        res.status(200).json(saveStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getStudents = async(req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
