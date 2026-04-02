"use client"
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Starfield from '../Components/Starfield';
import { Briefcase, ChevronRight, Send, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const useTypewriter = (words, speed = 100, delay = 2000) => {
     const [index, setIndex] = useState(0);
     const [subIndex, setSubIndex] = useState(0);
     const [reverse, setReverse] = useState(false);

     useEffect(() => {
          if (subIndex === words[index].length + 1 && !reverse) {
               const timeout = setTimeout(() => setReverse(true), delay);
               return () => clearTimeout(timeout);
          }

          if (subIndex === 0 && reverse) {
               setReverse(false);
               setIndex((prev) => (prev + 1) % words.length);
               return;
          }

          const timeout = setTimeout(() => {
               setSubIndex((prev) => prev + (reverse ? -1 : 1));
          }, reverse ? speed / 2 : speed);

          return () => clearTimeout(timeout);
     }, [subIndex, index, reverse, words, speed, delay]);

     return words[index].substring(0, subIndex);
};

const HomeSection = () => {
     const typedText = useTypewriter(["Web Developer", "Graphic Designer", "Creative Coder"]);
     const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
          setIsVisible(true);
     }, []);

     return (
          <div className='relative h-screen overflow-hidden'>
               {/* Starfield Background */}
               {/* <Starfield /> */}

               {/* Main Content */}
               <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 lg:px-24 py-24">
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                         <div className="flex items-center gap-2 mb-6">
                              <span className="h-[1px] w-12 bg-indigo-500"></span>
                              <p className="text-indigo-400 font-medium tracking-[0.3em] text-sm md:text-base uppercase">
                                   Hello, I'm
                              </p>
                         </div>

                         <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
                              Rimsha <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Arfeen</span>
                              <span className="text-indigo-500">.</span>
                         </h1>

                         <div className="h-20 mb-8">
                              <p className="text-3xl md:text-5xl font-light text-slate-300">
                                   A Passionate <span className="text-indigo-400 font-semibold border-r-2 border-indigo-400 animate-pulse pr-2">{typedText}</span>
                              </p>
                         </div>

                         <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light">
                              I craft immersive digital experiences where <span className="text-slate-200">creativity</span> meets <span className="text-slate-200">code</span>. Specialized in building high-performance web applications with a focus on UI/UX excellence.
                         </p>

                         <div className="flex flex-wrap gap-6">
                              <a href="/portfolio" className="group relative flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                                   <Briefcase size={20} />
                                   <span>View Portfolio</span>
                                   <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                              </a>
                              <a href="/contact" className="group flex items-center gap-2 border border-slate-700 hover:border-slate-400 bg-slate-900/40 backdrop-blur-md px-8 py-4 rounded-xl font-bold transition-all hover:bg-slate-800">
                                   <Send size={20} className="text-indigo-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                   <span>Contact Me</span>
                              </a>
                         </div>
                    </div>
               </div>

               {/* Social Bar - Centered Vertically on Desktop */}
               <div className="fixed right-8 top-1/2 -translate-y-1/2 z-20 hidden md:block">
                    <div className="flex flex-col items-center gap-6">
                         <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-indigo-500 to-transparent"></div>

                         <SocialIcon href="https://github.com/RimshaArfeen" icon={<FaGithub size={22} />} label="GitHub" />
                         <SocialIcon href="https://www.linkedin.com/in/rimsha-arfeen-b25709305" icon={<FaLinkedin size={22} />} label="LinkedIn" />
                         <SocialIcon href="#" icon={<FaFacebook size={22} />} label="Facebook" />
                         <SocialIcon href="#" icon={<Sparkles size={22} />} label="Awards" />

                         <div className="w-[1px] h-16 bg-gradient-to-t from-transparent via-indigo-500 to-transparent"></div>
                    </div>
               </div>

               {/* Mobile Social Bar - Bottom */}
               <div className="fixed bottom-6 left-0 right-0 z-20 block md:hidden">
                    <div className="flex flex-row items-center justify-center gap-8 bg-slate-900/40 backdrop-blur-md py-3 rounded-full mx-6">
                         <SocialIcon href="https://github.com/RimshaArfeen" icon={<FaGithub size={20} />} label="GitHub" />
                         <SocialIcon href="https://www.linkedin.com/in/rimsha-arfeen-b25709305" icon={<FaLinkedin size={20} />} label="LinkedIn" />
                         <SocialIcon href="#" icon={<FaFacebook size={20} />} label="Facebook" />
                         <SocialIcon href="#" icon={<Sparkles size={20} />} label="Awards" />
                    </div>
               </div>

               {/* Background Decor - Bottom Left */}
               <div className="absolute bottom-8 left-8 hidden lg:block z-10">
                    <div className="flex items-center gap-3">
                         <div className="w-12 h-[1px] bg-gradient-to-r from-indigo-500 to-transparent"></div>
                         <p className="text-slate-600 text-xs font-mono tracking-widest uppercase whitespace-nowrap">
                              Est. 2024 • Designing & Developing Ideas
                         </p>
                    </div>
               </div>

             
          </div>
     );
};

const SocialIcon = ({ href, icon, label }) => (
     <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-slate-500 hover:text-indigo-400 hover:-translate-y-1 transition-all duration-300"
     >
          {icon}
     </a>
);

export default HomeSection;