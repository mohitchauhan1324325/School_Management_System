import { useEffect } from "react";
import { useState } from "react";
import { getAllClasses } from "../api/studentApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ClassesPage = () => {

    const [classes, setClasses] = useState([]);

    const naviagte = useNavigate();

    const handleDetails = (className) => {
        naviagte(`/classes/${className}`);
    }

    const fetchClasses = async () => {
        try {
            const res = await getAllClasses();
            setClasses(res);

        } catch (error) {
            toast.error("Failed to load classes");
            console.log(error);
        }
    }

    useEffect(() => {
        fetchClasses();
    }, []);

    return (
        <div className="max-w-4xl mx-auto space-y-4">
            {classes?.map((clas) => (
                <div
                    key={clas.class_name}
                    className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded-xl shadow gap-4"
                    onClick={() => handleDetails(clas.class_name)}
                >
                    <div className="space-y-1">
                        <h1 className="text-xl font-semibold text-gray-800">
                            Name: {clas.class_name}
                        </h1>
                    </div>

                </div>
            ))}

        
        </div>
    )
}

export default ClassesPage
