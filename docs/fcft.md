# Field Coupling Dynamics & Representational Geometry

This document outlines the theoretical framework of **Field Coupling Field Theory (FCFT)** and **Representational Geometry** in Earthos.

---

## 🧬 Field Coupling Dynamics: Core Concepts

Rather than treating cognitive variables (e.g., uncertainty, contradiction, economics, stability) as isolated outputs of distinct symbolic modules, FCFT treats them as interacting dimensions within a continuous cognitive state across different regions. 

The goal is to model how changes in one dimension (e.g., detecting a contradiction) naturally propagate to alter behavior in other dimensions (e.g., shifting attention and halting updates to preserve identity stability).

> ### Research Note — Phase 35.1
> A lot of the early FCFT equations looked impressive and operationalized almost nothing. We spent weeks writing beautiful LaTeX derivations of thermodynamic coordinate transformations, only to discover the runtime engine was executing a series of arbitrary linear clamp functions because the real gradients were too noisy to compute. 
> 
> The painful lesson: mathematical aesthetics are not evidence of grounded cognition. We have rewritten this section to represent only what is operationalized in the current codebase.

---

## ⚙️ Operational Principles

To prevent this framework from becoming "physics theater," every coupling mechanism must map to concrete runtime behavior.

### 1. The Cognitive State Dimensions
For every local representation region, the system tracks:
* **Contradiction Load**: Accumulation of conflicting observation signals.
* **Uncertainty Mass**: Degree of unresolved prediction variance.
* **Grounding Confidence**: Density of verified physical matches.
* **Salience Distribution**: Attentional weight allocation.
* **Simulation Pressure**: Compute overhead during counterfactual rollouts.
* **Ontology Density**: Number of active nodes in the representational layer.
* **Compression Efficiency**: Success rate of concept fusion operations.
* **Identity Stability**: Index of self-model continuity.

### 2. Coupling Dynamics
Couplings between dimensions are applied as damped operations in every cognitive tick. A global damping factor is computed by the homeostasis engine to prevent positive feedback runaways.

The key coupling relationships are:
* **Contradiction → Uncertainty & Grounding**: High contradiction load scales up local uncertainty, which in turn degrades grounding confidence.
* **Uncertainty → Salience**: Regions with high uncertainty attract attentional resources, shifting focus toward those coordinates to prioritize resolution.
* **Economic Pressure → Density & Compression**: Under resource constraints, economic pressure decreases ontology density (pruning unused nodes) and increases compression efficiency by triggering structural merging.
* **Identity → Simulation Damping**: Low identity stability restricts deep branching and counterfactual exploration to prevent structural collapse.

---

## 🔮 Cognitive Free Energy

FCFT defines a unified free energy metric to evaluate the system's global state as the sum of its underlying tensions:

* **Predictive Error**: Global discrepancy between forecast and observation.
* **Representational Instability**: High-frequency jitter in coordinate space.
* **Identity Discontinuity**: Step-wise changes in the self-model coordinates.
* **Metabolic Energy**: Current cycle execution cost.
* **Simulation Divergence**: Variance between hypothetical paths.

### Coordinate Mutation Dynamics
Concept positions within the representational geometry are updated according to gradients derived from this free energy, pulling representation coordinates toward stable regions. 

This process is driven by:
1. Gradient descent pulling coordinates toward a stable state of lowest free energy.
2. Controlled stochastic drift to simulate exploratory restructuring (scaled inversely with identity stability to prevent dissolution).
3. Active environmental force vectors.

> ### Failure Note — Phase 37.1
> In early versions of coordinate mutations, the stochastic noise term was unconstrained. During high-entropy observation ticks, this noise induced step-changes in coordinates that bypassed the identity stability guard entirely, causing what we call "symbolic relapse"—the system's coordinate representations dissolved into white noise in less than 50 ticks. We solved this by scaling noise inversely with the current identity stability value.
