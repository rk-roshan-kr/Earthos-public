# Benchmarking & Competence Metrics

Traditional AI benchmarks (e.g., MMLU, GSM8K) are often poorly suited for evaluating persistent embodied agents. Synapse Arch utilizes a custom benchmarking framework focused on **Competence Scaling** and **Architectural Integrity**.

## 📈 Competence Scaling Chart

We track the agent's progress through a multi-dimensional metric of competence.

```mermaid
xychart-beta
    title "Cognitive Competence Scaling"
    x-axis [Phase 23, Phase 24, Phase 25, Phase 26 (Target)]
    y-axis "Competence Index (0-1.0)" 0 --> 1.0
    line [0.15, 0.38, 0.62, 0.85]
```

## 🛠️ Primary Metrics

### 1. Survival Horizon ($T_{survive}$)
The number of contiguous ticks the agent can persist in a constrained environment (e.g., limited energy, fluctuating conditions) before system failure or "death."

### 2. Prediction Accuracy ($P_{acc}$)
The precision of the `WorldModelKernel` in forecasting future sensory states. This is measured as the inverse of the global prediction error.
$$P_{acc} = 1 - \frac{1}{N} \sum_{i=1}^N ||S_{i} - S'_{i}||$$

### 3. Inference Efficiency ($\eta_{inf}$)
The ratio of goal-achievement progress to the compute resources (cycles/memory) consumed. High efficiency indicates a well-optimized `CognitiveEconomicsKernel`.

### 4. Epistemic Stability
The rate at which new abstractions are confirmed and promoted to "Stable" or "Invariant" status by the `GovernanceKernel`.

## 🔬 Benchmark Environments

We test the architecture across a series of standardized research environments:
-   **Grid-World Survival**: Basic resource gathering and threat avoidance.
-   **Continuous Control**: Motor control tasks requiring high-frequency sensorimotor feedback.
-   **Causal Discovery Labs**: Environments designed to test the agent's ability to infer hidden causal mechanisms.
-   **High-Entropy Simulation**: Real-world physics simulations with noise and unpredictable events.

## ⚖️ Architectural Integrity Audit

Beyond task performance, we audit the architecture itself:
-   **Kernel Sovereignty Violation Count**: Ensuring no kernel exceeds its authority.
-   **Determinism Check**: Verifying bit-perfect replay of event logs.
-   **Mutation Drift**: Measuring the rate of change in internal policies to ensure stability.
