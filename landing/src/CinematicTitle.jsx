import React from 'react';
import { motion } from 'framer-motion';

export default function CinematicTitle({ text, className, style, isActive }) {
  const words = text.split(' ');

  return (
    <h2 className={className} style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      overflow: 'hidden', 
      ...style 
    }}>
      {words.map((word, i) => (
        <span key={i} style={{ 
          overflow: 'hidden', 
          display: 'inline-block', 
          marginRight: '0.3em',
          paddingBottom: '0.12em' 
        }}>
          <motion.span
            variants={{
              inactive: { y: '105%' },
              active: { y: 0 }
            }}
            initial="inactive"
            animate={isActive ? 'active' : 'inactive'}
            transition={{ 
              duration: 2.4, 
              delay: i * 0.08, 
              ease: [0.16, 1, 0.3, 1] // Extremely slow ease-out curve for heavy presence
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}
