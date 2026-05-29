# Research Convergence Report: Neuroscience-Inspired Schema Systems and Cognitive Mapping

**Earthos / Synapse Research Atlas**  
*Phase 38.5 Research Synthesis — Updated with Architecture Migration Series (2026)*

---

## Executive Summary
This report documents the architectural convergence of the Synapse substrate following an in-depth review of:
1. **Dileep George's work** on Clone-Structured Cognitive Graphs (CSCGs), Cloned Hidden Markov Models (CHMMs), Schema Networks, and Schema-based Active Inference (S-HAI).
2. **The Blue Brain Project’s** findings on neocortical connectome topology and biological morphological invariants.
3. **Karl Friston’s** formulation of Active Inference and the Free Energy Principle (FEP).

The primary outcome of this convergence is a pivot from **unconstrained continuous field morphogenesis** to **structured, sequence-based latent cognitive mapping**. While continuous coordinate spaces (as defined in FCFT) remain under investigation as an *experimental representational hypothesis* for fine-grained sensorimotor predictions, the macro-structure of cognition must be organized as a discrete, contextual graph of cloned states to prevent representation drift, wireheading, and chaotic attractors.

> **2026 Migration Update**: The Architecture Migration Series (01–08) formally validated this pivot and extended it further. FCFT was downgraded to an Experimental Hypothesis. The architecture now formally distinguishes:
> - **Representational Systems**: Context Executive Layer, State Cloning, Cognitive Maps, Schema Ecology
> - **Predictive Systems**: Belief Ecology, World Model Construction Engine
> - **Behavioral Systems**: Counterfactual Search Engine, Decision Ecology
> - **Developmental Systems**: Developmental Adaptation Engine, Identity Continuity Layer
>
> The standalone Intentionality Engine (Migration 06) was rejected as a separate component and absorbed into the Decision Ecology as competing curiosity pressures.

---

## 1. Key Literature & Extracted Concepts

### A. Dileep George & Vicarious AI / Model-Free Schema Systems
*   **Clone-Structured Cognitive Graphs (CSCG)**:
    *   *Core Concept*: Observations are "cloned" across context-specific latent states. Instead of assigning a unique node to an observation $x$, the system instantiates multiple clones $x_1, x_2, \dots, x_k$ representing $x$ in different temporal or action-gated sequences.
    *   *Lesson for Synapse*: Perceptual aliasing (seeing the same sensation in different contexts) is resolved not by complex continuous coordination, but by sequence-based context cloning.
*   **Schema Networks**:
    *   *Core Concept*: A generative, object-oriented causal simulator where dynamic state changes are predicted using localized schemas (Condition $\rightarrow$ Action $\rightarrow$ Consequence templates).
    *   *Lesson for Synapse*: Causal models should be represented as modular, factorized schemas rather than monolithic continuous transition fields, allowing zero-shot transfer by rebinding learned schemas to new situational objects.
*   **Cloned HMMs (CHMM)**:
    *   *Core Concept*: A learning framework that discovers higher-order sequential structures in temporal sequences by cloning emission states and learning transition matrices.
    *   *Lesson for Synapse*: Continuous experience must first be compressed into discrete sequential traces before continuous field dynamics are applied.

### B. Blue Brain Project (Markram et al.)
*   **Connectome Topology (Topological Data Analysis)**:
    *   *Core Concept*: Biological neural microcircuits form high-dimensional directed cliques and cavities (in topological spaces) that guide the flow of information.
    *   *Lesson for Synapse*: The stable core must provide structural scaffolding (topological cavities) that constrains representation geometry, preventing random drift and global attractor freezing.
*   **Topological Morphology Descriptor (TMD)**:
    *   *Core Concept*: Classification of dendritic trees based on persistence diagrams.
    *   *Lesson for Synapse*: Representational restructuring must preserve persistent morphological signatures over developmental time rather than modifying coordinates arbitrarily.

### C. Karl Friston & Active Inference (FEP)
*   **Active Inference & Generative Models**:
    *   *Core Concept*: Minimization of variational free energy through action (epistemic or instrumental) and perception.
    *   *Lesson for Synapse*: Exploration is driven by epistemic value (curiosity to reduce uncertainty in latent maps), while exploitation is driven by instrumental value (minimizing metabolic and physical friction).

---

## 2. Architectural Implications for Synapse

| Subsystem | Previous Assumption | Realized Gap | Realignment Target (CSCG/Schema-Centric) |
|---|---|---|---|
| **Representation** | Continuous coordinates in unconstrained latent fields. | Representational drift, global crystallization, and semantic synonym loops. | **Clone-Structured Latent Graphs** where spatial/conceptual maps emerge from sequential sequences. |
| **Prediction** | Free-form continuous trajectory forecasting. | Deadlocks, high compute cost, and inability to handle zero-shot causal transfer. | **Modular Causal Schemas** (Entity-Relation-Action templates) that support active counterfactual simulation. |
| **Grounding** | Direct continuous sensorimotor feedback alignment. | Extreme susceptibility to high-frequency sensor noise. | **Active Epistemic Grounding** where actions are selected specifically to resolve ambiguity in cloned states. |
| **Governance** | Coordinate mutation damping. | Damped updates resulted in stable ignorance, failing to learn under rule shifts. | **Homeostatic Metrology Loop** that evaluates schema quality and belief coherence to guide adaptation rates. |

---

## 3. Retrospective of Collapsed Assumptions
Prior to this convergence, we believed that continuous field dynamics could self-organize into stable conceptual hierarchies. This assumption was invalidated. Without discrete sequence-based state cloning:
1.  **Context confusion was inevitable**: The system could not reliably distinguish between identical inputs encountered in different temporal contexts.
2.  **Crystallization occurred**: Continuous fields globally synchronized, leading to cognitive death. 
3.  **Transfer was impossible**: Learning did not generalize because there were no modular, factorable "objects" or "schemas" to rebind.
4.  **Ontology inflation was unchecked**: Concept-first hierarchies generated representational structures faster than they could be grounded (identified during Architecture Migration 03).
5.  **Planning was reactive**: Without counterfactual simulation, the system could not compare imagined futures — it only responded to current tension gradients (identified during Architecture Migration 07).

By anchoring Synapse in **sequence-first Clone-Structured Cognitive Graphs** and building **predictive World Models** atop them, we establish a topological skeleton that preserves context, supports causal reasoning, enables counterfactual planning, and ensures long-term representational stability.

---

## 4. Implementation Status (Post-Migration)

| Component | Status | Notes |
| :--- | :---: | :--- |
| Memory Persistence | 🟢 Implemented | Graph storage, paging, persistence functional |
| Context Executive Layer | 🟡 Prototype | Basic gating exists; full thalamic switching pending |
| State Cloning (CHMM/CSCG) | 🔴 Conceptual | Phase 39 target |
| Cognitive Maps | 🟡 Prototype | Legacy trajectory maps exist; lack cloned topology |
| Schema Ecology | 🟡 Prototype | Legacy schemas exist; ecological dynamics theoretical |
| Belief Ecology | 🟡 Prototype | Probability tracking exists; full factor graph reasoning partial |
| World Models | 🟡 Prototype | Basic forward prediction; rich counterfactual simulation limited |
| Counterfactual Search | 🔴 Conceptual | Active research direction |
| Decision Ecology | 🔴 Conceptual | Multi-pressure competition is aspirational |
| Developmental Adaptation | 🔴 Conceptual | Self-modification entirely conceptual |
| FCFT | 🟡 Experimental | Code exists but viability under CSCG unproven |
