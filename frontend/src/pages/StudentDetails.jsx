import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentById } from "../api/studentApi";
import { toast } from "react-toastify";
import StudentCard from "../components/StudentCard";

const StudentDetails = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await getStudentById(id);
                setStudent(res);
            } catch (error) {
                toast.error(error.message || "Failed to load student");
            } finally {
                setLoading(false);
            }
        };

        fetchStudent();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-xl font-semibold text-slate-300 animate-pulse">
                    Loading Student...
                </div>
            </div>
        );
    }

    if (!student) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
                    <h2 className="text-2xl font-bold text-white">
                        Student Not Found
                    </h2>
                    <p className="text-slate-400 mt-2">
                        The requested student doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 px-6 py-10">
            <div className="max-w-4xl mx-auto">

                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-white">
                        Student Details
                    </h1>

                    <p className="text-slate-400 mt-2">
                        View complete information about the student.
                    </p>
                </div>

                <StudentCard student={student} />

            </div>
        </div>
    );
};

export default StudentDetails;