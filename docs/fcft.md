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
Couplings between dimensions are applied as damped delta operations in every cognitive tick. A global damping factor ($d \in [0.0, 1.0]$) is computed by the homeostasis engine to prevent positive feedback runaways.

The specific, implemented coupling dynamics in code are:

* **Contradiction to Uncertainty & Grounding**: A high contradiction load increases uncertainty and reduces grounding confidence:
  $$\Delta \text{uncertainty\_mass} = \text{contradiction\_load} \times 0.10 \times d$$
  $$\Delta \text{grounding\_confidence} = -\text{uncertainty\_mass} \times 0.05 \times d$$

* **Uncertainty to Salience**: Regions with high uncertainty attract attention, raising their salience:
  $$\Delta \text{salience\_distribution} = \text{uncertainty\_mass} \times 0.15 \times d$$

* **Economic Pressure to Density & Compression**: High resource consumption forces compaction and density reduction:
  $$\Delta \text{ontology\_density} = -\text{economic\_pressure} \times 0.08 \times d$$
  $$\Delta \text{compression\_efficiency} = \text{economic\_pressure} \times 0.05 \times d$$

* **Identity to Simulation Damping**: Instability in the selfhood model dampens forward planning branching to prevent identity fracture:
  $$\Delta \text{simulation\_pressure} = -(1.0 - \text{identity\_stability}) \times 0.15 \times d$$

---

## 🔮 Cognitive Free Energy ($F_c$)

FCFT defines a unified free energy metric $F_c$ to evaluate the system's global state:

$$F_c = E_p + E_r + E_i + E_m + E_s$$

* $E_p$ (Predictive Error): Global discrepancy between forecast and observation.
* $E_r$ (Representational Instability): High-frequency jitter in coordinate space.
* $E_i$ (Identity Discontinuity): Step-wise changes in the self-model coordinates.
* $E_m$ (Metabolic Energy): Current cycle execution cost.
* $E_s$ (Simulation Divergence): Variance between hypothetical paths.

### Coordinate Mutation Dynamics
Concept positions within `AdaptiveRepresentationalGeometry` are updated according to gradients derived from this free energy, pulling representation coordinates toward stable regions:

$$dM_r = -\nabla F_c(M_r) \cdot dt + \sigma_r \cdot dW_t + \Phi_{env}$$

* $\nabla F_c(M_r)$: Gradient pulling coordinates toward a stable state.
* $\sigma_r \cdot dW_t$: Stochastic Brownian drift to simulate exploratory restructuring.
* $\Phi_{env}$: Environmental force vector.

> ### Failure Note — Phase 37.1
> In early versions of coordinate mutations, the stochastic noise term ($\sigma_r \cdot dW_t$) was unconstrained. During high-entropy observation ticks, this noise induced a step-change in coordinates that bypassed the identity stability guard entirely, causing what we call "symbolic relapse"—the system's coordinate representations dissolved into white noise in less than 50 ticks. We solved this by scaling $\sigma_r$ inversely with the current `identity_stability` value.
