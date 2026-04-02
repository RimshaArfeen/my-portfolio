


"use client" 
import React, { useState, useEffect, useRef } from 'react';
import {
  ExternalLink, Calendar, MapPin
} from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Meetech Labs',
      division: 'Full Stack Development',
      title: 'Full Stack Developer',
      type: 'Professional',
      duration: 'Jan 2026 - March 2026', // Adjust dates as per your actual timeline
      location: 'Remote / Hybrid',
      responsibilities: [
        'Architecting and scaling full-stack applications using Next.js, Prisma ORM, and MongoDB.',
        'Designing and implementing complex SaaS dashboard architectures and project management systems.',
        'Leading UI/UX enhancements to create minimal, professional, and high-conversion user interfaces.',
        'Developing secure API routes and integrating third-party services like WhatsApp automation and payment gateways.',
      ],
      skills: ['Next.js', 'Prisma ORM', 'MongoDB', 'SaaS Architecture', 'UI/UX Design'],

    },
    {
      company: 'National Center of Artificial Intelligence',
      division: 'Smart City Lab',
      title: 'Web Developer',
      type: 'Intern',
      duration: 'July 2024 - Oct 2024',
      location: 'Smart City Lab, NCAI',
      responsibilities: [
        'Developed and maintained responsive web applications using React and Tailwind CSS.',
        'Optimized UI components for performance and accessibility.',
        'Collaborated with backend developers to integrate APIs and improve user experience.',
      ],
      skills: ['React', 'Tailwind CSS', 'API Integration', 'UI Optimization'],

    }
  ];
  return (
    <section id="experience" className="relative py-32  z-10 overflow-hidden">
      {/* Background elements */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-50" />
      </div> */}

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-indigo-500"></span>
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">Career Path</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Professional Experience<span className="text-indigo-500">.</span></h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-slate-800 to-transparent md:-translate-x-px" />

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-1/2 top-0 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.8)] md:-translate-x-1 transition-transform group-hover:scale-150 duration-300" />

                <div className={`flex flex-col md:flex-row gap-8 md:gap-20 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Date/Company Info Column */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4 w-fit">
                      <Calendar size={12} />
                      {exp.duration}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-slate-400 font-medium text-lg uppercase tracking-wider mb-2">{exp.division}</p>
                    <div className={`flex items-center gap-2 text-slate-500 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>

                  {/* Responsibilities Card Column */}
                  <div className="md:w-1/2 pl-8 md:pl-0">
                    <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/50 hover:border-indigo-500/30 transition-all duration-500 backdrop-blur-md relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600/50" />

                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-xl font-bold text-white uppercase tracking-tighter">
                          {exp.title}
                          <span className="ml-2 text-xs text-slate-500 font-normal normal-case">({exp.type})</span>
                        </h4>

                      </div>

                      <ul className="space-y-4 mb-8">
                        {exp.responsibilities.map((res, i) => (
                          <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed group/item">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover/item:bg-indigo-500 transition-colors flex-shrink-0" />
                            {res}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 rounded-lg bg-indigo-500/5 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;