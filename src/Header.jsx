import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    {name:"Skills",path:"skills"},
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact-us" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Scroll to section with smooth animation
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50 transition-all duration-500"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
        {/* Logo */}
        <motion.h1
          className="text-4xl font-extrabold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-serif text-blue-500">Port</span>
          <span className="font-sans text-white">folio</span>
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <motion.button
              key={item.name}
              className="text-blue-400 text-lg font-semibold border-b-2 border-transparent transition-all duration-300 hover:border-blue-500 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection(item.path)}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <motion.svg
            className="w-7 h-7 transition-transform transform hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ rotate: 0 }}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </motion.svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className="md:hidden bg-gray-800 border-t-2 border-blue-500 overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {menuItems.map((item) => (
          <motion.button
            key={item.name}
            className="block py-3 px-6 text-blue-400 text-lg font-medium border-b border-gray-700 hover:bg-gray-700 transition-all duration-300 w-full text-left"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(item.path)}
          >
            {item.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Animated Middle Line */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-blue-500 rounded"
        initial={{ width: "0%" }}
        animate={{ width: "50%" }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      ></motion.div>
    </motion.header>
  );
};

export default Header;
