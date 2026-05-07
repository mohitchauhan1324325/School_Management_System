export const register = async (data) => {
    try {

        const res = await fetch("http://localhost:5001/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        return result;

    } catch (error) {
        throw error;
        console.log(error);
        
    }
}

export const loginUser = async (data) => {
    try {
        const res = await fetch("http://localhost:5001/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        const { token, user } = result.data;

        if (token && user) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        }

        return result.data;

    } catch (error) {
        throw error;
    }
}