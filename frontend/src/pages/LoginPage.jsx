import React from 'react'
import LoginForm from '../components/LoginForm'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleLogin = async () => {
        try {

            await LoginForm(form);
            toast.success("Login successfully");
            navigate("/");

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <LoginForm
            handleChange={handleChange}
            handleLogin={handleLogin}
        />
    )
}

export default LoginPage
