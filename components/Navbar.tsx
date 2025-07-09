"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black/80 backdrop-blur-md text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">
            <Link href="/" className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stellar Resume
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            
            <Link href="/project" className="hover:text-blue-300 py-2 transition-colors">Project</Link>
            <Link href="/contact" className="hover ±text-blue-300 py-2 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/90">
            <Link href="/" className="block py-2 px-4 hover:bg-blue-900/50 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link href="/project" className="block py-2 px-4 hover:bg-blue-900/50 transition-colors" onClick={toggleMenu}>Project</Link>
            <Link href="/contact" className="block py-2 px-4 hover:bg-blue-900/50 transition-colors" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}