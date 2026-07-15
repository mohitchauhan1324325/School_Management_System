import { useEffect, useState } from "react";
import { getAllClasses } from "../api/studentApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ClassesPage = () => {
    const [classes, setClasses] = useState([]);

    const navigate = useNavigate();

    const handleDetails = (className) => {
        navigate(`/classes/${className}`);
    };

    const fetchClasses = async () => {
        try {
            const res = await getAllClasses();
            setClasses(res);
        } catch (error) {
            toast.error("Failed to load classes");
            console.log(error);
        }
    };

    useEffect(() => {
        fetchClasses();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold">
                        📚 Classes
                    </h1>
                    <p className="text-slate-400 mt-2">
                        Select a class to view all students
                    </p>
                </div>

                {/* Class Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((clas) => (
                        <div
                            key={clas.class_name}
                            onClick={() => handleDetails(clas.class_name)}
                            className="cursor-pointer bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-5">
                                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
                                    🎓
                                </div>
                            </div>

                            {/* Class Name */}
                            <h2 className="text-2xl font-bold text-center">
                                {clas.class_name}
                            </h2>

                            <p className="text-slate-400 text-center mt-3">
                                Click to view students
                            </p>

                            {/* Button */}
                            <button
                                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 rounded-lg py-2 font-semibold transition"
                            >
                                View Students →
                            </button>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {classes.length === 0 && (
                    <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
                        <h2 className="text-2xl font-semibold text-slate-300">
                            No Classes Found
                        </h2>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ClassesPage;