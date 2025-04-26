import { useState } from "react";
import { Link } from "react-router";
import AxiosInstance from "../lib/axios";

const Register = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await AxiosInstance.post("/auth/register", {
                username,
                email,
                password,
            });
            localStorage.setItem("token", response.data.token);
            window.location.href = "/login";
        } catch (error: any) {
            if (error.response && error.response.data) {
                alert(error.response.data.message);
            } else {
                alert("An unexpected error occurred.");
            }
        }
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            value={username || ""}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        onClick={handleRegister}
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600 mt-4">
                    have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>

                </p>
            </div>
        </div>
    );
};

export default Register;
