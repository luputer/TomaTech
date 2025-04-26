import { useEffect, useState } from "react";
import { Link } from "react-router";
import AxiosInstance from "../lib/axios";

type User = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

const Dashbord = () => {
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>([]); // State untuk menyimpan data produk

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ambil user ID dari localStorage
        const userId = localStorage.getItem("userId");
        if (userId) {
          const userResponse = await AxiosInstance.get(`/user/${userId}`);
          setUser(userResponse.data); // Set data pengguna
        }

        // Ambil data produk
        const productResponse = await AxiosInstance.get("/products");
        console.log(productResponse.data); // Log data produk
        setProducts(productResponse.data); // Set data produk
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Panggil fungsi fetchData
  }, []);

  const handleDelete = async (id: string, e) => {
    try {
      await AxiosInstance.get(`/products/${id}`); // Panggil endpoint delete
      setProducts(products.filter((product) => product.id !== id)); // Hapus produk dari state
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    setUser(null); // Clear the user state
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">
            <Link to="/dashbord" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/settings" className="hover:text-gray-300">
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <div className="text-gray-600">
            {user ? `Welcome, ${user.name}` : "Welcome, Guest"}
          </div>
          <Link
            to="/"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>
        <div className="mt-4">
          <p>Welcome to the dashboard!</p>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Products:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.length > 0 ? (
                products.map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                  >
                    <h4 className="font-bold text-lg">{product.name}</h4>
                    <p className="text-gray-600">${product.price}</p>
                    <p className="text-black">{product.description}</p>
                    <button
                      onClick={() => handleDelete(product.id)} // Panggil handleDelete dengan ID produk
                      className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p>No products available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;