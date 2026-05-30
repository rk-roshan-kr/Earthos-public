# Current State & Capabilities

This document provides a realistic, unpolished assessment of where the Earthos research platform actually stands. We explicitly separate what is working from what is being investigated, and what is genuinely unknown.

---

## Research Status

Following the validation cycles of Phase 39, the active implementation status of all Synapse components is structured as follows:

| Capability | Status | Notes |
|---|---|---|
| Deterministic runtime and execution replay | Operational | Core session replay achieves 100% parity |
| Persistent memory across session boundaries | Operational | Graph storage, paging, and persistence fully functional |
| Identity Continuity Layer | Operational | Verified multi-hop selfhood protection hashes via falsification suite |
| Context Executive Layer (Gating) | Prototype | Verification of gating transitions completed |
| State Cloning Engine (Identity tracking) | Prototype | Contextual clone resolution and genealogy tracking implemented |
| Cognitive Maps (Structured compilation) | Prototype | Topological maps with similarity search active |
| Schema Ecology (Prediction tracking) | Prototype | Conditional schema extraction and Analogical Rebinding under active testing |
| Belief Ecology (Probabilistic updating) | Prototype | Dynamic updates via expectation violations active |
| Prediction Error Registry | Prototype | Recording expectations, outcomes, and local free energy variables |
| Surprise Engine | Prototype | Variational surprise calculations and attention routing active |
| Counterfactual Search Engine | Prototype | Branching projection tree verified under search budgets |
| Decision Ecology (Multi-pressure planning) | Prototype | Instrumental vs. Epistemic value competitions under test |
| Developmental Adaptation Engine | Prototype | Map fusion and topological pruning active |
| Field coupling dynamics (FCFT) | Experimental Hypothesis | Continuous sensorimotor coordinate layers beneath discrete topologies |

**Operational** means running code with fully validated, reproducible behavior in target research environments.  
**Prototype** means partial implementation under active testing—the code exists, passes its unit tests, but is still under integration and scaling validation.  
**Conceptual** means theoretically defined but without active source files in the primary repository.  
**Experimental Hypothesis** means an unproven representational paradigm being tested alongside core mechanics.

---

## Validation Approach

We verify system integrity through structured experimental cycles that test the substrate across a range of conditions: normal operation, adversarial noise injection, environmental rule changes, and extended long-horizon execution.

The core thing we are checking is not task performance. It is developmental integrity — whether the system maintains coherent representational structure and behavioral competence over time, under conditions it wasn't specifically prepared for.

---

## What Is Actually Working

The substrate successfully maintains state across session boundaries. A system that runs today will start tomorrow from where it left off — with the same memory associations, the same learned priors, and the same schemas. The "clean slate" assumption is broken by design.

Under bounded synthetic environments, the system demonstrates improved behavioral competence over time compared to stateless episodic baselines. The persistence advantage is empirically observable, not just theoretically expected.

The governance layer successfully prevents the most dangerous failure modes we've encountered: shadow execution, self-referential optimization loops, and unconstrained representational growth.

---

## Known Hard Problems (Prediction-Centric)

### 1. The Homeostasis vs. Adaptation Dilemma
This is the central unsolved tension in the architecture. To maintain coherent self-model continuity, the governance layer dampens representational updates during high-pressure environmental transitions. This protection is necessary—without it, the agent's identity fractures, its local maps collapse under sudden surprise gradients, and it loses access to its own history.

But the protection creates a serious problem: when the environment genuinely changes its rules, the agent cannot adapt. It chooses stable ignorance over disruptive learning. It maintains its prior **World Model** even as prediction errors accumulate, because the cost of restructuring feels greater than the cost of being wrong.

### 2. Causal Learning and Epistemic Curiosity under Noise
The causal learning subsystem requires clean, structured observational conditions to reliably extract causal relationships. When sensory noise is high, it mistakes random temporal correlations for genuine causal structure and pursues meaningless optimization paths. 

Adopting Schema-Based Active Inference (S-HAI)—where actions are driven by epistemic value to reduce uncertainty in high-entropy maps—partially mitigates this. However, balancing metabolic limits against curiosity remains an open calibration problem.

### 3. Surprise Calibration and Attention Saturation
The Surprise Engine (`prediction_surprise_subsystem.py`) gates attention and halts map updates when expectation violations exceed the attention threshold. Under sustained open-world noise, the system can enter a state of **attention saturation**—where constant surprise signals prevent the agent from stabilizing *any* belief, leading to representational panic and the cognitive equivalent of a system crash.

---

## What We Are Not

We are not a production system. We are not a finished architecture. We are not claiming general intelligence.

We are a research project investigating whether the developmental predictive cognition approach described here actually works at scale, under real-world conditions, over real developmental timescales.

The honest answer, as of now: it partially works in bounded conditions. Whether it can survive the open world remains the central empirical question.

> [!NOTE]
> Internal validation pipeline details, experimental telemetry, and lifecycle audit mechanics are maintained in research archives and are excluded from public documentation.
