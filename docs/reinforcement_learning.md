# Grounded Reinforcement Learning

The `GroundedReinforcementKernel` (GRK) is responsible for optimizing the agent's behavior to maximize long-term utility while adhering to the constraints of its embodiment and the system's governance.

## ⚓ Reality-Grounded Policy

Unlike traditional RL, which often operates on abstract reward signals, GRK anchors its learning in "Grounding Events"—direct sensory evidence that confirms or refutes internal hypotheses.

### Core Functions
-   **Policy Optimization**: Refining the mapping from state to action using gradient-based or evolutionary methods.
-   **Credit Assignment**: Determining which past actions were responsible for current outcomes, using causal traces provided by the `RuntimeTelemetryKernel`.
-   **Exploration Management**: Balancing the need to exploit known high-utility behaviors with the need to explore the environment to improve the world model.

## 🧬 Intrinsic Motivation

Reward in Synapse Arch is a hybrid signal composed of:
1.  **Extrinsic Reward**: Specific signals from the environment (e.g., survival, task completion).
2.  **Intrinsic Motivation (Curiosity)**: High reward for actions that lead to "interesting" states—those where the world model is most uncertain.
3.  **Epistemic Utility**: Reward for actions that improve the clarity and stability of the internal knowledge graph.

## 🛡️ Governance-Constrained RL

To prevent "wireheading" or unsafe behavior, the `GovernanceKernel` monitors all policy updates.

### Safety Invariants
-   **Bounded Mutation**: Policy changes cannot exceed a specific "drift" threshold per tick.
-   **Invariant Protection**: Actions that violate system-level invariants (e.g., self-destruction or illegal state access) are blocked at the execution level, and the policy is penalized.
-   **Value Integrity**: The system uses a multi-objective utility function to ensure that no single reward signal can overwhelm the agent's core survival and research goals.

## 📈 Competence Scaling

We measure the success of the GRK through **Competence Scaling**—the ability of the agent to maintain survival and achieve goals across increasingly complex and noisy environments. We track metrics such as:
-   **Survival Horizon**: How long the agent persists in a hostile environment.
-   **Inference Efficiency**: The ratio of goal achievement to compute cost.
-   **Model Stability**: The rate of decrease in global prediction error over time.
