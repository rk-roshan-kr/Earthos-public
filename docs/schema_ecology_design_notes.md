# Schema Ecology Design Notes: Ecological Knowledge Formation

**Earthos / Synapse Research Atlas**  
*Phase 38.5 Architectural Foundations — Confirmed by Architecture Migration 04*

---

## 1. Introduction & Conceptual Framework
A **Schema** is a factorized, modular template that describes a causal transition: 
$$\text{Schema} = \langle \text{Condition}, \text{Action}, \text{Consequence} \rangle$$
Where:
*   **Condition**: The required local state of entities, relationships, or sensory affordances.
*   **Action**: The active intervention (epistemic or instrumental) executed by the agent.
*   **Consequence**: The expected change in the state of entities or relationships.

Unlike monolithic predictive fields, the **Schema Ecology** decomposes environmental dynamics into millions of localized, independent schemas. This allows the system to generalize and transfer learned rules across different tasks.

---

## 2. Schema Life Cycle & Dynamic Mechanics

### A. Schema Formation (Extraction)
Schemas emerge from sequence analysis on **Clone-Structured Cognitive Graphs (CSCGs)**. 
1.  **State-Sequence Tracing**: When the agent navigates the environment, its sensorimotor path is recorded as a trace of context-cloned states.
2.  **Factorization**: The system monitors localized changes. When a transition occurs (e.g., an object moves when pushed), the change is extracted from the global sequence and isolated.
3.  **Template Generation**: The transition is generalized by replacing specific entity identifiers with variables:
    $$\text{Push}(X) \land \text{Adjacent}(X, Y) \rightarrow \text{Move}(Y)$$
4.  **Causal Consolidation**: If a template repeatedly predicts changes correctly, it is promoted to the schema registry. If it generates false predictions, its weight decays.

### B. Schema Retrieval (Activation)
At any execution step, multiple schemas are retrieved from the registry based on current context.
1.  **Affordance Matching**: The system scans the current latent map for entities and relationships that match the *Condition* of known schemas.
2.  **Context Filtering**: Retrieve schemas matching active tasks or high-uncertainty areas.
3.  **Prior Probability Weighting**: Schemas that have historically succeeded in similar contexts are given higher baseline activation weights.

### C. Schema Rebinding (Transfer)
Rebinding is the mechanism that enables **zero-shot transfer**. When faced with an unfamiliar scenario, the system maps old schemas onto new entities.
1.  **Isomorphism Mapping**: Identify structures in the new environment that share topological or functional relationships with previously learned environments.
2.  **Entity Substitution**: Bind entity variables in the schema's *Condition* template to the new environmental elements.
3.  **Simulation Rollout**: Rebound schemas are simulated in working memory to predict the consequences of prospective actions before executing them.

### D. Schema Accommodation (Mutation)
When a schema's predictions fail (sensory validation mismatch), it must adapt.
1.  **Condition Refinement**: If a schema fails under specific conditions, its *Condition* template is made more restrictive (e.g., adding a constraint that the object must not be anchored).
2.  **Schema Splitting**: If a schema consistently makes correct predictions in one context but fails in another, it is duplicated into two context-cloned schemas with distinct activation criteria.
3.  **Decay and Pruning**: Schemas that repeatedly fail to adapt are decayed and removed from the active ecology.

### E. Schema Competition
In complex environments, multiple schemas will offer competing predictions and action paths.
1.  **Prediction Consensus**: Active schemas vote on expected consequences.
2.  **Metabolic Cost Weighting**: Compute cycles are allocated based on schema efficiency. Simpler, more general schemas are prioritized over overly complex, specialized schemas.
3.  **Free Energy Minimization**: The schema that reduces expected variational free energy (balancing epistemic exploration and instrumental exploitation) wins control of the actuator command path.

---

## 3. Connection to Higher-Level Systems

Schemas are not endpoints. They are the reusable building blocks consumed by downstream systems:

- **World Models**: World Models are constructed from schemas and cognitive maps. A schema provides the causal transition rules; the map provides the structural topology. Together they form a predictive simulation of reality.
- **Belief Ecology**: When schemas make predictions that fail, belief confidence updates propagate through the Belief Ecology. Schemas with consistently wrong predictions lose weight and eventually decay.
- **Decision Ecology**: During counterfactual search, the system uses schemas to simulate “what happens if” scenarios. Multiple schemas may generate competing futures that are evaluated under the multi-pressure Decision Ecology. For details, see [decision_ecology.md](decision_ecology.md).
- **Developmental Adaptation**: Over long horizons, schemas undergo differentiation (splitting into specialized variants), integration (merging when contexts converge), and pruning (dying when predictive utility drops below metabolic cost). This is governed by the DAE. For details, see [developmental_adaptation.md](developmental_adaptation.md).
