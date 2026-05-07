import React from 'react'
import { useState } from 'react'
import { register } from '../api/authApi';
import RegisterForm from '../components/RegisterForm';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {

        if (!form.name || !form.email || !form.password) {
            return toast.error("Please fill all required fields");
        }
        try {
            const data = await register(form);
            toast.success(data.message || "Register successfully");
            navigate("/login");
        } catch (error) {
            toast.error(error.message);
            console.log(error.message);
            
        }
    };

    return (
        <RegisterForm
        handleChange={handleChange}
        handleRegister={handleRegister}
        />
    )
}

export default RegisterPage
