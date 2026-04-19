import React from 'react'
import { useEffect, useState } from 'react';
import { deleteStudentById, deleteStudents, getStudents } from '../api/studentApi';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const StudentsPage = () => {

    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    const fetchStudents = async () => {
        try {
            const res = await getStudents();
            setStudents(res);
        } catch (error) {
            toast.error("Faild to load students!");
            console.log(error);
        }
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleDelete = async () => {
        try {
            const res = await deleteStudents();
            setStudents([]);
            toast.success("Student delete successfully");
        } catch (error) {
            toast.error("Faild to delete student");
        }
    };

    const handleDeleteById = async (id) => {
        try {
            await deleteStudentById(id);
            setStudents(prev => prev.filter(room => room._id !== id));
            toast.success("Student delete successfully");
        } catch (error) {
            toast.error("Faild to delete");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <div className="max-w-4xl mx-auto space-y-4">

                <h1 className="text-3xl font-bold text-center text-gray-700">
                    Students List
                </h1>

                {students?.map((student) => (
                    <div
                        key={student._id}
                        className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded-xl shadow gap-4"
                    >
                        <div className="space-y-1">
                            <h1 className="text-xl font-semibold text-gray-800">
                                Name: {student.name}
                            </h1>
                            <h3 className="text-gray-600">Age: {student.age}</h3>
                            <h3 className="text-gray-600">Class: {student.class}</h3>
                            <h3 className="text-gray-600">
                                School Name: {student.schoolName || "No School"}
                            </h3>
                        </div>

                        <button
                            onClick={() => handleDeleteById(student._id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        >
                            Delete Student
                        </button>
                    </div>
                ))}

                <div className="flex flex-col md:flex-row gap-4 mt-6">

                    <button
                        onClick={() => handleDelete()}
                        className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                    >
                        Delete All Students
                    </button>

                    <button
                        onClick={() => navigate("/addStudents")}
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Add Students
                    </button>

                </div>

            </div>
        </div>
    )
}

export default StudentsPage;