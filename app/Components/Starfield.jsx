
"use client"
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Github, Linkedin, Facebook, Send, Briefcase, ChevronRight, Sparkles } from 'lucide-react';

 const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2,
      velocity: Math.random() * 0.5 + 0.2,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        star.y -= star.velocity;
        if (star.y < 0) star.y = canvas.height;
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-slate-950" />;
};


export default Starfield

// "use client"
// import React, { useState, useEffect, useRef, useMemo } from 'react';

// const Starfield = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let animationFrameId;
//     let particles = [];
//     let matrixChars = [];
//     let codeLines = [];

//     // Tech symbols and characters
//     const techSymbols = [
//       '<', '>', '/', '\\', '{', '}', '(', ')', '[', ']', '=', '!', 
//       '&', '|', ';', ':', '.', ',', '#', '@', '$', '%', '^', '*', 
//       '+', '-', '_', '~', '`', '?', '∑', '∫', '√', '∞', '≠', '≤', '≥',
//       '⚡', '🖥️', '💻', '⌨️', '🖱️', '🔧', '🔨', '🎯'
//     ];

//     const codeKeywords = [
//       'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 
//       'while', 'class', 'import', 'export', 'default', 'new', 'try', 
//       'catch', 'finally', 'throw', 'async', 'await', 'Promise', 'map',
//       'filter', 'reduce', 'useState', 'useEffect', 'props', 'state',
//       'render', 'component', 'React', 'Next.js', 'Node.js', 'Python',
//       'Java', 'C++', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'API',
//       'GET', 'POST', 'PUT', 'DELETE', 'fetch', 'axios', 'JSON', 'npm',
//       'yarn', 'git', 'docker', 'kubernetes', 'AWS', 'MongoDB', 'SQL'
//     ];

//     // Coding icons/patterns
//     const codePatterns = [
//       '{}', '[]', '()', '<>', '===', '=>', '&&', '||', '++', '--',
//       '+=', '-=', '*=', '/=', '!=', '!==', '>>>', '<<', '>>', '>>>'
//     ];

//     // Matrix rain class
//     class MatrixRain {
//       constructor(x, speed, char, y = 0) {
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         this.char = char;
//         this.opacity = Math.random() * 0.8 + 0.2;
//       }

//       update() {
//         this.y += this.speed;
//         if (this.y > canvas.height) {
//           this.y = -20;
//           this.x = Math.random() * canvas.width;
//           this.char = techSymbols[Math.floor(Math.random() * techSymbols.length)];
//         }
//       }

//       draw(ctx) {
//         ctx.font = `${Math.random() * 16 + 12}px 'Fira Code', 'Courier New', monospace`;
//         ctx.fillStyle = `rgba(0, 255, ${Math.random() * 100 + 100}, ${this.opacity})`;
//         ctx.fillText(this.char, this.x, this.y);
//       }
//     }

//     // Floating code line class
//     class CodeLine {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.text = codeKeywords[Math.floor(Math.random() * codeKeywords.length)];
//         this.speedX = (Math.random() - 0.5) * 0.5;
//         this.speedY = (Math.random() - 0.5) * 0.3;
//         this.opacity = Math.random() * 0.4 + 0.1;
//         this.life = 1;
//         this.decay = Math.random() * 0.003 + 0.001;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//         this.life -= this.decay;
        
//         if (this.life <= 0 || this.x < -100 || this.x > canvas.width + 100 || 
//             this.y < -50 || this.y > canvas.height + 100) {
//           this.reset();
//         }
//       }

//       draw(ctx) {
//         ctx.font = `12px 'Fira Code', 'Courier New', monospace`;
//         ctx.fillStyle = `rgba(100, 150, 255, ${this.opacity * this.life})`;
//         ctx.fillText(this.text, this.x, this.y);
        
//         // Add cursor effect occasionally
//         if (Math.random() < 0.01) {
//           ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * this.life})`;
//           ctx.fillText('|', this.x + ctx.measureText(this.text).width, this.y);
//         }
//       }
//     }

//     // Binary particle class
//     class BinaryParticle {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.value = Math.random() > 0.5 ? '1' : '0';
//         this.size = Math.random() * 3 + 1;
//         this.speedX = (Math.random() - 0.5) * 1.5;
//         this.speedY = (Math.random() - 0.5) * 1.5;
//         this.opacity = Math.random() * 0.5 + 0.2;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;
        
//         if (this.x < -50 || this.x > canvas.width + 50 || 
//             this.y < -50 || this.y > canvas.height + 50) {
//           this.reset();
//         }
//       }

//       draw(ctx) {
//         ctx.font = `${this.size * 8}px 'Courier New', monospace`;
//         ctx.fillStyle = `rgba(0, 200, 255, ${this.opacity})`;
//         ctx.fillText(this.value, this.x, this.y);
//       }
//     }

//     // Circuit line class
//     class CircuitLine {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.startX = Math.random() * canvas.width;
//         this.startY = Math.random() * canvas.height;
//         this.endX = this.startX + (Math.random() - 0.5) * 200;
//         this.endY = this.startY + (Math.random() - 0.5) * 200;
//         this.progress = 0;
//         this.speed = Math.random() * 0.01 + 0.005;
//         this.opacity = Math.random() * 0.3 + 0.1;
//       }

//       update() {
//         this.progress += this.speed;
//         if (this.progress >= 1) {
//           this.reset();
//         }
//       }

//       draw(ctx) {
//         const x = this.startX + (this.endX - this.startX) * this.progress;
//         const y = this.startY + (this.endY - this.startY) * this.progress;
        
//         ctx.beginPath();
//         ctx.moveTo(this.startX, this.startY);
//         ctx.lineTo(x, y);
//         ctx.strokeStyle = `rgba(0, 255, 200, ${this.opacity})`;
//         ctx.lineWidth = 1;
//         ctx.stroke();
        
//         // Draw node at current position
//         ctx.beginPath();
//         ctx.arc(x, y, 2, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(0, 255, 200, ${this.opacity + 0.2})`;
//         ctx.fill();
//       }
//     }

//     // Glowing orb with code inside
//     class CodeOrb {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.radius = Math.random() * 30 + 10;
//         this.text = codeKeywords[Math.floor(Math.random() * codeKeywords.length)];
//         this.opacity = Math.random() * 0.3 + 0.1;
//         this.pulse = 0;
//         this.pulseSpeed = Math.random() * 0.02 + 0.01;
//       }

//       update() {
//         this.pulse += this.pulseSpeed;
//         if (this.pulse > Math.PI * 2) this.pulse = 0;
//       }

//       draw(ctx) {
//         const glowRadius = this.radius + Math.sin(this.pulse) * 5;
        
//         // Glow effect
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, glowRadius, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(100, 100, 255, ${this.opacity * 0.3})`;
//         ctx.fill();
        
//         // Inner circle
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius - 5, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(50, 50, 150, ${this.opacity * 0.5})`;
//         ctx.fill();
        
//         // Code text
//         ctx.font = `${Math.min(this.radius / 3, 14)}px 'Fira Code', monospace`;
//         ctx.fillStyle = `rgba(100, 200, 255, ${this.opacity + 0.2})`;
//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';
//         ctx.fillText(this.text, this.x, this.y);
//         ctx.textAlign = 'left';
//       }
//     }

//     // Initialize particles
//     const init = () => {
//       // Matrix rain columns
//       const columns = Math.floor(canvas.width / 20);
//       for (let i = 0; i < columns * 0.3; i++) {
//         matrixChars.push(new MatrixRain(
//           Math.random() * canvas.width,
//           Math.random() * 3 + 1,
//           techSymbols[Math.floor(Math.random() * techSymbols.length)],
//           Math.random() * canvas.height
//         ));
//       }
      
//       // Code lines
//       for (let i = 0; i < 30; i++) {
//         codeLines.push(new CodeLine());
//       }
      
//       // Binary particles
//       for (let i = 0; i < 50; i++) {
//         particles.push(new BinaryParticle());
//       }
      
//       // Circuit lines
//       for (let i = 0; i < 20; i++) {
//         particles.push(new CircuitLine());
//       }
      
//       // Code orbs
//       for (let i = 0; i < 5; i++) {
//         particles.push(new CodeOrb());
//       }
//     };

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       // Reinitialize particles on resize
//       matrixChars = [];
//       codeLines = [];
//       particles = [];
//       init();
//     };

//     const drawBackgroundGrid = () => {
//       // Draw subtle grid
//       ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
//       ctx.lineWidth = 0.5;
      
//       const gridSize = 50;
//       for (let x = 0; x < canvas.width; x += gridSize) {
//         ctx.beginPath();
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, canvas.height);
//         ctx.stroke();
//       }
      
//       for (let y = 0; y < canvas.height; y += gridSize) {
//         ctx.beginPath();
//         ctx.moveTo(0, y);
//         ctx.lineTo(canvas.width, y);
//         ctx.stroke();
//       }
//     };

//     const draw = () => {
//       // Create fade effect for trails
//       ctx.fillStyle = 'rgba(2, 6, 23, 0.1)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       // Draw background grid
//       drawBackgroundGrid();
      
//       // Draw matrix rain
//       matrixChars.forEach(char => {
//         char.update();
//         char.draw(ctx);
//       });
      
//       // Draw code lines
//       codeLines.forEach(line => {
//         line.update();
//         line.draw(ctx);
//       });
      
//       // Draw all particles
//       particles.forEach(particle => {
//         if (particle.update) particle.update();
//         if (particle.draw) particle.draw(ctx);
//       });
      
//       // Draw random tech symbols occasionally
//       if (Math.random() < 0.05) {
//         const x = Math.random() * canvas.width;
//         const y = Math.random() * canvas.height;
//         const symbol = codePatterns[Math.floor(Math.random() * codePatterns.length)];
//         ctx.font = '14px monospace';
//         ctx.fillStyle = `rgba(0, 255, 200, ${Math.random() * 0.3 + 0.1})`;
//         ctx.fillText(symbol, x, y);
//       }
      
//       animationFrameId = requestAnimationFrame(draw);
//     };

//     window.addEventListener('resize', resize);
//     resize();
//     init();
//     draw();

//     return () => {
//       window.removeEventListener('resize', resize);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />;
// };

// export default Starfield;