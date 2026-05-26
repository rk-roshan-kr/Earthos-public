import React, { useEffect, useRef } from 'react';

export default function TopologyCanvas({ scrollProgress, transitionKick, isActive = true }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const frameRef = useRef(0);
  const nodesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    if (!isActive) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Initialize 70 topology nodes (slightly reduced for visual restraint)
    const N = 70;
    const nodes = [];
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    for (let i = 0; i < N; i++) {
      let group = 'field';
      if (i < 18) group = 'substrate-ring'; // Substrate execution boundary
      else if (i < 30) group = 'core-prior'; // Core central attractor
      else if (i < 42) group = 'metabolic-flux'; // Floating metabolic nodes

      const angle = (i / 18) * Math.PI * 2;
      const ringR = Math.min(canvas.width, canvas.height) * 0.32;
      
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        hx: Math.random() * canvas.width,
        hy: Math.random() * canvas.height,
        ax: group === 'substrate-ring' ? cx + Math.cos(angle) * ringR :
            group === 'core-prior' ? cx + (Math.random() - 0.5) * ringR * 0.25 :
            cx + Math.cos(angle * 1.5) * ringR * 0.65,
        ay: group === 'substrate-ring' ? cy + Math.sin(angle) * ringR :
            group === 'core-prior' ? cy + (Math.random() - 0.5) * ringR * 0.25 :
            cy + Math.sin(angle * 1.5) * ringR * 0.65,
        vx: 0,
        vy: 0,
        r: Math.random() * 1.5 + 0.8, // Reduced node size for visual restraint
        ph: Math.random() * Math.PI * 2,
        group,
        scarred: i % 8 === 0,
        frozen: i % 6 === 0,
      });
    }
    nodesRef.current = nodes;

    const onMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouse);

    const render = () => {
      const w = canvas.width, h = canvas.height;
      const p = scrollProgress.current || 0;
      const kick = transitionKick.current || 0; // Read transition velocity kick
      const t = (frameRef.current++) * 0.0012; // Slow down baseline speed parameter by 70%
      const mouse = mouseRef.current;
      const midX = w / 2, midY = h / 2;

      const isCollapse = p > 0.30 && p <= 0.42;
      const isFracture = p > 0.42 && p <= 0.48;
      const isSynapseLive = p > 0.48 && p <= 0.60;
      const isGraveyard = p > 0.60 && p <= 0.70;
      const isAtlas = p > 0.70 && p <= 0.82;
      const isJitter = p > 0.82 && p <= 0.90;
      const isExit = p > 0.90;

      const inSynapseZone = p > 0.45 && p <= 0.90;

      // CLEAR CANVAS so the layered background renders underneath
      ctx.clearRect(0, 0, w, h);

      // System Restraint: fade out particles in Hero (p <= 0.05) and Synapse (p > 0.45)
      // This enforces "ONLY 1 PRIMARY MOTION EVENT PER VIEWPORT"
      let globalAlphaMultiplier = 1.0;
      if (p <= 0.08) {
        globalAlphaMultiplier = 0.15; // particles fade out during massive kinetic intro
      } else if (inSynapseZone) {
        globalAlphaMultiplier = 0.25; // particles recede to let grid & spotlight lead
      }

      for (const n of nodes) {
        let breathAmp = 1.2;
        if (isCollapse) breathAmp = 0.15;
        else if (isGraveyard && n.frozen) breathAmp = 0;
        else if (isJitter) breathAmp = 4;

        const breath = Math.sin(t + n.ph) * breathAmp;

        let tx = n.hx;
        let ty = n.hy;

        if (isCollapse) {
          const progress = (p - 0.30) / 0.12;
          tx = n.hx + (midX - n.hx) * progress * 0.85;
          ty = n.hy + (midY - n.hy) * progress * 0.85;
        } else if (isFracture) {
          const progress = (p - 0.42) / 0.06;
          tx = n.hx + (n.hx - midX) * (1 + progress * 0.4);
          ty = n.hy + (n.hy - midY) * (1 + progress * 0.4);
        } else if (isSynapseLive) {
          tx = n.hx + Math.cos(t + n.ph) * 20;
          ty = n.hy + Math.sin(t + n.ph) * 20;
        } else if (isGraveyard) {
          if (n.frozen) {
            const clusterX = midX + Math.cos(n.ph) * 110;
            const clusterY = midY + Math.sin(n.ph) * 110;
            tx = clusterX;
            ty = clusterY;
          } else {
            tx = n.hx;
            ty = n.hy;
          }
        } else if (isAtlas) {
          tx = n.ax;
          ty = n.ay;
        } else if (isJitter) {
          tx = n.hx + (Math.random() - 0.5) * 45;
          ty = n.hy + (Math.random() - 0.5) * 45;
        } else if (isExit) {
          const progress = (p - 0.90) / 0.10;
          tx = n.ax + (n.hx - n.ax) * progress;
          ty = n.ay + (n.hy - n.ay) * progress;
        }

        let damping = 0.93; // Increased damping for premium settling motion
        let stiffness = 0.012;

        if (isFracture) {
          damping = 0.95;
          stiffness = 0.03;
        } else if (isAtlas) {
          stiffness = 0.028;
        }

        // Apply physics forces
        n.vx += (tx - n.x + breath) * stiffness;
        n.vy += (ty - n.y + breath * 0.7) * stiffness;

        // Subtle Transition Velocity Kick perturbation (micro inertia)
        if (kick > 0.02) {
          n.vx += (Math.random() - 0.5) * kick * 2.0;
          n.vy += (Math.random() - 0.5) * kick * 2.0;
        }

        n.vx *= damping;
        n.vy *= damping;

        // Subtle mouse influence
        const mdx = n.x - mouse.x;
        const mdy = n.y - mouse.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        const maxDist = inSynapseZone ? 120 : 80;
        
        if (md < maxDist && md > 0) {
          const force = ((maxDist - md) / maxDist) * (inSynapseZone ? 1.2 : 0.6);
          n.vx += (mdx / md) * force;
          n.vy += (mdy / md) * force;
        }

        n.x += n.vx;
        n.y += n.vy;
      }

      // Draw delicate connection lines
      let maxConnDist = 110;
      if (isCollapse) maxConnDist = 180;
      else if (isFracture) maxConnDist = 50;
      else if (isAtlas) maxConnDist = 130;

      // Stretch connections slightly during velocity kicks
      maxConnDist += kick * 35;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < maxConnDist) {
            const ratio = 1 - d / maxConnDist;
            let alpha = ratio * 0.04 * globalAlphaMultiplier; // delicate, low-contrast links
            let color = `rgba(198, 122, 74, ${alpha})`; // Amber

            if (isCollapse) {
              alpha = ratio * 0.09 * globalAlphaMultiplier;
              color = `rgba(110, 105, 96, ${alpha})`;
            } else if (isFracture) {
              alpha = ratio * 0.05 * globalAlphaMultiplier;
              color = `rgba(168, 93, 74, ${alpha})`;
            } else if (inSynapseZone) {
              if (isGraveyard && a.scarred && b.scarred) {
                alpha = ratio * 0.25 * globalAlphaMultiplier;
                color = `rgba(107, 48, 48, ${alpha})`; // Red failure scars
              } else {
                alpha = ratio * 0.05 * globalAlphaMultiplier;
                color = `rgba(139, 157, 195, ${alpha})`; // Electric blue
              }
            } else if (isExit) {
              color = `rgba(198, 122, 74, ${alpha * 0.5})`;
            }

            ctx.strokeStyle = color;
            ctx.lineWidth = 0.45; // Delicate connections
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw faint node dots
      for (const n of nodes) {
        let alpha = 0.25 * globalAlphaMultiplier;
        let color = `rgba(107, 143, 122, ${alpha})`; // Sage green

        if (isCollapse) {
          alpha = 0.1 * globalAlphaMultiplier;
          color = `rgba(110, 105, 96, ${alpha})`;
        } else if (isFracture) {
          alpha = 0.35 * globalAlphaMultiplier;
          color = `rgba(168, 93, 74, ${alpha})`;
        } else if (inSynapseZone) {
          if (isGraveyard && n.frozen) {
            alpha = 0.4 * globalAlphaMultiplier;
            color = `rgba(107, 48, 48, ${alpha})`;
          } else {
            alpha = 0.3 * globalAlphaMultiplier;
            color = `rgba(139, 157, 195, ${alpha})`;
          }
        }

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, [isActive]);

  return <canvas ref={canvasRef} id="topology-canvas" />;
}
