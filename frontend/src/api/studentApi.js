export const getStudents = async () => {
    try {
        const res = await fetch("http://localhost:5000/students");

        const data = await res.json();
        return data;

    } catch (error) {
        throw error;
    }
}

export const addStudents = async (data) => {
    try {

        const res = await fetch("http://localhost:5000/students", {
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
    }
}