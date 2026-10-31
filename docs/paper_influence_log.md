# Paper Influence Log: Cognitive Substrate Research Traceability

**Earthos / Synapse Research Project**  
*Phase 38.5 Permanent Historical Log*

---

This log documents the intellectual lineage behind the architectural decisions of Earthos and Synapse, mapping key publications to their specific impacts on the roadmap.

---

## 1. Dileep George Research Group

### Paper: "Clone-structured graph representations enable flexible learning and vicarious evaluation of cognitive maps" (Nature Communications, 2021)
*   **Core Idea**: The brain handles perceptual aliasing and constructs maps of physical environments by cloning identical sensations across context-specific latent nodes, forming Clone-Structured Cognitive Graphs (CSCGs).
*   **Impact on Synapse**: Shifted the primary representation layer from continuous coordinate field dynamics ($FCFT$ morphogenesis) to sequence-based discrete context graphs.
*   **Roadmap Changes Triggered**: Inserted Phase 39 (CSCG Integration) to replace the legacy continuous sensorimotor embedding phase.
*   **Confidence**: High
*   **Open Questions**: How do coordinate-based motor controls interface with discrete context-cloned nodes?
*   **Follow-Up Work**: Design a hybrid coordinate-to-graph projection layer.

### Paper: "Schema Networks: Zero-shot Transfer with a Generative Causal Model of Intuitive Physics" (arXiv:1706.04317)
*   **Core Idea**: Generalizable dynamics should be modeled as modular, object-oriented schemas (Condition-Action-Consequence templates) that decouple laws of physics from specific entity attributes.
*   **Impact on Synapse**: Displaced the monolithic continuous world-forecasting model with factorized Causal Schema Ecologies.
*   **Roadmap Changes Triggered**: Phase 40 is now dedicated to extracting and rebinding modular causal schemas.
*   **Confidence**: High
*   **Open Questions**: How does the system handle high-dimensional continuous features (e.g., fluid dynamics) within a discrete schema template?
*   **Follow-Up Work**: Formulate relations as variable-bound constraints.

### Paper: "Learning higher-order sequential structure with cloned HMMs" (arXiv:1905.00507)
*   **Core Idea**: Cloned Hidden Markov Models (CHMMs) can learn complex temporal patterns by cloning emission states and learning transition structures.
*   **Impact on Synapse**: Established that sequence-first learning is required before structural consolidation.
*   **Roadmap Changes Triggered**: Reprioritized sequence ingestion before continuous field optimization.
*   **Confidence**: High
*   **Open Questions**: Can the transition matrix be updated online without scaling memory usage?
*   **Follow-Up Work**: Benchmarking CHMM vs. continuous RNN benchmarks.

### Paper: "Schema-based active inference supports rapid generalization of experience and frontal cortical coding of abstract structure" (arXiv:2601.18946)
*   **Core Idea**: Active inference, when combined with structured schemas, allows rapid generalization by projecting expected free energy over alternative schemas.
*   **Impact on Synapse**: Unified planning and exploration under schema-based active inference.
*   **Roadmap Changes Triggered**: Phase 41 restructured around active epistemic schema selection.
*   **Confidence**: High
*   **Open Questions**: What are the homeostatic boundaries that regulate curiosity vs. exploit loops?
*   **Follow-Up Work**: Design the epistemic value reward signal.

---

## 2. Blue Brain Project

### Paper: "Topological analysis of the connectome of digital reconstructions of neural microcircuits" (arXiv:1601.01580)
*   **Core Idea**: Biological neural networks form high-dimensional directed cliques and cavities that govern information routing.
*   **Impact on Synapse**: Topological structure must constrain geometric coordinate movements to prevent chaotic attractor crystallization.
*   **Roadmap Changes Triggered**: Constrained morphogenesis updates via structural graph skeletons.
*   **Confidence**: Medium
*   **Open Questions**: How do we efficiently calculate topological invariants in real-time?
*   **Follow-Up Work**: Introduce sparse topological data analysis filters.

---

## 3. Karl Friston Research Group

### Paper: "Active Inference: A Process Theory" (Journal of Neuroscience, 2017)
*   **Core Idea**: Agents act to minimize variational free energy, balancing physical goal attainment (instrumental value) with information search (epistemic value).
*   **Impact on Synapse**: Overcame the "dark room" limitation of prediction-error minimization by adding epistemic goals.
*   **Roadmap Changes Triggered**: Grounding engine redesigned around active exploration paths.
*   **Confidence**: High
*   **Open Questions**: How are goal priorities scaled against physiological metabolic budgets?
*   **Follow-Up Work**: Connect physiological sensor damage to free energy scaling.

---

## 4. Stanford / Cornell / Cambridge / St. Andrews (Moore et al.)

### Paper: "Do Large Language Models Have a Planning Theory of Mind? Evidence from MINDGAMES: a Multi-Step Persuasion Task" (arXiv:2507.16196, 2025)
*   **Value to EarthOS**: 9/10 (Critical architectural distinction: Information Acquisition vs. Information Exploitation).
*   **Core Idea**: Highlights that reasoning models (like o1-preview) excel at information exploitation (planning and persuading when target preferences are already known) but fail completely at information acquisition (inquiring and gathering hidden information). While o1-preview outperforms humans when given target preferences, it performs below chance (11% lower than humans) when preferences must be discovered.
*   **Impact on Synapse / EarthOS**:
    1.  **Investigation as First-Class Subsystem**: Validates that investigation must be mandatory, not optional. Supports the primacy of the `Investigation Engine`.
    2.  **Missing Information Gating**: Supports the expansion of `EvidenceNeed` as a strict gate (Agents must recognize "I do not know enough yet").
    3.  **Active Model Building**: Reframes PToM as a general intelligence primitive (Unknown $\rightarrow$ Question $\rightarrow$ Evidence $\rightarrow$ Model $\rightarrow$ Action) rather than a narrow social ToM.
    4.  **Persistent World Model**: Emphasizes that multi-turn adaptation requires a persistent, online-evolving world model (which standard static LLMs lack, leading to stagnation across turns).

### Paper: "Large Language Models Persuade Without Planning Theory of Mind" (arXiv:2602.17045, 2026)
*   **Value to EarthOS**: 7/10
*   **Core Idea**: Shows that in naturalistic settings (interacting with humans), LLMs (o3) bypass the need for causal mental-state modeling entirely by exploiting human cooperativity and deploying rhetoric/verbosity heuristics. Exposes that "performance $\neq$ understanding" (effective persuasion does not imply causal modeling).
*   **Impact on Synapse / EarthOS**: Validates our focus on sequence-first explanatory foraging rather than statistical generation. Underlines the need to shield our own agent's beliefs from external rhetorical corruption.

*   **Roadmap Changes Triggered**: Mapped Phase 41.4 through 41.6.1 around **Information Gaps**, **Evidence Needs**, **Inquiry Construction**, and **Cognitive Streams** to ensure the agent gathers data before planning.
*   **Confidence**: High
*   **Open Questions**: Can the central vs. peripheral route distinction in target humans be modeled dynamically to adjust our agent's cognitive resource allocation?
*   **Follow-Up Work**: Refine the **Reality Consistency Engine** in Phase 42 to prevent rhetoric-driven belief corruption.

---

## 5. CREEM Research Group (Cowans et al.)

### Paper: "Improving the integration of artificial intelligence into existing ecological inference workflows" (Methods in Ecology and Evolution, 2026)
*   **Value to EarthOS**: 9/10 Architectural Relevance, 9.5/10 World-Model Relevance.
*   **Core Idea**: Exposes the massive disconnect in ML workflows between pattern classification (black-box label matching) and the inference pipeline (modelling the true latent process). Argues that optimizing classifiers is useless if the downstream inference pipeline is neglected, and warns that binary thresholding of confidence scores destroys crucial uncertainty data, introducing severe bias.
*   **Impact on Synapse / EarthOS**:
    1.  **Pattern Recognition vs. Inference**: Validates that AGI requires a dedicated World Model layer between perception and action. Better reasoning (`Classification`) on top of a flawed model (`Inference`) merely yields better wrong answers.
    2.  **Explicit Multi-Source Uncertainty**: Separation of Sensor Error (observation capture), Classification Error (feature labelling), and Inference Error (world model state). These must never collapse into a single confidence score.
    3.  **Separation of Detection and Classification**: Keeps "Something happened" (Detection) distinct from "What happened?" (Classification).
    4.  **No Binary Thresholding**: Avoids hard binary "Known/Unknown" splits; instead, propagates continuous belief distributions, contradiction pressures, and evidence strengths.
*   **Roadmap Changes Triggered**:
    -   **Phase 42.1 (Representation purification)**: Introduce distinct, isolated layers: `Observation Layer` $\rightarrow$ `Evidence Layer` $\rightarrow$ `Belief Layer` $\rightarrow$ `World Layer`.
    -   **Phase 42.2**: Structure every belief with metadata: *source, confidence, supporting evidence, contradicting evidence, and last validation tick*.
    -   **Phase 42.3**: Implement continuous belief dynamics: *belief strengthening, weakening, splitting, merging, and retirement* instead of binary overrides.
*   **Confidence**: High
*   **Open Questions**: How can we efficiently model continuous belief distributions within discrete schema graphs without combinatorial explosion?
*   **Follow-Up Work**: Formulate the mathematical propagation of multi-source uncertainty across the four representation layers.



