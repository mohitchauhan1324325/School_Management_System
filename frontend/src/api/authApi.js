import api from "../utils/api";

export const register = async (data) => {

    const res = await api.post("/api/register", data);

    return res.data;
};

export const loginUser = async (data) => {

    const res = await api.post("/api/login", data);

    const token = res.data.token;
    const user = res.data.user;

    if (token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
    }

    return res.data;
};