
"use client" 
import React, { useState, useEffect, useRef } from 'react';
import {
  User, GraduationCap, Code2, Palette, Terminal, Layers
} from 'lucide-react';
import Starfield from '../Components/Starfield';


// --- 4. ABOUT SECTION ---
const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("Development");

  const profileData = [
    { icon: <User className="text-indigo-400" size={20} />, label: "Name", value: "Rimsha Arfeen" },
    { icon: <GraduationCap className="text-indigo-400" size={20} />, label: "Education", value: "CS Student" },
    { icon: <Code2 className="text-indigo-400" size={20} />, label: "Role", value: "Full Stack Dev" },
    { icon: <Palette className="text-indigo-400" size={20} />, label: "Specialty", value: "Graphic Designer" },
  ];

  return (
    <section id="about" className="relative min-h-screen py-32  z-10 overflow-hidden">
     
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Identity Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-8 bg-indigo-500"></span>
                <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">Bio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Who I Am<span className="text-indigo-500">.</span></h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileData.map((item, idx) => (
                <div key={idx} className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="mb-4 p-2 w-fit rounded-lg bg-slate-800/50 group-hover:bg-indigo-500/10 transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-slate-200 font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Narrative Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-light text-slate-400 leading-tight italic">
                "Transforming complex challenges into <span className="text-white font-medium not-italic">elegant digital narratives</span>."
              </h3>

              {/* Enhanced Tab Switcher */}
              <div className="w-3/4 sm:flex p-1 bg-slate-900/80 border border-slate-800 rounded-xl md:w-fit backdrop-blur-md">
                {["Development", "Design"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={` w-full md:w-fit flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-bold tracking-widest uppercase transition-all duration-500 ${activeTab === tab
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'text-slate-500 hover:text-slate-300'
                      }`}
                  >
                    {tab === "Development" ? <Terminal size={16} /> : <Layers size={16} />}
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content with Animation */}
            <div className="min-h-[200px] text-lg leading-relaxed text-slate-400 font-light">
              {activeTab === "Development" ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
                  <p>
                    I am <span className="text-white font-medium underline decoration-indigo-500/50 decoration-2 underline-offset-4">Rimsha Arfeen</span>,
                    a detail-driven <span className="text-slate-200 font-medium">Full Stack Developer</span>. My approach focuses on the intersection of high-scale performance and architectural clean-code.
                  </p>
                  <p>
                    Specializing in <span className="text-indigo-400 font-medium">Next JS, React, MongoDB, Express,  and Node.js</span>, I build end-to-end applications with robust REST APIs.
                    I'm currently pushing boundaries with <span className="text-white">Next.js</span> and optimizing state management using modern patterns.
                  </p>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700">
                  <p>
                    Design is not just how it looks, but <span className="text-white font-medium italic underline decoration-purple-500/50 decoration-2 underline-offset-4">how it feels</span>.
                    As a Graphic Designer, I blend structural clarity with artistic expression.
                  </p>
                  <p>
                    Mastering tools like <span className="text-purple-400 font-medium">Adobe Illustrator</span> and <span className="text-purple-400 font-medium">Canva</span>,
                    I craft visual identities that command attention—from minimalist logos to complex digital illustrations that define brand voices.
                  </p>
                </div>
              )}
            </div>

            <a href="/resume.pdf" download>
              <button className="group flex items-center gap-3 text-white font-bold tracking-widest uppercase text-xs">
                <span className="w-10 h-[1px] bg-slate-700 transition-all duration-500 group-hover:w-16 group-hover:bg-indigo-500"></span>
                Download Resume
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection

