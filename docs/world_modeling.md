# World Modeling & Predictive Cognition

The world modeling layer of Synapse is the predictive core of the architecture. Its function is to maintain a continuously-updated internal representation of environmental dynamics — not as a static snapshot, but as a forward-projecting model that allows the system to evaluate the probable consequences of actions before committing to them.

---

## Evolution: From Memory to Prediction

The world model is the predictive engine of Synapse. In our prior roadmap, we stated that "world models store understanding." We now explicitly reject this formulation. 

**World models generate expectations.** Their quality is measured purely by predictive accuracy and surprise reduction under the metabolic constraints of the substrate. A world model that predicts poorly or fails to handle high sensory entropy is considered weak, regardless of its representational complexity or taxonomic depth.

Research into Active Inference, the Free Energy Principle, and World Models (Ha & Schmidhuber) revealed a different relationship: memory exists to support predictive models. A system that remembers everything but predicts nothing is not intelligent. It is an archive.

This insight drove the transition from memory-centric cognition toward world-model-centric predictive cognition. The system now treats prediction — not storage — as the primary cognitive object.

**The Causal Correlation Collapse** — When we introduced sensory noise into the observation streams, the early causal discovery system collapsed. Without clean, structured inputs, it began mistaking random temporal correlations for genuine causal relationships. The agent linked its own internal energy consumption to completely unrelated environmental features and spent significant cycles optimizing for correlations that had no causal basis.

This revealed a fundamental limitation: passive correlation analysis is insufficient for causal learning. The system must actively intervene — take deliberate actions, observe consequences, compare against predictions — to distinguish correlation from causation.

**The False Affordance Failure** — In clean synthetic environments, the world model performed well. When sensor noise was introduced, the grounding layer began stabilizing hallucinated environmental features — believing paths existed where they did not, because temporary sensor gaps matched prior internal predictions.

The agent navigated around obstacles that weren't there while ignoring evidence that the space was empty. Its internal model was more trusted than incoming physical feedback.

The resolution: physical consequence must override internal model confidence. When direct environmental feedback contradicts a predicted state, the internal representation yields — not the other way around. Varational surprise acts as the immune response.

---

## World Model Hierarchy

Multiple partial world models coexist rather than a single monolithic simulation. The architecture distinguishes:

- **Local Models**: Specific domains (programming environments, physical navigation, research contexts). These carry the highest predictive accuracy within their scope.
- **Regional Models**: Broader structures that combine related local models into coherent explanatory clusters.
- **Global Model**: The agent's highest-level understanding of reality. This should never become fully unified — multiple partial models coexisting is healthier than a single explanation for everything.

---

## Uncertainty and Belief Ecology

Beliefs in the world model are not static binary values or raw unweighted probabilities. Every belief is a dynamic, coordinate-linked representation carrying active **Belief Confidence Dynamics** that adapt in real time to the environment's resistance.

The system maintains probability distributions over explanations rather than storing absolute facts. Confidence in a belief is calculated and updated using the **Violation of Expectation Framework**:
1. **Theory/Belief Activation**: The agent retrieves the context-relevant belief distribution.
2. **Expectation Generation**: The belief projects a precise expectation vector ($E$) representing the expected sensorimotor outcome.
3. **Grounding Observation**: The agent executes an action and ingests the sensory grounding vector ($O$).
4. **Surprise Assessment**: The Surprise Engine calculates the expectation violation score ($V$) based on the difference between expected and observed results.
5. **Dynamic Update**: Confidence ($C$) is updated based on the violation score:
   $$C_{t+1} = C_t \times (1.0 - \eta V_t) + \beta (\text{Evidence})$$
   where high expectation violations ($V_t$) trigger steep confidence decays, driving attention to seek alternative counterfactual beliefs.

High-uncertainty regions attract additional processing resources. The system allocates attention toward the parts of its world model that are least grounded, planning active epistemic interventions to gather confirming or disconfirming evidence rather than resting in comfortable, untested assumptions.

When incoming information directly contradicts an established high-confidence belief, the system does not silently update. It flags the contradiction, routes attention toward the conflicting region, and runs evaluation cycles before committing any restructuring. This prevents noisy or adversarial inputs from corrupting stable, well-grounded representations too easily.

Whether this is sufficient for open-world scale remains an open empirical question.

---

## Counterfactual Simulation

The architecture employs counterfactual simulation — running "what happens if" scenarios in working memory before physical actions are committed. This capability is managed by the **Counterfactual Search Engine (CSE)**, which simulates branching trajectories by projecting schemas across the latent cognitive map.

For a deep explanation of how branching futures are generated, evaluated, and competed under multiple computational pressures, see the canonical private design record: [decision_ecology.md](decision_ecology.md).

This enables:
- **Future Prediction**: Projecting the most likely physical or semantic trajectories.
- **Hypothesis Testing**: Simulating active interventions to confirm or reject causal schemas.
- **Research Planning**: Evaluating multi-step exploratory pathways under computational limits.
- **Failure Anticipation**: Detecting and weighting potential risks (dangerous futures) before execution.
- **Strategy Generation**: Proposing novel sequences when standard paths are blocked.

Imagining futures without executing them is the core boundary separating reactive organisms from planning intelligences.

---

## Open Problems

The deepest unsolved problem in the world modeling layer is semantic stability under open-world conditions. In bounded synthetic environments with clean sensory streams, the world model maintains coherent, grounded representations. In high-noise, high-contradiction, continuously-changing real environments, we do not yet know how well grounding survives.

> [!NOTE]
> Specific forecasting architectures, causal graph structures, contradiction handling mechanisms, and implementation details of the world modeling layer are maintained in internal research archives and are intentionally excluded from public documentation.
