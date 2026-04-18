export const getStudents = async () => {
    try {
        const res = await fetch("http://localhost:5000/students");
        
        const data = await res.json();
        return data;

    } catch (error) {
        throw error;
    }
}