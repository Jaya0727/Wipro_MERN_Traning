<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    fetch("http://localhost:3001/cart")
      .then(res => res.json())
      .then(data => {
        const totalQty = data.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
        setCartCount(totalQty);
      });
  }, []);

  return (
    <header className="w-full">
      {/* Top navigation */}
      <div
        className={`text-white text-sm py-2 px-6 flex justify-center gap-6 ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-600"
        }`}
      >
        <NavLink to="/" className="hover:text-yellow-400">
          Home
        </NavLink>
        <NavLink to="/products" className="hover:text-yellow-400">
          Products
        </NavLink>
        <NavLink to="/customer-service" className="hover:text-yellow-400">
          Customer Service
        </NavLink>
      </div>

      {/* Main header */}
      <div
        className={`px-6 py-4 flex items-center justify-between ${
          theme === "dark" ? "bg-gray-900" : "bg-yellow-500"
        }`}
      >
        <NavLink to="/" className="text-4xl font-bold text-white">
          Eflyer
        </NavLink>

        <div className="flex items-center gap-4">
          <NavLink to="/cart" className="text-white font-semibold">
            Cart ({cartCount})
          </NavLink>

          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-black text-white text-sm"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="px-6 pb-4">
=======
const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-gray-600 text-white text-sm py-2 px-6 flex justify-center gap-6">
        <span className="cursor-pointer hover:text-yellow-400">Best Sellers</span>
        <span className="cursor-pointer hover:text-yellow-400">Gift Ideas</span>
        <span className="cursor-pointer hover:text-yellow-400">New Releases</span>
        <span className="cursor-pointer hover:text-yellow-400">Hot Deals</span>
        <span className="cursor-pointer hover:text-yellow-400">Customer Service</span>
      </div>
      <div className="bg-yellow-500 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-2xl">☰</button>
          <button className="bg-black text-white px-4 py-2 rounded text-sm">
            Categories 
          </button>
        </div>
        <h1 className="text-4xl font-bold text-white">Eflyer</h1>
        <div className="flex items-center gap-4">
          <select className="px-2 py-1 rounded">
            <option>English</option>
            <option>Hindi</option>
            <option>Telugu</option>
          </select>
          <span className="text-white cursor-pointer">Cart</span>
        </div>
      </div>

      <div className="bg-white-500 px-6 pb-4">
>>>>>>> f03efc8c054698558f1783fdd2236a615bc2173b
        <input
          type="text"
          placeholder="Search this blog"
          className="w-full px-4 py-2 rounded text-black outline-none"
        />
      </div>
    </header>
  );
};
<<<<<<< HEAD

export default Header;
=======
export default Header;
>>>>>>> f03efc8c054698558f1783fdd2236a615bc2173b
