import Student from "../models/student.models";

export const addStudents = async(req, res) => {
    try {
        const student = new Student(req.body);
        const saveStudent = await student.save();

        res.status(201).json(saveStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
