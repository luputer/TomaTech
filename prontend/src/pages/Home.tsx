import { Link } from "react-router"

const Home = () => {
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
