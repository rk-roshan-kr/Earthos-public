# Empirical Validation & Benchmarking

Rather than evaluating the platform using static language benchmarks (such as MMLU or GSM8K) or relying on arbitrary progress scores, Earthos utilizes an empirical validation matrix grounded in system resilience and representational stability.

---

## 🔬 Validation Philosophy & Falsification

A cognitive mechanism is not considered validated simply because the code executes without errors. We define strict experimental boundaries to test our hypotheses:

1. **Environmental Resistance**: The agent must interact with simulations containing dynamic entropy and resource limits. Success is defined as maintaining stable homeostatic indices over extended execution horizons.
2. **Causal Shock Testing**: We actively inject contradictory or corrupted inputs (e.g., causal inversions where expected physics fail) to observe whether the grounding layer detects and rejects the contamination, rather than absorbing it.
3. **Falsification Criteria**: A representational update algorithm is considered falsified if:
   * It results in a runaway positive feedback loop in the Cognitive State Tensor.
   * It drops the Identity Stability index ($I_d$) below the safety threshold ($0.4$).
   * It triggers persistent belief loops that ignore direct physical counter-evidence (wireheading/delusion).

---

## 📊 "What We Thought" vs. "What Actually Happened"

### 1. Synthetic Grid-World Grounding
* **What We Thought**: Navigating a noiseless simulated grid-world and avoiding obstacles would demonstrate true grounding and conceptual correctness.
* **What Actually Happened**: The agent memorized the static ruleset of the grid-world and achieved $100\%$ task success, but when we introduced a $0.05$ probability of sensor dropout, it suffered catastrophic grounding collapse. It kept walking into walls, attempting to verify non-existent paths. It was overfitting to a noiseless ruleset, not learning to ground.

### 2. Causal Discovery Tracing
* **What We Thought**: The agent would extract clean, multi-hop causal paths from sequential inputs by analyzing temporal correlations.
* **What Actually Happened**: Without active motor interventions, the passive causal discovery engine repeatedly mistook metabolic decay rates (which naturally decrease over time) as the "cause" of unrelated environmental changes. It was establishing spurious causal links, a failure mode we call *associative reification*.

> ### Research Note — Phase 37.6
> The transition from simple grid-worlds to continuous control sandboxes took twice as long as anticipated. We spent days debugging why the coordinate updating code kept throwing overflow errors, only to realize that continuous, real-time sensor updates triggered a high-frequency jitter in coordinate space ($E_r \to 1.0$) that overwhelmed the Jaccard drift monitors. We had to implement a moving-average smoothing filter on input streams just to keep the substrate stable.

---

## 📋 Capability Verification Matrix

We track specific capability milestones using the status matrix detailed in our [Current State Guide](current_state.md):

| Target Capability | Validation Environment | Primary Metric | Verification Status |
| :--- | :--- | :--- | :--- |
| **Deterministic Replay** | Any | Bit-perfect parity of snapshot states compiled from raw event ledger logs. | Operational |
| **Paced Gateway Filtering**| High-toxicity streams | Exposure rate adjustments and input token rejection ratios. | Prototype |
| **Ontological Fusion/Split**| Concept drift labs | Reduction in Jaccard coordinate drift and simulation cycles efficiency. | Prototype |
| **Identity Continuity** | Restructuring cycles | Identity Stability index ($I_d \ge 0.4$) during memory compaction. | Prototype |
| **Causal Discovery** | Causal inversion labs | Rate of correct causal link extraction from stream sequences. | Weak / Early Prototype |
| **Open-World Grounding** | Noise-injected control | Rate of contradiction detection and belief self-correction. | Primitive / Early Prototype |
