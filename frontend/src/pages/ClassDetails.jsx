import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudents } from "../api/studentApi";

const ClassDetails = () => {
    const [students, setStudents] = useState([]);

    const { className } = useParams();

    const fetchClass = async () => {
        try {
            const res = await getStudents(className);
            setStudents(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchClass();
    }, [className]);

    return (
        <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-center">
                        {className} Class
                    </h1>
                    <p className="text-center text-slate-400 mt-2">
                        {students.length} Students Found
                    </p>
                </div>

                {/* Students */}
                {students.length === 0 ? (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
                        <h2 className="text-2xl font-semibold text-slate-300">
                            No Students Found
                        </h2>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {students.map((student) => (
                            <div
                                key={student.id}
                                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
                            >
                                {/* Avatar */}
                                <div className="flex justify-center mb-5">
                                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
                                        {student.name.charAt(0).toUpperCase()}
                                    </div>
                                </div>

                                {/* Name */}
                                <h2 className="text-2xl font-bold text-center">
                                    {student.name}
                                </h2>

                                {/* Details */}
                                <div className="mt-6 space-y-3">
                                    <div className="flex justify-between border-b border-slate-800 pb-2">
                                        <span className="text-slate-400">
                                            Student ID
                                        </span>
                                        <span>{student.id}</span>
                                    </div>

                                    <div className="flex justify-between border-b border-slate-800 pb-2">
                                        <span className="text-slate-400">
                                            Age
                                        </span>
                                        <span>{student.age}</span>
                                    </div>

                                    <div className="flex justify-between border-b border-slate-800 pb-2">
                                        <span className="text-slate-400">
                                            Class
                                        </span>
                                        <span>{student.class_name}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-slate-400">
                                            School
                                        </span>
                                        <span className="text-right">
                                            {student.school_name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default ClassDetails;