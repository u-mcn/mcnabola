'use client';

import { useEffect, useRef } from 'react';

export default function ConnectingDotsBackground() {
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

    const particles: { x: number; y: number; vx: number; vy: number; color: string }[] = [];
    const numParticles = 250;

    const mouse = { x: -9999, y: -9999 };

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        color: Math.random() < 0.2 ? 'red' : 'white', // 20% chance to be red
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      
      // Background
      ctx.fillStyle = '#121212'; // dark grey background 
      ctx.fillRect(0, 0, width, height)
      ctx.save();
      ctx.shadowBlur = 4;

      const dotRadius = height; // Dots visible within full screen height
      const lineRadius = height / 2; // Lines visible within half screen height
      const particleConnectDistance = 120; // Max distance between particles to connect

      // Add mouse offset particle
      const mouseParticle = {
        x: mouse.x - 20, // Offset to the left
        y: mouse.y,
        vx: 0,
        vy: 0,
        color: 'white',
      };

      const allParticles = [...particles, mouseParticle];

      ctx.save();
      ctx.shadowBlur = 4;

      // Draw particles
      allParticles.forEach((p) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distanceToMouse < dotRadius) {
          const opacity = 1 - distanceToMouse / dotRadius;

          ctx.beginPath();
          ctx.globalAlpha = opacity;
          ctx.fillStyle = p.color === 'red' ? '#ff5555' : '#ffffff'; // Choose color
          ctx.shadowColor = ctx.fillStyle; // Make glow match color
          ctx.arc(p.x, p.y, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.restore();

      // Draw lines
      for (let i = 0; i < allParticles.length; i++) {
        for (let j = i + 1; j < allParticles.length; j++) {
          const p1 = allParticles[i];
          const p2 = allParticles[j];

          const dx1 = p1.x - mouse.x;
          const dy1 = p1.y - mouse.y;
          const d1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

          const dx2 = p2.x - mouse.x;
          const dy2 = p2.y - mouse.y;
          const d2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          const dxParticles = p1.x - p2.x;
          const dyParticles = p1.y - p2.y;
          const particleDistance = Math.sqrt(dxParticles * dxParticles + dyParticles * dyParticles);

          if (d1 < lineRadius && d2 < lineRadius && particleDistance < particleConnectDistance) {
            const avgDistanceToMouse = (d1 + d2) / 2;
            const opacity = 1 - avgDistanceToMouse / lineRadius;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(137, 207, 240, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Move normal particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

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

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    />
  );
}
