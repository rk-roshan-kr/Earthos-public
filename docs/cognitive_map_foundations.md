# Cognitive Map Foundations: Primary Representational Substrate

**Earthos / Synapse Research Atlas**  
*Phase 38.5 Theoretical Foundations — Confirmed by Architecture Migration 03*

---

## 1. The Pivot: From Concept-First to Map-First
Traditional model-based AI architectures represent the environment as a "world model" that projects raw sensorimotor frames or dense continuous latent trajectories. Early Synapse organized intelligence around discrete **concepts** stored in ontological hierarchies. This approach produced genuine abstraction results but collapsed under open-world conditions due to ontology inflation, semantic theater, and context contamination.

The architecture has formally transitioned to **Latent Cognitive Maps** as its primary structural representation. In this paradigm, "concepts" are demoted from primary entities to **emergent stable attractors** within traversable maps — regions of the topology that are frequently visited and predictively useful, rather than symbolic objects declared in advance.

A latent cognitive map is not a reconstruction of sensory space; it is a relational graph that captures the transition topology of the environment. Under this framework:
1.  **Nodes** represent context-specific latent states (cloned states that resolve perceptual aliasing).
2.  **Edges** represent action-gated transition probabilities.
3.  **Representational Geometry** is constrained by the graph topology, ensuring coordinates are bound to physical consequence.

---

## 2. Core Mapping Mechanics

### A. Sequence-to-Graph Emergence
Graphs are not hardcoded; they emerge dynamically from sequential experience.
1.  **Sequential Observation Ingestion**: As the agent moves, the sensorimotor stream is encoded as a sequence of events.
2.  **Context-Cloned Mapping**: An emission is mapped to a cloned state based on its temporal prefix. For example, encountering landmark $A$ after $B$ maps to node $A_1$, while encountering $A$ after $C$ maps to node $A_2$.
3.  **Transition Probability Learning**: The system estimates the transition matrix:
    $$P(S_{t+1} \mid S_t, A_t)$$
    where $S$ is the cloned state-space and $A$ is the action vector.
4.  **Graph Synthesis**: As transition probabilities stabilize, they define the topology of the latent cognitive map.

### B. Planning from Latent Maps
Planning shifts from expensive continuous rollouts to efficient message passing on graphs.
1.  **Value Propagation**: Goal states inject activation gradients into the graph. These gradients flow backwards along transition edges.
2.  **Vicarious Evaluation**: The agent evaluates paths by tracing chains of cloned states in working memory. Because states are already context-disambiguated, the agent avoids exploring impossible paths, resolving the combinatorial deadlocks seen in Phase 23.4.
3.  **Active Inference Action Selection**: The selected path minimizes expected free energy, prioritizing steps that resolve map uncertainty (epistemic value) or move towards physical objectives (instrumental value).

### C. Map Compression & Abstraction
To respect metabolic constraints, maps must remain compact.
1.  **Subgraph Aggregation**: Densely connected subgraphs (cliques) are clustered and compressed into abstract macro-nodes.
2.  **Redundancy Decay**: Transition edges and cloned states that are rarely traversed or fail to contribute to prediction accuracy are decayed.
3.  **Topological Pruning**: Cavities and bottlenecks in the graph are identified to isolate modular sub-maps (e.g., rooms in a building, sub-tasks in a procedure).

### D. Map Reuse & Transfer
Cognitive maps can be reused across different domains that share structural similarities.
1.  **Isomorphism Discovery**: When entering a new environment, the system matches local transition sequences against previously learned map topologies.
2.  **Schema Alignment**: Once an isomorphism is found, the agent transfers its planning strategies and schemas to the new map.
3.  **Structural Initialization**: The agent initializes its predictions in the new environment using the priors of the transferred map, enabling rapid adaptation.

---

## 3. Connection to Higher-Level Systems

Cognitive Maps do not operate in isolation. They serve as the structural foundation for:

- **Schema Ecology**: Schemas are recurring trajectories through maps. They are born, compete, mutate, and die based on predictive utility.
- **World Models**: World Models are built from maps and schemas. They simulate future states by projecting counterfactual paths through the cognitive graph.
- **Decision Ecology**: Planning is counterfactual search over map topology. Multiple imagined futures compete under epistemic curiosity, metabolic cost, and risk pressures. For details, see [decision_ecology.md](decision_ecology.md).
- **Developmental Adaptation**: Over long horizons, maps are fused, pruned, and specialized by the DAE. This structural reorganization is what distinguishes development from mere learning. For details, see [developmental_adaptation.md](developmental_adaptation.md).
