import pool from "../config/db.js";

export const addStudents = async (req, res) => {
    try {
        const { name, age, class_name, school_name } = req.body;

        const result = await pool.query(
            `INSERT INTO student (name, age, class_name, school_name)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
            [name, age, class_name, school_name]
        );

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error.message });
    }
};

export const getStudents = async (req, res) => {
    try {

        const result = await pool.query(`
    SELECT id, name, age, class_name, school_name
    FROM student
`);

        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(`
            SELECT id, name, age, class_name, school_name
            FROM student
            WHERE id = $1`,
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const deleteStudentById = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(`
            DELETE FROM student
            WHERE id = $1
            RETURNING *`,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully",
            student: result.rows[0]
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const deleteStudents = async (req, res) => {
    try {
        const result = await pool.query(`
            DELETE FROM Student
            RETURNING *
            `);

        res.status(200).json({
            message: "All students deleted successfully",
            deletedCount: result.rowCount
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const updateStudents = async (req, res) => {
    try {

        const { id } = req.params;
        const { name, age, class_name, school_name } = req.body;

        const result = await pool.query(`
            UPDATE student
            SET name = $1,
                age = $2,
                class_name = $3,
                school_name = $4
            WHERE id = $5
            RETURNING *`,
            [name, age, class_name, school_name, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(result.rows[0]);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const getAllClasses = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT DISTINCT class_name
            FROM student
            ORDER BY class_name
            `);
        res.status(200).json(result.rows);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};