"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronUp, ChevronRight
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: "Exploration",
      links: [
        { name: "About Me", href: "/about" },
        { name: "Experience", href: "/experience" },
        { name: "My Work", href: "/portfolio" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Full Stack development", href: "/skills" },
        { name: "UI/UX Strategy", href: "/skills" },
        { name: "Graphic Art", href: "/skills" }
      ]
    },
    {
      title: "Connection",
      links: [
        {
          name: "LinkedIn", href: "https://www.linkedin.com/in/rimsha-arfeen-b25709305"
        },
        { name: "GitHub", href: "https://github.com/RimshaArfeen" },
        { name: "Contact", href: "contact" }
      ]
    }
  ];

  return (
    <footer className="relative bg-slate-950 pt-20 z-10 overflow-hidden">
      {/* Footer Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="container mx-auto px-6 lg:px-24">
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20">

          {/* Brand/Bio Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                <span className="text-white font-black text-2xl tracking-tighter">R</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">Arfeen<span className="text-indigo-500">.</span></span>
            </div>

            <p className="text-slate-400 font-light leading-relaxed max-w-sm text-sm">
              Crafting scalable digital solutions and high-impact visual identities through a synthesis of modern engineering and intentional design.
            </p>

            <div className="flex gap-4">
              <SocialIconBtn href="https://github.com/RimshaArfeen" icon={<FaGithub size={18} />} />
              <SocialIconBtn href="https://www.linkedin.com/in/rimsha-arfeen-b25709305" icon={<FaLinkedin size={18} />} />
              <SocialIconBtn href="#" icon={<FaTwitter size={18} />} />
              <SocialIconBtn href="#" icon={<FaInstagram size={18} />} />
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((group, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-white text-xs font-black uppercase tracking-[0.2em]">{group.title}</h4>
                <ul className="space-y-4">
                  {group.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-slate-500 text-sm hover:text-indigo-400 transition-all duration-300 flex items-center group/link"
                      >
                        <ChevronRight size={12} className="opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all mr-1" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-slate-900 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Rimsha Arfeen
            </p>
            <span className="w-1 h-1 rounded-full bg-slate-800" />
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
              Karachi, PK
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-indigo-400 hover:text-white transition-colors"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to Top</span>
            <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
              <ChevronUp size={20} />
            </div>
          </button>
        </div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;

const SocialIconBtn = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-indigo-500 hover:bg-indigo-600/10 transition-all duration-300"
  >
    {icon}
  </a>
);