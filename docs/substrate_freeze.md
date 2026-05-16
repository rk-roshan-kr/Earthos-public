# Substrate Freeze & Sovereignty

The stability of Synapse Arch relies on two fundamental architectural invariants: **Substrate Freeze** and **Kernel Sovereignty**. These principles prevent the system from collapsing into an unmanageable collection of "black-box" modules.

## 🧊 The Substrate Freeze

The **Substrate Freeze** is a design constraint that prohibits the introduction of new top-level architectural components (Kernels). By fixing the core architecture at nine sovereign kernels, we force all cognitive complexity to be managed *within* established domains rather than by inflating the system's structural footprint.

### Why Freeze?
-   **Inter-kernel Predictability**: Communication protocols between kernels remain stable.
-   **Auditability**: The flow of data and authority is always traceable to one of nine sources.
-   **Resource Guarantees**: The `CognitiveEconomicsKernel` can reason about system-wide costs with a fixed overhead model.

## 🛡️ Kernel Sovereignty (The One-Authority Principle)

Every cognitive responsibility—from "simulating the next sensory frame" to "pruning an unused abstraction"—must map to exactly **one** sovereign kernel.

### The Invariants
1.  **Exclusivity**: No two kernels can share authority over the same responsibility.
2.  **Completeness**: No cognitive task can exist outside the authority of the nine kernels.
3.  **Isolation**: State mutations owned by Kernel A cannot be directly modified by Kernel B; they must be requested via standardized protocols.

### Authority Map Example
| Responsibility | Sovereign Owner |
| :--- | :--- |
| Simulation & Imagination | **WorldModelKernel** |
| Reasoning & Planning | **InferenceKernel** |
| Policy Update & Exploration | **GroundedReinforcementKernel** |
| Memory Persistence | **MemoryKernel** |
| Mutation Approval | **GovernanceKernel** |
| Topological Scheduling | **ExecutionKernel** |

## ⚙️ Deterministic Runtime

Synapse Arch implements a **Strictly Deterministic Runtime**. Given the same initial state and the same sequence of input events, the system will *always* reach the same internal state and produce the same outputs.

### Implementation of Determinism
-   **Tick-Based Execution**: Time is discretized into "ticks." All kernels process events and update state in a topologically sorted sequence within each tick.
-   **Event-Sourcing**: Every change to the system state is captured as an immutable event. Replaying the event log reconstructs the system state perfectly.
-   **Controlled Randomness**: Any probabilistic operation (e.g., in RL exploration or world-model sampling) uses a deterministic seed managed by the `ExecutionKernel`.

This determinism is not just for debugging; it is the foundation of **Causal Auditability**, allowing researchers to rewind and analyze the precise sequence of "thoughts" that led to a specific behavior.
