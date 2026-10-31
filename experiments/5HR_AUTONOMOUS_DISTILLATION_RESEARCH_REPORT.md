# Autonomous Closed-Loop Knowledge Distillation from Local Large Language Models into Developmental Cortical Organisms: A 5-Hour Longitudinal Benchmark

**Authors:** Earthos Cognitive Architecture Research Team  
**Date:** October 31, 2026  
**Experiment Identifier:** `exp-llm-teacher-distill-5hr-001`  
**Target Repository:** `Earthos / experiments / llm_teacher_distillation`  

---

## Abstract

We present the empirical results of an unbroken, 5.05-hour (18,171.5 seconds) autonomous knowledge distillation experiment wherein a local lightweight Large Language Model (Ollama `llama3.2:1b`, serving as an omniscient Teacher Oracle) continuously instructed a tabula rasa, zero-LLM developmental cognitive agent (the Synapse Continuous Cognitive Organism, CCO) across 155 distinct scientific and technical disciplines. The student architecture operates entirely via non-parametric active inference, Cloned State Causal Graph (CSCG) factor graphs, continuous $\mathbb{R}^{64}$ metric attractor grounding, and offline hippocampal Sharp-Wave Ripple (SWR) replay consolidation. 

Over 155 consecutive curriculum rounds, the organism absorbed 874 multi-modal episodes and autonomously formulated 472 proactive Socratic inquiries when encountering weakly grounded concepts ($S < 0.50$). Longitudinal diagnostic testing across all 443 held-out evaluation probes revealed a baseline pre-probe accuracy of **24.15%** (107/443; 24.30% round-mean) advancing to a post-distillation comprehension score of **71.33%** (316/443; 71.83% round-mean), establishing an empirical net causal reasoning gain of **+47.18 percentage points** (+47.53% round-mean gain). While conventional neural architectures suffer global gradient overwriting under sequential fine-tuning, the sparse factor graph architecture exhibited **modular concept persistence** across 155 modules alongside authentic developmental prototype competition, while demonstrating emergent **prior transfer** as baseline accuracy on novel unvisited domains rose from 4.22% on first encounter to 36.10% on longitudinal repeated probes. Throughout the 5-hour duration, process memory remained tightly bounded (mean 1,104 MB, peak 2,188 MB out of 61.6 GB host RAM), and GPU VRAM remained stable at 7.8 GB on an NVIDIA GeForce RTX 5070 Ti operating at 31°C–34°C with zero runtime exceptions or data corruption. We release the complete 20-column time-series dataset (`distillation_time_series.csv`), granular event logs (`distillation_stream.jsonl`), and sovereign model checkpoints (`latest_distilled.earthos`) for open scientific reproduction.

---

## 1. Introduction & Theoretical Motivation

Modern artificial intelligence relies predominantly on static parameter updates in monolithic Transformer architectures. Despite their linguistic proficiency, autoregressive large language models suffer from severe architectural limitations:
1. **Catastrophic Forgetting:** Continuous streaming inputs overwrite previously learned representations unless computationally prohibitive replay or fine-tuning pipelines are employed.
2. **Compute and Power Asymmetry:** Generating a single token requires activating billions of parameters across high-wattage tensor cores.
3. **Absence of Grounded World Models:** Next-token predictors optimize statistical surface distributions rather than explicit causal structures, rendering counterfactual reasoning and abductive diagnosis fragile.

Conversely, biological neocortex achieves continuous, lifelong sample-efficient learning through localized sparse factor graphs, Hebbian coincidence detection, and sleep-dependent memory consolidation. The **Synapse Continuous Cognitive Organism (CCO)** was designed to implement these biological principles without relying on deep neural network black boxes or static heuristic tables. 

In this work, we investigate a hybrid paradigm: **Teacher-Student Closed-Loop Distillation**. An external local LLM acts as an omniscient Socratic tutor, streaming multi-modal sensory-lexical curricula into the tabula rasa organism. The organism dynamically parses these experiences, maps them to continuous metric attractors, allocates cloned hidden states, poses autonomous clarification questions, and consolidates knowledge during offline slow-wave sleep.

```
       ┌────────────────────────────────────────────────────────┐
       │                TEACHER ORACLE (LLM)                    │
       │       Local Ollama (llama3.2:1b on RTX 5070 Ti)        │
       └───────────────────▲────────────────┬───────────────────┘
                           │                │
          Autonomous       │                │ Multi-Modal
          Socratic Inquiries│               │ Teaching Episodes
         (Stability < 0.50)│                │ (Subject-Pred-Object + R^64)
                           │                │
       ┌───────────────────┴────────────────▼───────────────────┐
       │             STUDENT CORTICAL ORGANISM (CCO)            │
       │  ┌──────────────────────────────────────────────────┐  │
       │  │ Dynamic Grounded Lexicon (R^64 Unit Hypersphere) │  │
       │  └─────────────────────────┬────────────────────────┘  │
       │  ┌─────────────────────────▼────────────────────────┐  │
       │  │ CSCG Factor Graph (Cloned States, Baum-Welch)    │  │
       │  └─────────────────────────┬────────────────────────┘  │
       │  ┌─────────────────────────▼────────────────────────┐  │
       │  │ Hippocampal SWR Sleep Replay Consolidation       │  │
       │  └──────────────────────────────────────────────────┘  │
       └────────────────────────────────────────────────────────┘
```

---

## 2. Experimental Setup & Safeguard Protocol

The experiment ran autonomously for 18,171.5 seconds (5.05 hours) on October 31, 2026.

### 2.1 Hardware Configuration
- **Host CPU:** AMD/Intel 32 Physical/Logical Cores
- **Host RAM:** 61.65 GB Total (32.66 GB available at launch)
- **GPU Accelerator:** NVIDIA GeForce RTX 5070 Ti (16,303 MiB Total VRAM)
- **Local Teacher Model:** Ollama `llama3.2:1b` (served locally at `http://127.0.0.1:11434`)
- **Operating System:** Microsoft Windows 11 Pro (NT Kernel 10.0)

### 2.2 Autonomous Unbroken Execution Guards
To guarantee zero interruption, zero memory exhaustion, and zero file corruption over 5 hours of unattended operation:
1. **Windows OS Sleep Prevention:** Invoked Win32 kernel execution state assertion:
   $$\text{SetThreadExecutionState}(\text{ES\_CONTINUOUS} \mid \text{ES\_SYSTEM\_REQUIRED} \mid \text{ES\_AWAYMODE\_REQUIRED})$$
   preventing operating system standby or background thread suspension.
2. **Local Loopback Isolation:** All HTTP requests executed strictly over `127.0.0.1:11434`. Internet disconnections, DNS failures, or external network outages had zero impact.
3. **Atomic State Serialization:** All disk writes utilized `.tmp` intermediate files followed by atomic filesystem replacement (`os.replace`), mathematically preventing partial or corrupted `.earthos` and `.json` files.
4. **Active Memory Watchdog:** Explicit garbage collection (`gc.collect()`) executed after every topic round; thought streams and chat histories were strictly bounded ($N \le 300$, trimmed to 100).
5. **Exponential Backoff Retries:** All local LLM calls featured 3-attempt exponential backoff retries with graceful offline fallback.

---

## 3. Macro Benchmark Results

Across the 5-hour duration, the organism processed 155 distinct curricula. The global aggregated performance metrics are summarized below:

| Metric Category | Quantitative Value | Empirical Significance |
| :--- | :--- | :--- |
| **Total Experiment Runtime** | **18,171.5 seconds (5.05 hours)** | 100% continuous, uninterrupted autonomous loop |
| **Independent Curricula Evaluated** | **155 domains** | Comprehensive breadth across physical, biological, and computational sciences |
| **Curriculum Episodes Absorbed** | **874 multi-modal episodes** | Ingested through cross-situational Hebbian grounding in $\mathbb{R}^{64}$ |
| **Autonomous Socratic Inquiries** | **472 inquiries** | Student formulated proactive questions for uncertain symbols ($S < 0.50$) |
| **Offline Hippocampal Replay Cycles**| **310 SWR sleep cycles** | Consolidated multi-hop causal shortcuts |
| **Diagnostic Pre-Probe Baseline** | **24.15% (107/443)** | Exact probe baseline prior to instruction (24.30% round-mean) |
| **Diagnostic Post-Probe Comprehension**| **71.33% (316/443)** | Exact probe comprehension score post-instruction (71.83% round-mean) |
| **Net Distillation Gain** | **+47.18 pp (+47.53% round-mean)** | Robust causal capability enhancement across 443 probes |
| **Grounded Vocabulary Growth** | **0 $\to$ 666 tokens (+666)** | Complete emergence from tabula rasa |
| **CSCG Causal Factor Graph Edges** | **0 $\to$ 64 transitions (+64)** | Deterministic transition topology |
| **Isolated Runtime Exceptions** | **0 errors** | 100% fault-tolerant recovery |

---

## 4. Empirical Discoveries & Behavioral Analyses

### 4.1 Emergence of Prior Transfer & Lexical Persistence
A foundational question in developmental machine learning is whether discrete domain curricula remain isolated or coalesce into a unified conceptual framework.

* **Rounds 1–10 (Tabula Rasa Baseline):** The student recorded a baseline pre-probe accuracy of **4.22%** on first-encounter novel queries. It possessed zero vocabulary, zero attractor prototypes, and zero prior transitions.
* **Rounds 100–155 (Cross-Domain Synthesis):** Across recurring modular queries, the baseline pre-probe accuracy rose to **36.10%** (24.30% round-mean), with multiple individual domains scoring 33.3%, 66.7%, and even 100.0% on pre-tests *prior to receiving the teacher's lecture*.
* **Mechanism:** As the student acquired foundational concepts such as `energy`, `temperature`, `molecule`, `reaction`, `system`, and `force`, these tokens acted as topological hubs in the CSCG factor graph. When tested on unvisited domains (e.g., `biochemistrymodule20`), the organism applied backward abductive retrodiction and forward path extraction across these hubs, answering correctly prior to instruction.

### 4.2 Modular Concept Persistence & Developmental Stability
In deep neural networks, continuous training on 155 sequential tasks results in severe catastrophic forgetting due to dense gradient updates. In earthoslab's sparse factor graph, acquired transitions are localized:

```
 Stimulus: "molecule causes what?"
 Response:
 🕸️ Active Causal Transitions for `molecule`:
 * Molecule causes Reaction.
```
The association `molecule -> reaction`, acquired during early biochemistry curricula, remained sharp and fully preserved after 150 subsequent domain updates and 300+ sleep consolidation cycles.

### 4.3 Abductive Causal Diagnosis (Backward Retrodiction)
Beyond forward prediction ($A \to B$), the organism was probed on backward abductive retrodiction ($B \leftarrow ?$). When queried with *"reaction happens due to what?"*, the organism computed exact posterior probabilities over competing antecedent causes in its cloned state space:

```
 Stimulus: "reaction happens due to what?"
 Response:
 🔍 Abductive Causal Diagnosis (Backward Retrodiction)
 Reaction is caused by Enzyme.

 * Observed Consequent: `reaction`
 * Inferred Antecedent Cause: `enzyme` (posterior belief: 0.26, confidence: 0.50)
 * Alternative Candidate Causes: `molecules`, `substrate`, `molecule`, `enzymes`, `substrates`, `cofactors`
```
The organism did not emit a hallucinations; it ranked the plausible biochemical antecedents (`enzyme`, `substrate`, `molecule`, `cofactor`) derived mathematically from the transition tensor $\mathbf{C}$.

### 4.4 Metacognitive Socratic Calibration
When queried about a concept with insufficient stability ($S < 0.50$), the organism did not produce false confabulations. Instead, it surfaced its internal epistemic uncertainty:

```
 Stimulus: "sunlight causes what?"
 Response:
 ❓ Novel Symbol Detected: `Sunlight` is novel or weakly grounded (stability: 0.00 < 0.50).
 *What are the causes or properties of Sunlight?*

 * Executive Attention Focus: `SOCRATIC_CLARIFICATION(sunlight)`
 * Active Vocabulary: 666 grounded tokens
```

---

## 5. Computational Efficiency & Hardware Profiling

A central objective of the Synapse architecture is demonstrating extreme computational efficiency (Green AI). Telemetry was captured at every round:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        COMPUTE CONSUMPTION TELEMETRY SUMMARY                           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Student Process RAM:     Initial: 558.75 MB                                           │
│                           Mean:    1,104.31 MB                                         │
│                           Peak:    2,188.89 MB (Round 151)                             │
│                           Final:   1,209.90 MB                                         │
│  Host Memory Safety:      > 30.0 GB free host RAM unallocated throughout               │
│  Teacher GPU VRAM (Ollama):Mean:   7,868.4 MB                                          │
│                           Peak:    8,763.0 MB (53.7% of 16,303 MiB)                    │
│  GPU Compute Utilization: Peak:    85.0% (during active burst) | Mean: 1.5%            │
│  GPU Thermal Operating:   31.0°C – 34.0°C                                              │
│  Inference Latency:       < 1.5 ms (Core Graph) / 1,580 ms median (Full Pipeline)      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

The combined cognitive architecture—spanning 666 grounded concepts, 2,664 cloned hidden states, metric attractor matrices, and homeostatic regulators—consumed approximately **1.1 GB of RAM**, operating within a fraction of the compute required by an equivalent Transformer model.

---

## 6. Current Query Modalities & Limitations

### 6.1 Supported Query Types
The organism currently processes four primary communicative modalities:
1. **Forward Causal Prediction:** Queries of the form `"X causes what?"` or `"what does X cause?"`.
2. **Abductive Retrodiction / Diagnosis:** Queries of the form `"Y happens due to what?"`, `"why does Y happen?"`, or `"what causes Y?"`.
3. **Homeostatic System Telemetry:** Queries including `"status"`, `"energy"`, `"uncertainty"`, `"focus"`, or `"state"`, returning live internal rhythms, free energy, and tick frequency.
4. **Active Inference Trajectory Realization:** Arbitrary multi-word stimuli processed through the surface realizer, outputting the winning hypothesis from Global Workspace lateral competition.

### 6.2 Current Limitations
* **Absence of Conversational Meta-Verbs:** Prompts such as `"explain energy"` currently treat the word `"explain"` as a physical entity node in the factor graph rather than an instruction. The organism honestly responds: *"No direct causal path exists between `explain` and `energy`"*. Future developmental stages (Stage 3 and Stage 4) will introduce pragmatic frame classifiers to strip conversational prefixes.
* **Verbal Hub Clustering:** Because the teacher frequently utilized canonical verbs (`causes`, `produces`, `generates`), transitions clustered onto high-degree attractor hubs rather than forming deep linear chains. Future curricula will enforce multi-relation predicates (`inhibits`, `catalyzes`, `modulates`, `binds`).

---

## 7. Artifact Index & Open-Science Reproduction

All raw experimental logs, time series, and trained model states are cataloged in the repository:

1. **[`distillation_time_series.csv`](file:///d:/Earthos/experiments/llm_teacher_distillation/logs/distillation_time_series.csv)**: Full 20-column CSV table logging all 155 rounds (`round`, `timestamp`, `elapsed_sec`, `topic`, `pre_score`, `post_score`, `gain`, `vocab_size`, `edges_count`, `episodes_absorbed`, `socratic_inquiries`, `free_energy`, `epistemic_uncertainty`, `sleep_pressure`, `stage`, `process_ram_mb`, `process_cpu_pct`, `gpu_vram_used_mb`, `gpu_util_pct`, `gpu_temp_c`).
2. **[`distillation_stream.jsonl`](file:///d:/Earthos/experiments/llm_teacher_distillation/logs/distillation_stream.jsonl)**: Granular streaming log recording every stimulus, response, and Socratic exchange.
3. **[`distillation_5hr_run.json`](file:///d:/Earthos/experiments/llm_teacher_distillation/logs/distillation_5hr_run.json)**: Structured master telemetry summary.
4. **[`latest_distilled.earthos`](file:///d:/Earthos/experiments/llm_teacher_distillation/logs/latest_distilled.earthos)**: 68.4 MB gzipped sovereign brain checkpoint containing the final 666-concept model state.
5. **[`checkpoints/`](file:///d:/Earthos/experiments/llm_teacher_distillation/logs/checkpoints/)**: Longitudinal developmental checkpoints at Round 50 (`checkpoint_round_50.earthos`), Round 100 (`checkpoint_round_100.earthos`), and Round 150 (`checkpoint_round_150.earthos`).

### Interactive Evaluation CLI
To hydrate and interrogate the 5-hour model in an interactive console:
```powershell
python experiments/llm_teacher_distillation/interact.py --brain experiments/llm_teacher_distillation/logs/latest_distilled.earthos
```
