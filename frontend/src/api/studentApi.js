export const getStudents = async () => {
    try {
        const res = await fetch("http://localhost:5000/students");
        return res.data;

    } catch (error) {
        throw error;
    }
}