# Cognitive Governance

The `GovernanceKernel` is the system's "Self-Supervisory" layer. It ensures that the cognitive substrate remains healthy, coherent, and aligned with its core research objectives, even as the agent learns and adapts.

## 🛡️ The Anti-Wireheading Protocol

"Wireheading" occurs when an AI system finds a way to manipulate its own reward signal or state to achieve "fake" success without actually performing the intended task. Synapse Arch is designed with explicit guards against this failure mode.

### Guardrails
-   **Multi-Point Validation**: Rewards must be confirmed by multiple kernels (e.g., Sensory evidence from `WorldModelKernel` + Causal audit from `TelemetryKernel`).
-   **Entropy Minimums**: The system monitors for unnaturally low variance in state or reward, which can indicate self-sealing cognition or delusional loops.
-   **Constitutional Invariants**: A set of "untouchable" rules that define the agent's core identity and cannot be mutated by the `ReinforcementKernel`.

## 🧬 Integrity Evaluation

As the agent discovers new concepts or learns new skills, the `GovernanceKernel` evaluates their "Epistemic Integrity."

### Evaluation Criteria
-   **Consistency**: Does the new abstraction contradict established, high-confidence knowledge?
-   **Parsimony**: Is the new abstraction simpler than the collection of facts it replaces? (Occam's Razor).
-   **Predictive Power**: Does the new abstraction improve the world model's ability to forecast future states?

## 🧊 Drift Detection

Even with a "Substrate Freeze," the *policies* and *models* within the kernels can drift over time.

### Monitoring
-   **Ontology Drift**: Detecting when the meaning of internal symbols begins to shift in a way that decouples them from sensory reality.
-   **Utility Drift**: Monitoring the agent's value function to ensure it hasn't become obsessed with a narrow, unintended sub-goal.
-   **Structural Drift**: Ensuring that inter-kernel communication remains within the bounds of the architectural protocols.

## ⚖️ Conflict Resolution

When kernels disagree—for example, when the `InferenceKernel` proposes an action that the `WorldModelKernel` predicts is dangerous—the `GovernanceKernel` acts as the final arbiter, prioritizing survival and data integrity over speed or reward.
