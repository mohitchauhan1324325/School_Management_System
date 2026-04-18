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
        e.preventDefault(); // ❗ important

        try {
            await addStudents(formData);
            toast.success("Student registered successfully!");

            navigate("/");

        } catch (error) {
            toast.error("Error");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name='name'
                    placeholder='Enter name'
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="age"
                    placeholder='Enter Age'
                    value={formData.age}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name='class'
                    placeholder='Enter Class'
                    value={formData.class}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="schoolName"
                    placeholder='Enter School name'
                    value={formData.schoolName}
                    onChange={handleChange}
                />

                <button type="submit">Submit Student</button>
            </form>
        </div>
    );
};

export default AddStudents;