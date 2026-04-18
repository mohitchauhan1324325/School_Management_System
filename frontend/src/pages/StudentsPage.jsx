import React from 'react'
import { useEffect, useState } from 'react';
import { getStudents } from '../api/studentApi';
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

    return (
        <div>
            {students?.map((student) => (
                <div
                    key={student._id}
                    className='flex gap-20'
                >
                    <h1 className='text-3xl'>Name:{student.name}</h1>
                    <h3>Age: {student.age}</h3>
                    <h3>Class: {student.class}</h3>
                    <h3>School Name: {student.schoolName || "No School"}</h3>
                </div>
            ))
            }

            <button onClick={() => navigate("/addStudents")}>Add Students</button>
        </div>
    )
}

export default StudentsPage
