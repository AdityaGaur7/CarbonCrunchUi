import React from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "text-white font-bold" : "text-gray-400 hover:text-white";
    };

    return (
        <nav className="fixed w-full z-50 top-0 start-0 bg-[#1A1A23]/80 backdrop-blur-sm py-4">
            <div className="container mx-auto px-4 max-w-screen-xl flex flex-wrap items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    {/* Logo Icon */}
                    <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded-xl flex items-center justify-center">
                        <span className="font-bold text-lg md:text-xl text-white">G</span>
                    </div>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        className="bg-white text-black font-bold text-sm px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
                    >
                        Connect Wallet
                    </motion.button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-12 md:mt-0 md:bg-transparent">
                        <li>
                            <Link to="/about" className={`block py-2 px-3 rounded md:p-0 ${isActive('/about')}`}>About us</Link>
                        </li>
                        <li>
                            <Link to="/features" className={`block py-2 px-3 rounded md:p-0 ${isActive('/features')}`}>Store</Link>
                        </li>
                        <li>
                            <Link to="/pricing" className={`block py-2 px-3 rounded md:p-0 ${isActive('/pricing')}`}>Games</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
