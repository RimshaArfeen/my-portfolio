
"use client" 
import React, { useState, useEffect, useRef } from 'react';
import {
  Send, MapPin,
  Image as ImageIcon, ArrowRight,
  Mail, Phone, MessageSquare, CheckCircle2
} from 'lucide-react';


const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 2000);
  };

  const contactInfo = [
    { icon: <Mail className="text-indigo-400" />, label: "Email", value: "rimshaarfeen61@gmail.com", href: "mailto:rimshaarfeen61@gmail.com" },
    { icon: <Phone className="text-indigo-400" />, label: "Phone", value: "0371-0253935", href: "tel:03710253935" },
    { icon: <MapPin className="text-indigo-400" />, label: "Location", value: "Karachi, Pakistan", href: "#" },
  ];

  return (
    <section id="contact" className="relative py-32  z-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-indigo-500"></span>
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Let's Connect<span className="text-indigo-500">.</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">Have a project <br /><span className="text-slate-500">in mind?</span></h3>
              <p className="text-slate-400 font-light leading-relaxed max-w-sm">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-slate-900/40 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="p-4 rounded-2xl bg-slate-800/50 group-hover:bg-indigo-600/10 group-hover:scale-110 transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-slate-200 font-semibold group-hover:text-white transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="relative p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <MessageSquare size={120} />
              </div>

              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-indigo-600/20 text-indigo-400 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase">Message Sent!</h3>
                  <p className="text-slate-400 max-w-xs">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="text-indigo-400 font-bold uppercase text-xs tracking-widest border-b border-indigo-400 pb-1 hover:text-white hover:border-white transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-6 py-4 text-white outline-none focus:border-indigo-500/50 transition-all placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-6 py-4 text-white outline-none focus:border-indigo-500/50 transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea
                      required
                      rows="5"
                      placeholder="What are we building today?"
                      className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-6 py-4 text-white outline-none focus:border-indigo-500/50 transition-all placeholder:text-slate-600 resize-none"
                    ></textarea>
                  </div>

                  <button
                    disabled={formState === 'loading'}
                    className={`w-full group flex items-center justify-center gap-3 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all duration-500 ${formState === 'loading'
                      ? 'bg-slate-800 text-slate-500 cursor-wait'
                      : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-600/20'
                      }`}
                  >
                    {formState === 'loading' ? (
                      <span className="flex items-center gap-2">Processing...</span>
                    ) : (
                      <>Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact
