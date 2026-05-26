# Current State & Capabilities

This document provides a realistic, unpolished assessment of the Earthos research platform. We explicitly separate implemented mechanisms from active prototypes, theoretical hypotheses, and long-term directions, highlighting the actual trade-offs encountered in Phase 38+.

---

## 📊 Research Status Matrix

We track our progress using a four-tier status classification:
* **Operational**: Running code validated experimentally in research environments.
* **Prototype**: Partial implementation under active testing.
* **Theoretical**: Mathematical models or conceptual frameworks (no running code yet).
* **Future Direction**: Planned research areas.

| Capability | Status | Operational Mapping |
| :--- | :--- | :--- |
| **Deterministic runtime** | Operational | Event-sourced logging and deterministic cycle orchestration. |
| **Memory persistence** | Operational | Paced event log consolidation and retrieval interfaces. |
| **Identity continuity guard** | Prototype | Identity stability index ($I_d \ge 0.4$) evaluation under memory drift. |
| **Field Coupling Dynamics (FCFT)** | Prototype | Gradual tensor updating with economic and uncertainty dampings. |
| **Ontology Growth / Morphogenesis**| Prototype | Concept fusions and splits driven by Jaccard drift. |
| **Learned Latent Representations** | Prototype | Representation geometry coordinates drift toward center using calculated gradients. |
| **Embodied Grounding** | Prototype | Reality gateway and contradiction rejection loops. |
| **Causal Intervention Learning** | Prototype | Multi-hop tracing and causal signal extraction from streams. |
| **Continuous Field Cognition** | Theoretical | Differentiable field-coupling dynamics across global areas. |
| **Social Cognition** | Future Direction | Inter-agent knowledge sharing and multi-agent coordination. |

---

## ⚠️ Known Limitations & Hard Tradeoffs

### 1. The Homeostasis vs. Adaptation Dilemma
To prevent the agent's identity from fracturing during major environment transitions, the `IdentityStability` index must remain above $0.4$. 

However, we found this introduces a massive tradeoff: the homeostatic guards protect self-continuity by damping coordinate updates so aggressively that the agent becomes functionally blind to genuine changes in the environment. It chooses to ignore the new rules of the environment to avoid the "pain" of changing its internal coordinate structure.

> ### Research Note — Phase 38.1
> We ran the agent through a simple ruleset inversion test. Instead of adapting its coordinate paths, the system damped all coordinate adjustments to 0.0001, effectively locking itself into its old world model. It preferred to accept a high, continuous predictive error rather than allow its representational geometry to undergo the required restructuring. It chose stagnation over self-modification.

### 2. Weak Causal Learning in High Entropy
The system relies on clean, structured observation inputs to detect causal links. When we introduce even $5\%$ random noise into the stream, the causal discovery rate collapses. The agent cannot distinguish between accidental temporal correlation and true causal directionality.

> ### Failure Note — Phase 38.3
> In our causal inversion sandbox, noise injection caused the causal discovery engine to link the agent's internal metabolic consumption rate directly to the color of background grid pixels. It spent 8,000 cycles attempting to reduce compute costs by navigating toward specific color tiles. We are still cleaning up the code remnants of that experiment.

### 3. Predictive Collapse under High Entropy
The predictive world model struggles in high-entropy states. When the variance of input signals exceeds a threshold, the model generates extreme predictive error signals ($E_p \to 1.0$), which cascade into the state tensor, triggering global coordination resets. The system essentially "panics" and wipes its short-term coordinate states to escape the noise.

---

## 🔬 Current Central Open Problems

Our daily development is actively trying to resolve these core bottlenecks:
* **Active Grounded Interventions**: Moving beyond passive correlation tracing to allow the agent to perform deliberate, exploratory physical interventions to verify causal direction.
* **Catastrophic Topology Lock-In**: Preventing the ontology growth engine from freezing or over-consolidating when faced with continuous, noisy streams.
* **Affordance Over-Stabilization**: Auditing how the agent learns false associations between action and reward (delusion) in environments with high environmental noise.
* **Differentiable Backpropagation Transitions**: Moving from heuristic coordinate drift adjustments to a globally differentiable representation field.
