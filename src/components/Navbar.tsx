import { useState } from "react";
import logoblue from "../assets/Logo blue.png"; // ganti path jika perlu
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/#features" },
    { name: "Support", path: "/#support" },
    { name: "Contact Us", path: "/#contact" },
  ];

  return (
    <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl bg-white backdrop-blur rounded-lg px-6 py-4 flex justify-between items-center z-50 shadow">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logoblue}
          alt="ProLearn Logo"
          className="h-8 w-8 w-auto mr-2"
        />
        <span className="font-bold text-xl text-indigo-600 ml-2">ProLearn</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`${
              location.pathname === item.path
                ? "text-indigo-600 font-bold"
                : "text-gray-800"
            } hover:text-indigo-600 font-archivo`}
          >
            {item.name}
          </Link>
        ))}
        <Link to="/signup">
          <button className="px-4 py-2 border-indigo-600 bg-indigo-600 border text-white rounded hover:bg-indigo-700 transition">
            Register
          </button>
        </Link>
        <Link to="/signin">
          <button className="px-4 py-2 bg-gray-200 text-indigo-600 rounded hover:bg-indigo-100 hover:text-indigo-700 transition">
            Sign in
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-800 focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full mt-4 left-0 w-full bg-white/80 backdrop-blur rounded-lg shadow px-6 py-4 flex flex-col space-y-3 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`${
                location.pathname === item.path
                  ? "text-indigo-600 font-bold"
                  : "text-gray-800"
              } hover:text-indigo-600 font-archivo`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/signup">
            <button className="w-full cursor-pointer border border-indigo-600 text-indigo-600 rounded py-2 hover:bg-indigo-600 hover:text-white transition">
              Register
            </button>
          </Link>
          <Link to="/signin">
            <button className="w-full cursor-pointer bg-indigo-600 text-white rounded py-2 hover:bg-indigo-700 transition">
              Sign in
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
