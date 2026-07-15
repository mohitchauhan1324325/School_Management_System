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
        <div>
            {students.map((student) => (
                <div key={student.id}>
                    <p>{student.name}</p>
                </div>
            ))}
        </div>
    );
};

export default ClassDetails;