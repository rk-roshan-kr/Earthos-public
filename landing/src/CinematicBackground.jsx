import React, { useEffect } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';

const BACKGROUND_WORDS = [
  "EARTHOS",
  "COGNITION",
  "REGIMES",
  "BOUNDARIES",
  "ORGANISM",
  "COLLAPSE",
  "ATLAS",
  "TELEMETRY",
  "BOUNDS",
  "LOOP",
  "PROCESS",
  "EXIT",
  "COLLABORATION",
  "PERSISTENCE"
];

function GiantOrbitRing({ activeIndex, transitionKick, hoveredSystem, act3Progress = 0 }) {
  const rotationZ = useMotionValue(0);
  const tiltX = useMotionValue(60);
  const tiltY = useMotionValue(-12);
  const positionX = useMotionValue(75);
  const positionY = useMotionValue(35);
  const scale = useMotionValue(1.0);
  const ringColor = useMotionValue('rgba(198, 122, 74, 0.12)');

  const leftPercent = useTransform(positionX, (v) => `${v}%`);
  const topPercent = useTransform(positionY, (v) => `${v}%`);

  useEffect(() => {
    let targetZ = activeIndex * 35;
    let targetTiltX = 62;
    let targetTiltY = -12;
    let targetX = 75;
    let targetY = 30;
    let targetScale = 1.0;
    let targetColor = 'rgba(198, 122, 74, 0.12)'; // Earth amber

    if (activeIndex <= 3) {
      targetTiltX = 62 - activeIndex * 3;
      targetTiltY = -12 + activeIndex * 2;
      targetX = 75 - activeIndex * 2;
      targetY = 30 + activeIndex * 4;
      targetScale = 1.05 + activeIndex * 0.05;
      targetColor = 'rgba(198, 122, 74, 0.12)';
 
      // Pure, continuous timeline interpolation (100% free of breakpoint conditionals)
      if (activeIndex === 2) {
        targetTiltX = 56 - act3Progress * 56; // perfectly flat at 1.0 (tiltX -> 0)
        targetTiltY = -8 + act3Progress * 8;   // perfectly flat at 1.0 (tiltY -> 0)
        targetX = 71 - act3Progress * 21;     // perfectly centered at 50%
        targetY = 38 + act3Progress * 12;     // perfectly centered at 50%
        targetScale = 1.15 + act3Progress * 0.40; // scales up to 1.55x
        const ringOpacity = 0.12 + act3Progress * 0.26; // smoothly brightens
        targetColor = `rgba(${Math.round(198 + act3Progress * 34)}, ${Math.round(122 + act3Progress * 96)}, ${Math.round(74 + act3Progress * 111)}, ${ringOpacity})`;
      } else if (hoveredSystem) {
        // Hover reactions on other slides
        if (hoveredSystem === 'stateless') {
          targetTiltX = 75;
          targetTiltY = -35;
          targetX = 35;
          targetScale = 1.15;
          targetColor = 'rgba(139, 157, 195, 0.32)'; // Cold blue active glow
        } else if (hoveredSystem === 'persistent') {
          targetTiltX = 52;
          targetTiltY = 28;
          targetX = 70;
          targetScale = 1.3;
          targetColor = 'rgba(198, 122, 74, 0.35)'; // Warm amber active glow
        }
      }
    } else if (activeIndex >= 4 && activeIndex <= 11) {
      // Synapse Act
      targetZ = (activeIndex - 4) * -45 - 60;
      targetTiltX = 72 + (activeIndex - 4) * 2;
      targetTiltY = 15;
      targetX = 22 + (activeIndex - 4) * 3; // Shift to left side to balance right-aligned text
      targetY = 45;
      targetScale = 1.35;
      targetColor = 'rgba(139, 157, 195, 0.16)'; // Synapse electric blue
    } else {
      // Exit Act
      targetZ = activeIndex * 15;
      targetTiltX = 45;
      targetTiltY = -5;
      targetX = 50;
      targetY = 50;
      targetScale = 0.9;
      targetColor = 'rgba(198, 122, 74, 0.08)';
    }
 
    animate(rotationZ, targetZ, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    animate(tiltX, targetTiltX, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    animate(tiltY, targetTiltY, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    animate(positionX, targetX, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    animate(positionY, targetY, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    animate(scale, targetScale, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    animate(ringColor, targetColor, { duration: 1.5, ease: [0.16, 1, 0.3, 1] });
  }, [activeIndex, hoveredSystem, act3Progress]);

  // Combined spring scale with velocity kick
  const dynamicScale = scale.get() + (transitionKick * 0.08);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '2800px',
        height: '2800px',
        left: leftPercent,
        top: topPercent,
        x: '-50%',
        y: '-50%',
        perspective: '1400px',
        transformStyle: 'preserve-3d',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: activeIndex === 0 ? 0.3 : 0.72,
        transition: 'opacity 2.0s ease',
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          rotateX: tiltX.get(),
          rotateY: tiltY.get(),
          rotateZ: rotationZ.get(),
          scale: dynamicScale,
        }}
      >
        {/* Inner core breathing glow sphere */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '680px',
          height: '680px',
          borderRadius: '50%',
          background: activeIndex <= 3 ? 'radial-gradient(circle, rgba(198, 122, 74, 0.14) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(139, 157, 195, 0.14) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%) translateZ(-50px)',
          filter: 'blur(45px)',
          animation: 'pulse 12s infinite ease-in-out'
        }} />

        {/* Orbit Ring 1 */}
        <svg viewBox="0 0 1200 1200" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, transformStyle: 'preserve-3d' }}>
          <defs>
            <linearGradient id="orbitMask1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="35%" stopColor="white" stopOpacity="0.75" />
              <stop offset="65%" stopColor="white" stopOpacity="0.2" />
              <stop offset="90%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="dissolveMask1">
              <rect x="0" y="0" width="1200" height="1200" fill="url(#orbitMask1)" />
            </mask>
          </defs>
          <circle 
            cx="600" cy="600" r="550" 
            fill="none" 
            stroke={ringColor.get()} 
            strokeWidth="1.5" 
            strokeDasharray="300 120 50 250 600 400"
            mask="url(#dissolveMask1)"
          />
          <circle 
            cx="600" cy="600" r="535" 
            fill="none" 
            stroke={ringColor.get()} 
            strokeWidth="0.5" 
            opacity="0.3"
            mask="url(#dissolveMask1)"
          />
        </svg>

        {/* Orbit Ring 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 480, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d', width: '100%', height: '100%' }}
        >
          <svg viewBox="0 0 1200 1200" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="orbitMask2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.85" />
                <stop offset="45%" stopColor="white" stopOpacity="0.4" />
                <stop offset="75%" stopColor="white" stopOpacity="0.1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <mask id="dissolveMask2">
                <rect x="0" y="0" width="1200" height="1200" fill="url(#orbitMask2)" />
              </mask>
            </defs>
            <circle cx="600" cy="600" r="460" fill="none" stroke={ringColor.get()} strokeWidth="2" strokeDasharray="400 180 20 400" mask="url(#dissolveMask2)" />
            <circle cx="600" cy="600" r="445" fill="none" stroke={ringColor.get()} strokeWidth="0.5" opacity="0.4" mask="url(#dissolveMask2)" />
            
            <line x1="600" y1="120" x2="600" y2="160" stroke={ringColor.get()} strokeWidth="1" mask="url(#dissolveMask2)" />
            <line x1="600" y1="1040" x2="600" y2="1080" stroke={ringColor.get()} strokeWidth="1" mask="url(#dissolveMask2)" />
            <line x1="120" y1="600" x2="160" y2="600" stroke={ringColor.get()} strokeWidth="1" mask="url(#dissolveMask2)" />
            <line x1="1040" y1="600" x2="1080" y2="600" stroke={ringColor.get()} strokeWidth="1" mask="url(#dissolveMask2)" />
          </svg>
        </motion.div>

        {/* Orbit Ring 3 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 380, repeat: Infinity, ease: 'linear' }}
          style={{ 
            position: 'absolute', 
            top: '12.5%', left: '12.5%', width: '75%', height: '75%',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(60px)'
          }}
        >
          <svg viewBox="0 0 900 900" style={{ width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id="orbitMask3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="60%" stopColor="white" stopOpacity="0.65" />
                <stop offset="85%" stopColor="white" stopOpacity="0.15" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id="dissolveMask3">
                <rect x="0" y="0" width="900" height="900" fill="url(#orbitMask3)" />
              </mask>
            </defs>
            <circle cx="450" cy="450" r="350" fill="none" stroke={ringColor.get()} strokeWidth="0.75" mask="url(#dissolveMask3)" />
            <circle cx="450" cy="450" r="260" fill="none" stroke={ringColor.get()} strokeWidth="0.5" opacity="0.6" strokeDasharray="16 6" mask="url(#dissolveMask3)" />
            <circle cx="450" cy="450" r="170" fill="none" stroke={ringColor.get()} strokeWidth="1" opacity="0.8" mask="url(#dissolveMask3)" />
            
            <line x1="450" y1="80" x2="450" y2="820" stroke={ringColor.get()} strokeWidth="0.5" opacity="0.3" mask="url(#dissolveMask3)" />
            <line x1="80" y1="450" x2="820" y2="450" stroke={ringColor.get()} strokeWidth="0.5" opacity="0.3" mask="url(#dissolveMask3)" />
            <line x1="200" y1="200" x2="700" y2="700" stroke={ringColor.get()} strokeWidth="0.5" opacity="0.2" mask="url(#dissolveMask3)" />
            <line x1="200" y1="700" x2="700" y2="200" stroke={ringColor.get()} strokeWidth="0.5" opacity="0.2" mask="url(#dissolveMask3)" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function CinematicBackground({ activeIndex, transitionKick, hoveredSystem, act3Progress = 0 }) {
  // Gradual theme parameters
  const spotX = useMotionValue(activeIndex <= 3 ? 65 : 35);
  const spotY = useMotionValue(activeIndex <= 3 ? 35 : 65);
  const spotColor = useMotionValue('rgba(198, 122, 74, 0.08)'); // Amber default
  const gridOpacity = useMotionValue(0.02);

  useEffect(() => {
    // Determine target variables
    let targetX = 65;
    let targetY = 35;
    let targetColor = 'rgba(198, 122, 74, 0.08)'; // Amber
    let targetGrid = 0.02;

    if (activeIndex <= 3) {
      // Earthos
      targetX = 65 - activeIndex * 5;
      targetY = 35 + activeIndex * 5;
      targetColor = 'rgba(198, 122, 74, 0.08)';
      targetGrid = 0.02;

      // Handle Act 3 virtual timeline transformations (Continuous single-curve math, no breakpoints)
      if (activeIndex === 2) {
        targetGrid = 0.02 * (1 - act3Progress); // smooth decay to 0
        targetX = 55 - act3Progress * 5;        // continuous drift to center
        targetY = 45 + act3Progress * 5;        // continuous drift to center
        targetColor = `rgba(198, 122, 74, ${0.08 + act3Progress * 0.10})`; // continuous expansion
      }
    } else if (activeIndex >= 4 && activeIndex <= 11) {
      // Synapse
      targetX = 30 + (activeIndex - 4) * 8;
      targetY = 40 + Math.sin(activeIndex) * 15;
      targetColor = 'rgba(139, 157, 195, 0.10)'; // Cold electric blue
      targetGrid = 0.08;
    } else {
      // Exit Act
      targetX = 50;
      targetY = 50;
      targetColor = 'rgba(198, 122, 74, 0.06)';
      targetGrid = 0.01;
    }

    // Animate smoothly over 2.4s (highly overdamped, heavy response feel)
    animate(spotX, targetX, { duration: 2.4, ease: [0.16, 1, 0.3, 1] });
    animate(spotY, targetY, { duration: 2.4, ease: [0.16, 1, 0.3, 1] });
    animate(spotColor, targetColor, { duration: 2.4, ease: [0.16, 1, 0.3, 1] });
    animate(gridOpacity, targetGrid, { duration: 2.4, ease: [0.16, 1, 0.3, 1] });
  }, [activeIndex, act3Progress]);

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', zIndex: -2, background: '#0a0908' }}>
      
      {/* Layer 1 — Base Shadow Gradient */}
      <div style={{ 
        position: 'absolute', inset: 0, 
        background: 'radial-gradient(circle at 50% 50%, #12100e 0%, #0a0908 100%)' 
      }} />

      {/* Layer 2 — Giant 3D Perspective Orbital Structure */}
      <GiantOrbitRing activeIndex={activeIndex} transitionKick={transitionKick} hoveredSystem={hoveredSystem} act3Progress={act3Progress} />

      {/* Layer 3 — Floating Blur Shapes with slow breathing */}
      <motion.div 
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 75,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute', top: '-10%', right: '-10%',
          width: '60vw', height: '60vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(198, 122, 74, 0.05) 0%, transparent 70%)',
          filter: `blur(${140 + transitionKick * 40}px)`,
          transform: `scale(${1 + transitionKick * 0.04})`,
          willChange: 'transform, filter',
          pointerEvents: 'none'
        }}
      />

      <motion.div 
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 20, -30, 0],
        }}
        transition={{
          duration: 85,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute', bottom: '-15%', left: '-15%',
          width: '65vw', height: '65vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 157, 195, 0.04) 0%, transparent 70%)',
          filter: `blur(${150 + transitionKick * 30}px)`,
          transform: `scale(${1 + transitionKick * 0.03})`,
          willChange: 'transform, filter',
          pointerEvents: 'none'
        }}
      />

      {/* Layer 4 — Giant Typography Layer (Faded Background Scale Anchors) */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: -1 }}>
        <motion.div 
          key={activeIndex}
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 0.035, x: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="serif"
          style={{
            position: 'absolute',
            left: activeIndex >= 4 && activeIndex <= 11 ? '45%' : '5%',
            bottom: '8%',
            fontSize: '22vw',
            fontWeight: 700,
            color: activeIndex <= 3 ? 'var(--earth-copper)' : 'var(--syn-electric)',
            whiteSpace: 'nowrap',
            lineHeight: 0.8,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase'
          }}
        >
          {BACKGROUND_WORDS[activeIndex] || ''}
        </motion.div>
      </div>

      {/* Layer 5 — Futuristic Grid Mesh */}
      <motion.div 
        style={{ 
          position: 'absolute', inset: 0, 
          opacity: gridOpacity,
          backgroundImage: 'linear-gradient(rgba(232, 228, 223, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 228, 223, 0.03) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          backgroundPosition: 'center center',
          transform: `scale(${1 + transitionKick * 0.02})`,
          willChange: 'transform, opacity',
          pointerEvents: 'none'
        }} 
      />

      {/* Layer 6 — Controlled Ambient Spotlight Glow */}
      <motion.div 
        style={{
          position: 'absolute',
          width: '75vw',
          height: '75vw',
          borderRadius: '50%',
          left: spotX,
          top: spotY,
          transform: 'translate(-50%, -50%)',
          background: spotColor,
          filter: `blur(${140 + transitionKick * 30}px)`,
          willChange: 'transform, filter',
          pointerEvents: 'none'
        }}
      />

      {/* Depth Shadow Vignette (Dark Haze) */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle, transparent 40%, rgba(10, 9, 8, 0.5) 90%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '15vh',
        background: 'linear-gradient(to bottom, rgba(10, 9, 8, 0.85), transparent)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '15vh',
        background: 'linear-gradient(to top, rgba(10, 9, 8, 0.85), transparent)',
        pointerEvents: 'none'
      }} />
    </div>
  );
}
