"use client";

import React, { useState, useEffect } from 'react';
import {
  MapPin, Mail, Phone, 
  Sparkles, ArrowRight, Clock, Globe, Coffee
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhats, FaWhatsapp, } from 'react-icons/fa';
import { NextResponse } from 'next/server';



const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Auto-hide copied notification
  useEffect(() => {
    if (copiedEmail) {
      const timer = setTimeout(() => setCopiedEmail(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedEmail]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rimshaarfeen61@gmail.com");
    setCopiedEmail(true);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-indigo-400" size={24} />,
      label: "Email",
      value: "rimshaarfeen61@gmail.com",
      href: "mailto:rimshaarfeen61@gmail.com",
      action: "copy",
      description: "Usually responds within 24 hours"
    },
    {
      icon: <Phone className="text-indigo-400" size={24} />,
      label: "Phone",
      value: "+92 371 0253935",
      href: "tel:03710253935",
      description: "Available 10 AM - 6 PM (PKT)"
    },
    {
      icon: <MapPin className="text-indigo-400" size={24} />,
      label: "Location",
      value: "Karachi, Pakistan",
      href: "#",
      description: "GMT+5 Timezone"
    },
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, label: "GitHub", href: "https://github.com/rimshaarfeen", username: "@rimshaarfeen" },
    { icon: <FaLinkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/rimshaarfeen", username: "rimshaarfeen" },
    { icon: <FaWhatsapp size={20} />, label: "WhatsApp", href: "https://wa.me/03710253935", username: "+92 371 0253935" },
  ];

  const availability = [
    { icon: <Clock size={16} />, text: "Mon-Fri, 10AM - 6PM PKT" },
    { icon: <Coffee size={16} />, text: "Virtual coffee chats available" },
    { icon: <Globe size={16} />, text: "Open to global collaborations" },
  ];

  return (
    <section id="contact" className="relative py-32 z-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        {/* Header Section */}
        <div className="mb-20 space-y-4 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <span className="h-[1px] w-8 bg-indigo-500"></span>
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">Get in Touch</span>
            <Sparkles size={14} className="text-indigo-400 ml-2" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight">
            Let's Connect<span className="text-indigo-500">.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto lg:mx-0">
            Have a project in mind or just want to chat? I'm always excited to explore new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Column: Main Contact Info */}
          <div className="space-y-10">
            {/* Availability Banner */}
            <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-2xl p-6 border border-indigo-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
                <h3 className="text-lg font-bold text-white">Currently Available for</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Freelance', 'Full-time', 'Contract', 'Open Source'].map((role, idx) => (
                  <span key={idx} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium border border-indigo-500/30">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${hoveredCard === idx ? 'scale-[1.02]' : 'scale-100'
                    }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 to-indigo-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>

                  <div className="relative flex items-center justify-between p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex items-center gap-5">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 group-hover:scale-110 transition-all duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{info.label}</p>
                        <p className="text-slate-200 font-semibold text-lg">{info.value}</p>
                        <p className="text-xs text-slate-500 mt-1">{info.description}</p>
                      </div>
                    </div>

                    {info.action === 'copy' ? (
                      <button
                        onClick={handleCopyEmail}
                        className="px-4 py-2 rounded-xl bg-indigo-600/20 text-indigo-400 text-sm font-medium hover:bg-indigo-600/40 transition-all"
                      >
                        {copiedEmail ? 'Copied!' : 'Copy'}
                      </button>
                    ) : (
                      <a
                        href={info.href}
                        className="p-2 rounded-xl bg-slate-800/50 text-slate-400 hover:text-white hover:bg-indigo-600/20 transition-all"
                      >
                        <ArrowRight size={20} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {availability.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/30 border border-slate-800/50">
                  <div className="text-indigo-400">{item.icon}</div>
                  <span className="text-xs text-slate-400">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Social & Additional Info */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/60 to-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
                Connect Socially
              </h3>

              <div className="space-y-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-indigo-600/20 transition-all">
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-medium text-white">{social.label}</p>
                        <p className="text-xs text-slate-500">{social.username}</p>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-600/20 flex items-center justify-center">
                <Sparkles size={32} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quick Response Guarantee</h3>
              <p className="text-slate-400 text-sm mb-4">
                I typically respond within 24 hours. For urgent matters, feel free to reach out via phone.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-indigo-400">
                <Clock size={14} />
                <span>Average response time: ~4 hours</span>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/30 border border-slate-800/50">
              <div className="text-2xl">💡</div>
              <p className="text-sm text-slate-400">
                Fun fact: I love collaborating on projects that make a positive impact. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 pt-10 border-t border-slate-800/50">
          <div className="bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-2xl p-8 text-center">
            <p className="text-slate-400 text-lg mb-4">
              Ready to start a conversation?
            </p>
            <a
              href="mailto:rimshaarfeen61@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all hover:gap-5 hover:shadow-xl hover:shadow-indigo-600/25"
            >
              Send me an email
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;