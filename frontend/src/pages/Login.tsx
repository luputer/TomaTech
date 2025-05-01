import { Link } from "react-router";
import AxiosInstance from "../lib/axios";
import { useEffect, useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            window.location.href = "/dashbord";
        }
    }, [])


    // const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     try {
    //         const response = await AxiosInstance.post("/auth/login", {
    //             username,
    //             password,
    //         });
    //         localStorage.setItem("token", response.data.token);
    //         window.location.href = `/dashbord`;
    //     } catch (error: any) {
    //         if (error.response && error.response.data) {
    //             alert(error.response.data.message);
    //         } else {
    //             alert("An unexpected error occurred.");
    //         }
    //     }

    // }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await AxiosInstance.post("/auth/login", {
                username,
                password,
            });
            localStorage.setItem("token", response.data.token);
            window.location.href = `/dashbord`;
        } catch (error: any) {
            if (error.response && error.response.data) {
                alert(error.response.data.message);
            } else {
                alert("An unexpected error occurred.");
            }
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">username</label>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                placeholder="Enter your Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-sm text-center text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register
                        </Link>
                    </p>
                    {/* <p>{Response}</p> */}
                </div>
            </div>
        </>
    );
};

export default Login
