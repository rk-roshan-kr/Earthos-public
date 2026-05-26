# Field Coupling Dynamics & Representational Geometry

This document outlines the theoretical framework and current operational implementations of **Field Coupling Field Theory (FCFT)** and **Representational Geometry** in Earthos.

---

## 🧬 Field Coupling Dynamics: Core Concepts

Rather than treating cognitive variables (e.g., uncertainty, contradiction, economics, stability) as isolated outputs of distinct symbolic modules, FCFT treats them as interacting dimensions within a continuous **Cognitive State Tensor** across different regions. 

The goal is to model how changes in one dimension (e.g., detecting a contradiction) naturally propagate to alter behavior in other dimensions (e.g., shifting attention and halting updates to preserve identity stability).

> ### Research Note — Phase 35.1
> A lot of the early FCFT equations looked impressive and operationalized almost nothing. We spent weeks writing beautiful LaTeX derivations of thermodynamic coordinate transformations, only to discover the runtime engine was executing a series of arbitrary linear clamp functions because the real gradients were too noisy to compute. 
> 
> The painful lesson: mathematical aesthetics are not evidence of grounded cognition. We have rewritten this section to represent only what is operationalized in the current codebase.

---

## ⚙️ Operational Mappings in Code

To prevent this framework from becoming "physics theater," we map the theoretical formulations to concrete runtime code within `src/runtime/field_coupling_dynamics.py` and `src/runtime/fcft_operationalization_runtime.py`.

### 1. The Cognitive State Tensor
For every local representation region, the tensor tracks:
* `contradiction_load`: Accumulation of conflicting observation signals.
* `uncertainty_mass`: Degree of unresolved prediction variance.
* `grounding_confidence`: Density of verified physical matches.
* `salience_distribution`: Attentional weight allocation.
* `simulation_pressure`: Compute overhead during counterfactual rollouts.
* `ontology_density`: Number of active nodes in the representational layer.
* `compression_efficiency`: Success rate of concept fusion operations.
* `identity_stability`: Index of self-model continuity.

### 2. Damped Coordinate Updates
Couplings between dimensions are applied as damped delta operations in every cognitive tick. A global damping factor (d, bounded between 0.0 and 1.0) is computed by the homeostasis engine to prevent positive feedback runaways.

The specific, implemented coupling dynamics in code are:

* **Contradiction to Uncertainty & Grounding**: A high contradiction load directly scales up the local uncertainty mass (scaled by 0.10 of the active damping factor), which in turn degrades the overall grounding confidence score (by 0.05 of the accumulated uncertainty).
* **Uncertainty to Salience**: Regions with high uncertainty mass attract attentional resources, shifting the salience distribution towards those coordinates to prioritize resolution (scaled by 0.15 of the damping factor).
* **Economic Pressure to Density & Compression**: When system resource consumption is high, economic pressure decreases ontology density (pruning unused nodes at 0.08 of pressure) and increases compression efficiency by triggering structural merging protocols (at 0.05 of pressure).
* **Identity to Simulation Damping**: Low identity stability indicates self-model fragility, which actively dampens simulation pressure by restricting deep branching and counterfactual exploration to prevent structural collapse (scaled by 0.15 of the damping factor).

---

## 🔮 Cognitive Free Energy (Fc)

FCFT defines a unified free energy metric Fc to evaluate the system's global state as the sum of its underlying tensions:

Fc = Predictive Error (Ep) + Representational Instability (Er) + Identity Discontinuity (Ei) + Metabolic Energy (Em) + Simulation Divergence (Es)

* **Predictive Error (Ep)**: Global discrepancy between forecast and observation.
* **Representational Instability (Er)**: High-frequency jitter in coordinate space.
* **Identity Discontinuity (Ei)**: Step-wise changes in the self-model coordinates.
* **Metabolic Energy (Em)**: Current cycle execution cost.
* **Simulation Divergence (Es)**: Variance between hypothetical paths.

### Coordinate Mutation Dynamics
Concept positions within `AdaptiveRepresentationalGeometry` are updated according to gradients derived from this free energy, pulling representation coordinates toward stable regions. 

This process is driven by:
1. Gradient descent pulling coordinates toward a stable state of lowest free energy.
2. Controlled stochastic Brownian drift to simulate exploratory restructuring (scaled inversely with the current identity stability to prevent white-noise dissolution).
3. Active environmental force vectors.

> ### Failure Note — Phase 37.1
> In early versions of coordinate mutations, the stochastic noise term ($\sigma_r \cdot dW_t$) was unconstrained. During high-entropy observation ticks, this noise induced a step-change in coordinates that bypassed the identity stability guard entirely, causing what we call "symbolic relapse"—the system's coordinate representations dissolved into white noise in less than 50 ticks. We solved this by scaling $\sigma_r$ inversely with the current `identity_stability` value.
