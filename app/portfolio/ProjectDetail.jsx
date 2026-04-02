
"use client" 
import React, { useState, useEffect, useRef } from 'react';
import {
  X, ExternalLink, Calendar, MapPin,
  Eye, Monitor, Image as ImageIcon, ArrowRight
} from 'lucide-react';

const ProjectDetail = ({ project, close }) => {
  if (!project) return null;

  useEffect(() => {
    // When the component mounts (modal opens), disable scroll
    document.body.style.overflow = 'hidden';

    // When the component unmounts (modal closes), re-enable scroll
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-950/90 backdrop-blur-md z-100 p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl lg: lg:w-5/6 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row animate-in zoom-in-95 duration-500 scrollbar-colored ">

        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center transition-all z-20"
        >
          <X size={20} />
        </button>

        {/* Project Image Column */}
        <div className="md:w-3/5 lg:w-1/2 bg-slate-800 overflow-y-auto scrollbar-colored">
          <img
            className="w-full h-auto object-cover"
            src={project.img2 || project.imgUrl}
            alt={project.title}
          />
          {/* Potential secondary image gallery could go here */}
        </div>

        {/* Project Details Column */}
        <div className="md:w-2/5 lg:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
              {project.category} Design
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6">
            {project.title}<span className="text-indigo-500">.</span>
          </h2>

          <div className="space-y-6 text-slate-400 font-light leading-relaxed mb-10">
            <p className="whitespace-pre-line">{project.description}</p>
          </div>

          <div className="mt-auto space-y-8">
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag, i) => (
                <span key={i} className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all uppercase text-xs tracking-widest"
              >
                See Website <ExternalLink size={16} />
              </a>
              <button
                onClick={close}
                className="px-6 py-4 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-all text-xs font-bold uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProjectDetail;
