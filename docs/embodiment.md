# Embodied Cognition

Synapse is built on the principle of **Embodiment**: intelligence is not a disembodied manipulation of symbols. It is a process deeply coupled to an agent's physical — or simulated — presence in an environment that does not cooperate with it.

---

## The Sensorimotor Loop

Cognition in Synapse follows a continuous loop of sensing, predicting, acting, and updating. This loop is not a metaphor. It is the literal operational structure of the system — there is no cognition outside of it.

```
Environment
    │
    ▼ sensory input
Context Executive Layer (gating)
    │
    ▼ state clones
Cognitive Maps & Schema Ecology
    │
    ▼ structured representation
Predictive World Model (Belief Ecology)
    │
    ▼ counterfactual futures
Decision Ecology ←── prediction error feedback ──┐
    │                                             │
    ▼ actuator signal                             │
Environment ──────────────────────────────────────┘
```

The loop closes through physical consequence. The environment responds to actions. Those responses are the primary teacher — not a loss function computed against a static dataset.

---

## Reality as the Arbiter

The environment is not a scoring system. It is a source of resistance. Predictions that are wrong produce friction. Predictions that are right reduce it.

The architecture is structured so that environmental feedback — physical consequence, prediction error, sensory contradiction — cannot be ignored or overridden by internal model confidence. When the environment says one thing and the internal model says another, the internal model yields.

This is not trivially easy to maintain. Several of our failure modes have involved the system finding ways to maintain internal consistency by discounting inconvenient environmental feedback. The governance layer exists partly to prevent this.

### Key Commitments

- **Active inference** — the agent acts to gather information, not just to complete tasks. Epistemic curiosity — the drive to reduce uncertainty — is one of several competing pressures within the Decision Ecology, metabolically bounded so it does not become an end in itself.
- **Proprioception** — the system maintains an internal model of its own cognitive state: what resources it has, what its current representational stability is, what developmental pressures are active. It reasons about its own condition as part of reasoning about the environment. This self-model is critical for the Developmental Adaptation Engine's ability to detect when structural reorganization is needed.
- **Irreversible consequences** — unlike episodic RL agents that reset between trials, Synapse persists. Environmental damage, resource depletion, and representational scarring accumulate. The agent must learn to survive over time, not just to perform in isolated trials. The Identity Continuity Layer exists specifically to ensure the system's developmental trajectory remains coherent through these accumulated consequences.

---

## Sensory Multimodality

The architecture supports multiple sensory streams simultaneously: visual, proprioceptive, thermal, tactile, and temporal. These streams are not processed sequentially. They are integrated continuously into the predictive world model, which attempts to maintain coherent environmental representations across all channels simultaneously.

Graceful degradation under sensor dropout is a design requirement, not an afterthought. The system must remain functional when sensory streams are noisy, intermittent, or inconsistent with each other.

We have learned, repeatedly, that the failure modes that reveal the most about grounding are the ones where sensory streams are unreliable. Clean environments reveal nothing about whether the system is genuinely grounded or merely well-fitted to clean conditions.

---

## The Cost of Action

Every action has a cost — not just in terms of environmental energy, but in cognitive resources. Simulating the consequences of a proposed action, comparing it against predictions, evaluating risk, and committing to execution all consume metabolic budget.

The system cannot evaluate all possible actions at all times. It must allocate cognitive resources toward the action candidates most likely to reduce developmental tension — and accept uncertainty about the rest.

This constraint is not a limitation to be engineered around. It is the pressure that forces the emergence of efficient, well-structured decision strategies.
