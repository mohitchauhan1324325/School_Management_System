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

export const deleteStudents = async () => {
  try {
    const res = await fetch("http://localhost:5000/students", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Delete failed");
    }

    return data;

  } catch (error) {
    throw error;
  }
};

export const deleteStudentById = async (id) => {
    try {
        const res = await fetch(`http://localhost:5000/students/${id}`, {
            method: "DELETE",
        });

        const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Delete failed");
    }

    return data;

    } catch (error) {
        throw error;
    }
};