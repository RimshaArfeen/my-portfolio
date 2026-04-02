
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Github, Linkedin, Facebook, Send, Briefcase, ChevronRight, Sparkles } from 'lucide-react';
import Starfield from '../../Components/Starfield';

// --- 1. CUSTOM TYPING EFFECT HOOK ---
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

// --- 2. INTERACTIVE STARFIELD BACKGROUND ---

// --- 3. MAIN COMPONENT ---
const Home = () => {
  const typedText = useTypewriter(["Web Developer", "Graphic Designer", "Creative Coder"]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-indigo-500/30">
      {/* Background Layer */}
      <Starfield />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />

      {/* Dynamic Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 lg:px-24">
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
            I craft immersive digital experiences where <span className="text-slate-200">creativity</span> meets <span className="text-slate-200">code</span>. Specialized in building high-performance web Homelications with a focus on UI/UX excellence.
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

      {/* Social Bar - Refined Desktop Placement */}
      <div className="absolute right-8 bottom-2 md:top-1/2 md:bottom-auto md:-translate-y-1/2 z-20">
        <div className="flex flex-row md:flex-col items-center gap-8">
          <div className="hidden md:block w-[1px] h-20 bg-gradient-to-t from-indigo-500      to-transparent"></div>

          <SocialIcon href="https://github.com/RimshaArfeen" icon={<Github size={22} />} label="GitHub" />
          <SocialIcon href="https://www.linkedin.com/in/rimsha-arfeen-b25709305" icon={<Linkedin size={22} />} label="LinkedIn" />
          <SocialIcon href="#" icon={<Facebook size={22} />} label="Facebook" />
          <SocialIcon href="#" icon={<Sparkles size={22} />} label="Awards" />

          <div className="hidden md:block w-[1px] h-20 bg-gradient-to-b from-indigo-500 to-transparent"></div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-10 left-10 hidden lg:block z-10">
        <p className="text-slate-700 text-xs font-mono tracking-widest uppercase vertical-text">
          Est. 2024 • Designing & Developing Ideas
        </p>
      </div>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </main>
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

export default Home;