import React from 'react';
import { motion } from 'framer-motion';

export default function ForegroundAtmosphere({ activeIndex }) {
  // Show different annotations depending on whether we are in Earthos or Synapse
  const isSynapse = activeIndex >= 4 && activeIndex <= 9;

  return (
    <div style={{
      position: 'fixed', inset: 0,
      pointerEvents: 'none',
      zIndex: 100, // floating in front of text
      mixBlendMode: 'overlay',
      opacity: 0.12
    }}>
      {/* Dynamic Minimal Geometric Ring (Floating orbit) */}
      <motion.svg 
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '320px',
          height: '320px'
        }}
      >
        <circle 
          cx="160" cy="160" r="150" 
          fill="none" 
          stroke={isSynapse ? 'var(--syn-electric)' : 'var(--earth-copper)'} 
          strokeWidth="0.5" 
          strokeDasharray="4 8"
        />
        <circle 
          cx="160" cy="10" r="2.5" 
          fill={isSynapse ? 'var(--syn-electric)' : 'var(--earth-copper)'} 
        />
      </motion.svg>

      {/* Subliminal Vector Axes */}
      <svg style={{
        position: 'absolute',
        bottom: '8%',
        right: '8%',
        width: '180px',
        height: '180px'
      }}>
        <line x1="0" y1="180" x2="180" y2="180" stroke="#fff" strokeWidth="0.5" opacity="0.3" />
        <line x1="0" y1="0" x2="0" y2="180" stroke="#fff" strokeWidth="0.5" opacity="0.3" />
        <text x="10" y="170" fill="#fff" fontSize="8" fontFamily="var(--font-mono)" letterSpacing="0.1em" opacity="0.5">
          {isSynapse ? 'COGNITIVE_BOUNDS' : 'CIVILIZATION_HORIZON'}
        </text>
      </svg>

      {/* Controlled Imperfection / Asymmetrical telemetry marks in margins */}
      <div className="mono" style={{
        position: 'absolute',
        top: '3.5rem',
        left: '4.5rem',
        fontSize: '0.65rem',
        color: '#fff',
        opacity: 0.5,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem'
      }}>
        <span>SYS_STATE // {isSynapse ? 'DISSIPATIVE_STRUCTURE' : 'GEOLOGICAL_RECORD'}</span>
        <span>SYS_PARITY // 0x48FA.09C</span>
      </div>

      <div className="mono" style={{
        position: 'absolute',
        bottom: '3.5rem',
        left: '4.5rem',
        fontSize: '0.65rem',
        color: '#fff',
        opacity: 0.5
      }}>
        <span>51.4892° N / 0.0981° W</span>
      </div>

      <div className="mono" style={{
        position: 'absolute',
        top: '3.5rem',
        right: '4.5rem',
        fontSize: '0.65rem',
        color: '#fff',
        opacity: 0.5
      }}>
        <span>TIME_HORIZON // 2026.05.26</span>
      </div>
    </div>
  );
}
