import bcrypt from "bcryptjs";
import User from "../models/user.models.js";
import jwt from "jsonwebtoken";


export const registerUser = async (req, res) => {

    try {

        const { name, email, password, phone, role } = req.body;
        console.log(name);

        if (
            !name ||
            !email ||
            !password ||
            !phone
        ) {
            return res.status(400).json({
                message: "All fields required"
            });
        }
        
        const userExists = await User.findOne({ email }).lean();
       
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
      
        const allowedRoles = ["student", "teacher"];

        const userRole = allowedRoles.includes(role) ? role : "student";
       
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
            role: userRole
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role
            }
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error.message });
    }
};

export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};