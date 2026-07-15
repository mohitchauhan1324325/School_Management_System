import React, { useEffect, useState } from "react";
import {
  deleteStudentById,
  deleteStudents,
  getStudents,
} from "../api/studentApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const role = "teacher";

  const handleLogout = () => {
    logout();
  };

  const handleDetails = (id) => {
    navigate(`/students/${id}`);
  };

  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res);
    } catch (error) {
      toast.error("Failed to load students!");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async () => {
    try {
      await deleteStudents();
      setStudents([]);
      toast.success("All students deleted successfully");
    } catch (error) {
      toast.error("Failed to delete students");
    }
  };

  const handleDeleteById = async (id) => {
    try {
      await deleteStudentById(id);

      setStudents((prev) =>
        prev.filter((student) => student.id !== id)
      );

      toast.success("Student deleted successfully");
    } catch (error) {
      toast.error("Failed to delete student");
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">
          <div>
            <h1 className="text-3xl font-bold">
              🎓 Student Management
            </h1>

            <p className="text-slate-400">
              Manage your students easily
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* Top Section */}

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

          <div>
            <h2 className="text-3xl font-bold">
              Students
            </h2>

            <p className="text-slate-400 mt-1">
              Total Students : {students.length}
            </p>
          </div>

          <button
            onClick={() => navigate("/addStudents")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            + Add Student
          </button>

        </div>

        {/* Search */}

        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 mb-8 outline-none focus:border-blue-500"
        />

        {/* Students */}

        {filteredStudents.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-semibold">
              No Students Found
            </h2>

            <p className="text-slate-400 mt-2">
              Add a student to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-5">

            {filteredStudents.map((student) => (

              <div
                key={student.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
              >
                <div className="flex flex-col lg:flex-row justify-between gap-6">

                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
                      {student.name.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold">
                        {student.name}
                      </h2>

                      <p className="text-slate-400">
                        Age : {student.age}
                      </p>

                      <p className="text-slate-400">
                        Class : {student.class_name}
                      </p>

                      <p className="text-slate-400">
                        School : {student.school_name}
                      </p>
                    </div>

                  </div>

                  <div className="flex gap-3 items-center">

                    <button
                      onClick={() => handleDetails(student.id)}
                      className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
                    >
                      View
                    </button>

                    {role === "teacher" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteById(student.id);
                        }}
                        className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
                      >
                        Delete
                      </button>
                    )}

                  </div>

                </div>
              </div>

            ))}

          </div>
        )}

        {/* Bottom Buttons */}

        {role === "teacher" && (
          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg"
            >
              Delete All Students
            </button>

            <button
              onClick={() => navigate("/classes")}
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg"
            >
              Classes
            </button>

            <button
              onClick={() => navigate("/register")}
              className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg"
            >
              Register
            </button>

            <button
              onClick={() => navigate("/login")}
              className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg"
            >
              Login
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default StudentsPage;