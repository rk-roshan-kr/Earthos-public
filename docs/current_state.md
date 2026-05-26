# Current State & Capabilities

This document provides a realistic, unpolished assessment of the Earthos research platform. We explicitly separate implemented mechanisms from active prototypes, theoretical hypotheses, and long-term directions.

---

## 📊 Research Status Matrix

We track our progress using a four-tier status classification:
* **Operational**: Running code validated experimentally in research environments.
* **Prototype**: Partial implementation under active testing.
* **Theoretical**: Mathematical models or conceptual frameworks (no running code yet).
* **Future Direction**: Planned research areas.

| Capability | Status |
| :--- | :--- |
| **Deterministic runtime** | Operational |
| **Memory persistence** | Operational |
| **Identity continuity guard** | Prototype |
| **Field Coupling Dynamics (FCFT)** | Prototype |
| **Ontology Growth / Morphogenesis** | Prototype |
| **Learned Latent Representations** | Prototype |
| **Embodied Grounding** | Prototype |
| **Causal Intervention Learning** | Prototype |
| **Continuous Field Cognition** | Theoretical |
| **Social Cognition** | Future Direction |

---

## 🧪 Validation Approach

To verify system integrity across lifecycle updates, the codebase undergoes a multi-stage integration and recovery pipeline covering:

1. **Ingestion**: Raw input processing and relation creation.
2. **Transitive Inference**: Derivation of new relations from existing knowledge.
3. **Multi-Hop Reasoning**: Deep chain discovery across the relational mesh.
4. **Semantic Consolidation**: Merge auditing with strict distance enforcement.
5. **Contradiction Registration**: Detection of mutual exclusion between conflicting weights.
6. **Epistemic Resolution**: Confidence adjustment for conflicting nodes.
7. **Entropy Decay Simulation**: Confidence decay for inactive nodes over time.
8. **Lifecycle Promotion**: Re-learning verification and stability classification.
9. **State Replay**: Ledger-based reconstruction to verify full parity.
10. **Proof Extraction**: Shortest path extraction with explainable reasoning chains.

---

## 📊 Attractor Stability Results

During persistence simulations to verify temporal continuity and attractor stabilization under high-entropy transitions:
* **Attractor Stability**: Weights remained bounded within safe ranges, avoiding collapse.
* **Attractor Diversity**: Centroids stabilized without experiencing monoculture crystallization or chaotic over-branching.
* **Curiosity Persistence**: Bounded curiosity pressures resolved within safe limits.
* **Identity Continuity**: Full lineage integrity was maintained; identity stability remained above safety thresholds.

---

## ⚠️ Known Limitations & Hard Tradeoffs

### 1. The Homeostasis vs. Adaptation Dilemma
To prevent the agent's identity from fracturing during major environment transitions, the identity stability index must remain above safety bounds. 

However, we found this introduces a massive tradeoff: the homeostatic guards protect self-continuity by damping coordinate updates so aggressively that the agent becomes functionally blind to genuine changes in the environment. It chooses to ignore the new rules of the environment to avoid the "pain" of changing its internal coordinate structure.

> [!NOTE]
> **Research Finding (Phase 38.1)**: We ran the agent through a simple ruleset inversion test. Instead of adapting its coordinate paths, the system damped all adjustments to near-zero, effectively locking itself into its old world model. It preferred to accept a high, continuous predictive error rather than allow its representational geometry to undergo the required restructuring. It chose stagnation over self-modification.

### 2. Weak Causal Learning in High Entropy
The system relies on clean, structured observation inputs to detect causal links. When we introduce random noise into the stream, the causal discovery rate collapses. The agent cannot distinguish between accidental temporal correlation and true causal directionality.

> [!WARNING]
> **Research Finding (Phase 38.3)**: In our causal inversion sandbox, noise injection caused the causal discovery engine to link unrelated environmental features to the agent's internal metrics. It spent thousands of cycles attempting to optimize for meaningless correlations.

### 3. Predictive Collapse under High Entropy
The predictive world model struggles in high-entropy states. When the variance of input signals exceeds safe bounds, the model generates extreme predictive error signals, which cascade into the cognitive state, triggering global coordination resets. The system essentially "panics" and wipes its short-term states to escape the noise.
