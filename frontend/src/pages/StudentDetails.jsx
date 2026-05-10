import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getStudentById, getStudents } from '../api/studentApi';
import { toast } from 'react-toastify';
import StudentCard from '../components/StudentCard';

const StudentDetails = () => {

    const { id } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const res = await getStudentById(id);

                setStudent(res);

            } catch (error) {
                toast.error(error.message);
            }
        }

        fetchStudents();
    }, [id]);

    return (
        <StudentCard
            student={student}
        />

    )
}

export default StudentDetails
