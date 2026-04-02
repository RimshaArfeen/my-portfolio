

import React from 'react';
import {
     Palette, Sparkles, Layers,
     Cpu, Globe, Shield, Rocket, Laptop, Database,
     Cloud, MonitorSmartphone
} from 'lucide-react';



const SkillsSection = () => {
     const skills = [
          { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"], icon: <Laptop className="text-blue-400" /> },
          { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "Prisma ORM"], icon: <Database className="text-green-400" /> },
          { category: "Design", items: ["Adobe Illustrator", "Canva", "UI/UX"], icon: <Palette className="text-purple-400" /> },
          { category: "Tools", items: ["Git/GitHub", "Postman", "Vercel"], icon: <Cpu className="text-orange-400" /> },
     ];

     const services = [
          { title: "Web Development", desc: "Building high-performance, scalable web applications with Full Stack.", icon: <Globe /> },
          { title: "UI/UX Design", desc: "Creating intuitive, user-centric interfaces and seamless digital journeys.", icon: <MonitorSmartphone /> },
          { title: "Deployment & Scaling", desc: "Cloud deployment strategies and performance optimization.", icon: <Cloud /> },
     ];

     return (
          <section id="skills" className="relative py-32  z-10 overflow-hidden">
               <div className="container mx-auto px-6 lg:px-24">
                    {/* Section Header */}
                    <div className="mb-20 space-y-4">
                         <div className="flex items-center gap-2">
                              <span className="h-[1px] w-8 bg-indigo-500"></span>
                              <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">Expertise</span>
                         </div>
                         <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Tech Stack & Services<span className="text-indigo-500">.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                         {/* Left: Skills Bento Grid */}
                         <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                              {skills.map((skill, idx) => (
                                   <div key={idx} className="group relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                             {skill.icon}
                                        </div>
                                        <div className="relative z-10">
                                             <div className="mb-4 flex items-center gap-3">
                                                  <span className="p-2 rounded-lg bg-slate-800/50 text-indigo-400">{skill.icon}</span>
                                                  <h3 className="text-xl font-bold text-white tracking-tight">{skill.category}</h3>
                                             </div>
                                             <div className="flex flex-wrap gap-2">
                                                  {skill.items.map((item, i) => (
                                                       <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-800/30 text-slate-400 rounded-full border border-slate-700/50 group-hover:border-indigo-500/30 transition-colors">
                                                            {item}
                                                       </span>
                                                  ))}
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>

                         {/* Right: Services Accordion/List */}
                         <div className="lg:col-span-5 space-y-4">
                              {services.map((service, idx) => (
                                   <div key={idx} className="group p-6 rounded-2xl bg-slate-900/20 border-l-4 border-slate-800 hover:border-indigo-600 hover:bg-slate-900/40 transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                             <div className="mt-1 p-3 rounded-xl bg-indigo-600/10 text-indigo-400 group-hover:scale-110 transition-transform">
                                                  {service.icon}
                                             </div>
                                             <div>
                                                  <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{service.title}</h4>
                                                  <p className="text-slate-400 font-light text-sm leading-relaxed">{service.desc}</p>
                                             </div>
                                        </div>
                                   </div>
                              ))}

                              {/* CTA Box */}
                              <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white relative overflow-hidden group">
                                   <div className="relative z-10">
                                        <h4 className="text-xl font-black mb-2 uppercase italic">Need a custom solution?</h4>
                                        <p className="text-indigo-100 text-sm mb-6 font-light">Let's discuss your project and turn your ideas into reality.</p>
                                        <a href="/contact" className=" w-fit flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold text-sm uppercase transition-all hover:gap-4 shadow-xl">
                                             Get In Touch <Rocket size={16} />
                                        </a>
                                   </div>
                                   <Sparkles className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 group-hover:scale-125 transition-transform" />
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};


export default SkillsSection;