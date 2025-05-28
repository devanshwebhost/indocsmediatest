"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar flex justify-between items-center bg-black px-[50px] py-4 relative z-50">
      <img
        className="logo"
        src="/assets/logo.png"
        alt="logo"
        width={100}
      />

      {/* Desktop Navigation */}
      <ul className=" desktop-nav gap-8 text-white font-medium">
        <li><a href="/" className="hover:text-[#5e3370]">Home</a></li>
        <li><a href="/about" className="hover:text-[#5e3370]">About</a></li>
        <li><a href="/services" className="hover:text-[#5e3370]">Services</a></li>
        <li><a href="/contact" className="hover:text-[#5e3370]">Contact</a></li>
      </ul>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(true)}>
          <Bars3Icon className="h-8 w-8 text-white" />
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <XMarkIcon className="h-8 w-8 text-white" />
          </button>
        </div>

        <ul className="flex flex-col items-start gap-6 px-6 mt-8 text-lg">
          <li><a href="/" className="hover:text-[#5e3370]" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="/about" className="hover:text-[#5e3370]" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="/services" className="hover:text-[#5e3370]" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="/contact" className="hover:text-[#5e3370]" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
    </div>
  );
};

export default Navbar;
