# Assumption Audit Registry: Synapse Subsystem Review

**Earthos / Synapse Research Atlas**  
*Phase 38.5 System Audit — Updated with Architecture Migration Series (2026)*

---

## Executive Context
This registry logs the core theoretical assumptions underlying the Synapse substrate. Following our research convergence, each assumption is evaluated against neuroscience-inspired AI and active inference literature to determine whether it should be kept, modified, or deprecated.

---

## 1. Representations Subsystem

### Assumption: Persistent cognition requires representational geometry (continuous coordinates).
*   **Supporting Evidence**: FCFT continuous developmental field formulations; standard vector space representations in modern deep learning models.
*   **Contradictory Evidence**: Dileep George et al., *"Clone-structured graph representations..."* (2021) shows that relational cognitive mapping and topological state transition graphs solve perceptual aliasing and planning more efficiently than continuous coordinate adjustment.
*   **Confidence Level**: Medium
*   **Action**: **Modify**  
    *Direction*: Use Clone-Structured Cognitive Graphs (CSCGs) as the macro-topological representation of the system, and limit continuous coordinate spaces to local motor controls and fine-grained state interpolations.

### Assumption: Concepts should undergo continuous morphogenetic field restructuring.
*   **Supporting Evidence**: Biological models of cortical morphogenesis and representational gradients.
*   **Contradictory Evidence**: Markram et al. (Blue Brain Project) shows that the structural connectome defines strict cavities and directed cliques that constrain developmental dynamics.
*   **Confidence Level**: Low
*   **Action**: **Modify**  
    *Direction*: Subordinate coordinate morphogenesis to topological constraints. The structural graph of sequences must enforce boundaries on coordinate updates.

---

## 2. Memory Subsystem

### Assumption: State history must be derived from a continuity-preserving memory log.
*   **Supporting Evidence**: Foundational event-sourcing and transaction log replay architectures; biological models of episodic trace replay during sleep.
*   **Contradictory Evidence**: None. The requirement for reproducible execution dynamics is validated by both software verification constraints and biological replay mechanisms.
*   **Confidence Level**: High
*   **Action**: **Keep**  
    *Direction*: Retain the event-sourced log as the stable core boundary.

---

## 3. Prediction & Causal Subsystem

### Assumption: Causal dynamics should be modeled as monolithic world-model rollouts.
*   **Supporting Evidence**: Typical model-based reinforcement learning systems that predict future frames/states as end-to-end continuous tensor projections.
*   **Contradictory Evidence**: Ken Kansky et al., *"Schema Networks..."* (2017) demonstrates that monolithic forecasting fails at task-to-task transfer, whereas factorized causal schema networks allow zero-shot transfer by isolating causes from entity attributes.
*   **Confidence Level**: Low
*   **Action**: **Deprecate**  
    *Direction*: Pivot prediction towards localized, modular **Causal Schema Templates** that bind dynamic changes to specific entities and relationships.

---

## 4. Grounding Subsystem

### Assumption: Grounding is driven purely by continuous sensory prediction-error minimization.
*   **Supporting Evidence**: Standard predictive coding theories in neuroscience.
*   **Contradictory Evidence**: Karl Friston (Active Inference) highlights that pure error minimization leads to the "dark room" scenario where an agent avoids all novel inputs. Epistemic value (curiosity) is necessary to force active exploration.
*   **Confidence Level**: Medium
*   **Action**: **Modify**  
    *Direction*: Integrate **epistemic value** as a primary driver of action selection in planning, compelling the system to choose paths that actively test and validate its causal maps.

---

## 5. Governance Subsystem

### Assumption: Homeostatic regulation of identity continuity is achieved by damping coordinate updates.
*   **Supporting Evidence**: Biological homeostasis models; stability constraints in adaptive control systems.
*   **Contradictory Evidence**: During Phase 38.1, aggressive coordinate damping prevented the system from updating its models when environmental rules changed, leading to "stable ignorance."
*   **Confidence Level**: Medium
*   **Action**: **Modify**  
    *Direction*: Implement a dynamic metrology system that monitors prediction-error frequency and model consistency to selectively release update damping when structural contradiction accumulates beyond a critical threshold. The Developmental Adaptation Engine (Migration 08) and Identity Continuity Layer formalize this as explicit architectural components.

---

## 6. Behavioral Subsystem (New — Migration 07)

### Assumption: Action selection is driven by single-objective optimization (e.g., maximizing tension reduction).
*   **Supporting Evidence**: Standard reinforcement learning frameworks; early Synapse planning that used coordinate traversal.
*   **Contradictory Evidence**: Architecture Migration 07 demonstrated that effective planning requires counterfactual future comparison under multiple competing pressures (epistemic curiosity, metabolic cost, risk, information gain). Tenenbaum planning research and model-based RL support multi-pressure competition.
*   **Confidence Level**: High
*   **Action**: **Deprecate**  
    *Direction*: Replace single-objective action selection with a Decision Ecology where multiple counterfactual futures compete. Curiosity (from Migration 06) is absorbed as one of several pressures, not a standalone engine.

---

## 7. Developmental Subsystem (New — Migration 08)

### Assumption: Learning is parameter updates within a fixed cognitive structure.
*   **Supporting Evidence**: Standard deep learning paradigm (fixed architecture, trained weights).
*   **Contradictory Evidence**: Architecture Migration 08 established that long-horizon cognitive development requires structural reorganization: map fusion, schema specialization, topological pruning. Human expertise differs from novice knowledge in cognitive organization, not just parameter values.
*   **Confidence Level**: Medium
*   **Action**: **Deprecate**  
    *Direction*: Introduce a Developmental Adaptation Engine (DAE) that governs structural change. Protect core identity via an Identity Continuity Layer to prevent identity erosion during major reorganization.
