import { useEffect } from "react"
import { Link } from "react-router"
import AxiosInstance from "../lib/axios";



const Home = () => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Ambil data produk
                const userResponse = await AxiosInstance.get("/auth/get");
                console.log(userResponse.data); // Log data produk
                // setProducts(productResponse.data); // Set data produk
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData(); // Panggil fungsi fetchData
    }, []);

    return (
        <div className="flex flex-col">
            <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-lg font-bold">My App</h1>
                <Link to={"/login"} className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
            </nav>
        </div>
    )
}

export default Home
