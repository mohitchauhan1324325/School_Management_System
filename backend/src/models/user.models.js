import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: String,
    phone: Number,

    role: {
        type: String,
        enum: ["student", "teacher", "admin"],
        default: "student"
    }

}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;