"use client"
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Starfield from './Components/Starfield';
import { Briefcase, ChevronRight, Send } from 'lucide-react';
import AboutSection from './Sections/AboutSection';
import ExperienceSection from './Sections/ExperienceSection';
import SkillsSection from './Sections/SkillsSection';
import PortfolioSection from './Sections/PortfolioSection';
import HomeSection from './Sections/HomeSection';



// --- MAIN COMPONENT ---
const Home = () => {

  return (
    <main className="relative w-full">
     
      {/* Content Layer */}
     <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection  />
      <PortfolioSection />
    </main>
  );
};



export default Home;