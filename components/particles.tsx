'use client';

import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { 
        x: number; 
        y: number; 
        vx: number; 
        vy: number; 
        color: string; 
        size: number; 
        flashPhase?: number; 
    } [] = [];
    const numParticles = 50;

    for (let i = 0; i < numParticles; i++) {
        const rand = Math.random();
        let size = 0.8; // default 60%
      
        if (rand < 0.3) size = 0.3; // 30% small
        else if (rand > 0.9) size = 1; // 10% big
      
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          color: Math.random() < 0.4 ? 'red' : 'white',
          size: size,
          flashPhase: size === 0.3 ? Math.random() * Math.PI * 2 : undefined, // Only small particles flash
        });
      }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      
      ctx.fillStyle = '#121212'; 
      ctx.fillRect(0, 0, width, height);
    
      ctx.save();
      ctx.shadowBlur = 4;

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
      
        // Distance to center
        const dx = p.x - width / 2;
        const dy = p.y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
      
        const maxDistance = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2); // distance from center to corner
      
        // Opacity based on distance
        let baseOpacity = 1 - distance / maxDistance; // 1 at center, 0 at edges
        baseOpacity = Math.max(0, Math.min(1, baseOpacity)); // clamp between 0 and 1
      
        // Flashing for small particles
        let flashing = 1;
        if (p.size === 0.3 && p.flashPhase !== undefined) {
          flashing = 0.5 + 0.5 * Math.sin(Date.now() / 300 + p.flashPhase);
        }
      
        ctx.globalAlpha = baseOpacity * flashing; // multiply both effects
      
        ctx.fillStyle = p.color === 'red' ? '#ff5555' : '#ffffff';
        ctx.shadowColor = ctx.fillStyle;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      // Move particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -9999,
      }}
    />
  );
}
