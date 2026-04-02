
"use client"
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Send, Briefcase, ChevronRight, Menu, X } from 'lucide-react';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-24">
        <div className={`relative flex items-center justify-between transition-all duration-500 rounded-2xl px-6 py-2 ${isScrolled
            ? 'bg-slate-900/60 backdrop-blur-xl border border-slate-800/50 shadow-2xl'
            : 'bg-transparent border border-transparent'
          }`}>
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2">
            <div className="relative flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg group-hover:rotate-[360deg] transition-transform duration-700">
              <span className="text-white font-black text-xl">R</span>
              <div className="absolute inset-0 bg-indigo-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>
            <span className="text-white font-bold tracking-tighter text-xl">
              ARFEEN<span className="text-indigo-500">.</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm uppercase tracking-widest font-medium text-slate-400 hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a href="/contact" className="bg-white/5 hover:bg-white/10 border border-white/10 text-gray-500 px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all hover:scale-105 active:scale-95">
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-slate-950 transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-black text-white uppercase tracking-tighter transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-indigo-500 mr-4">0{i + 1}.</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
