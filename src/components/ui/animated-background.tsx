"use client";

import React, { useEffect, useState } from 'react';

interface ParticleStyle extends React.CSSProperties {
  '--random-x-start': string;
  '--random-y-start': string;
  '--random-x-end': string;
  '--random-y-end': string;
  '--random-scale-start': string;
  '--random-scale-end': string;
  '--random-duration': string;
  '--random-delay': string;
}

const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const numParticles = 15; // Adjust for density
    const newParticles: JSX.Element[] = [];

    for (let i = 0; i < numParticles; i++) {
      const size = Math.random() * 15 + 5; // Particle size between 5px and 20px
      const duration = Math.random() * 15 + 10; // Animation duration 10s to 25s
      const delay = Math.random() * -20; // Negative delay for staggered start
      
      // More varied paths
      const xStart = Math.random() * 100; // vw
      const yStart = Math.random() * 20 + 90; // vh (start from bottom)
      const xEnd = Math.random() * 100; // vw
      const yEnd = Math.random() * -20; // vh (end above screen)
      const scaleStart = Math.random() * 0.5 + 0.3; // 0.3 to 0.8
      const scaleEnd = Math.random() * 0.5 + 0.8; // 0.8 to 1.3


      const style: ParticleStyle = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${xStart}vw`,
        top: `${yStart}vh`,
        opacity: Math.random() * 0.5 + 0.2, // Opacity 0.2 to 0.7
        animationName: 'floatParticle',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        position: 'absolute',
        borderRadius: '50%',
        background: 'hsl(var(--accent) / 0.6)', // Use accent color with some transparency
        willChange: 'transform, opacity',
        '--random-x-start': `${xStart}vw`,
        '--random-y-start': `${yStart}vh`,
        '--random-x-end': `${xEnd}vw`,
        '--random-y-end': `${yEnd}vh`,
        '--random-scale-start': `${scaleStart}`,
        '--random-scale-end': `${scaleEnd}`,
        '--random-duration': `${duration}s`,
        '--random-delay': `${delay}s`,
      };

      newParticles.push(<div key={i} className="particle" style={style} />);
    }
    setParticles(newParticles);
  }, []);

  // Define keyframes in a style tag or globals.css for dynamic values
  // For simplicity, a generic keyframe is in globals.css, this component sets instance specific animation properties.
  // Adding keyframes directly here:
  const keyframes = `
    @keyframes floatParticle {
      0% {
        transform: translate(0, 0) scale(var(--random-scale-start));
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      80% {
        opacity: 0.8;
      }
      100% {
        transform: translate(calc(var(--random-x-end) - var(--random-x-start)), calc(var(--random-y-end) - var(--random-y-start))) scale(var(--random-scale-end));
        opacity: 0;
      }
    }
  `;


  return (
    <div className="particle-container absolute inset-0 overflow-hidden -z-10">
      <style>{keyframes}</style>
      {particles}
    </div>
  );
};

export default AnimatedBackground;
