
"use client" 
import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Facebook, Send, Briefcase,
  ChevronRight, Sparkles, Menu, X, User,
  GraduationCap, Code2, Palette, Terminal, Layers,
  Cpu, Globe, Shield, Rocket, Laptop, Database,
  Cloud, MonitorSmartphone, ExternalLink, Calendar, MapPin,
  Eye, Monitor, Image as ImageIcon, ArrowRight
} from 'lucide-react';
import ProjectDetail from '../portfolio/ProjectDetail';
import { DATA } from "../portfolio/Data";



const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Web");

  return (
    <section id="portfolio" className={`relative py-32  overflow-hidden ${selectedProject ? 'z-50' : 'z-10'}`}>
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-indigo-500"></span>
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Case Studies<span className="text-indigo-500">.</span></h2>
          </div>

          {/* Category Toggle */}
          <div className="flex p-1 bg-slate-900/50 border border-slate-800/50 rounded-2xl w-fit backdrop-blur-sm">
            {[
              { id: "Web", label: "Engineering", icon: <Monitor size={14} /> },
              { id: "Graphic", label: "Visual Art", icon: <ImageIcon size={14} /> }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-500 ${selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'text-slate-500 hover:text-slate-300'
                  }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Web Projects Grid */}
        {selectedCategory === "Web" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DATA.portfolio.map((item) => (
              <div
                key={item.id}
                className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(item)}
              >
                <img
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src={item.imgUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-3 flex gap-2">
                    {item.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[9px] uppercase font-bold tracking-widest text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase mb-4 leading-tight">{item.title}</h3>
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    View Project <ArrowRight size={14} className="text-indigo-500" />
                  </div>
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    <Eye size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Graphic Design Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA.graphics.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900"
              >
                <img
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src={item.imgUrl}
                />
                <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6 text-center">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-lg font-black text-white uppercase tracking-tighter mb-2">{item.title}</h4>
                    <span className="text-[10px] text-indigo-100 uppercase tracking-widest border-t border-indigo-200/30 pt-2 block">
                      Graphic Production
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            close={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
