import api from "../utils/api";

export const getStudents = async () => {
    const res = await api.get("/api/students");
    return res.data;
};

export const getStudentById = async (id) => {
    const res = await api.get(`/api/students/${id}`)
    return  res.data;
};

export const addStudents = async (data) => {
    const res = await api.post("/api/students", data);
    return res.data;
};

export const deleteStudents = async () => {
    const res = await api.delete("/api/students");
    return res.data;
};

export const deleteStudentById = async (id) => {
    const res = await api.delete(`/api/students/${id}`);
    return res.data;
};

export const updateStudents = async (data, id) => {
    const res = await api.put(`/api/students/${id}`, data);
    return res.data;
};

export const getAllClasses = async () => {
    const res = await api.get(`/api/students/classes`);
    return res.data;
};