import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/70 backdrop-blur-md h-16 w-full fixed top-0 z-50 flex items-center justify-between px-6 md:px-10">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-[#38BDF8]">
        Creation<span className="text-white">with</span>
        <span className="text-[#34D399]">Ali</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white gap-8 font-semibold">
        <a href="#home" className="hover:text-[#38BDF8] transition">Home</a>
        <a href="#about" className="hover:text-[#38BDF8] transition">About</a>
        <a href="#skills" className="hover:text-[#38BDF8] transition">Skills</a>
        <a href="#clients" className="hover:text-[#38BDF8] transition">Clients</a>
        <a href="#contact" className="hover:text-[#38BDF8] transition">Contact</a>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0F172A] flex flex-col items-center gap-5 py-6 text-white md:hidden shadow-lg">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-[#38BDF8]">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#38BDF8]">About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-[#38BDF8]">Skills</a>
          <a href="#clients" onClick={() => setMenuOpen(false)} className="hover:text-[#38BDF8]">Clients</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#38BDF8]">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
