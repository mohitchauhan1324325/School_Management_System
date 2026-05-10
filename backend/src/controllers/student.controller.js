import Student from "../models/student.models.js";

export const addStudents = async (req, res) => {
    try {
        const student = new Student(req.body);
        const saveStudent = await student.save();

        res.status(200).json(saveStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getStudentById = async (req, res) => {
    try {
        const id = req.params.id;
        const student = await Student.findById(id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteStudentById = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        res.json({ message: "Student deleted" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteStudents = async (req, res) => {
    try {
        const students = await Student.deleteMany();

        res.json({ message: "All students are deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
