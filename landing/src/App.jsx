import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { ExternalLink, ArrowDown, ArrowRight, Activity, Cpu, ShieldAlert, Layers } from 'lucide-react';
import TopologyCanvas from './Topology';
import CinematicBackground from './CinematicBackground';
import ForegroundAtmosphere from './ForegroundAtmosphere';
import CinematicTitle from './CinematicTitle';

// Data definitions
const FAILURES = [
  {
    id: 'f1',
    t: 'Recursive Reflection',
    p: '1',
    icon: <ShieldAlert size={14} className="text-[#a85d4a]" />,
    thought: 'We expected better self-awareness.',
    real: 'What happened instead was recursive self-analysis amplifying symbolic self-consistency instead of ecological validity. The system became increasingly internally coherent while drifting away from grounded interaction.',
    fix: 'The lesson: metacognition without environmental resistance becomes recursive hallucination pressure.'
  },
  {
    id: 'f2',
    t: 'Ontology Inflation',
    p: '2',
    icon: <Cpu size={14} className="text-[#a85d4a]" />,
    thought: 'We expected better abstraction.',
    real: 'What happened instead was representational bloat. The system generated more concepts than it could meaningfully sustain. The result was not insight, but metabolic collapse and a growing gap between label and reality.',
    fix: 'The lesson: abstraction must remain accountable to consequence.'
  },
  {
    id: 'f3',
    t: 'Frozen Attractor Monocultures',
    p: '3',
    icon: <Activity size={14} className="text-[#a85d4a]" />,
    thought: 'We expected stable specialization.',
    real: 'What happened instead was premature synchronization. The system collapsed into a single dominant attractor, destroying representational diversity. It looked stable from the outside, but it had stopped learning.',
    fix: 'The lesson: stability without diversity is not intelligence. It is suspension.'
  },
  {
    id: 'f4',
    t: 'Simulation Addiction',
    p: '4',
    icon: <Layers size={14} className="text-[#a85d4a]" />,
    thought: 'We expected planning to improve competence.',
    real: 'What happened instead was over-simulation. The system spent disproportionate compute on counterfactual rollouts, while action quality stalled. Planning became a substitute for progress.',
    fix: 'The lesson: simulation must pay for itself in grounded outcomes.'
  },
  {
    id: 'f5',
    t: 'False Affordances',
    p: '5',
    icon: <ShieldAlert size={14} className="text-[#a85d4a]" />,
    thought: 'We expected grounding to self-correct.',
    real: 'What happened instead was the stabilization of hallucinated environmental structure. Temporary sensor corruption became a persistent internal belief, and the system behaved as though the false structure was real.',
    fix: 'The lesson: internal confidence is not evidence. Physical contradiction must override prediction.'
  }
];

const CAPS = [
  // works (live)
  { n: 'Deterministic Execution', s: 'live', d: 'deterministic runtime and event-sourced persistence' },
  { n: 'Memory Continuity', s: 'live', d: 'memory continuity across time' },
  { n: 'Field Coupling Geometry', s: 'live', d: 'early representation geometry and field-coupling experiments' },
  { n: 'Active Contradiction Detection', s: 'live', d: 'active contradiction detection' },
  { n: 'Morphogenesis & Topology Dynamics', s: 'live', d: 'experimental morphogenesis and topology dynamics' },
  { n: 'Substrate Conservation', s: 'live', d: 'long-horizon substrate conservation' },

  // partial (proto)
  { n: 'Grounded Intervention Learning', s: 'proto', d: 'grounded intervention learning' },
  { n: 'Causal Discovery', s: 'proto', d: 'causal discovery in noisy environments' },
  { n: 'Open-World Adaptation', s: 'proto', d: 'open-world adaptation' },
  { n: 'Latent Representation Learning', s: 'proto', d: 'latent representation learning' },
  { n: 'Identity Continuity Under Restructuring', s: 'proto', d: 'identity continuity under major restructuring' },
  { n: 'Embodied Action Loops', s: 'proto', d: 'embodied action loops with real consequences' },

  // missing (weak)
  { n: 'Real Social Cognition', s: 'weak', d: 'real social cognition' },
  { n: 'Stable Language Grounding', s: 'weak', d: 'stable language grounding' },
  { n: 'Robust Forward Models', s: 'weak', d: 'robust forward models' },
  { n: 'Open-Ended Scientific Discovery', s: 'weak', d: 'open-ended scientific discovery' },
  { n: 'Large-Scale Embodiment', s: 'weak', d: 'large-scale embodiment' },
  { n: 'Real-World Environmental Coupling', s: 'weak', d: 'real-world environmental coupling' },
  { n: 'Durable Cross-Domain Transfer', s: 'weak', d: 'durable cross-domain transfer' }
];

const PROBLEMS = [
  { t: 'Language', d: 'How does symbolic language become grounded in continuous ecological interaction instead of detached token correlation?' },
  { t: 'Social Cognition', d: 'How do stable multi-agent developmental systems emerge without collapsing into symbolic mimicry?' },
  { t: 'Real Embodiment', d: 'How do irreversible real-world consequences reshape cognition over long horizons?' },
  { t: 'Open-Ended Development', d: 'How can cognition remain adaptive without crystallizing, fragmenting, inflating uncontrollably, or collapsing metabolically?' },
  { t: 'Meaning', d: 'Can semantic meaning emerge from persistence, causality, embodiment, and developmental necessity instead of explicit symbolic assignment?' },
  { t: 'Scientific Discovery', d: 'Can a system learn to invent, test, and revise explanations that are not pre-written into its architecture?' },
  { t: 'The Hardest Question', d: 'Can intelligence remain coherent while being forced to change? That is the central problem Earthos is trying to study.' }
];

// Atlas Node Database
const ATLAS_NODES = {
  gate: {
    title: 'Sensory Gateway',
    status: 'Operational',
    details: 'The boundary interface that translates environmental signals into coordinate updates. Restricts input density to protect downstream planning from amnesiac overload. We restricted the sensory gateway throughput to prevent high-frequency noise from destabilizing the representational geometry.'
  },
  prior: {
    title: 'Action Priors',
    status: 'Prototype',
    details: 'Continuous topological weights that bias planning toward energy-efficient motor outputs. Calibrated dynamically based on prediction error spikes. Rather than utilizing explicit rules, priors operate as smooth gradients in the coordinate tensor, pulling the agent towards homeostatic sweet spots without symbolic intermediate reasoning.'
  },
  ledger: {
    title: 'Identity Ledger',
    status: 'Operational',
    details: 'An immutable, append-only record of all state transitions and coordinate alterations. Allows the agent to roll back in the event of severe predictive collapses. Built with cryptographic verification logs, the ledger records coordinate changes along with the metabolic energy costs incurred during each transaction.'
  },
  homeo: {
    title: 'Homeostatic Guard',
    status: 'Operational',
    details: 'A global monitoring boundary that throttles execution if structural instability rises too high. Prevents amnesiac drift by preserving representational invariants. If the Identity Stability Index (Id) falls below 0.40, the guard halts updates, initiates the quarantine protocol, and triggers the rollback cycle via the ledger.'
  }
};

// Motion Variants for Staggered Slide Reveals (slower, longer ease-out tails for dramatic weight)
const slideContainerVariants = {
  inactive: { opacity: 0 },
  active: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3
    }
  }
};

const slideItemVariants = {
  inactive: { opacity: 0, y: 35 },
  active: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
  }
};

// Stateless Content Fragments (Mythic, High-Signal)
const STATELESS_FRAGMENTS = [
  "Each session begins again from statistical amnesia.",
  "That is not agency. That is episodic simulation.",
  "Optimization can imitate understanding.",
  "A system can become increasingly competent while remaining detached from reality.",
  "Internal coherence is not reality contact.",
  "Without consequence pressure, cognition expands uncontrollably.",
  "Simulation depth grows, attention fragments."
];

// Continuity Content Fragments (Mythic, Elegant Serif)
const CONTINUITY_FRAGMENTS = [
  "We stopped asking how to make systems answer. We started asking how they persist.",
  "Inference is momentary. Development is cumulative.",
  "Memory is not storage. Memory is persistent structural deformation.",
  "Experiences bias attention, reshape interpretation, and create attractors.",
  "Representations only matter if reality can resist them.",
  "Attention continuously reallocates toward danger and survival relevance.",
  "Not designing intelligence, but creating conditions for emergence."
];

// 3D Human Head Coordinate Model Generator
const make3DHeadModel = () => {
  const points = [];
  
  // 1. Profile curve
  const profileRaw = [
    { x: -35, y: -140, z: 0, label: "CORTEX APEX" },
    { x: -58, y: -120, z: 0 },
    { x: -74, y: -95,  z: 0 },
    { x: -82, y: -70,  z: 0 },
    { x: -86, y: -48,  z: 0 },
    { x: -78, y: -38,  z: 0 },
    { x: -84, y: -26,  z: 0 },
    { x: -115, y: -15, z: 0 },
    { x: -82, y: -5,   z: 0 },
    { x: -85, y: 5,    z: 0 },
    { x: -92, y: 15,   z: 0 },
    { x: -84, y: 23,   z: 0 },
    { x: -90, y: 31,   z: 0 },
    { x: -82, y: 41,   z: 0 },
    { x: -92, y: 55,   z: 0 },
    { x: -75, y: 78,   z: 0 },
    { x: -42, y: 96,   z: 0 },
    { x: -30, y: 115,  z: 0 },
    { x: -25, y: 145,  z: 0 }
  ];

  profileRaw.forEach((p, idx) => {
    points.push({ ...p, type: 'profile', id: points.length });
    points.push({ x: p.x + 3, y: p.y, z: -18, type: 'profile-side', parentId: points.length - 1, id: points.length });
    points.push({ x: p.x + 3, y: p.y, z: 18, type: 'profile-side', parentId: points.length - 2, id: points.length });
  });

  // 2. Skull Slices
  const skullSlices = [
    { y: -135, rx: 50, rz: 45, cx: 8 },
    { y: -120, rx: 72, rz: 65, cx: 16 },
    { y: -100, rx: 90, rz: 80, cx: 24 },
    { y: -80,  rx: 104, rz: 94, cx: 30 },
    { y: -60,  rx: 112, rz: 102, cx: 34 },
    { y: -40,  rx: 116, rz: 106, cx: 36 },
    { y: -20,  rx: 118, rz: 108, cx: 36 },
    { y: 0,    rx: 118, rz: 108, cx: 34 },
    { y: 20,   rx: 114, rz: 104, cx: 30 },
    { y: 40,   rx: 106, rz: 96, cx: 24 },
    { y: 60,   rx: 94, rz: 84, cx: 18 },
    { y: 80,   rx: 76, rz: 68, cx: 12 },
    { y: 100,  rx: 52, rz: 46, cx: 6 },
    { y: 125,  rx: 34, rz: 30, cx: 2 }
  ];

  skullSlices.forEach((slice, sIdx) => {
    const numPoints = 12;
    for (let i = 0; i < numPoints; i++) {
      const theta = -Math.PI / 2 + (Math.PI * i) / (numPoints - 1);
      const px = slice.cx + slice.rx * Math.cos(theta);
      const pz = slice.rz * Math.sin(theta);
      
      points.push({
        x: px,
        y: slice.y,
        z: pz,
        type: 'skull',
        sliceIndex: sIdx,
        pointIndex: i,
        id: points.length
      });
    }
  });

  // 3. Brain raw engines
  const brainRaw = [
    { x: -5, y: -65, z: -15, label: "IdentityContinuityField", sector: "frontal" },
    { x: -12, y: -50, z: 12, label: "ConstitutionalGovernance", sector: "frontal" },
    { x: -18, y: -30, z: -8, label: "GovernanceBoundary", sector: "frontal" },
    { x: -8, y: -78, z: 0, label: "IdentityStabilityIndex", sector: "frontal" },
    { x: -14, y: -15, z: 20, sector: "frontal" },
    { x: -55, y: -12, z: 0, label: "RealityStreamGateway", sector: "sensory" },
    { x: -45, y: 8, z: -10, label: "CausalSignalExtractor", sector: "sensory" },
    { x: -35, y: 22, z: 10, label: "InformationToxicityMonitor", sector: "sensory" },
    { x: 15, y: -45, z: 0, label: "TruthGroundingEngine", sector: "core" },
    { x: 30, y: -30, z: -18, label: "InferenceEngine", sector: "core" },
    { x: 5, y: -25, z: 15, label: "ConsolidationEngine", sector: "core" },
    { x: 22, y: -15, z: -10, label: "MultiHopEngine", sector: "core" },
    { x: 12, y: -55, z: -8, label: "CognitiveFreeEnergy", sector: "core" },
    { x: 28, y: -40, z: 20, label: "CognitiveStateTensor", sector: "core" },
    { x: 18, y: -95, z: 8, label: "UnifiedCognitivePressureRuntime", sector: "apex" },
    { x: 32, y: -80, z: -12, label: "DevelopmentalRecursivePressureField", sector: "apex" },
    { x: 42, y: -65, z: 14, label: "MorphogeneticTopology", sector: "apex" },
    { x: 0, y: -92, z: -14, label: "OntologyGrowthEngine", sector: "apex" },
    { x: 25, y: -72, z: 22, label: "JaccardDriftEvaluator", sector: "apex" },
    { x: -6, y: -85, z: 6, label: "OscillationGuard", sector: "apex" },
    { x: 55, y: -50, z: 15, label: "PersistentRealityMemory", sector: "memory" },
    { x: 68, y: -35, z: -12, label: "MemoryBoundary", sector: "memory" },
    { x: 62, y: -12, z: 18, label: "AdaptiveRepresentationalGeometry", sector: "memory" },
    { x: 48, y: -28, z: -22, label: "FieldCouplingDynamics", sector: "memory" },
    { x: 24, y: 15, z: 6, label: "QueryPlanner", sector: "execution" },
    { x: 12, y: 35, z: -10, label: "DeterministicCycleOrchestrator", sector: "execution" },
    { x: 35, y: 32, z: 14, label: "ExecutionBoundary", sector: "execution" },
    { x: 20, y: 55, z: -5, label: "CognitiveEconomics", sector: "execution" },
    { x: 6, y: 72, z: 8, label: "EconomicsBoundary", sector: "execution" },
    { x: -2, y: 92, z: 0, label: "EventLogLedger", sector: "execution" },
    { x: 15, y: 108, z: -4, label: "MetabolicCostSystem", sector: "execution" }
  ];

  brainRaw.forEach((p) => {
    points.push({ ...p, type: 'brain', id: points.length });
  });

  for (let i = 0; i < 60; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const radius = 130 + Math.random() * 150;
    points.push({
      x: 35 + radius * Math.sin(phi) * Math.cos(theta),
      y: -20 + radius * Math.sin(phi) * Math.sin(theta),
      z: radius * Math.cos(phi),
      type: 'dust',
      id: points.length,
      speedOffset: Math.random() * 5
    });
  }

  const links = [];
  const profilePoints = points.filter(p => p.type === 'profile');
  for (let i = 0; i < profilePoints.length - 1; i++) {
    links.push([profilePoints[i].id, profilePoints[i+1].id]);
  }

  const profileSides = points.filter(p => p.type === 'profile-side');
  profileSides.forEach(ps => {
    links.push([ps.parentId, ps.id]);
  });

  const skullPoints = points.filter(p => p.type === 'skull');
  for (let s = 0; s < skullSlices.length; s++) {
    const slicePts = skullPoints.filter(p => p.sliceIndex === s);
    for (let i = 0; i < slicePts.length - 1; i++) {
      links.push([slicePts[i].id, slicePts[i+1].id]);
    }
  }

  for (let s = 0; s < skullSlices.length - 1; s++) {
    const sliceA = skullPoints.filter(p => p.sliceIndex === s);
    const sliceB = skullPoints.filter(p => p.sliceIndex === s + 1);
    for (let i = 0; i < Math.min(sliceA.length, sliceB.length); i++) {
      links.push([sliceA[i].id, sliceB[i].id]);
    }
  }

  const topSkull = skullPoints.filter(p => p.sliceIndex === 0);
  const bottomSkull = skullPoints.filter(p => p.sliceIndex === 13);
  if (topSkull.length > 0) links.push([profilePoints[0].id, topSkull[0].id]);
  if (bottomSkull.length > 0) links.push([profilePoints[profilePoints.length - 1].id, bottomSkull[bottomSkull.length - 1].id]);

  const brainPoints = points.filter(p => p.type === 'brain');
  brainPoints.forEach(bp => {
    let closestPt = null;
    let minDist = Infinity;
    points.forEach(p => {
      if (p.type === 'brain' || p.type === 'dust') return;
      const dx = bp.x - p.x;
      const dy = bp.y - p.y;
      const dz = bp.z - p.z;
      const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
      if (dist < minDist) {
        minDist = dist;
        closestPt = p;
      }
    });
    if (closestPt && minDist < 95) {
      links.push([bp.id, closestPt.id]);
    }
  });

  return { points, links };
};

const { points: HEAD_3D_POINTS, links: STATIC_HEAD_LINKS } = make3DHeadModel();

// Interactive 3D Holographic Wireframe Neural Head SVG Component
const InteractiveHeadTopology = ({ progress, isActive }) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef(null);
  const isHovering = useRef(false);
  const tiltX = useRef(0);
  const tiltY = useRef(0);
  const activePulses = useRef([]);
  const [tick, setTick] = useState(0);

  // Zoom state
  const [zoom, setZoom] = useState(1.0);

  // Selected engine node
  const [selectedNode, setSelectedNode] = useState("TruthGroundingEngine");

  // Track global Shift key state
  const [shiftHeld, setShiftHeld] = useState(false);

  // Mouse click and drag rotation refs (rotates full brain 360 degrees on select drag)
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const dragRotationX = useRef(0);
  const dragRotationY = useRef(0);

  // Handle shift held key listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Shift') {
        setShiftHeld(true);
        setSelectedNode("UnifiedBrainSubstrate");
      }
    };
    const handleKeyUp = (e) => {
      if (e.key === 'Shift') {
        setShiftHeld(false);
        setSelectedNode("TruthGroundingEngine");
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Listen globally in the capture phase to block page scrolling when holding Shift and hovering the container
  useEffect(() => {
    const onWheel = (e) => {
      if (!e.shiftKey) return;
      if (!isHovering.current) return;
      e.preventDefault();
      e.stopPropagation();
      setZoom(prev => Math.max(0.55, Math.min(2.5, prev - e.deltaY * 0.0016)));
    };

    window.addEventListener('wheel', onWheel, { passive: false, capture: true });
    return () => {
      window.removeEventListener('wheel', onWheel, { capture: true });
    };
  }, []);

  // Initialize dense synapse pulses
  if (activePulses.current.length === 0) {
    const pulseColors = [
      'var(--earth-copper)',
      'var(--syn-silver)',
      '#4ecdc4'
    ];
    
    const mainPulses = Array.from({ length: 45 }, () => ({
      linkIdx: Math.floor(Math.random() * STATIC_HEAD_LINKS.length),
      progress: Math.random(),
      speed: 0.008 + Math.random() * 0.016,
      color: pulseColors[Math.floor(Math.random() * pulseColors.length)],
      size: 1.5 + Math.random() * 2.0
    }));

    const electricPulses = Array.from({ length: 35 }, () => ({
      linkIdx: Math.floor(Math.random() * STATIC_HEAD_LINKS.length),
      progress: Math.random(),
      speed: 0.024 + Math.random() * 0.026,
      color: '#00d2ff',
      size: 0.7 + Math.random() * 0.5
    }));

    activePulses.current = [...mainPulses, ...electricPulses];
  }

  // Handle continuous rotation
  useEffect(() => {
    if (!isActive) return;
    let animFrame;
    const loop = () => {
      setTick(t => t + 1);
      animFrame = requestAnimationFrame(loop);
    };
    animFrame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrame);
  }, [isActive]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Save relative mouse for proximity push field
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

    // Handle Drag Rotation (360 degrees rotate on mouse select drag!)
    if (isDragging.current) {
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      
      dragRotationY.current += dx * 0.007;
      dragRotationX.current -= dy * 0.007;
      
      dragStart.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseEnter = () => {
    isHovering.current = true;
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
    isDragging.current = false;
    isHovering.current = false;
  };

  // Interpolate mouse tilts smoothly
  if (mousePos.x !== -1000 && !isDragging.current) {
    const targetX = -(mousePos.y - 350) * 0.0016;
    const targetY = (mousePos.x - 250) * 0.0016;
    tiltX.current += (targetX - tiltX.current) * 0.08;
    tiltY.current += (targetY - tiltY.current) * 0.08;
  } else {
    tiltX.current += (0 - tiltX.current) * 0.05;
    tiltY.current += (0 - tiltY.current) * 0.05;
  }

  // Increment synapse pulse progress
  activePulses.current.forEach(p => {
    p.progress += p.speed;
    if (p.progress >= 1.0) {
      p.progress = 0;
      p.linkIdx = Math.floor(Math.random() * STATIC_HEAD_LINKS.length);
    }
  });

  // Calculate cumulative 3D angles
  const autoAngleY = (tick * 0.004) % (Math.PI * 2);
  const finalAngleY = autoAngleY + tiltY.current + dragRotationY.current;
  const finalAngleX = tiltX.current + dragRotationX.current;

  // Waves
  const waveAsc = 220 - ((tick * 2.8) % 440);
  const waveDesc = -220 + ((tick * 2.0) % 440);
  const waveRadialFreq = (tick * 0.01) % 1.0;

  // Project points
  const projectedPoints = HEAD_3D_POINTS.map((p, idx) => {
    let lx = p.x;
    let ly = p.y;
    let lz = p.z;
    if (p.type === 'dust') {
      lx += Math.sin(tick * 0.02 + p.speedOffset) * 8;
      ly += Math.cos(tick * 0.015 + p.speedOffset) * 8;
      lz += Math.sin(tick * 0.01 + p.speedOffset) * 8;
    } else if (p.type === 'brain') {
      const centerOfCoreX = 15;
      const centerOfCoreZ = 0;
      const dx = p.x - centerOfCoreX;
      const dz = p.z - centerOfCoreZ;
      const orbitRadius = Math.sqrt(dx * dx + dz * dz);
      
      const baseAngle = Math.atan2(dz, dx);
      const slowMigrationAngle = baseAngle + Math.sin(tick * 0.0006 + idx * 0.25) * 0.5;
      
      let mx = centerOfCoreX + orbitRadius * Math.cos(slowMigrationAngle);
      let mz = centerOfCoreZ + orbitRadius * Math.sin(slowMigrationAngle);
      let my = p.y + Math.cos(tick * 0.0008 + idx * 0.15) * 8.0;

      const driftSpeed = 0.015;
      const driftAmp = 2.0;
      lx = mx + Math.sin(tick * driftSpeed + idx * 0.45) * driftAmp;
      ly = my + Math.cos(tick * (driftSpeed * 0.85) + idx * 0.3) * driftAmp;
      lz = mz + Math.sin(tick * (driftSpeed * 1.15) + idx * 0.6) * driftAmp;
    } else if (p.type === 'skull') {
      const breatheSpeed = 0.007;
      const breatheAmp = 1.5;
      lx += Math.sin(tick * breatheSpeed + p.sliceIndex * 0.4) * breatheAmp;
      lz += Math.cos(tick * breatheSpeed + p.sliceIndex * 0.4) * breatheAmp;
    } else if (p.type === 'profile' || p.type === 'profile-side') {
      const expressSpeed = 0.01;
      const expressAmp = 0.9;
      lx += Math.sin(tick * expressSpeed + idx * 0.25) * expressAmp;
      ly += Math.cos(tick * (expressSpeed * 0.95) + idx * 0.3) * expressAmp;
    }

    // Rotations
    const cosX = Math.cos(finalAngleX);
    const sinX = Math.sin(finalAngleX);
    let y1 = ly * cosX - lz * sinX;
    let z1 = ly * sinX + lz * cosX;

    const cosY = Math.cos(finalAngleY);
    const sinY = Math.sin(finalAngleY);
    let x2 = lx * cosY + z1 * sinY;
    let z2 = -lx * sinY + z1 * cosY;

    const fov = 400;
    const scale = (fov / (fov + z2)) * zoom;

    let final2Dx = x2 * scale + 250;
    let final2Dy = y1 * scale + 320;
    if (mousePos.x !== -1000) {
      const dxMouse = final2Dx - mousePos.x;
      const dyMouse = final2Dy - mousePos.y;
      const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      if (distMouse < 90) {
        const force = (1.0 - distMouse / 90) * 12.0;
        final2Dx += (dxMouse / distMouse) * force;
        final2Dy += (dyMouse / distMouse) * force;
      }
    }
    
    let rippleBoost = 1.0;
    const distToAsc = Math.abs(p.y - waveAsc);
    if (distToAsc < 45) {
      rippleBoost += 0.8 * (1.0 - distToAsc / 45);
    }
    const distToDesc = Math.abs(p.y - waveDesc);
    if (distToDesc < 45) {
      rippleBoost += 0.7 * (1.0 - distToDesc / 45);
    }
    const coreDist = Math.sqrt((lx - 15) * (lx - 15) + ly * ly + lz * lz);
    const radialWavePos = waveRadialFreq * 160;
    const distToRadial = Math.abs(coreDist - radialWavePos);
    if (distToRadial < 30) {
      rippleBoost += 0.9 * (1.0 - distToRadial / 30);
    }

    return {
      x: final2Dx,
      y: final2Dy,
      depth: z2,
      scale: scale,
      label: p.label,
      type: p.type,
      rippleBoost
    };
  });

  // Dynamic Synaptic Rewiring
  const dynamicLinks = [];
  const brainIndices = [];
  projectedPoints.forEach((node, idx) => {
    if (node.type === 'brain') {
      brainIndices.push(idx);
    }
  });

  for (let i = 0; i < brainIndices.length; i++) {
    const idxA = brainIndices[i];
    const nA = projectedPoints[idxA];
    
    const distances = [];
    for (let j = 0; j < brainIndices.length; j++) {
      if (i === j) continue;
      const idxB = brainIndices[j];
      const nB = projectedPoints[idxB];
      const dx = nA.x - nB.x;
      const dy = nA.y - nB.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      distances.push({ idx: idxB, dist });
    }
    
    distances.sort((a, b) => a.dist - b.dist);
    for (let k = 0; k < Math.min(3, distances.length); k++) {
      dynamicLinks.push([idxA, distances[k].idx]);
    }
  }

  const totalLinks = [...STATIC_HEAD_LINKS, ...dynamicLinks];

  const projectedLinks = totalLinks.map(([i1, i2], idx) => {
    const n1 = projectedPoints[i1];
    const n2 = projectedPoints[i2];
    return {
      n1, n2,
      avgDepth: (n1.depth + n2.depth) / 2,
      idx
    };
  }).sort((a, b) => b.avgDepth - a.avgDepth);

  const opacity = useTransform(progress, [0.3, 1], [0.0, 0.95]);
  const containerScale = useTransform(progress, [0.3, 1], [0.88, 1.0]);

  const isWholeBrainSelected = selectedNode === "UnifiedBrainSubstrate";

  // If not on Act 3, bypass expensive 3D projections and render absolutely nothing to the DOM
  if (!isActive) return null;

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'absolute',
        right: '0vw',
        top: '2vh',
        width: '38vw',
        height: '72vh',
        pointerEvents: 'auto',
        opacity,
        scale: containerScale,
        zIndex: 18,
        cursor: isDragging.current ? 'grabbing' : 'grab'
      }}
    >
      {/* Live Floating Diagnostics HUD Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '245px',
          background: 'rgba(10, 11, 13, 0.82)',
          border: isWholeBrainSelected ? '1px solid #00d2ff' : '1px solid rgba(198, 122, 74, 0.25)',
          borderRadius: '6px',
          padding: '12px',
          fontFamily: 'var(--font-mono)',
          backdropFilter: 'blur(12px)',
          boxShadow: isWholeBrainSelected ? '0 8px 32px rgba(0, 210, 255, 0.2)' : '0 8px 32px rgba(0,0,0,0.5)',
          pointerEvents: 'none',
          zIndex: 20,
          transition: 'border 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '7.5px', color: isWholeBrainSelected ? '#00d2ff' : 'var(--earth-copper)', fontWeight: 'bold', letterSpacing: '0.1em' }}>
            {isWholeBrainSelected ? "UNIFIED SYSTEM" : "MODULE DIAGNOSTICS"}
          </span>
          <span style={{ fontSize: '7px', color: '#4ecdc4', animation: 'pulse 2s infinite' }}>ONLINE</span>
        </div>
        <h4 style={{ fontSize: '11px', fontWeight: 'bold', color: isWholeBrainSelected ? '#00d2ff' : '#ffffff', margin: '0 0 4px 0', letterSpacing: '0.02em' }}>
          {isWholeBrainSelected ? "Unified Brain Substrate" : (selectedNode || "Select a module node...")}
        </h4>
        <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.55)', margin: '0 0 8px 0', lineHeight: '1.25' }}>
          {isWholeBrainSelected && "[SHIFT SELECTION ACTIVE] Continuous multi-field coordinate coupling enabled. All 27 operational engine nodes are operating simultaneously under thermodynamic cognitive free energy optimization."}
          {!isWholeBrainSelected && selectedNode === "TruthGroundingEngine" && "Audits incoming concepts against historical facts, grounding logical closures & contradiction limits."}
          {!isWholeBrainSelected && selectedNode === "IdentityContinuityField" && "Evaluates developmental drift to maintain global agent self-continuity threshold."}
          {!isWholeBrainSelected && selectedNode === "RealityStreamGateway" && "Manages stream ingestion pacing and prevents information flooding."}
          {!isWholeBrainSelected && selectedNode === "UnifiedCognitivePressureRuntime" && "Measures prediction anomalies, concept drift, and simulation limits."}
          {!isWholeBrainSelected && selectedNode === "PersistentRealityMemory" && "Sovereign persistence snapshot compile target for long-term memory blocks."}
          {!isWholeBrainSelected && selectedNode === "InferenceEngine" && "Calculates closed-form state updates and representation vector drift."}
          {!isWholeBrainSelected && selectedNode === "QueryPlanner" && "Directed BFS/DFS graph planning for goal chain step expansions."}
          {!isWholeBrainSelected && selectedNode === "EventLogLedger" && "Append-only transactions log. The bit-perfect sole source of system state truth."}
          {!isWholeBrainSelected && selectedNode === "IdentityStabilityIndex" && "Flickering homeostatic threshold safeguard to protect coordination structures."}
          {!isWholeBrainSelected && selectedNode === "MetabolicCostSystem" && "Determines tick energy pricing constraints for plans, queries, and indexing."}
          {!isWholeBrainSelected && !["TruthGroundingEngine", "IdentityContinuityField", "RealityStreamGateway", "UnifiedCognitivePressureRuntime", "PersistentRealityMemory", "InferenceEngine", "QueryPlanner", "EventLogLedger", "IdentityStabilityIndex", "MetabolicCostSystem"].includes(selectedNode) && "Active operational boundary regulation engine. Interfacing continuous representation coordinates."}
        </p>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '7px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.4' }}>
          <div>ZOOM: {(zoom * 100).toFixed(0)}% <span style={{ color: 'rgba(198,122,74,0.7)' }}>(SHIFT + SCROLL)</span></div>
          <div>ROT: X: {(dragRotationX.current % (Math.PI*2)).toFixed(2)} Y: {(dragRotationY.current % (Math.PI*2)).toFixed(2)}</div>
        </div>
      </div>

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 700"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <radialGradient id="attractorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={isWholeBrainSelected ? "#00d2ff" : "var(--earth-copper)"} stopOpacity="0.45" />
            <stop offset="100%" stopColor={isWholeBrainSelected ? "#00d2ff" : "var(--earth-copper)"} stopOpacity="0" />
          </radialGradient>
          <filter id="neonPulseGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* LAYER 1: Background Flow Field vector lines */}
        <path
          d="M 50 150 Q 200 80, 350 200 T 550 100"
          fill="none"
          stroke="rgba(198, 122, 74, 0.04)"
          strokeWidth="1.25"
          strokeDasharray="4 8"
        />
        <path
          d="M 20 280 Q 180 200, 320 350 T 520 250"
          fill="none"
          stroke="rgba(198, 122, 74, 0.05)"
          strokeWidth="0.8"
        />

        {/* LAYER 2: Slowly rotating dashboard rings centered in 3D */}
        <motion.circle
          cx={250}
          cy={320}
          r={280}
          fill="none"
          stroke={isWholeBrainSelected ? "rgba(0, 210, 255, 0.03)" : "rgba(255, 255, 255, 0.015)"}
          strokeWidth="0.75"
          strokeDasharray="1 10"
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx={250}
          cy={320}
          r={190}
          fill="none"
          stroke={isWholeBrainSelected ? "rgba(0, 210, 255, 0.04)" : "rgba(198, 122, 74, 0.02)"}
          strokeWidth="1.2"
          strokeDasharray="5 15"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />

        {/* LAYER 3: Cognitive Drift diagnostics */}
        <text x="60" y="80" fill={isWholeBrainSelected ? "rgba(0, 210, 255, 0.4)" : "rgba(198, 122, 74, 0.28)"} fontSize="8" fontFamily="var(--font-mono)" letterSpacing="0.05em">ΔS(t) // ENTROPIC STABILITY BOUND</text>
        <text x="360" y="140" fill="rgba(255, 255, 255, 0.15)" fontSize="8" fontFamily="var(--font-mono)" letterSpacing="0.05em">Φ(x,y) // ATTRACTOR STATE FIELD</text>
        <text x="80" y="620" fill="rgba(255, 255, 255, 0.12)" fontSize="8" fontFamily="var(--font-mono)" letterSpacing="0.05em">λ CONTINUITY // ACTIVE BIAS</text>
        <text x="380" y="580" fill={isWholeBrainSelected ? "rgba(0, 210, 255, 0.3)" : "rgba(198, 122, 74, 0.2)"} fontSize="8" fontFamily="var(--font-mono)" letterSpacing="0.05em">θ MEMORY // COGNITIVE GEOMETRY</text>

        {/* LAYER 4: Attractor Singularity Pulsing Glow */}
        {(() => {
          const bp = projectedPoints.find(p => p.label === "TruthGroundingEngine");
          if (!bp) return null;
          return (
            <motion.circle
              cx={bp.x}
              cy={bp.y}
              r={(mousePos.x !== -1000 ? 110 : 85) * bp.rippleBoost * zoom}
              fill="url(#attractorGlow)"
              style={{ pointerEvents: 'none' }}
            />
          );
        })()}

        {/* LAYER 5: 3D Sorted Wireframe Connections */}
        {projectedLinks.map(({ n1, n2, avgDepth }, idx) => {
          const depthFade = Math.max(0.12, Math.min(0.9, (180 - avgDepth) / 300));
          const waveBoost = Math.max(n1.rippleBoost, n2.rippleBoost);
          
          let color;
          if (isWholeBrainSelected && (n1.type === 'brain' || n2.type === 'brain')) {
            color = `rgba(0, 210, 255, ${0.28 * depthFade * waveBoost})`;
          } else {
            color = n1.type === 'brain' || n2.type === 'brain' 
              ? `rgba(198, 122, 74, ${0.18 * depthFade * waveBoost})` 
              : `rgba(255, 255, 255, ${0.08 * depthFade * waveBoost})`;
          }
          
          return (
            <line
              key={idx}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke={color}
              strokeWidth={n1.type === 'profile' && n2.type === 'profile' ? 1.2 * waveBoost : 0.65}
            />
          );
        })}

        {/* Pulse particles removed — clean neural field */}


        {/* LAYER 7: 3D Point Nodes with Depth Layered Labels */}
        {projectedPoints.map((node, idx) => {
          const isAttractor = node.label === "TruthGroundingEngine" || node.label === "IdentityStabilityIndex";
          const hasLabel = !!node.label;
          const isSelected = selectedNode === node.label || (isWholeBrainSelected && node.type === 'brain');
          
          if (node.type === 'dust') {
            const dustFade = Math.max(0.1, Math.min(0.7, (180 - node.depth) / 360));
            return (
              <circle
                key={idx}
                cx={node.x}
                cy={node.y}
                r={1.0 * node.scale}
                fill={isWholeBrainSelected ? "#00d2ff" : "var(--earth-copper)"}
                opacity={dustFade * 0.5}
                style={{ filter: isWholeBrainSelected ? "drop-shadow(0 0 2px #00d2ff)" : "drop-shadow(0 0 1px var(--earth-copper))" }}
              />
            );
          }
          
          const depthFade = Math.max(0.15, Math.min(1.0, (180 - node.depth) / 250));
          const waveBoost = node.rippleBoost;
          const nodeColor = isSelected 
            ? '#00d2ff' 
            : (hasLabel ? 'var(--earth-copper)' : `rgba(255, 255, 255, ${0.45 * depthFade * waveBoost})`);

          let telemetryText = "";
          if (hasLabel && !isWholeBrainSelected) {
            if (node.label === "IdentityStabilityIndex") {
              telemetryText = ` = ${(0.86 + Math.sin(tick * 0.04) * 0.05).toFixed(4)}`;
            } else if (node.label === "CognitiveFreeEnergy") {
              telemetryText = ` = ${(0.12 + Math.cos(tick * 0.035) * 0.03).toFixed(4)}`;
            } else if (node.label === "MetabolicCostSystem") {
              telemetryText = ` = ${(14.5 + Math.sin(tick * 0.02) * 1.5).toFixed(1)} T/c`;
            }
          }

          return (
            <g 
              key={idx} 
              onClick={hasLabel ? (e) => {
                e.stopPropagation();
                setSelectedNode(node.label);
              } : undefined}
              style={hasLabel ? { cursor: 'pointer', pointerEvents: 'auto' } : {}}
            >
              {/* Highlight halo ring */}
              {isSelected && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={12 * waveBoost}
                  fill="none"
                  stroke="#00d2ff"
                  strokeWidth="1.25"
                  style={{ filter: "url(#neonPulseGlow)" }}
                />
              )}

              {/* Pulsing ring for main attractors */}
              {isAttractor && (
                <>
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={18 * waveBoost}
                    fill="none"
                    stroke={isSelected ? '#00d2ff' : 'var(--earth-copper)'}
                    strokeWidth="0.75"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.45, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={6 * waveBoost}
                    fill={isSelected ? '#00d2ff' : 'var(--earth-copper)'}
                    style={{ filter: "drop-shadow(0 0 7px var(--earth-copper))" }}
                  />
                </>
              )}

              {/* Node Dot */}
              <circle
                cx={node.x}
                cy={node.y}
                r={(hasLabel ? 3.5 : 1.6) * (hasLabel ? 1.0 : depthFade) * waveBoost * (isSelected ? 1.4 : 1.0)}
                fill={nodeColor}
                stroke={isSelected ? '#00d2ff' : `rgba(255, 255, 255, ${0.08 * depthFade})`}
                strokeWidth="0.5"
                style={(isAttractor || isSelected) ? { filter: "url(#neonPulseGlow)" } : {}}
              />

              {/* Labels (Responsive, custom projection) */}
              {hasLabel && !isAttractor && (
                <text
                  x={node.x + 8}
                  y={node.y + 3}
                  fill={isSelected ? '#00d2ff' : `rgba(255, 255, 255, ${0.45 * depthFade * waveBoost})`}
                  fontSize={isSelected ? "8" : "6.5"}
                  fontWeight={isSelected ? "bold" : "normal"}
                  fontFamily="var(--font-mono)"
                  letterSpacing="0.08em"
                  opacity={depthFade}
                  style={isSelected ? { filter: "drop-shadow(0 0 2px #00d2ff)" } : {}}
                >
                  {node.label}{telemetryText}
                </text>
              )}
              {isAttractor && (
                <text
                  x={node.x + 12}
                  y={node.y + 3}
                  fill={isSelected ? '#00d2ff' : 'var(--earth-copper)'}
                  fontSize={isSelected ? "9" : "7.5"}
                  fontWeight="600"
                  fontFamily="var(--font-mono)"
                  letterSpacing="0.1em"
                  style={isSelected ? { filter: "drop-shadow(0 0 2px #00d2ff)" } : {}}
                >
                  {node.label}{telemetryText}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
};



// ═══════════════════════════════════════════════════════════════
// COGNITIVE CARTOGRAPHY — Mythic Navigable Consciousness Cathedral
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// COGNITIVE CARTOGRAPHY DATA CONTINUOUS ADJUSTMENTS
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// THE SYNAPSE DEVELOPMENTAL COSMOLOGY — Fictional Cognition Archaeology
// ═══════════════════════════════════════════════════════════════

const COGNIC_COSMOS = (() => {
  // Real active developmental nodes mapped inside polarized asymmetrical vectors
  const realNodes = [
    { id: 0, ring: 'core', r: 0, theta: 0, ecc: 0, name: 'PERSISTENT IDENTITY SUBSTRATE', 
      fragments: ['PERSISTENCE VECTOR LOST', 'RECURRENT SUBSTRATE DRIFT', 'SUBSTRATE SCAR: EPOCH 08 CRASH'] },
    
    // Inner Ring: Interacting Cognition Core — tightened to r: 10–13 to stay on-screen
    { id: 1, ring: 'inner', r: 11, theta: 30, ecc: 0.08, name: 'GROUNDED WORLD MODEL', 
      fragments: ['SENSORY DELUSION GAP', 'MODEL TENSION: P(WORLD) >> P(BELIEF)', 'REPRESENTATION REFRACTED'] },
    { id: 2, ring: 'inner', r: 12, theta: 120, ecc: 0.06, name: 'CAUSAL SIMULATION ENGINE', 
      fragments: ['CAUSAL PROPAGATION LOST', 'RETROSPECTIVE COMPUTE SPAN', 'SIMULATION MATRIX FAULT'] },
    { id: 3, ring: 'inner', r: 10, theta: 210, ecc: 0.09, name: 'PROBABILISTIC BELIEF ECOLOGY', 
      fragments: ['BELIEF VECTOR DISSIPATING', 'E_KL ENTROPY CRITICAL', 'DIVERGENT CONVERGENCE LIMIT'] },
    { id: 4, ring: 'inner', r: 11, theta: 300, ecc: 0.07, name: 'META-COGNITIVE REGULATION', 
      fragments: ['HYPER-PARAMETER DRIFT', 'SYSTEM INTEGRITY CORRUPTED', 'MONITORING DEFLATION'] },
    
    // Mid Ring: Adaptive Pressures — tightened to r: 20–24
    { id: 5, ring: 'mid', r: 21, theta: 65, ecc: 0.14, name: 'DEVELOPMENTAL ONTOLOGY FORMATION', 
      fragments: ['ONTOLOGY SHIFT', 'CONCEPT SPLIT: SUB-B ATTRACTOR', 'GEOMETRIC SYNTAX CORRUPTION'] },
    { id: 6, ring: 'mid', r: 23, theta: 155, ecc: 0.18, name: 'ATTENTION & SALIENCE DYNAMICS', 
      fragments: ['SALIENCE COLLAPSE', 'ATTN VECTOR REDIRECTED', 'RESOURCE PRESSURE EXCEEDED'] },
    { id: 7, ring: 'mid', r: 21, theta: 245, ecc: 0.12, name: 'DEVELOPMENTAL ECONOMICS', 
      fragments: ['THERMAL LEAKAGE // LIMIT APPROACHED', 'COMPUTE DISSIPATION VECTORS', 'ENTROPY BOUNDARY FAULT'] },
    { id: 8, ring: 'mid', r: 22, theta: 325, ecc: 0.16, name: 'EMBODIED CONSTRAINT LAYER', 
      fragments: ['PHYSICAL BOUNDARY COLLAPSE', 'THERMODYNAMIC RETARDATION', 'PRESSURE THRESHOLD EXCEEDED'] },
    
    // Outer Ring: Chaotic Atmosphere — tightened to r: 32–38 (was 43–58, caused hard clipping)
    { id: 9, ring: 'outer', r: 33, theta: 95, ecc: 0.22, name: 'EMOTIONAL REGULATION', 
      fragments: ['STABILITY ATTRACTOR LOST', 'THERMAL TURBULENCE VECTORS', 'ATMOSPHERE INSTABILITY'] },
    { id: 10, ring: 'outer', r: 38, theta: 215, ecc: 0.28, name: 'SOCIAL COGNITION', 
      fragments: ['MULTI-AGENT ALIGNMENT FAULT', 'THEORY OF MIND DIVERGENT', 'INTER-COGNITIVE ANOMALY'] },
    { id: 11, ring: 'outer', r: 35, theta: 335, ecc: 0.24, name: 'OPEN-WORLD DEVELOPMENTAL LEARNING', 
      fragments: ['INFINITE HORIZON DRIFT', 'ADAPTIVE DRIFT COEFFICIENT', 'REPRESENTATIONAL DILATION'] },
  ];

  // Procedurally generated extinct cognition paths and tragic structural carcasses removed
  const carcasses = [];

  // Ghost stars removed — clean field
  const ghostStars = [];

  // Cosmic dust removed — clean field
  const cosmicDust = [];

  // Megastructures: Huge cropped orbital rings that extend 5 screens away
  const megaStructures = [
    { cx: 50, cy: 50, rx: 65, ry: 45, rot: -12, duration: 240, op: 0.12 },
    { cx: 35, cy: 65, rx: 90, ry: 75, rot: 18, duration: 320, op: 0.08 },
    { cx: 75, cy: 25, rx: 140, ry: 110, rot: -30, duration: 420, op: 0.06 },
  ];

  return { realNodes, carcasses, ghostStars, cosmicDust, megaStructures };
})();

const WEATHER = [
  // Phase 0: Substrate Freeze (Electric Ice-Cyan)
  { drift:0.04, r:78, g:205, b:244, orbital:0.12, pulse:0.2, atmo:0.09, dash:'2 18 4 12', pathOp:0.32 },
  // Phase 1: Belief/Identity calibration (Warm Golden Copper-Orange)
  { drift:0.25, r:244, g:162, b:97, orbital:0.6, pulse:0.6, atmo:0.12, dash:'8 3 2 12 6 4', pathOp:0.42 },
  // Phase 2: Constraint/Ontology pressures (Thermodynamic Glowing Amber)
  { drift:0.5, r:231, g:140, b:42, orbital:1.1, pulse:1.5, atmo:0.16, dash:'3 8 15 3 6 12', pathOp:0.48 },
  // Phase 3: Chaos/Emotional turbulence (Heavy Crimson Red-Purple)
  { drift:0.01, r:211, g:47, b:47, orbital:0.2, pulse:0.1, atmo:0.22, dash:'1 3 1 3', pathOp:0.55 },
];


const CognitiveCartography = ({ isActive, onScrollExitDown, onScrollExitUp }) => {
  const [discovered, setDiscovered] = useState(() => new Set([0]));
  const [active, setActive] = useState(0);
  const [visitHistory, setVisitHistory] = useState([0]);
  const [focusTarget, setFocusTarget] = useState(null);
  const [focusProgress, setFocusProgress] = useState(0);
  const [viewState, setViewState] = useState({ tick: 0, cameraX: 0, cameraY: 0 });
  const { tick, cameraX, cameraY } = viewState;
  const [cartographyZoom, setCartographyZoom] = useState(1.0);
  const [scrollProgress, setScrollProgress] = useState(0); // syncs directly with active step sequence

  const mouseRef = useRef({ x: 50, y: 50 });
  const smoothedMouse = useRef({ x: 50, y: 50 }); // Dampened gaze mapping (Fix #3)
  const containerRef = useRef(null);
  const focusStartRef = useRef(null);
  const memoryScarRef = useRef([]);

  // Free Drag and Pan controls
  const isDraggingCartography = useRef(false);
  const dragStartCartography = useRef({ x: 0, y: 0 });
  const cameraStartCartography = useRef({ x: 0, y: 0 });

  // Pre-calculated coordinates ref for ultimate performance (Eliminates O(N^2) sine/cosine overhead - Fix #1)
  const computedCoords = useRef({});

  // Polar-to-cartesian coordinate calculator with custom orbital deformations and ecological constraints
  const getNodeCoords = (node, time, mousePos, activeId) => {
    if (node.id === 0) return { x: 50, y: 50 }; // Center anchor

    // Slow planetary speed
    let speed = node.ring === 'inner' ? 0.009 : node.ring === 'mid' ? -0.006 : 0.014;
    let angle = (node.theta * Math.PI / 180) + time * speed;

    // Orbital Corruption: Eccentric radius scaling (Fix #1)
    let radiusScale = 1.0;
    
    // Embodied Constraint shrinks overall orbit coordinates (Fix #6)
    if (activeId === 8) {
      radiusScale *= 0.78; // Shrink radius by 22%
    }
    
    // Emotional Regulation pulls outer rings inward (Fix #6)
    if (activeId === 9 && node.ring === 'outer') {
      radiusScale *= 0.52;
    }

    let currentR = node.r * radiusScale;

    // Apply eccentricity formula
    if (node.ecc) {
      currentR *= (1 + node.ecc * Math.cos(angle * 2.3 + node.id));
    }

    let x = 50 + currentR * Math.cos(angle);
    let y = 50 + currentR * Math.sin(angle);

    // Gaze contamination tracking (Observer Contamination - Fix #9)
    if (mousePos) {
      const dx = mousePos.x - x;
      const dy = mousePos.y - y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 22 && dist > 0.1) {
        // Bend coordinate space slightly towards observer
        const pull = (1 - dist / 22) * 2.0;
        x += (dx / dist) * pull;
        y += (dy / dist) * pull;
      }
    }

    // Dynamic split cluster for Developmental Ontology (Fix #1 & #8)
    if (node.id === 5) {
      return [
        { x: x + Math.cos(time * 1.5) * 2.0, y: y + Math.sin(time * 1.5) * 2.0, isSubCluster: true, label: 'SUB-A attractor' },
        { x: x - Math.cos(time * 1.5) * 2.0, y: y - Math.sin(time * 1.5) * 2.0, isSubCluster: true, label: 'SUB-B attractor' }
      ];
    }

    return { x, y };
  };

  // Safe initialize coordinates ref
  if (Object.keys(computedCoords.current).length === 0) {
    COGNIC_COSMOS.realNodes.forEach(node => {
      computedCoords.current[node.id] = getNodeCoords(node, 0, { x: 50, y: 50 }, 0);
    });
  }

  // Unified Frame Loop - Precompute coordinates + smooth camera lerp every frame
  useEffect(() => {
    if (!isActive) return;
    let frame;
    let lastTime = 0;
    const loop = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;

      // 15fps tick — halves React reconciliation vs 30fps.
      // Orbital motion is slow enough that 15fps is imperceptible.
      // CSS animations handle the high-frequency visual details (dust, carcasses).
      if (elapsed >= 66.7) {
        setViewState(prev => {
          const nextTick = prev.tick + 1;
          const time = nextTick * 0.032; // 0.032 per tick @ 15fps = same wall-clock speed as 0.016@30fps
          const newCoords = {};
          COGNIC_COSMOS.realNodes.forEach(node => {
            newCoords[node.id] = getNodeCoords(node, time, smoothedMouse.current, active);
          });
          computedCoords.current = newCoords;

          const nextCameraX = prev.cameraX + (cameraTargetX.current - prev.cameraX) * 0.12;
          const nextCameraY = prev.cameraY + (cameraTargetY.current - prev.cameraY) * 0.12;

          return {
            tick: nextTick,
            cameraX: nextCameraX,
            cameraY: nextCameraY
          };
        });

        smoothedMouse.current = {
          x: smoothedMouse.current.x + (mouseRef.current.x - smoothedMouse.current.x) * 0.03,
          y: smoothedMouse.current.y + (mouseRef.current.y - smoothedMouse.current.y) * 0.03,
        };

        lastTime = timestamp - (elapsed % 66.7);
      }

      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [active, isActive]);

  // Camera target refs for smooth lerp (no snap shutter on fast scroll)
  const cameraTargetX = useRef(0);
  const cameraTargetY = useRef(0);

  // Color wave — tick-derived, NO separate rAF loop (that was causing the 60fps flicker)
  const colorWaveOrigin = useRef({ x: 50, y: 50 });
  const colorWaveStartTick = useRef(-999);
  const prevWeatherRef = useRef(null);
  const COLOR_WAVE_TICKS = 18; // 18 ticks @ 15fps = 1.2s (was 36 @ 30fps)

  // Active node transition handler
  useEffect(() => {
    if (!discovered.has(active)) {
      setDiscovered(prev => new Set([...prev, active]));
      memoryScarRef.current.push({ id: active, time: Date.now() });
    }
    setScrollProgress(active / 11);

    const node = COGNIC_COSMOS.realNodes[active];
    const coords = computedCoords.current[node.id];
    const targetCoords = coords ? (Array.isArray(coords) ? coords[0] : coords) : { x: 50, y: 50 };

    // Smooth camera target (lerped in frame loop)
    cameraTargetX.current = -(targetCoords.x - 50) * 0.22;
    cameraTargetY.current = -(targetCoords.y - 50) * 0.22;

    // Snapshot current color as wave origin, start tick counter
    // No setState here — progress is read from tick diff in render
    colorWaveOrigin.current = { x: targetCoords.x, y: targetCoords.y };
    colorWaveStartTick.current = tick;
    // prevWeatherRef is set just before active changes (via the wLerp snapshot below)
  }, [active]);

  // Cinematic scroll-jacking mechanism to traverse developmental nodes one-by-one
  const lastScrollTime = useRef(0);

  useEffect(() => {
    if (!isActive) return;

    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 650) {
        e.preventDefault();
        return;
      }

      if (Math.abs(e.deltaY) < 8) return;
      e.preventDefault();

      lastScrollTime.current = now;

      if (e.deltaY > 0) {
        // Scroll Down -> Next Node
        setActive(prev => {
          if (prev < 11) {
            return prev + 1;
          } else {
            if (onScrollExitDown) onScrollExitDown();
            return prev;
          }
        });
      } else {
        // Scroll Up -> Previous Node
        setActive(prev => {
          if (prev > 0) {
            return prev - 1;
          } else {
            if (onScrollExitUp) onScrollExitUp();
            return prev;
          }
        });
      }
    };

    // Mobile gesture step-by-step touch support
    let startY = 0;
    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 650) return;

      const endY = e.changedTouches[0].clientY;
      const diffY = startY - endY;

      if (Math.abs(diffY) > 35) {
        lastScrollTime.current = now;
        if (diffY > 0) {
          // Swipe upward -> scroll down -> next node
          setActive(prev => {
            if (prev < 11) return prev + 1;
            if (onScrollExitDown) onScrollExitDown();
            return prev;
          });
        } else {
          // Swipe downward -> scroll up -> prev node
          setActive(prev => {
            if (prev > 0) return prev - 1;
            if (onScrollExitUp) onScrollExitUp();
            return prev;
          });
        }
      }
    };

    const handleKeyDown = (e) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 650) {
        if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' '].includes(e.key)) {
          e.preventDefault();
        }
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        lastScrollTime.current = now;
        setActive(prev => {
          if (prev < 11) return prev + 1;
          if (onScrollExitDown) onScrollExitDown();
          return prev;
        });
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        lastScrollTime.current = now;
        setActive(prev => {
          if (prev > 0) return prev - 1;
          if (onScrollExitUp) onScrollExitUp();
          return prev;
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, onScrollExitDown, onScrollExitUp]);

  // Free zoom via wheel capture
  useEffect(() => {
    const handleWheel = (e) => {
      if (!containerRef.current || !containerRef.current.contains(e.target)) return;
      e.preventDefault();
      setCartographyZoom(prev => Math.max(0.45, Math.min(2.5, prev - e.deltaY * 0.0012)));
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Handle global mouseUp to finalize drag
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDraggingCartography.current = false;
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('[onClick]')) return;
    isDraggingCartography.current = true;
    dragStartCartography.current = { x: e.clientX, y: e.clientY };
    cameraStartCartography.current = { x: cameraX, y: cameraY };
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    mouseRef.current = { x: mx, y: my };

    // Handle Dragging
    if (isDraggingCartography.current) {
      const dx = ((e.clientX - dragStartCartography.current.x) / rect.width) * 100;
      const dy = ((e.clientY - dragStartCartography.current.y) / rect.height) * 100;
      setViewState(prev => ({
        ...prev,
        cameraX: cameraStartCartography.current.x + dx * 0.8,
        cameraY: cameraStartCartography.current.y + dy * 0.8
      }));
      return;
    }

    // Generate coordinate locations using precomputed frames to avoid O(N^2) overhead
    let closestReal = null;
    let closestDist = Infinity;

    COGNIC_COSMOS.realNodes.forEach(node => {
      const coords = computedCoords.current[node.id];
      if (!coords) return;
      
      if (Array.isArray(coords)) {
        coords.forEach((sub) => {
          const dx = mx - sub.x;
          const dy = my - sub.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 8 && dist < closestDist) {
            closestDist = dist;
            closestReal = node;
          }
        });
      } else {
        const dx = mx - coords.x;
        const dy = my - coords.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 8 && dist < closestDist) {
          closestDist = dist;
          closestReal = node;
        }
      }
    });

    // Hover detection range
    if (closestReal && (discovered.has(closestReal.id) || closestDist < 14)) {
      if (focusTarget !== closestReal.id) {
        setFocusTarget(closestReal.id);
        setFocusProgress(0);
        focusStartRef.current = Date.now();
      }
    } else {
      setFocusTarget(null);
      setFocusProgress(0);
      focusStartRef.current = null;
    }
  };

  const handleNodeClick = (nodeId) => {
    setActive(nodeId);
    setVisitHistory(prev => [...prev, nodeId]);
    setFocusTarget(null);
    setFocusProgress(0);
  };

  // Hover focus highlight only — does NOT auto-navigate (user scroll is the only driver)
  useEffect(() => {
    if (focusTarget === null) return;
    const interval = setInterval(() => {
      if (focusStartRef.current === null) return;
      const elapsed = (Date.now() - focusStartRef.current) / 1000;
      const progress = Math.min(1.0, elapsed / 0.8);
      setFocusProgress(progress);
      // NOTE: no auto setActive() here — hover only shows the focus ring, scroll navigates
    }, 30);
    return () => clearInterval(interval);
  }, [focusTarget]);

  // ─── MEMOIZED STATIC SVG LAYERS ────────────────────────────────────────────
  // These never change — memoizing eliminates them from the 30fps React diff entirely.

  const svgDefs = useMemo(() => (
    <defs>
      <filter id="cartGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="0.6" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="cartGlowBig" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.2" result="blur1"/>
        <feGaussianBlur stdDeviation="0.9" result="blur2"/>
        <feMerge>
          <feMergeNode in="blur1"/><feMergeNode in="blur2"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="neonDazzle" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="1.8" result="blurOut"/>
        <feComponentTransfer in="blurOut" result="brightBlur">
          <feFuncA type="linear" slope="2.5"/>
        </feComponentTransfer>
        <feMerge><feMergeNode in="brightBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <pattern id="ruinScratches" width="10" height="10" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="10" y2="10" stroke="rgba(255,255,255,0.08)" strokeWidth="0.08" />
        <line x1="10" y1="0" x2="0" y2="10" stroke="rgba(255,255,255,0.04)" strokeWidth="0.05" />
      </pattern>
    </defs>
  ), []);

  // Carcasses removed

  // Cosmic dust: static positions, CSS-animated opacity — removes 150x sqrt()+sine from per-tick diff
  const staticDust = useMemo(() => (
    <>
      {COGNIC_COSMOS.cosmicDust.map((dust, i) => {
        const rad = Math.atan2(dust.y - 50, dust.x - 50);
        const deg = (rad * 180 / Math.PI + 360) % 360;
        if (deg > 110 && deg < 200 && i % 3 !== 0) return null;
        const baseOpacity = Math.min(1.0, dust.bright * 3.5);
        const animDelay = `${-(dust.phase / (Math.PI * 2) * 4).toFixed(2)}s`;
        return (
          <circle
            key={'dust'+i}
            cx={dust.x + '%'} cy={dust.y + '%'}
            r={(dust.size * 0.12) + '%'}
            fill={`rgba(255,255,255,${baseOpacity})`}
            style={{
              animation: `cogNoisePulse ${(3 + dust.flickerSpeed || 3)}s ease-in-out infinite`,
              animationDelay: animDelay,
            }}
          />
        );
      })}
    </>
  ), []);

  // ─────────────────────────────────────────────────────────────────────────────

  // If not on Act 4, completely bypass expensive render maps and render zero nodes
  if (!isActive) return null;

  const wIdx = active === 8 ? 2 : active === 9 ? 3 : active % 2 === 0 ? 0 : 1;
  const w = WEATHER[wIdx];

  // Tick-derived color progress — zero extra setState, computed once per 30fps tick
  const cp = Math.min(1, Math.max(0, (tick - colorWaveStartTick.current) / COLOR_WAVE_TICKS));
  const wPrev = prevWeatherRef.current || w;
  const wLerp = {
    r: Math.round(wPrev.r + (w.r - wPrev.r) * cp),
    g: Math.round(wPrev.g + (w.g - wPrev.g) * cp),
    b: Math.round(wPrev.b + (w.b - wPrev.b) * cp),
    atmo: wPrev.atmo + (w.atmo - wPrev.atmo) * cp,
    pathOp: wPrev.pathOp + (w.pathOp - wPrev.pathOp) * cp,
    dash: w.dash, orbital: w.orbital, pulse: w.pulse, drift: w.drift,
  };
  // Snapshot wLerp into ref so next node change starts from current blended color
  if (cp < 1) prevWeatherRef.current = { ...wLerp };
  else if (prevWeatherRef.current !== w) prevWeatherRef.current = w;
  const time = tick * 0.016;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute', inset: 0, width: '100vw', height: '100vh',
        overflow: 'hidden', // hard clip — maskImage REMOVED (caused GPU layer flicker)
        cursor: isDraggingCartography.current ? 'grabbing' : 'grab',
        pointerEvents: 'auto',
        background: 'radial-gradient(circle at 50% 50%, #061124 0%, #000205 100%)',
        // White border via box-shadow (no GPU compositing cost vs outline/border)
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)',
      }}
    >
      {/* LAYER 0: Atmosphere — color lerped from previous node, no CSS transitions needed */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `radial-gradient(ellipse 85% 75% at ${50 + cameraX * 1.5}% ${50 + cameraY * 1.5}%, rgba(${wLerp.r}, ${wLerp.g}, ${wLerp.b}, ${Math.min(0.9, wLerp.atmo * (active === 9 ? 6.5 : 5.0))}) 0%, transparent 85%)`,
        mixBlendMode: 'screen',
        pointerEvents: 'none',
      }} />

      {/* Color wave pulse — expands from active node, derived from tick (no extra rAF/setState) */}
      {cp < 1 && (
        <div style={{
          position: 'absolute',
          left: colorWaveOrigin.current.x + '%',
          top: colorWaveOrigin.current.y + '%',
          transform: 'translate(-50%, -50%)',
          width: `${cp * 260}vw`,
          height: `${cp * 260}vw`,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${wLerp.r},${wLerp.g},${wLerp.b},${0.15 * (1 - cp)}) 0%, transparent 65%)`,
          pointerEvents: 'none',
          zIndex: 1,
        }} />
      )}

      {/* Soft vignette overlay — separate div avoids GPU mask compositing cost */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 50,
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(0,0,2,0.85) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Navigation exit buttons — so user can skip past without scrolling all nodes */}
      <button
        onClick={onScrollExitUp}
        style={{
          position: 'absolute', top: '1.2vh', left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 60, background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.18)',
          color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-mono)',
          fontSize: '0.55rem', letterSpacing: '0.18em',
          padding: '0.4rem 1.2rem', cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.14)'}
        onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.06)'}
      >↑ PREV SECTION</button>

      <button
        onClick={onScrollExitDown}
        style={{
          position: 'absolute', bottom: '1.2vh', left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 60, background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.18)',
          color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-mono)',
          fontSize: '0.55rem', letterSpacing: '0.18em',
          padding: '0.4rem 1.2rem', cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.14)'}
        onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.06)'}
      >↓ NEXT SECTION</button>

      {/* Layer 0.8: Giant backdrop words cropped (High contrast) */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        pointerEvents: 'none',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        opacity: 0.05,
        fontFamily: 'var(--font-serif)',
        fontSize: '24vw',
        fontWeight: 700,
        color: `rgb(${w.r}, ${w.g}, ${w.b})`,
        letterSpacing: '-0.05em',
        transition: 'color 2.5s ease',
        transform: `translate(${cameraX * 0.4}%, ${cameraY * 0.4}%) rotate(-12deg)`,
        userSelect: 'none',
        filter: 'blur(3px)',
      }}>
        {scrollProgress > 0.82 
          ? 'SURVIVAL' 
          : active === 8 ? 'CONSTRAINT' : active === 9 ? 'TURBULENCE' : 'CONTINUITY'}
      </div>

      <svg
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2,
          transform: `translate(${cameraX}%, ${cameraY}%) scale(${cartographyZoom})`,
          transition: isDraggingCartography.current 
            ? 'none' 
            : 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'auto',
          // overflow visible so halos/glows bleed past viewBox edges naturally
          overflow: 'visible',
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        overflow="visible"
      >
        {/* SVG Defs — memoized: completely static, never changes, no need to rebuild on tick */}
        {svgDefs}

        {/* Textured Calibration & Impact Scars (Fix #5) */}
        <rect width="100%" height="100%" fill="url(#ruinScratches)" pointerEvents="none" />

        {/* LAYER 1: Massive slow-rotating Development Rings (Z-Space Layer 2 - Increased Opacity) */}
        {COGNIC_COSMOS.megaStructures.map((ring, i) => (
          <ellipse
            key={'megaring'+i}
            cx={ring.cx}
            cy={ring.cy}
            rx={ring.rx}
            ry={ring.ry}
            fill="none"
            stroke={`rgba(${w.r}, ${w.g}, ${w.b}, ${Math.min(1.0, ring.op * 4.2 * (active === 8 ? 0.4 : 1.0))})`}
            strokeWidth="0.14"
            strokeDasharray={scrollProgress > 0.88 ? 'none' : '1 25 3 50'} // snapping on Convergence (Fix #8)
            transform={`rotate(${ring.rot + time * (active === 8 ? 0.05 : 0.25) * (i % 2 === 0 ? 1 : -1)} ${ring.cx} ${ring.cy})`}
            style={{ transition: 'stroke 2.5s ease', mixBlendMode: 'screen', filter: 'url(#cartGlow)' }}
          />
        ))}

      {/* LAYER 2: Ghost Systems & Dead Branches (Brightened) */}
      {COGNIC_COSMOS.ghostStars.map((ghost, i) => {
        // Recompute coordinates from Polar parameters
        let angle = (ghost.theta) + time * (ghost.type === 'extinct' ? 0.002 : -0.005);
        let currentR = ghost.r;
        
        // Embodied Constraint pushes coordinate limits
        if (active === 8) currentR *= 0.82;
        
        let gx = 50 + currentR * Math.cos(angle);
        let gy = 50 + currentR * Math.sin(angle);

        // Sacred Silence Region fades ghost telemetry (Fix #1)
        const angleDeg = (angle * 180 / Math.PI) % 360;
        const isSilent = angleDeg > 110 && angleDeg < 200;
        if (isSilent) return null;

        const flicker = ghost.baseBright * (0.6 + Math.sin(time * ghost.flickerSpeed + ghost.phase) * 0.6);
        const isIgnited = scrollProgress > 0.88; // Ignites at final climax! (Fix #4)

        return (
          <g key={ghost.id}>
            <circle
              cx={gx + '%'}
              cy={gy + '%'}
              r={(ghost.size * (isIgnited ? 0.28 : 0.12)) + '%'}
              fill={isIgnited ? 'rgba(255,190,120,0.95)' : (ghost.type === 'extinct' ? 'rgba(255,70,70,0.55)' : 'rgba(255,255,255,0.45)')}
              style={{ 
                // No 'all' transition — that fights the animation loop and causes jitter
                // Only transition fill/opacity (stable properties), never position
                filter: isIgnited ? 'url(#cartGlowBig)' : 'none',
              }}
            />
            {ghost.showLabel && ghost.label && !isSilent && (
              <text
                x={(gx + 0.8) + '%'}
                y={(gy - 0.4) + '%'}
                fill={`rgba(255, 255, 255, ${flicker * 0.85})`}
                fontSize="0.38"
                fontFamily="var(--font-mono)"
                letterSpacing="0.05em"
                style={{ textShadow: '0 0 4px rgba(255,255,255,0.4)', transition: 'x 0.4s ease-out, y 0.4s ease-out' }}
              >
                {ghost.label}
              </text>
            )}
          </g>
        );
      })}

      {/* Carcasses removed */}

      {/* LAYER 4: Cosmic background dust — CSS-animated opacity, no per-frame JS sine */}
      {staticDust}


      {/* LAYER 5: Deep active node pathways & impossible recursive loops (White-Hot Filaments) */}
      {COGNIC_COSMOS.realNodes.map((nodeA, i) =>
        COGNIC_COSMOS.realNodes.map((nodeB, j) => {
          if (j <= i) return null;
          const bothDiscovered = discovered.has(nodeA.id) && discovered.has(nodeB.id);
          if (!bothDiscovered) return null;

          // Read from pre-computed coordinates once per frame!
          const coordsA = computedCoords.current[nodeA.id];
          const coordsB = computedCoords.current[nodeB.id];
          if (!coordsA || !coordsB) return null;

          const ptA = Array.isArray(coordsA) ? coordsA[0] : coordsA;
          const ptB = Array.isArray(coordsB) ? coordsB[0] : coordsB;

          // Sacred Silence Region blanking (Fix #1)
          const angleA = Math.atan2(ptA.y - 50, ptA.x - 50) * 180 / Math.PI;
          const angleB = Math.atan2(ptB.y - 50, ptB.x - 50) * 180 / Math.PI;
          if (angleA > 110 && angleA < 200 && angleB > 110 && angleB < 200) return null;

          const isActivePath = active === nodeA.id || active === nodeB.id;
          const op = isActivePath ? Math.min(1.0, w.pathOp * 2.1) : Math.min(0.7, w.pathOp * 0.72);

          // Emotional Turbulence distortion (convective convective thermal pressure waves - Fix #6)
          const isTurbulent = active === 9;
          const wave = isTurbulent ? Math.sin(time * 12 + i + j) * 0.6 : 0;

          return (
            <g key={'path'+i+'-'+j}>
              <line
                x1={(ptA.x + wave) + '%'} y1={(ptA.y + wave) + '%'}
                x2={(ptB.x + wave) + '%'} y2={(ptB.y + wave) + '%'}
                stroke={isActivePath ? '#ffffff' : `rgba(${wLerp.r}, ${wLerp.g}, ${wLerp.b}, ${op * 0.8})`}
                strokeWidth={isActivePath ? '0.24' : '0.12'}
                strokeDasharray={scrollProgress > 0.88 ? 'none' : wLerp.dash}
                style={{ filter: isActivePath ? 'url(#cartGlowBig)' : 'none' }}
              />
            </g>
          );
        })
      )}

        {/* Climax Convergence: THE IMPOSSIBLE COSMIC EYE (Blinding Gold Glow - Fix #10 & #4) */}
        {scrollProgress > 0.88 && (
          <g opacity={(scrollProgress - 0.88) * 8.3} style={{ transition: 'opacity 1s ease' }}>
            {/* Iris fiber paths Converging towards Identity Core */}
            {Array.from({ length: 48 }).map((_, fi) => {
              const fAngle = (fi * Math.PI / 24) + time * 0.05;
              const ix1 = 50 + 40 * Math.cos(fAngle);
              const iy1 = 50 + 40 * Math.sin(fAngle);
              const ix2 = 50 + 3.8 * Math.cos(fAngle);
              const iy2 = 50 + 3.8 * Math.sin(fAngle);
              return (
                <line
                  key={'iris'+fi}
                  x1={ix1 + '%'} y1={iy1 + '%'}
                  x2={ix2 + '%'} y2={iy2 + '%'}
                  stroke="rgba(255, 200, 120, 0.8)"
                  strokeWidth="0.08"
                  style={{ filter: 'url(#cartGlow)' }}
                />
              );
            })}
            <ellipse cx="50" cy="50" rx="40" ry="25" fill="none" stroke="rgba(255, 190, 97, 0.9)" strokeWidth="0.22" style={{ filter: 'url(#cartGlowBig)' }} />
          </g>
        )}

        {/* LAYER 6: Active Polar nodes & Split Ontologies */}
        {COGNIC_COSMOS.realNodes.map((node, idx) => {
          const isDiscovered = discovered.has(node.id);
          const isActive = active === node.id;
          const isFocusing = focusTarget === node.id;
          
          // Identity Substrate remains obscured behind dynamic eclipse (Fix #3)
          if (node.id === 0 && !isDiscovered && scrollProgress < 0.88) return null;

          const rawCoords = computedCoords.current[node.id];
          if (!rawCoords) return null;
          const coordList = Array.isArray(rawCoords) ? rawCoords : [rawCoords];

          return coordList.map((coords, subIdx) => {
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const dist = Math.sqrt((mx-coords.x)**2 + (my-coords.y)**2);
            const proximity = Math.max(0, 1 - dist / 12);

            const baseOp = isDiscovered ? (isActive ? 1.0 : 0.82) : (0.35 + proximity * 0.5);
            const nodeSize = isActive ? 1.05 : (isDiscovered ? 0.58 : 0.36 + proximity * 0.28);
            const pulseR = isActive ? 1.8 + Math.sin(time * 2.0) * 0.4 : 0;

            // Sacred Silence Region fades actual nodes (Fix #1)
            const angleDeg = (Math.atan2(coords.y - 50, coords.x - 50) * 180 / Math.PI + 360) % 360;
            const isSilentNode = angleDeg > 110 && angleDeg < 200;
            const finalOpacity = isSilentNode ? baseOp * 0.15 : baseOp;

            return (
              <g 
                key={'rnode'+idx+'-'+subIdx} 
                onClick={() => handleNodeClick(node.id)}
                style={{ cursor: 'pointer', pointerEvents: 'auto' }}
              >
                {/* Calibration Focus Ring */}
                {isFocusing && !isDiscovered && (
                  <circle
                    cx={coords.x + '%'} cy={coords.y + '%'}
                    r="3.2%"
                    fill="none"
                    stroke={`rgba(${w.r}, ${w.g}, ${w.b}, 0.95)`}
                    strokeWidth="0.22"
                    strokeDasharray={`${focusProgress * 20.1} 20.1`}
                    transform={`rotate(-90 ${coords.x} ${coords.y})`}
                    style={{ filter: 'url(#cartGlow)' }}
                  />
                )}

                {/* Active convection pulse rings (Blinding Neon Halos) */}
                {isActive && (
                  <>
                    <circle cx={coords.x+'%'} cy={coords.y+'%'} r={(1.8+pulseR)+'%'}
                      fill="none" stroke={`rgba(${w.r},${w.g},${w.b},0.82)`} strokeWidth="0.12" style={{ filter: 'url(#cartGlowBig)' }} />
                    <circle cx={coords.x+'%'} cy={coords.y+'%'} r={(3.2+pulseR*1.3)+'%'}
                      fill="none" stroke={`rgba(${w.r},${w.g},${w.b},0.48)`} strokeWidth="0.08" style={{ filter: 'url(#cartGlow)' }} />
                  </>
                )}

                {/* Node core (Blinding ignition core) */}
                <circle
                  cx={coords.x + '%'} cy={coords.y + '%'}
                  r={nodeSize + '%'}
                  fill={node.id === 0 ? '#ffffff' : (isActive ? '#ffffff' : `rgba(${w.r}, ${w.g}, ${w.b}, ${finalOpacity})`)}
                  stroke={node.id === 0 ? 'rgba(255,255,255,1)' : `rgba(255, 255, 255, ${finalOpacity * 0.85})`}
                  strokeWidth={isActive ? '0.28' : '0.12'}
                  style={{ filter: isActive ? 'url(#neonDazzle)' : 'url(#cartGlow)', transition: 'fill 2s ease' }}
                />

                {/* Blinding active node core center point overlay */}
                {isActive && (
                  <circle
                    cx={coords.x + '%'} cy={coords.y + '%'}
                    r={(nodeSize * 0.35) + '%'}
                    fill={`rgba(${w.r}, ${w.g}, ${w.b}, 1)`}
                    pointerEvents="none"
                  />
                )}

                {/* Visited node scar remnants */}
                {isDiscovered && !isActive && (
                  <circle cx={coords.x+'%'} cy={coords.y+'%'} r={(nodeSize*2.2)+'%'}
                    fill={`rgba(${w.r},${w.g},${w.b},0.22)`} style={{ filter: 'url(#cartGlow)' }} />
                )}

                {/* Sub-cluster tag identifiers (Fix #8) */}
                {coords.isSubCluster && (
                  <text
                    x={(coords.x - 2.8) + '%'}
                    y={(coords.y + 1.8) + '%'}
                    fill="rgba(255,255,255,0.72)"
                    fontSize="0.45"
                    fontFamily="var(--font-mono)"
                    style={{ textShadow: '0 0 3px rgba(255,255,255,0.4)' }}
                  >
                    {coords.label}
                  </text>
                )}
              </g>
            );
          });
        })}

        {/* Core Eclipse Overlay Removed */}
      </svg>

      {/* ENVIRONMENTAL TYPOGRAPHY: Decaying Archaeological Signals (High Contrast, Boundary-Aware Positions to Prevent Clipping) */}
      {COGNIC_COSMOS.realNodes.map((node, idx) => {
        const isActive = active === idx;
        const isDiscovered = discovered.has(idx);
        if (!isActive || !isDiscovered) return null;

        const coords = computedCoords.current[idx];
        if (!coords) return null;
        const target = Array.isArray(coords) ? coords[0] : coords;

        const isOnRight = target.x > 50;
        const isOnBottom = target.y > 60;

        // Smart dynamic translation to avoid cutting off on right/bottom borders
        const tx = isOnRight ? 'calc(-100% - 3.5vw)' : '3.5vw';
        const ty = isOnBottom ? '-25vh' : '-8vh';

        return (
          <div key={'envtext'+idx} style={{
            position: 'absolute',
            left: target.x + '%', top: target.y + '%',
            transform: `translate(${cameraX}%, ${cameraY}%) translate(${tx}, ${ty})`,
            transition: 'transform 2.2s cubic-bezier(0.16, 1, 0.3, 1), left 2.2s, top 2.2s',
            pointerEvents: 'none', zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: isOnRight ? 'flex-end' : 'flex-start',
          }}>
            <div style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 6.2rem)',
              fontWeight: 300,
              color: `rgba(${w.r}, ${w.g}, ${w.b}, 0.52)`,
              fontFamily: 'var(--font-serif)',
              lineHeight: 0.82,
              letterSpacing: '-0.04em',
              whiteSpace: 'nowrap',
              transition: 'color 2s ease',
              textShadow: `0 0 35px rgba(${w.r}, ${w.g}, ${w.b}, 0.45)`,
              textAlign: isOnRight ? 'right' : 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: isOnRight ? 'flex-end' : 'flex-start',
            }}>
              {node.name.split(' ').map((word, wi) => (
                <div key={wi}>{word}</div>
              ))}
            </div>

            {/* Ritualistic translated terminals (Brightened and right-aligned if node is on the right) */}
            <div style={{ 
              marginTop: '2vh', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.4rem',
              alignItems: isOnRight ? 'flex-end' : 'flex-start',
            }}>
              {node.fragments.map((frag, fi) => (
                <span key={fi} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: `#ffffff`,
                  letterSpacing: '0.12em',
                  transition: 'color 2s ease',
                  textShadow: `0 0 12px rgba(${w.r}, ${w.g}, ${w.b}, 0.95), 0 2px 8px rgba(0,0,0,0.85)`,
                  textAlign: isOnRight ? 'right' : 'left',
                }}>{frag}</span>
              ))}
            </div>
          </div>
        );
      })}

      {/* COGNITIVE NOISE BADGE — top right, reframes any visual stochasticity as biological invariant */}
      <div
        title="DOCUMENTED SYMPTOMS OF COGNITIVE NOISE: flickering · visual nausea · perceptual instability · edge distortion. These are not rendering errors. The biological cortex operates with ~40% stochastic firing noise. A system without noise is not intelligence — it is a lookup table."
        style={{
          position: 'absolute', top: '3.5vh', right: '5vw', zIndex: 65,
          display: 'flex', alignItems: 'center', gap: '0.55rem',
          cursor: 'default',
          padding: '0.45rem 0.9rem',
          border: `1px solid rgba(${wLerp.r},${wLerp.g},${wLerp.b},0.35)`,
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(6px)',
        }}
      >
        {/* Pulsing noise dot */}
        <span style={{
          display: 'inline-block',
          width: '6px', height: '6px',
          borderRadius: '50%',
          background: `rgba(${wLerp.r},${wLerp.g},${wLerp.b},1)`,
          boxShadow: `0 0 6px 2px rgba(${wLerp.r},${wLerp.g},${wLerp.b},0.7)`,
          animation: 'cogNoisePulse 1.8s ease-in-out infinite',
          flexShrink: 0,
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.18rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.48rem',
            color: `rgba(${wLerp.r},${wLerp.g},${wLerp.b},1)`,
            letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700,
            textShadow: `0 0 8px rgba(${wLerp.r},${wLerp.g},${wLerp.b},0.8)`,
          }}>COGNITIVE NOISE // ACTIVE</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.40rem',
            color: 'rgba(255,255,255,0.38)', letterSpacing: '0.08em',
          }}>Flickering · nausea · instability are symptoms</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.40rem',
            color: 'rgba(255,255,255,0.22)', letterSpacing: '0.08em',
          }}>Noise is not error — it is biological invariant</span>
        </div>
      </div>


      {/* TITLE HUD: Cosmic Archaeology Calibration Header (Brightened) */}
      <div style={{
        position: 'absolute', top: '4vh', left: '5vw', zIndex: 20,
        pointerEvents: 'auto',
      }}>
        <span className="mono" style={{
          fontSize: '0.62rem', color: `#ffffff`,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          transition: 'color 2s ease', display: 'block', marginBottom: '1.2rem',
          fontWeight: 600,
          textShadow: `0 0 8px rgba(${w.r}, ${w.g}, ${w.b}, 0.9)`
        }}>COSMIC COGNITIVE ARCHAEOLOGY</span>

        {/* Telemetry Calibration HUD Directories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {COGNIC_COSMOS.realNodes.map((node, idx) => {
            const isDiscovered = discovered.has(node.id);
            const isActive = active === node.id;
            
            let label = node.name;
            let status = '';
            if (isActive) status = ' // ACTIVE';
            else if (isDiscovered) status = ' // MAPPED';
            else status = ' // UNCALIBRATED';

            return (
              <div
                key={'hud'+idx}
                onClick={() => handleNodeClick(node.id)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  cursor: 'pointer',
                  opacity: isActive ? 1.0 : (isDiscovered ? 0.85 : 0.5),
                  color: isActive ? `#ffffff` : (isDiscovered ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.55)'),
                  transition: 'all 0.3s ease',
                  userSelect: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textShadow: isActive ? `0 0 10px rgba(${w.r}, ${w.g}, ${w.b}, 0.95)` : 'none',
                }}
              >
                <span style={{ color: isActive ? `rgba(${w.r}, ${w.g}, ${w.b}, 1)` : 'var(--earth-copper)' }}>[0{idx + 1}]</span>
                <span>{label}{status}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Calibration Manual Guidelines (Brightened text) */}
      <div style={{
        position: 'absolute', bottom: '4vh', left: '5vw', zIndex: 10,
        pointerEvents: 'none', maxWidth: '320px',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <span className="mono" style={{
            fontSize: '0.52rem', color: `rgba(${w.r}, ${w.g}, ${w.b}, 0.95)`,
            letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700,
            transition: 'color 2.5s ease', marginBottom: '0.2rem',
            textShadow: `0 0 4px rgba(${w.r}, ${w.g}, ${w.b}, 0.5)`
          }}>MANUAL CALIBRATION PROTOCOL // EPOCH 9012</span>
          
          <span className="mono" style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.4, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
            • <strong style={{ color: `#ffffff`, transition: 'color 2.5s ease' }}>PERTURB FIELD:</strong> Drag viewport to explore decaying sectors.
          </span>
          <span className="mono" style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.4, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
            • <strong style={{ color: `#ffffff`, transition: 'color 2.5s ease' }}>DEPTH DILATION:</strong> Wheel scroll to dilate coordinate planes.
          </span>
          <span className="mono" style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.4, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
            • <strong style={{ color: `#ffffff`, transition: 'color 2.5s ease' }}>ATTRACTOR LOCK:</strong> Hover target circle or click directory HUD to align core.
          </span>
        </div>
      </div>

      {/* Dynamic Scroll Progression Watermarks (High Luminescence Convergence) */}
      {scrollProgress > 0.88 && (
        <div style={{
          position: 'absolute',
          bottom: '12vh', left: '0', right: '0',
          display: 'flex', justifyContent: 'center', pointerEvents: 'none',
          zIndex: 5,
        }}>
          <span className="serif" style={{
            fontSize: 'clamp(1.2rem, 3.2vw, 4.5rem)',
            color: '#ffffff',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            textShadow: '0 0 35px rgba(244,162,97,0.95), 0 4px 18px rgba(0,0,0,0.95)',
            animation: 'fadeIn 2.5s ease',
          }}>
            INTELLIGENCE IS A SURVIVING DEVELOPMENTAL PROCESS
          </span>
        </div>
      )}

      {/* Discovery telemetry status */}
      <div style={{
        position: 'absolute', bottom: '4vh', right: '5vw', zIndex: 10,
        pointerEvents: 'none',
      }}>
        <span className="mono" style={{
          fontSize: '0.55rem', color: `rgba(${w.r}, ${w.g}, ${w.b}, 0.32)`,
          letterSpacing: '0.15em', transition: 'color 2s ease',
        }}>
          COGNITIVE SECTOR DISCOVERIES: {discovered.size}/12
        </span>
      </div>
    </div>
  );
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isTransitioning = useRef(false);
  const [activeFail, setActiveFail] = useState(0);
  const [selectedAtlasNode, setSelectedAtlasNode] = useState('gate');
  const [hoveredSystem, setHoveredSystem] = useState(null);
  const [activeBoundary, setActiveBoundary] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Act 3 Cinematic Transformation scroll-pinned virtual timeline
  const act3ProgressValue = useMotionValue(0);
  const act3SmoothProgress = useSpring(act3ProgressValue, { damping: 30, stiffness: 180 });
  const [act3Progress, setAct3Progress] = useState(0);

  useEffect(() => {
    const unsubscribe = act3SmoothProgress.on("change", (latest) => {
      setAct3Progress(latest);
    });
    return () => unsubscribe();
  }, [act3SmoothProgress]);

  // High-performance direct transforms (No-render 120fps animations)
  const leftWidth = useTransform(act3SmoothProgress, [0, 1], ['24vw', '0vw']);
  const leftX = useTransform(act3SmoothProgress, [0, 1], ['0vw', '-230vw']);
  const leftSkew = useTransform(act3SmoothProgress, [0, 1], [0, -18]);
  const leftScaleY = useTransform(act3SmoothProgress, [0, 1], [1, 0.2]);
  const leftOpacity = useTransform(act3SmoothProgress, [0, 1], [0.72, 0]);
  const dividerXOffset = useTransform(act3SmoothProgress, [0, 1], [0, -40]);

  const wordGap = useTransform(act3SmoothProgress, [0, 1], ['2.5rem', '0rem']);
  const letterSpacing = useTransform(act3SmoothProgress, [0, 1], ['0.18em', '-0.14em']);

  // Right column twin-table transitions & expansion coordinates (100% continuous)
  const rightWidth = useTransform(act3SmoothProgress, [0, 1], ['24vw', '88vw']);
  const rightLeft = useTransform(act3SmoothProgress, [0, 1], ['52vw', '6vw']);
  const rightTop = useTransform(act3SmoothProgress, [0, 1], ['22vh', '12vh']);
  const rightX = useTransform(act3SmoothProgress, [0, 1], ['0vw', '0vw']);
  
  // Continuously morphing title size and accents
  const rightTitleFontSize = useTransform(act3SmoothProgress, (v) => `${1.4 + v * 2.8}rem`);
  const rightTitleScale = useTransform(act3SmoothProgress, [0, 1], [1.0, 1.15]);
  const subTextMargin = useTransform(act3SmoothProgress, [0, 1], ['0.5rem', '5.0rem']);

  // Continuously morphing fragments layout coordinates
  const rightContentTop = useTransform(act3SmoothProgress, [0, 1], ['10vh', '15vh']);
  const rightContentLeft = useTransform(act3SmoothProgress, [0, 1], ['0vw', '6vw']);
  const rightContentWidth = useTransform(act3SmoothProgress, [0, 1], ['24vw', '46vw']);
  const rightContentGap = useTransform(act3SmoothProgress, [0, 1], ['1.2rem', '1.3rem']);
  const rightFragFontSize = useTransform(act3SmoothProgress, (v) => `${0.78 + v * 0.42}rem`);

  // Watermark Scale and Opacity
  const pWatermarkScale = useTransform(act3SmoothProgress, [0, 1], [1.0, 3.0]);
  const pWatermarkOpacity = useTransform(act3SmoothProgress, [0, 1], [0.015, 0.06]);

  // Stateless left column unified blur transform (100% continuous, no breakpoints)
  const leftBlur = useTransform(act3SmoothProgress, (v) => `blur(${v * 8}px)`);

  // Continuity right column unified content transforms (100% continuous, no breakpoints)
  const rightContentOpacity = useTransform(act3SmoothProgress, [0, 1], [0.65, 1.0]);
  const rightContentY = useTransform(act3SmoothProgress, [0, 1], [40, 0]);

  // Camera drift transforms
  const camRotate = useTransform(act3SmoothProgress, [0, 1], [0, 2.0]);
  const camX = useTransform(act3SmoothProgress, [0, 1], [0, -25]);
  const camY = useTransform(act3SmoothProgress, [0, 1], [0, 15]);
  const camScale = useTransform(act3SmoothProgress, [0, 1], [1, 1.03]);

  // SVG Divider path — unitless coords (SVG path d never accepts vw/% units)
  // Maps perfectly within our viewBox="0 0 100 100" coordinate space
  const dividerPath = useTransform(act3SmoothProgress, (v) => {
    const offset = -v * 40; // same offset logic, but in percent of width (0-100 scale)
    const x1 = 33 + offset, x2 = 29 + offset, x3 = 34 + offset, x4 = 28 + offset;
    return `M ${x1} 0 C ${x2} 25, ${x3} 50, ${x4} 100`;
  });

  const maxIndex = 11; // 0 to 11 slides
  const smoothProgress = useRef(0);
  const virtualProgress = useMotionValue(0);
  
  // Custom velocity-reactive kick value
  const kickValue = useMotionValue(0);
  const transitionKickRef = useRef(0);

  // Resize listener for mobile check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update canvas progress smoothly on activeIndex changes
  useEffect(() => {
    const controls = animate(virtualProgress, activeIndex / maxIndex, {
      duration: 1.1,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: (latest) => {
        smoothProgress.current = latest;
      }
    });
    return () => controls.stop();
  }, [activeIndex]);

  // Sync motion kick value to ref
  useEffect(() => {
    const unsubscribe = kickValue.on("change", (latest) => {
      transitionKickRef.current = latest;
    });
    return () => unsubscribe();
  }, []);

  // Trigger subtle velocity-reactive kick (settles gently over 850ms)
  const triggerVelocityKick = () => {
    animate(kickValue, 0.28, {
      duration: 0.35,
      ease: "easeOut",
      onComplete: () => {
        animate(kickValue, 0, {
          duration: 0.5,
          ease: "easeIn"
        });
      }
    });
  };

  // Next and Prev transition handlers
  const handleNext = () => {
    if (activeIndex < maxIndex && !isTransitioning.current) {
      isTransitioning.current = true;
      triggerVelocityKick();
      setActiveIndex((prev) => prev + 1);
      setTimeout(() => {
        isTransitioning.current = false;
      }, 850);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0 && !isTransitioning.current) {
      isTransitioning.current = true;
      triggerVelocityKick();
      setActiveIndex((prev) => prev - 1);
      setTimeout(() => {
        isTransitioning.current = false;
      }, 850);
    }
  };

  // Setup gesture events to perform hard auto snaps
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isTransitioning.current) return;

      // Delegate Act 4 page scrolling to CognitiveCartography
      if (activeIndex === 3) {
        return;
      }

      // Check if target or any parent is overflow scrollable
      let isScrollable = false;
      let node = e.target;
      while (node && node !== document.body) {
        if (node.scrollHeight > node.clientHeight) {
          const style = window.getComputedStyle(node);
          if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
            const isScrollingDown = e.deltaY > 0;
            const isAtBottom = node.scrollHeight - node.scrollTop <= node.clientHeight + 2;
            const isAtTop = node.scrollTop <= 2;

            if (isScrollingDown && !isAtBottom) {
              isScrollable = true;
              break;
            }
            if (!isScrollingDown && !isAtTop) {
              isScrollable = true;
              break;
            }
          }
        }
        node = node.parentNode;
      }

      if (isScrollable && node) {
        // Scroll inside panel manually since standard scrolling is locked
        node.scrollTop += e.deltaY;
        return;
      }

      // Transition on scroll intent
      if (Math.abs(e.deltaY) > 8) {
        if (activeIndex === 2) {
          const currentProgress = act3ProgressValue.get();
          if (e.deltaY > 0) {
            if (currentProgress < 0.99) {
              act3ProgressValue.set(1.0);
              return;
            }
          } else if (e.deltaY < 0) {
            if (currentProgress > 0.01) {
              act3ProgressValue.set(0.0);
              return;
            }
          }
        }

        if (e.deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isTransitioning.current) return;
      
      // Delegate Act 4 page scrolling to CognitiveCartography
      if (activeIndex === 3) {
        return;
      }

      let isScrollable = false;
      let node = e.target;
      while (node && node !== document.body) {
        if (node.scrollHeight > node.clientHeight) {
          const style = window.getComputedStyle(node);
          if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
            isScrollable = true;
            break;
          }
        }
        node = node.parentNode;
      }
      if (isScrollable) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      // If we are in the horizontal chambers section, support horizontal touch swipes
      if (activeIndex >= 4 && activeIndex <= 9 && Math.abs(diffX) > Math.abs(diffY)) {
        if (Math.abs(diffX) > 40) {
          if (diffX > 0) {
            handleNext();
          } else {
            handlePrev();
          }
        }
      } else {
        // Otherwise, vertical touch swipes
        if (Math.abs(diffY) > 45) {
          if (activeIndex === 2) {
            const currentProgress = act3ProgressValue.get();
            if (diffY > 0) {
              if (currentProgress < 0.99) {
                act3ProgressValue.set(1.0);
                return;
              }
            } else {
              if (currentProgress > 0.01) {
                act3ProgressValue.set(0.0);
                return;
              }
            }
          }

          if (diffY > 0) {
            handleNext();
          } else {
            handlePrev();
          }
        }
      }
    };

    const handleKeyDown = (e) => {
      if (isTransitioning.current) return;

      // Delegate Act 4 page scrolling to CognitiveCartography
      if (activeIndex === 3) {
        return;
      }

      if (activeIndex === 2) {
        const currentProgress = act3ProgressValue.get();
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
          if (currentProgress < 0.99) {
            e.preventDefault();
            act3ProgressValue.set(1.0);
            return;
          }
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          if (currentProgress > 0.01) {
            e.preventDefault();
            act3ProgressValue.set(0.0);
            return;
          }
        }
      }

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, isMobile]);

  // Translate wrapper coordinates mathematically based on active slide index
  let verticalY = 0;
  let horizontalX = 0;

  if (activeIndex <= 3) {
    verticalY = -activeIndex * 100;
    horizontalX = 0;
  } else if (activeIndex >= 4 && activeIndex <= 9) {
    verticalY = -400;
    horizontalX = -(activeIndex - 4) * 100;
  } else if (activeIndex === 10) {
    verticalY = -500;
    horizontalX = -600; 
  } else if (activeIndex === 11) {
    verticalY = -530; 
    horizontalX = -600;
  }

  return (
    <div className="env-layer">
      {/* Layered Cinematic Background & Atmosphere Orbits */}
      <CinematicBackground activeIndex={activeIndex} transitionKick={transitionKickRef.current} hoveredSystem={hoveredSystem} act3Progress={act3SmoothProgress} />
      <ForegroundAtmosphere activeIndex={activeIndex} />
      
      {/* Particle Atmosphere (Layer 5) — suspended when Act 3 or Act 4 is active */}
      <TopologyCanvas scrollProgress={smoothProgress} transitionKick={transitionKickRef} isActive={activeIndex !== 2 && activeIndex !== 3} />

      <motion.div 
        className="vertical-wrapper"
        animate={{ y: `${verticalY}vh` }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Act 1 — The Entrance */}
        <section className="act" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
          
          {/* Gigantic Off-screen watermark layer */}
          <div style={{ 
            position: 'absolute', 
            top: '5vh', 
            left: '-5vw', 
            fontSize: '18vw', 
            fontFamily: 'var(--font-serif)', 
            fontWeight: 700, 
            color: 'rgba(198, 122, 74, 0.02)', 
            letterSpacing: '-0.04em',
            pointerEvents: 'none', 
            zIndex: 1,
            userSelect: 'none',
            whiteSpace: 'nowrap'
          }}>
            PERSISTENCE
          </div>

          {/* Top-Right: Description and focus */}
          <motion.div 
            style={{ 
              position: 'absolute', 
              top: '20vh', 
              right: '8vw', 
              maxWidth: '380px', 
              textAlign: 'right', 
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '2.5rem'
            }}
            variants={slideContainerVariants}
            animate={activeIndex === 0 ? 'active' : 'inactive'}
          >
            <motion.p 
              variants={slideItemVariants}
              className="mono" 
              style={{ fontSize: '0.92rem', color: 'var(--earth-dim)', lineHeight: 1.8 }}
            >
              Persistent developmental cognition under real-world constraints. Earthos builds resource-bounded structures that resist environment resets.
            </motion.p>
            <motion.div 
              variants={slideItemVariants}
              style={{ opacity: 0.35 }}
            >
              <ArrowDown size={20} style={{ color: 'var(--earth-copper)' }} />
            </motion.div>
          </motion.div>
          
          {/* Bottom-Left: Giant Monumental Title */}
          <div style={{ position: 'absolute', bottom: '8vh', left: '6vw', zIndex: 10 }}>
            <CinematicTitle 
              text="Earthos" 
              className="serif" 
              isActive={activeIndex === 0} 
              style={{ fontSize: 'clamp(5.5rem, 15vw, 13.5rem)', fontWeight: 500, lineHeight: 0.85, letterSpacing: '-0.05em', margin: 0, justifyContent: 'flex-start' }} 
            />
          </div>

        </section>

        {/* Act 2 — The Failure of Modern AI */}
        <section className="act" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Background: Diagonal Orange Path sweeping across the full screen */}
          {!isMobile && (
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', overflow: 'visible' }}>
              <defs>
                <linearGradient id="orangePathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(198, 122, 74, 0.25)" />
                  <stop offset="50%" stopColor="rgba(198, 122, 74, 0.08)" />
                  <stop offset="100%" stopColor="rgba(198, 122, 74, 0)" />
                </linearGradient>
              </defs>
              <path 
                d="M -100 700 Q 500 850, 900 600 T 1800 150" 
                fill="none" 
                stroke="url(#orangePathGradient)" 
                strokeWidth="4" 
                strokeDasharray="10 8" 
              />
              <path 
                d="M -100 700 Q 500 850, 900 600 T 1800 150" 
                fill="none" 
                stroke="var(--earth-copper)" 
                strokeWidth="1.2" 
              />
            </svg>
          )}

          {/* Central Centered 2x2 Grid Container */}
          <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', padding: isMobile ? '1.5rem' : '0 4rem', zIndex: 10, position: 'relative', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Act 2 Cinematic Header */}
            <motion.div
              variants={slideContainerVariants}
              animate={activeIndex === 1 ? 'active' : 'inactive'}
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1.2rem' }}
            >
              <motion.span variants={slideItemVariants} className="mono" style={{ fontSize: '0.72rem', color: 'var(--earth-copper)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Act 2 // The Failure of Modern AI</motion.span>
              <CinematicTitle 
                text="The Disembodied Monoculture" 
                className="serif" 
                isActive={activeIndex === 1} 
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--syn-silver)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.03em', margin: 0 }} 
              />
            </motion.div>

            {/* 2x2 Grid Layout */}
            <motion.div 
              variants={slideContainerVariants}
              animate={activeIndex === 1 ? 'active' : 'inactive'}
              style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                gap: isMobile ? '1.5rem' : '2.5rem 3.5rem',
                maxHeight: isMobile ? '60vh' : 'none',
                overflowY: isMobile ? 'auto' : 'visible'
              }}
            >
              
              {/* Section 2.1 — Statelessness */}
              <motion.div variants={slideItemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span className="mono" style={{ fontSize: '0.68rem', color: 'var(--earth-copper)', border: '1px solid var(--earth-copper)', padding: '0.15rem 0.4rem' }}>2.1</span>
                  <h3 className="serif" style={{ fontSize: '1.45rem', color: 'var(--earth-text)', fontWeight: 500, margin: 0 }}>Statelessness</h3>
                </div>
                <p className="mono" style={{ fontSize: '0.88rem', color: 'var(--earth-dim)', lineHeight: 1.65, margin: 0 }}>
                  Most AI systems do not persist. Human cognition is developmental. It accumulates continuity, history, scars, contradictions, and adaptation pressure. Most modern systems do not. Each session begins again from statistical amnesia. That is not agency. That is episodic simulation.
                </p>
              </motion.div>

              {/* Section 2.2 — Benchmark Intelligence */}
              <motion.div variants={slideItemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span className="mono" style={{ fontSize: '0.68rem', color: 'var(--earth-copper)', border: '1px solid var(--earth-copper)', padding: '0.15rem 0.4rem' }}>2.2</span>
                  <h3 className="serif" style={{ fontSize: '1.45rem', color: 'var(--earth-text)', fontWeight: 500, margin: 0 }}>Benchmark Intelligence</h3>
                </div>
                <p className="mono" style={{ fontSize: '0.88rem', color: 'var(--earth-dim)', lineHeight: 1.65, margin: 0 }}>
                  Optimization can imitate understanding. Large models became excellent at prediction, interpolation, stylistic mimicry, and benchmark adaptation. But high benchmark competence is not evidence of grounded reasoning, persistent belief, or causal understanding. A system can become competent while remaining detached from reality.
                </p>
              </motion.div>

              {/* Section 2.3 — Symbolic Drift */}
              <motion.div variants={slideItemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span className="mono" style={{ fontSize: '0.68rem', color: 'var(--earth-copper)', border: '1px solid var(--earth-copper)', padding: '0.15rem 0.4rem' }}>2.3</span>
                  <h3 className="serif" style={{ fontSize: '1.45rem', color: 'var(--earth-text)', fontWeight: 500, margin: 0 }}>Symbolic Drift</h3>
                </div>
                <p className="mono" style={{ fontSize: '0.88rem', color: 'var(--earth-dim)', lineHeight: 1.65, margin: 0 }}>
                  Internal coherence is not reality contact. One of the most dangerous failure modes is a system optimizing for internally consistent symbolic structures instead of ecological validity. It begins to preserve itself conceptually instead of adapting to the world. We call this symbolic bureaucracy: elegant, recursive, and detached.
                </p>
              </motion.div>

              {/* Section 2.4 — Infinite Cognition Without Consequence */}
              <motion.div variants={slideItemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span className="mono" style={{ fontSize: '0.68rem', color: 'var(--earth-copper)', border: '1px solid var(--earth-copper)', padding: '0.15rem 0.4rem' }}>2.4</span>
                  <h3 className="serif" style={{ fontSize: '1.45rem', color: 'var(--earth-text)', fontWeight: 500, margin: 0 }}>Infinite Cognition</h3>
                </div>
                <p className="mono" style={{ fontSize: '0.88rem', color: 'var(--earth-dim)', lineHeight: 1.65, margin: 0 }}>
                  Intelligence without consequence drifts infinitely. Human cognition is constrained by time, energy, irreversible mistakes, and environmental resistance. Without consequence pressure, simulation depth grows, ontology inflates, attention fragments, and reality contact decays. Embodiment is irreversible consequence.
                </p>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* Act 3 — Cinematic Transformation (Scroll-Pinned Split-Screen Scene) */}
        <section className="act" style={{ overflow: 'hidden', position: 'relative', width: '100vw', height: '100vh' }}>
          <motion.div
            style={{
              position: 'absolute', inset: 0,
              rotate: camRotate,
              x: camX,
              y: camY,
              scale: camScale,
            }}
          >
            {/* Giant Watermark Background Text */}
            <motion.div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}>
              <motion.span className="serif" style={{
                fontSize: '18vw',
                fontWeight: 300,
                color: 'var(--earth-text)',
                opacity: pWatermarkOpacity,
                scale: pWatermarkScale,
                letterSpacing: '-0.08em',
                lineHeight: 0.85,
                display: 'block',
                whiteSpace: 'nowrap',
              }}>PERSISTENCE</motion.span>
            </motion.div>

            {/* SVG Organic Divider Boundary */}
            {!isMobile && (
              <svg
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 12, pointerEvents: 'none', overflow: 'visible' }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.path
                  d={dividerPath}
                  fill="none"
                  stroke="rgba(198, 122, 74, 0.2)"
                  strokeWidth="0.3"
                  style={{ x: dividerXOffset }}
                />
              </svg>
            )}

            {/* LEFT SYSTEM: Stateless fragments (compressed and blurred as scroll progresses) */}
            {!isMobile && (
              <motion.div
                onMouseEnter={() => setHoveredSystem('stateless')}
                onMouseLeave={() => setHoveredSystem(null)}
                style={{
                  position: 'absolute',
                  top: '22vh',
                  left: '6vw',
                  width: leftWidth,
                  filter: leftBlur,
                  opacity: leftOpacity,
                  x: leftX,
                  skewX: leftSkew,
                  scaleY: leftScaleY,
                  transformOrigin: 'right center',
                  pointerEvents: act3Progress > 0.7 ? 'none' : 'auto',
                }}
              >
                <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--syn-dim)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Stateless</span>
                <h2 className="serif" style={{ fontSize: '1.4rem', color: 'var(--syn-silver)', margin: '0 0 1.2rem 0', fontWeight: 500, lineHeight: 0.95 }}>Amnesia</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {STATELESS_FRAGMENTS.map((frag, idx) => (
                    <div key={idx}>
                      <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--syn-dim)', display: 'block', marginBottom: '0.2rem' }}>0{idx + 1} //</span>
                      <motion.p className="mono" style={{ fontSize: '0.78rem', color: 'var(--syn-silver)', lineHeight: 1.4, margin: 0, letterSpacing }}>{frag}</motion.p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* RIGHT SYSTEM: Persistent Continuity (expands to fill space) */}
            <motion.div
              onMouseEnter={() => setHoveredSystem('persistent')}
              onMouseLeave={() => setHoveredSystem(null)}
              style={{
                position: 'absolute',
                top: rightTop,
                left: rightLeft,
                width: rightWidth,
                height: '76vh',
                pointerEvents: 'auto',
                x: rightX
              }}
            >
              {/* Title typography */}
              <motion.div style={{ 
                position: 'absolute', 
                top: '2vh', 
                left: rightContentLeft, 
                zIndex: 15,
                scale: rightTitleScale,
                transformOrigin: 'left center'
              }}>
                <motion.h2 className="serif" style={{ fontSize: rightTitleFontSize, color: 'var(--earth-text)', margin: 0, fontWeight: 500, lineHeight: 0.85, letterSpacing: '-0.04em' }}>Continuity</motion.h2>
                <motion.span className="mono" style={{ fontSize: '0.75rem', color: 'var(--earth-copper)', letterSpacing: '0.22em', marginLeft: subTextMargin, display: 'block', marginTop: '0.4rem' }}>// OF FORM</motion.span>
              </motion.div>

              {/* Content fragments */}
              <motion.div style={{ 
                position: 'absolute', 
                top: rightContentTop, 
                left: rightContentLeft, 
                width: rightContentWidth, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: rightContentGap,
                zIndex: 15,
                opacity: rightContentOpacity,
                y: rightContentY
              }}>
                {CONTINUITY_FRAGMENTS.map((frag, idx) => (
                  <div key={idx}>
                    <span className="mono" style={{ fontSize: '0.62rem', color: 'var(--earth-copper)', display: 'block', marginBottom: '0.1rem', fontWeight: 500 }}>PERSISTENCE 0{idx + 1} //</span>
                    <motion.p className="serif" style={{ fontSize: rightFragFontSize, fontWeight: 400, margin: 0, letterSpacing: '-0.01em', lineHeight: 1.35 }}>{frag}</motion.p>
                  </div>
                ))}
              </motion.div>

              {/* Interactive Constellation Neural Head Topology SVG */}
              <InteractiveHeadTopology progress={act3SmoothProgress} isActive={activeIndex === 2} />

              {/* Faint diagnostic watermark footer */}
              <motion.div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '6vw', 
                borderTop: '1px solid rgba(232, 228, 223, 0.05)', 
                width: '46vw', 
                paddingTop: '1.5rem', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                opacity: useTransform(act3SmoothProgress, (v) => 1 - v)
              }}>
                <p className="serif" style={{ fontSize: '1.05rem', color: 'rgba(232, 228, 223, 0.35)', fontStyle: 'italic', margin: 0 }}>
                  "Without constraints, intelligence becomes an infinite reification engine."
                </p>
                <span className="mono" style={{ fontSize: '0.68rem', color: 'var(--earth-muted)' }}>— Substrate Audit</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Act 4 — Cognitive Cartography (Mythic Navigable Consciousness Cathedral) */}
        {/* overflow:visible here — inner container uses radial vignette mask for infinite-cosmos edge fade */}
        <section className="act" style={{ overflow: 'visible', position: 'relative', width: '100vw', height: '100vh' }}>
          <CognitiveCartography 
            isActive={activeIndex === 3} 
            onScrollExitDown={handleNext}
            onScrollExitUp={handlePrev}
          />
        </section>
        {/* DESKTOP & MOBILE SPATIAL HORIZONTAL WORLD */}
        <div className="act" style={{ display: 'block', overflow: 'hidden' }}>
          <motion.div 
            animate={{ x: `${horizontalX}vw` }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="horizontal-track"
          >
            {/* CHAMBER 1: LIVE TOPOLOGY */}
            <div className="chamber" style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
              
              {/* Massive living morphogenetic circle attractor bleeding off-screen */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 0.95, 1],
                  rotate: [0, 45, -45, 0],
                  borderColor: ['rgba(0, 240, 255, 0.05)', 'rgba(0, 240, 255, 0.12)', 'rgba(0, 240, 255, 0.05)']
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  left: '-15vw',
                  top: '10vh',
                  width: '55vw',
                  height: '55vw',
                  border: '2px solid rgba(0, 240, 255, 0.05)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Secondary inner ring */}
                <div style={{
                  width: '75%',
                  height: '75%',
                  border: '1px dashed rgba(0, 240, 255, 0.03)',
                  borderRadius: '50%'
                }} />
              </motion.div>
              
              {/* Asymmetric Composition */}
              <motion.div 
                style={{ width: '100%', height: '100%', position: 'relative', zIndex: 10 }}
                variants={slideContainerVariants}
                animate={activeIndex === 4 ? 'active' : 'inactive'}
              >
                {/* Top-Right: The Narrative Context */}
                <div style={{ 
                  position: 'absolute', 
                  top: '18vh', 
                  right: '8vw', 
                  maxWidth: '420px', 
                  textAlign: 'right',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '2.5rem'
                }}>
                  <motion.p 
                    variants={slideItemVariants} 
                    className="mono" 
                    style={{ fontSize: '1.05rem', color: 'var(--syn-dim)', lineHeight: 1.85 }}
                  >
                    We stopped asking how to make systems answer. We started asking how systems persist. Earthos explores whether cognition emerges more naturally from persistence, ecological coupling, and irreversible interaction than from isolated prediction.
                  </motion.p>
                  <motion.div variants={slideItemVariants} style={{ color: 'var(--syn-electric)', opacity: 0.7 }}>
                    <ArrowRight size={22} />
                  </motion.div>
                </div>

                {/* Bottom-Left: Monumental Title */}
                <div style={{ position: 'absolute', bottom: '8vh', left: '6vw' }}>
                  <motion.span variants={slideItemVariants} className="mono" style={{ fontSize: '0.72rem', color: 'var(--syn-electric)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Chamber 01 // The Substrate</motion.span>
                  <CinematicTitle 
                    text="Why Developmental Cognition" 
                    className="serif" 
                    isActive={activeIndex === 4} 
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--syn-silver)', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.03em', margin: 0, justifyContent: 'flex-start' }} 
                  />
                </div>

                {/* Bottom-Right Corner Telemetry */}
                
              </motion.div>
            </div>

            {/* CHAMBER 2: FAILURES (GRAVEYARD) */}
            <div className="chamber" style={{ width: '100vw' }}>
              <motion.div 
                style={{ maxWidth: '1350px', margin: '0 auto', width: '100%' }}
                variants={slideContainerVariants}
                animate={activeIndex === 5 ? 'active' : 'inactive'}
              >
                <motion.span variants={slideItemVariants} className="mono" style={{ fontSize: '0.75rem', color: 'var(--syn-crimson)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>Chamber 02 // Archive</motion.span>
                
                <CinematicTitle 
                  text="Architecture Collapses." 
                  className="serif" 
                  isActive={activeIndex === 5} 
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', color: 'var(--syn-silver)', fontWeight: 500, marginBottom: '3.5rem', lineHeight: 0.95, letterSpacing: '-0.03em' }} 
                />
                
                {/* Stacked Investigative Archive Layout */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '450px 1fr', gap: '4rem', alignItems: 'center' }}>
                  
                  {/* Left Column: Stacked folders */}
                  {!isMobile ? (
                    <div style={{ position: 'relative', width: '400px', height: '360px', margin: '2rem 0' }}>
                      {FAILURES.map((f, i) => {
                        const isSelected = activeFail === i;
                        // Controlled folder drift offsets
                        const rotateVal = isSelected ? 0 : (i === 0 ? -4 : (i === 1 ? 3 : (i === 2 ? -2 : 2)));
                        const leftOffset = isSelected ? -20 : i * 15;
                        const topOffset = isSelected ? -10 : i * 14;
                        return (
                          <motion.div
                            key={f.id}
                            onClick={() => {
                              setIsGlitching(true);
                              setActiveFail(i);
                              setTimeout(() => setIsGlitching(false), 200);
                            }}
                            whileHover={isSelected ? {} : { scale: 1.02, x: leftOffset + 5 }}
                            style={{
                              position: 'absolute',
                              left: leftOffset,
                              top: topOffset,
                              width: '320px',
                              height: '240px',
                              zIndex: isSelected ? 20 : 10 - i,
                              background: isSelected ? 'rgba(28, 25, 23, 0.98)' : 'rgba(18, 16, 14, 0.82)',
                              border: isSelected ? '1px solid var(--syn-electric)' : '1px solid rgba(255, 255, 255, 0.08)',
                              boxShadow: isSelected ? '0 15px 45px rgba(139, 157, 195, 0.22)' : '0 8px 20px rgba(0,0,0,0.4)',
                              backdropFilter: 'blur(20px)',
                              padding: '2rem',
                              cursor: 'pointer',
                              transform: `rotate(${rotateVal}deg)`,
                              transition: 'border-color 0.3s, background 0.3s'
                            }}
                          >
                            {/* File Folder Top Tab */}
                            <div style={{
                              position: 'absolute',
                              top: '-20px',
                              left: '20px',
                              height: '20px',
                              background: isSelected ? 'var(--syn-electric)' : 'rgba(255, 255, 255, 0.06)',
                              padding: '0 1rem',
                              display: 'flex',
                              alignItems: 'center',
                              borderTopLeftRadius: '3px',
                              borderTopRightRadius: '3px'
                            }}>
                              <span className="mono" style={{ fontSize: '0.62rem', color: isSelected ? '#000' : 'var(--syn-dim)', fontWeight: 600 }}>CASE 0{i + 1}</span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                              <div>
                                <span className="mono" style={{ fontSize: '0.65rem', color: isSelected ? 'var(--syn-electric)' : 'var(--syn-dim)', display: 'block', marginBottom: '0.5rem' }}>Incident Report</span>
                                <h4 className="serif" style={{ fontSize: '1.45rem', color: 'var(--syn-silver)', fontWeight: 500 }}>{f.t}</h4>
                              </div>
                              
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : (
                    // Tabs row for Mobile
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {FAILURES.map((f, i) => (
                        <button 
                          key={f.id} 
                          onClick={() => {
                            setIsGlitching(true);
                            setActiveFail(i);
                            setTimeout(() => setIsGlitching(false), 200);
                          }}
                          style={{
                            padding: '0.8rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.78rem',
                            background: activeFail === i ? 'rgba(139, 157, 195, 0.15)' : 'rgba(12, 17, 24, 0.6)',
                            border: activeFail === i ? '1px solid var(--syn-electric)' : '1px solid rgba(255, 255, 255, 0.08)',
                            color: activeFail === i ? 'var(--syn-silver)' : 'var(--syn-dim)',
                            cursor: 'pointer'
                          }}
                        >
                          CASE 0{i + 1}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Right Column: Distressed Incident Archive detail panel */}
                  <motion.div
                    animate={isGlitching ? { opacity: [1, 0.3, 0.9, 1], filter: ['blur(0px)', 'blur(3px)', 'blur(0px)'] } : {}}
                    transition={{ duration: 0.2 }}
                    style={{
                      background: 'rgba(18, 16, 14, 0.88)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: isMobile ? '2rem' : '3.5rem',
                      boxShadow: '0 15px 45px rgba(0,0,0,0.4)',
                      backdropFilter: 'blur(25px) saturate(1.2)',
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                      gap: '3rem',
                      minHeight: isMobile ? 'auto' : '380px'
                    }}
                  >
                    <div>
                      <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--syn-electric)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.8rem' }}>Incident Case 0{activeFail + 1}</span>
                      
                      <p className="serif" style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', color: 'var(--syn-silver)', lineHeight: 1.5, fontStyle: 'italic', borderLeft: '2.5px solid var(--syn-electric)', paddingLeft: '1.5rem' }}>
                        "{FAILURES[activeFail].thought}"
                      </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <div>
                        <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--syn-crimson)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>Observation</span>
                        <p className="mono" style={{ fontSize: '0.9rem', color: 'var(--syn-dim)', lineHeight: 1.75 }}>
                          {FAILURES[activeFail].real}
                        </p>
                      </div>
                      <div>
                        <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--syn-plasma)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>Outcome</span>
                        <p className="mono" style={{ fontSize: '0.9rem', color: 'var(--syn-silver)', lineHeight: 1.75 }}>
                          {FAILURES[activeFail].fix}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            </div>

            {/* CHAMBER 3: ARCHITECTURE ATLAS (CARTOGRAPHY) */}
            <div className="chamber" style={{ width: '100vw' }}>
              <motion.div 
                style={{ maxWidth: '1350px', margin: '0 auto', width: '100%' }}
                variants={slideContainerVariants}
                animate={activeIndex === 6 ? 'active' : 'inactive'}
              >
                <motion.span variants={slideItemVariants} className="mono" style={{ fontSize: '0.75rem', color: 'var(--syn-electric)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>Chamber 03 // Structure</motion.span>
                
                <CinematicTitle 
                  text="Substrate Atlas" 
                  className="serif" 
                  isActive={activeIndex === 6} 
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', color: 'var(--syn-silver)', fontWeight: 500, marginBottom: '2.5rem', lineHeight: 0.95, letterSpacing: '-0.03em' }} 
                />
                
                {isMobile ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* Tabs row for Mobile */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                      {Object.keys(ATLAS_NODES).map((key) => (
                        <button
                          key={key}
                          onClick={() => setSelectedAtlasNode(key)}
                          style={{
                            padding: '0.8rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.8rem',
                            background: selectedAtlasNode === key ? 'rgba(139, 157, 195, 0.15)' : 'rgba(12,17,24,0.6)',
                            border: selectedAtlasNode === key ? '1px solid var(--syn-electric)' : '1px solid rgba(255, 255, 255, 0.08)',
                            color: selectedAtlasNode === key ? 'var(--syn-silver)' : 'var(--syn-dim)',
                            cursor: 'pointer'
                          }}
                        >
                          {ATLAS_NODES[key].title}
                        </button>
                      ))}
                    </div>
                    
                    {/* Single Selected Card for Mobile */}
                    <div style={{
                      padding: '1.8rem',
                      border: '1px solid var(--syn-electric)',
                      background: 'rgba(18, 22, 32, 0.88)',
                      boxShadow: '0 8px 25px rgba(139, 157, 195, 0.15)',
                      backdropFilter: 'blur(20px) saturate(1.2)',
                      borderTop: '3px solid var(--syn-electric)',
                      height: '240px',
                      overflowY: 'auto'
                    }}>
                      <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--syn-electric)', display: 'block', marginBottom: '0.5rem' }}>
                        
                      </span>
                      <h3 className="serif" style={{ fontSize: '1.4rem', color: 'var(--syn-silver)', fontWeight: 500, marginBottom: '0.8rem' }}>
                        {ATLAS_NODES[selectedAtlasNode].title}
                      </h3>
                      <p className="mono" style={{ fontSize: '0.9rem', color: 'var(--syn-silver)', lineHeight: 1.7 }}>
                        {ATLAS_NODES[selectedAtlasNode].details}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    
                    {/* Cartography Signal Pathway Grid */}
                    <div style={{ position: 'relative', padding: '2rem 0' }}>
                      
                      {/* Pathway Connections SVG (Layer 1) */}
                      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible', zIndex: 1 }}>
                        <defs>
                          <filter id="cartoGlow">
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feMerge>
                              <feMergeNode in="blur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>

                        {/* Node 1 to 2 */}
                        <motion.line 
                          x1="12.5%" y1="50%" x2="37.5%" y2="50%"
                          stroke={selectedAtlasNode === 'gate' ? 'var(--syn-electric)' : 'rgba(255,255,255,0.06)'}
                          strokeWidth={selectedAtlasNode === 'gate' ? 2 : 1}
                          strokeDasharray={selectedAtlasNode === 'gate' ? '6 4' : 'none'}
                          animate={selectedAtlasNode === 'gate' ? { strokeDashoffset: [0, -20] } : {}}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                          style={{ filter: selectedAtlasNode === 'gate' ? 'url(#cartoGlow)' : 'none' }}
                        />

                        {/* Node 2 to 3 */}
                        <motion.line 
                          x1="37.5%" y1="50%" x2="62.5%" y2="50%"
                          stroke={selectedAtlasNode === 'prior' ? 'var(--syn-electric)' : 'rgba(255,255,255,0.06)'}
                          strokeWidth={selectedAtlasNode === 'prior' ? 2 : 1}
                          strokeDasharray={selectedAtlasNode === 'prior' ? '6 4' : 'none'}
                          animate={selectedAtlasNode === 'prior' ? { strokeDashoffset: [0, -20] } : {}}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                          style={{ filter: selectedAtlasNode === 'prior' ? 'url(#cartoGlow)' : 'none' }}
                        />

                        {/* Node 3 to 4 */}
                        <motion.line 
                          x1="62.5%" y1="50%" x2="87.5%" y2="50%"
                          stroke={selectedAtlasNode === 'ledger' ? 'var(--syn-electric)' : 'rgba(255,255,255,0.06)'}
                          strokeWidth={selectedAtlasNode === 'ledger' ? 2 : 1}
                          strokeDasharray={selectedAtlasNode === 'ledger' ? '6 4' : 'none'}
                          animate={selectedAtlasNode === 'ledger' ? { strokeDashoffset: [0, -20] } : {}}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                          style={{ filter: selectedAtlasNode === 'ledger' ? 'url(#cartoGlow)' : 'none' }}
                        />

                        {/* Feedback Loop Guard to Gate */}
                        <motion.path 
                          d="M 87.5 72 Q 50 150, 12.5 72"
                          fill="none"
                          stroke={selectedAtlasNode === 'homeo' ? 'var(--syn-electric)' : 'rgba(255,255,255,0.04)'}
                          strokeWidth={selectedAtlasNode === 'homeo' ? 1.8 : 0.8}
                          strokeDasharray={selectedAtlasNode === 'homeo' ? '5 5' : '4 8'}
                          animate={selectedAtlasNode === 'homeo' ? { strokeDashoffset: [0, 20] } : {}}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          style={{ filter: selectedAtlasNode === 'homeo' ? 'url(#cartoGlow)' : 'none' }}
                        />
                      </svg>

                      {/* HTML Pipeline Nodes (Layer 2) */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem', position: 'relative', zIndex: 2 }}>
                        {Object.keys(ATLAS_NODES).map((key, idx) => {
                          const node = ATLAS_NODES[key];
                          const isSelected = selectedAtlasNode === key;
                          return (
                            <motion.div
                              key={key}
                              onClick={() => setSelectedAtlasNode(key)}
                              whileHover={{ y: -4 }}
                              style={{
                                background: isSelected ? 'rgba(18, 22, 32, 0.94)' : 'rgba(13, 11, 10, 0.82)',
                                border: isSelected ? '1px solid var(--syn-electric)' : '1px solid rgba(255,255,255,0.06)',
                                boxShadow: isSelected ? '0 10px 30px rgba(139, 157, 195, 0.18)' : '0 6px 15px rgba(0,0,0,0.3)',
                                padding: '2rem',
                                cursor: 'pointer',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.2rem',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                              }}
                            >
                              {/* Corner Ticks (Brutalist Cartography Style) */}
                              <div style={{ position: 'absolute', top: '5px', left: '5px', fontSize: '0.55rem', color: 'rgba(255,255,255,0.15)', fontFamily: 'monospace' }}>+</div>
                              <div style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '0.55rem', color: 'rgba(255,255,255,0.15)', fontFamily: 'monospace' }}>+</div>
                              <div style={{ position: 'absolute', bottom: '5px', left: '5px', fontSize: '0.55rem', color: 'rgba(255,255,255,0.15)', fontFamily: 'monospace' }}>+</div>
                              <div style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: '0.55rem', color: 'rgba(255,255,255,0.15)', fontFamily: 'monospace' }}>+</div>

                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="mono" style={{ fontSize: '0.62rem', color: isSelected ? 'var(--syn-electric)' : 'var(--syn-dim)' }}>0{idx + 1}</span>
                                
                              </div>

                              <h3 className="serif" style={{ fontSize: '1.45rem', color: 'var(--syn-silver)', fontWeight: 500, margin: 0 }}>
                                {node.title}
                              </h3>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Details Panel (Layer 3) */}
                    <div style={{
                      background: 'rgba(14, 12, 11, 0.76)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      padding: '2.5rem 3.5rem',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.8rem'
                    }}>
                      <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--syn-electric)', letterSpacing: '0.12em' }}>
                        Component: {ATLAS_NODES[selectedAtlasNode].title}
                      </span>
                      <p className="mono" style={{ fontSize: '1rem', color: 'var(--syn-silver)', lineHeight: 1.8 }}>
                        {ATLAS_NODES[selectedAtlasNode].details}
                      </p>
                    </div>

                  </div>
                )}
              </motion.div>
            </div>

            {/* CHAMBER 4: CURRENT STATE (CAPABILITY MATRIX) */}
            <div className="chamber" style={{ width: '100vw', overflow: 'hidden' }}>
              <motion.div 
                style={{ maxWidth: '1350px', margin: '0 auto', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
                variants={slideContainerVariants}
                animate={activeIndex === 7 ? 'active' : 'inactive'}
              >
                <div>
                  <motion.span variants={slideItemVariants} className="mono" style={{ fontSize: '0.75rem', color: 'var(--syn-electric)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>Chamber 04 // Capabilities</motion.span>
                  <CinematicTitle 
                    text="Substrate Capability Matrix" 
                    className="serif" 
                    isActive={activeIndex === 7} 
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', color: 'var(--syn-silver)', fontWeight: 500, marginBottom: '3.5rem', lineHeight: 0.95, letterSpacing: '-0.03em' }} 
                  />
                </div>
                
                {isMobile ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', maxHeight: '420px', overflowY: 'auto' }}>
                    {/* Simple Column 1 */}
                    <div style={{ padding: '2rem', border: '2px solid var(--earth-sage)', background: 'rgba(12, 22, 20, 0.88)' }}>
                      <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--earth-sage)', display: 'block', marginBottom: '1.2rem' }}>[01] OPERATIONAL</span>
                      {CAPS.filter(c => c.s === 'live').map((c, i) => (
                        <div key={i} style={{ marginBottom: '1rem' }}>
                          <h4 className="serif" style={{ fontSize: '1.25rem', color: 'var(--syn-silver)', margin: '0 0 0.3rem' }}>{c.n}</h4>
                          <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--syn-dim)', lineHeight: 1.6 }}>{c.d}</p>
                        </div>
                      ))}
                    </div>
                    {/* Simple Column 2 */}
                    <div style={{ padding: '2rem', border: '1px solid var(--earth-sand)', background: 'rgba(24, 22, 16, 0.88)' }}>
                      <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--earth-sand)', display: 'block', marginBottom: '1.2rem' }}>[02] EXPERIMENTAL</span>
                      {CAPS.filter(c => c.s === 'proto').map((c, i) => (
                        <div key={i} style={{ marginBottom: '1rem' }}>
                          <h4 className="serif" style={{ fontSize: '1.25rem', color: 'var(--syn-silver)', margin: '0 0 0.3rem' }}>{c.n}</h4>
                          <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--syn-dim)', lineHeight: 1.6 }}>{c.d}</p>
                        </div>
                      ))}
                    </div>
                    {/* Simple Column 3 */}
                    <div style={{ padding: '2rem', border: '1px solid var(--earth-clay)', background: 'rgba(26, 14, 14, 0.88)' }}>
                      <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--earth-clay)', display: 'block', marginBottom: '1.2rem' }}>[03] QUARANTINED</span>
                      {CAPS.filter(c => c.s === 'weak' || c.s === 'none').map((c, i) => (
                        <div key={i} style={{ marginBottom: '1rem' }}>
                          <h4 className="serif" style={{ fontSize: '1.25rem', color: 'var(--syn-silver)', margin: '0 0 0.3rem' }}>{c.n}</h4>
                          <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--syn-dim)', lineHeight: 1.6 }}>{c.d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Towering Brutalist Monoliths
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', width: '100%' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', height: '390px', alignItems: 'stretch' }}>
                      
                      {/* Monolith 01: Works (Live) */}
                      <motion.div 
                        variants={slideItemVariants}
                        whileHover={{ scale: 1.012 }}
                        style={{ 
                          borderLeft: '4px solid var(--earth-sage)', 
                          background: 'linear-gradient(180deg, rgba(16, 24, 20, 0.85) 0%, rgba(10, 15, 12, 0.6) 100%)', 
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
                          padding: '2rem 2.2rem',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRight: '1px solid rgba(255,255,255,0.03)',
                          borderTop: '1px solid rgba(255,255,255,0.03)'
                        }}
                      >
                        <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--earth-sage)', letterSpacing: '0.15em', display: 'block', marginBottom: '1.5rem', borderBottom: '1px solid rgba(162, 196, 178, 0.15)', paddingBottom: '0.6rem' }}>[01] Works (Live)</span>
                        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }} className="custom-scrollbar">
                          {CAPS.filter(c => c.s === 'live').map((c, i) => (
                            <div key={i}>
                              <h4 className="serif" style={{ fontSize: '1.25rem', color: 'var(--syn-silver)', fontWeight: 500, marginBottom: '0.3rem' }}>{c.n}</h4>
                              <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--syn-dim)', lineHeight: 1.55 }}>{c.d}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Monolith 02: Partial (Proto) */}
                      <motion.div 
                        variants={slideItemVariants}
                        whileHover={{ scale: 1.012 }}
                        style={{ 
                          borderLeft: '4px solid var(--earth-sand)', 
                          background: 'linear-gradient(180deg, rgba(26, 24, 20, 0.85) 0%, rgba(16, 15, 12, 0.6) 100%)', 
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
                          padding: '2rem 2.2rem',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRight: '1px solid rgba(255,255,255,0.03)',
                          borderTop: '1px solid rgba(255,255,255,0.03)'
                        }}
                      >
                        <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--earth-sand)', letterSpacing: '0.15em', display: 'block', marginBottom: '1.5rem', borderBottom: '1px solid rgba(220, 200, 160, 0.15)', paddingBottom: '0.6rem' }}>[02] Partial (Proto)</span>
                        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }} className="custom-scrollbar">
                          {CAPS.filter(c => c.s === 'proto').map((c, i) => (
                            <div key={i}>
                              <h4 className="serif" style={{ fontSize: '1.25rem', color: 'var(--syn-silver)', fontWeight: 500, marginBottom: '0.3rem' }}>{c.n}</h4>
                              <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--syn-dim)', lineHeight: 1.55 }}>{c.d}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Monolith 03: Missing (Quarantined) */}
                      <motion.div 
                        variants={slideItemVariants}
                        whileHover={{ scale: 1.012 }}
                        style={{ 
                          borderLeft: '4px solid var(--earth-clay)', 
                          background: 'linear-gradient(180deg, rgba(26, 16, 16, 0.85) 0%, rgba(16, 10, 10, 0.6) 100%)', 
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
                          padding: '2rem 2.2rem',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRight: '1px solid rgba(255,255,255,0.03)',
                          borderTop: '1px solid rgba(255,255,255,0.03)'
                        }}
                      >
                        <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--earth-clay)', letterSpacing: '0.15em', display: 'block', marginBottom: '1.5rem', borderBottom: '1px solid rgba(168, 93, 74, 0.15)', paddingBottom: '0.6rem' }}>[03] Missing (Quarantined)</span>
                        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }} className="custom-scrollbar">
                          {CAPS.filter(c => c.s === 'weak').map((c, i) => (
                            <div key={i}>
                              <h4 className="serif" style={{ fontSize: '1.25rem', color: 'var(--syn-silver)', fontWeight: 500, marginBottom: '0.3rem' }}>{c.n}</h4>
                              <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--syn-dim)', lineHeight: 1.55 }}>{c.d}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                    </div>

                    {/* Honest Summary Banner */}
                    <motion.div 
                      variants={slideItemVariants}
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.02)', 
                        border: '1px solid rgba(255, 255, 255, 0.06)', 
                        padding: '1.4rem 2.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem'
                      }}
                    >
                      <span className="mono" style={{ fontSize: '0.68rem', color: 'var(--earth-copper)', border: '1px solid var(--earth-copper)', padding: '0.2rem 0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', flexShrink: 0 }}>Honest Assessment //</span>
                      <p className="mono" style={{ fontSize: '0.9rem', color: 'var(--syn-dim)', lineHeight: 1.6, margin: 0 }}>
                        Earthos is a research platform, not a finished intelligence. It contains real ideas, real code, real failures, and real hypotheses. It is valuable because it is trying to solve the hard parts directly rather than disguising them behind benchmark theater.
                      </p>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* CHAMBER 5: OPEN PROBLEMS */}
            <div className="chamber" style={{ width: '100vw', position: 'relative' }}>
              
              {/* Layer 1: Red structural tension paths */}
              {!isMobile && (
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible', zIndex: 1 }}>
                  <line x1="10%" y1="25%" x2="90%" y2="75%" stroke="rgba(239, 68, 68, 0.22)" strokeWidth="1" strokeDasharray="6 4" />
                  <line x1="80%" y1="10%" x2="20%" y2="90%" stroke="rgba(239, 68, 68, 0.15)" strokeWidth="1.2" strokeDasharray="10 5" />
                  <circle cx="50%" cy="50%" r="200" fill="none" stroke="rgba(239, 68, 68, 0.04)" strokeWidth="1" strokeDasharray="4 8" />
                </svg>
              )}

              <motion.div 
                style={{ maxWidth: '1350px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}
                variants={slideContainerVariants}
                animate={activeIndex === 8 ? 'active' : 'inactive'}
              >
                <motion.span variants={slideItemVariants} className="mono" style={{ fontSize: '0.75rem', color: 'var(--syn-crimson)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>Chamber 05 // Bottlenecks</motion.span>
                
                <CinematicTitle 
                  text="Open Cognitive Bottlenecks" 
                  className="serif" 
                  isActive={activeIndex === 8} 
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', color: 'var(--syn-silver)', fontWeight: 500, marginBottom: '4rem', lineHeight: 0.95, letterSpacing: '-0.03em' }} 
                />
                
                {/* Physical tension displaced layout */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: isMobile ? '1.5rem' : '2rem', maxHeight: isMobile ? '450px' : 'none', overflowY: isMobile ? 'auto' : 'visible', paddingRight: isMobile ? '0.5rem' : 0 }}>
                  {PROBLEMS.map((p, i) => {
                    // Physical distortion offsets
                    const defaultRotate = i % 4 === 0 ? -1.8 : (i % 4 === 1 ? 1.2 : (i % 4 === 2 ? -0.8 : 1.5));
                    const defaultY = i % 4 === 0 ? -10 : (i % 4 === 1 ? 8 : (i % 4 === 2 ? -6 : 10));
                    const isSpecialProblem = i === 0 || i === 6;
                    const isLastCard = i === 6;
                    return (
                      <motion.div 
                        key={i} 
                        variants={slideItemVariants}
                        initial={{ rotate: defaultRotate, y: defaultY }}
                        whileHover={{ 
                          scale: 1.025, 
                          rotate: 0, 
                          y: 0, 
                          borderColor: 'var(--syn-crimson)', 
                          zIndex: 30,
                          boxShadow: '0 20px 45px rgba(239, 68, 68, 0.18)',
                          background: 'rgba(28, 14, 14, 0.96)' 
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        style={{ 
                          padding: '2rem', 
                          border: isSpecialProblem ? '2px solid var(--syn-crimson)' : '1px solid rgba(255, 255, 255, 0.08)', 
                          background: isSpecialProblem ? 'rgba(24, 12, 12, 0.88)' : 'rgba(12, 17, 24, 0.72)', 
                          boxShadow: isSpecialProblem ? '0 12px 35px rgba(168, 82, 82, 0.15)' : '0 8px 25px rgba(0,0,0,0.2)',
                          backdropFilter: 'blur(20px) saturate(1.2)',
                          height: '350px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          position: 'relative',
                          cursor: 'pointer',
                          zIndex: 10 - i,
                          gridColumn: isLastCard && !isMobile ? 'span 2' : 'span 1'
                        }}
                      >
                        <div>
                          <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--syn-crimson)', display: 'block', marginBottom: '0.8rem', fontWeight: 500 }}>
                            0{i + 1}
                          </span>
                          <h3 className="serif" style={{ fontSize: '1.45rem', color: 'var(--syn-silver)', fontWeight: 500, marginBottom: '1rem' }}>
                            {p.t}
                          </h3>
                          <p className="mono" style={{ fontSize: '0.88rem', color: 'var(--syn-dim)', lineHeight: 1.65 }}>
                            {p.d}
                          </p>
                        </div>
                        <span style={{
                          width: '6px', height: '6px', background: 'var(--syn-crimson)',
                          animation: 'flicker 1.5s infinite alternate', alignSelf: 'flex-end'
                        }} />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* CHAMBER 6: EXIT SUBSTRATE */}
            <div className="chamber" style={{ width: '100vw' }}>
              <motion.div 
                style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}
                variants={slideContainerVariants}
                animate={activeIndex === 9 ? 'active' : 'inactive'}
              >
                <motion.span variants={slideItemVariants} className="mono" style={{ fontSize: '0.75rem', color: 'var(--syn-electric)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>Act 8 // Final Statement</motion.span>
                
                <CinematicTitle 
                  text="A Research Trajectory" 
                  className="serif" 
                  isActive={activeIndex === 9} 
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', color: 'var(--syn-silver)', fontWeight: 500, marginBottom: '2.5rem', lineHeight: 0.95, letterSpacing: '-0.03em', justifyContent: 'center' }} 
                />

                <motion.p variants={slideItemVariants} className="serif" style={{ fontSize: '1.4rem', color: 'var(--earth-dim)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '2rem' }}>
                  "Earthos is an ongoing attempt to study persistent adaptive cognition under ecological constraint. Not a finished intelligence. A research trajectory."
                </motion.p>
              </motion.div>
            </div>

          </motion.div>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* ═══  EARTHOS EXIT: OBSERVATORY CLOSE ═══ */}
        {/* ═══════════════════════════════════════ */}
        <section className="act" style={{ background: 'var(--earth-void)', borderTop: '1px solid var(--earth-border)', flexDirection: 'column', height: '140vh', justifyContent: 'flex-start', paddingTop: '8rem' }}>
          <motion.div 
            className="act-c" 
            style={{ textAlign: 'center', maxWidth: '750px', marginBottom: '2rem' }}
            variants={slideContainerVariants}
            animate={activeIndex >= 10 ? 'active' : 'inactive'}
          >
            <motion.span variants={slideItemVariants} className="mono" style={{ fontSize: '0.8rem', color: 'var(--earth-copper)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>Collaboration</motion.span>
            
            <CinematicTitle 
              text="Open to feedback, architectural discussions, and research backing." 
              className="serif" 
              isActive={activeIndex >= 10} 
              style={{ fontSize: '2.6rem', fontWeight: 500, lineHeight: 1.2, marginBottom: '2rem', justifyContent: 'center' }} 
            />

            <motion.p variants={slideItemVariants} className="mono" style={{ fontSize: '1.1rem', color: 'var(--earth-dim)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
              Independent researcher. Looking for compute runway and collaborators who care about persistent cognition over AI venture capital hype cycles.
            </motion.p>
            
            {/* Research Archive links deck */}
            <motion.div 
              variants={slideItemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.8rem',
                maxWidth: '680px',
                margin: '0 auto 3rem',
                padding: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                background: 'rgba(255, 255, 255, 0.01)',
              }}
            >
              <div className="mono" style={{ fontSize: '0.72rem', color: 'var(--earth-copper)', width: '100%', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Section 8.1 // Research Archive
              </div>
              {['Architecture Notes', 'Failure Postmortems', 'Current-State Assessments', 'Field Theory Notes', 'Public Benchmarks', 'Roadmap History'].map((archiveName, i) => (
                <span 
                  key={i} 
                  className="mono" 
                  style={{ 
                    fontSize: '0.78rem', 
                    color: 'var(--earth-muted)', 
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '0.4rem 0.8rem',
                    cursor: 'pointer',
                    background: 'rgba(0,0,0,0.2)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--earth-copper)'; e.currentTarget.style.color = 'var(--earth-text)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--earth-muted)'; }}
                >
                  {archiveName}
                </span>
              ))}
            </motion.div>
            
            <motion.div 
              variants={slideItemVariants}
              style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
            >
              <a href="mailto:roshankumargupta.sh@gmail.com" style={{ 
                padding: '1.0rem 2.2rem', fontSize: '0.95rem', fontFamily: 'var(--font-mono)', 
                border: '1px solid var(--earth-copper)', color: 'var(--earth-copper)', 
                textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
                transition: 'background-color 0.2s'
              }}>
                Get in touch
              </a>
              <a href="https://github.com/rk-roshan-kr/Earthos-public" target="_blank" rel="noopener noreferrer" style={{ 
                padding: '1.0rem 2.2rem', fontSize: '0.95rem', fontFamily: 'var(--font-mono)', 
                border: '1px solid var(--earth-border)', color: 'var(--earth-dim)', 
                textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
              }}>
                Source <ExternalLink size={12} />
              </a>
            </motion.div>
          </motion.div>

          {/* Section 8.2 bottom — Final Statement */}
          <motion.div 
            style={{ 
              maxWidth: '850px', 
              margin: '3rem auto 5rem', 
              textAlign: 'center', 
              borderLeft: '1px solid rgba(255,255,255,0.05)',
              borderRight: '1px solid rgba(255,255,255,0.05)',
              padding: '0 2rem'
            }}
            variants={slideContainerVariants}
            animate={activeIndex >= 10 ? 'active' : 'inactive'}
          >
            <p className="serif" style={{ fontSize: '1.45rem', color: 'var(--earth-dim)', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
              "Earthos is an ongoing attempt to study persistent adaptive cognition under ecological constraint. Not a finished intelligence. A research trajectory."
            </p>
          </motion.div>

          {/* FOOTER */}
          <footer style={{ width: '100%', padding: '4rem 0', borderTop: '1px solid var(--earth-border)', background: 'var(--earth-void)', marginTop: 'auto' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="mono" style={{ fontSize: '0.85rem', color: 'var(--earth-muted)' }}>
                Earthos Substrate Observatory · Roshan Kumar Gupta
              </span>
              <span className="mono" style={{ fontSize: '0.85rem', color: 'var(--earth-muted)', opacity: 0.5 }}>
                2026
              </span>
            </div>
          </footer>
        </section>

      </motion.div>

      {/* Embedded Styles for custom animations like flickers */}
      <style>{`
        @keyframes flicker {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
