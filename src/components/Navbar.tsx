import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gray-600 text-white shadow-md rounded">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold">Tucán Store 🛒</h1>
                <button
                    className="sm:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                                isOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>

                <div className="hidden sm:flex space-x-4">
                    <Link to="/" className="hover:underline">
                        Inicio
                    </Link>
                    <Link to="/favorites" className="hover:underline">
                        Favoritos ⭐
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden px-4 pb-4 space-y-2">
                    <Link
                        to="/"
                        className="block hover:underline"
                        onClick={toggleMenu}
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/favoritos"
                        className="block hover:underline"
                        onClick={toggleMenu}
                    >
                        Favoritos ⭐
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
