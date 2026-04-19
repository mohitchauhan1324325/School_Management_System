import React, { useState } from 'react';
import { addStudents } from '../api/studentApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddStudents = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        class: "",
        schoolName: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addStudents(formData);
            toast.success("Student registered successfully!");
            navigate("/");
        } catch (error) {
            toast.error("Error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form 
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
            >

                <h2 className="text-2xl font-bold text-center text-gray-700">
                    Add Student
                </h2>

                <input
                    type="text"
                    name='name'
                    placeholder='Enter name'
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    type="number"
                    name="age"
                    placeholder='Enter Age'
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    type="text"
                    name='class'
                    placeholder='Enter Class'
                    value={formData.class}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    type="text"
                    name="schoolName"
                    placeholder='Enter School name'
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Submit Student
                </button>

            </form>
        </div>
    );
};

export default AddStudents;