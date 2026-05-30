# Roadmap Realignment 2026: Schema-Centric to Predictive World Model Architecture

**Earthos / Synapse Research Atlas**  
*Phase 38.5 Strategic Realignment — Extended by Architecture Migration Series (2026)*

---

## 1. Executive Context

Following Phase 38.5's comprehensive literature review, the Earthos project is executing a **Schema-Centric Roadmap Realignment**. 

The previous developmental trajectory for Phases 39–45 prioritized the creation of open-world semantic ingestion layers based on unconstrained continuous coordinate morphogenesis. This approach has been deprioritized. Empirical evidence and literature analysis indicate that continuous coordinate systems operating without discrete structural topologies suffer from severe representation drift, context aliasing, and planning deadlocks.

We are shifting our future focus to **Sequence-First Latent Cognitive Graphs**, **Causal Schema Networks**, and a rigorous **Cognitive Metrology** benchmarking framework.

---

## 2. Historical Traceability Pivots

This section documents the formal pivots in the research direction, establishing a trace of why our architectural priorities shifted.

---

### Pivot 1: Representational Space Structure
*   **Before**: The future roadmap assumed that concepts should be represented purely as dynamic coordinates in continuous latent fields ($FCFT$). Ontologies would emerge naturally from topological density attractors in coordinate space.
*   **Trigger**: Dileep George et al., *"Clone-structured graph representations enable flexible learning and vicarious evaluation of cognitive maps"* (Nature Communications, 2021).
*   **After**: Implement a **Clone-Structured Cognitive Graph (CSCG)** as the primary representation substrate. Observations are cloned across contexts to form a discrete sequential state-space, with continuous coordinate representations reserved for localized, fine-grained motor controls.
*   **Rationale**: Unconstrained continuous coordinates cannot solve perceptual aliasing without generating complex, high-dimensional coordinate histories that consume excessive compute. Cloning states based on sequential context resolves ambiguity at the structural level and reveals latent environmental modularity.

---

### Pivot 2: Causal Modeling & Planning
*   **Before**: Causal projection was modeled as continuous rollouts of the world model (continuous trajectory prediction).
*   **Trigger**: Ken Kansky et al., *"Schema Networks: Zero-shot Transfer with a Generative Causal Model of Intuitive Physics"* (arXiv:1706.04317).
*   **After**: Transition to factorized **Causal Schema Networks** that represent causes, effects, objects, and relationships as modular condition-action-consequence templates.
*   **Rationale**: Continuous trajectory forecasting does not support zero-shot transfer when environmental parameters change. Decomposing causal dynamics into modular schemas allows the system to transfer learned laws to entirely new situations by rebinding schemas to new entities.

---

### Pivot 3: Grounding and Active Learning
*   **Before**: Grounding focused on minimizing prediction error through high-frequency continuous sensory alignment.
*   **Trigger**: Karl Friston et al., *"Active Inference: A Process Theory"* (Journal of Neuroscience, 2017) and Dileep George et al., *"Schema-based active inference supports rapid generalization of experience"* (arXiv:2601.18946).
*   **After**: Adopt **Schema-Based Active Inference (S-HAI)** where actions are driven by epistemic value (minimizing uncertainty in the latent cognitive map) rather than simple reactive prediction-error minimization.
*   **Rationale**: Pure prediction-error minimization causes the system to seek out trivial, zero-error states (the "dark room" problem). Epistemic exploration forces the agent to actively probe its environment to validate and refine its cloned-state representations.

---

## 3. Realignment Phase Index (Phases 39+)

Under this realignment, the future phase sequence is restructured as follows:

### Phase 39: Sequence-First Latent State Foundations & Prediction-Centric Gating (🟢 Realigned)
*   *Objective*: Replace legacy unconstrained morphogenetic fields with a sequence-first Cloned HMM/CSCG representation substrate and establish the Prediction Error Registry & Surprise Engine.
*   *Key Tasks*:
    *   Implement contextual observation cloning with genealogy tracking (`CloneLineage` and `CognitiveSnapshot`).
    *   Build exact `SurpriseEngine` (`prediction_surprise_subsystem.py`) to measure mathematical violations of expectations.
    *   Implement `predictive_error_field` to calculate coordinate transition discrepancies.
    *   Establish Thalamic `ContextExecutiveLayer` gating transition priorities via variational surprise.
    *   Validate 4-level progressive snapshot corruption/restoration safeguards.

### Phase 40: Factorized Schema Ecologies & Future Simulation (🟢 Realigned)
*   *Objective*: Extract object-oriented causal representations and enable branching counterfactual futures.
*   *Key Tasks*:
    *   Extract conditional schemas from sequential state-space transitions.
    *   Build `CounterfactualSimulationEngine` (`counterfactual_simulation_engine.py`) to simulate branching state clones as future trajectories.
    *   Implement schema competition, mutation, and ecological selection dynamics.
    *   Verify zero-shot causal transfer under physical rule changes by rebinding schemas.

### Phase 41: World Models & Belief Dynamics (🟢 Realigned)
*   *Objective*: Implement predictive world models and active belief update fields.
*   *Key Tasks*:
    *   Build local, regional, and global predictive world models from schemas and maps.
    *   Deploy `Violation-of-Expectation Framework` to dynamically update belief confidence based on surprise.
    *   Integrate Active Inference epistemic value to drive path selection towards high-uncertainty regions.
    *   Validate belief stability under noisy, conflicting sensory streams.

### Phase 42: Decision Ecology & Epistemic Pressure (🟢 Realigned)
*   *Objective*: Implement action selection via multi-pressure competition.
*   *Key Tasks*:
    *   Construct Decision Ecology balancing Instrumental Value, Epistemic Curiosity, Resource Cost, and Risk.
    *   Absorb legacy intentionality layers as epistemic curiosity within the pressure ecology.
    *   Validate planning decisions under strict metabolic and memory budgeting.

### Phase 43: Developmental Adaptation & Identity Guards (🟢 Realigned)
*   *Objective*: Implement developmental map restructuring under sustained surprise pressure.
*   *Key Tasks*:
    *   Build DAE for map fusion and structural pruning under high cumulative surprise.
    *   Implement `IdentityContinuityGuard` protecting core selfhood hashes during structural adaptations.
    *   Validate development over long horizons without identity erosion.

### Phase 44: Cognitive Metrology & Calibration (🟢 Realigned)
*   *Objective*: Deploy benchmarking metrology metrics.
*   *Key Tasks*:
    *   Deploy suite to measure Predictive Accuracy (PAQ), Surprise Calibration (SCQ), Belief Revision (BRQ), and Model Adaptation (MAQ).
    *   Enforce metrology-gated governance limits before open-world deployment.

### Phase 45: Open-World Semantic Ingestion (🟢 Realigned)
*   *Objective*: Persistent learning and validation under real-world noise.
*   *Key Tasks*:
    *   Test continuous schema acquisition against live, high-noise information streams.
    *   Implement metabolic protection bounds on ontology inflation.
    *   Validate identity preservation under sustained open-world pressure.
