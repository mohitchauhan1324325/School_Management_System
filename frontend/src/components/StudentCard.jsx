import React from "react";

const StudentCard = ({ student }) => {
    return (
        <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8">

            {/* Avatar */}
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                    {student?.name?.charAt(0).toUpperCase()}
                </div>

                <h1 className="mt-5 text-3xl font-bold text-white">
                    {student?.name}
                </h1>

                <p className="text-slate-400 mt-1">
                    Student Profile
                </p>
            </div>

            {/* Details */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="bg-slate-800 rounded-xl p-5">
                    <p className="text-slate-400 text-sm">
                        Student ID
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-1">
                        {student?.id}
                    </h2>
                </div>

                <div className="bg-slate-800 rounded-xl p-5">
                    <p className="text-slate-400 text-sm">
                        Age
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-1">
                        {student?.age}
                    </h2>
                </div>

                <div className="bg-slate-800 rounded-xl p-5">
                    <p className="text-slate-400 text-sm">
                        Class
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-1">
                        {student?.class_name}
                    </h2>
                </div>

                <div className="bg-slate-800 rounded-xl p-5">
                    <p className="text-slate-400 text-sm">
                        School
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-1 break-words">
                        {student?.school_name}
                    </h2>
                </div>

            </div>
        </div>
    );
};

export default StudentCard;