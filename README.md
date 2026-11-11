# Project Earthos · The Synapse Architecture
### earthoslab | Continuous Causal Intelligence

This repository houses the official public research announcements, empirical benchmark datasets, and technical white papers for **Synapse**, an autonomous, bio-inspired cognitive architecture developed by **earthoslab**.

**Official Laboratory Website:** [earthoslab.com](https://earthoslab.com)  
**Lead Architect & Founder:** Roshan Kumar Gupta ([roshan@earthoslab.com](mailto:roshan@earthoslab.com))  
**Laboratory Domain:** `earthoslab.com`

---

## Proprietary Research Architecture & IP Protection Notice

> **Research Transparency & Intellectual Property Policy:**  
> The core operational source code, biological factor graph algorithms, and internal training substrates of Synapse are **proprietary closed-source intellectual property of earthoslab**. 
> 
> This public repository serves exclusively as the official public research archive, publication announcements, and cryptographic benchmark data ledgers. All quantitative benchmark datasets, model outputs, latencies, and physical hardware telemetry logs are published in full for transparent third-party auditing and empirical verification.

---

## Catalog of Releases

### 🧠 [Release 4.0 (November 11, 2026) — Where Attention Ends: Physical Limits of Transformers & The Continuous Substrate](./releases/release_4.0_nov_2026/)
* **Executive Document:** [`PUBLIC_RELEASE_4_ANNOUNCEMENT.md`](./releases/release_4.0_nov_2026/PUBLIC_RELEASE_4_ANNOUNCEMENT.md)
* **Benchmark Scope:** Head-to-head empirical evaluation of Synapse against Meta Llama-3.1-8B and Llama-3.2-1B across 4 peer-reviewed academic suites (CLADDER, BABILong, AI2 ARC-Science, HumanEval), 100,000-word context scaling on an NVIDIA RTX 5070 Ti, and continuous stateful lifelong memory.
* **Benchmark Datasets & Raw Ledgers (`benchmark_data/`):**
  - [`part_a1_cladder_causal_reasoning.csv`](./releases/release_4.0_nov_2026/benchmark_data/part_a1_cladder_causal_reasoning.csv) (CLADDER causal DAG inference: Pearl's Ladder of Causation)
  - [`part_a2_babilong_distractor_retention.csv`](./releases/release_4.0_nov_2026/benchmark_data/part_a2_babilong_distractor_retention.csv) (BABILong needle retrieval across 1k–10k distractor words)
  - [`part_a3_arc_physical_science_qa.csv`](./releases/release_4.0_nov_2026/benchmark_data/part_a3_arc_physical_science_qa.csv) (AI2 ARC physical science multiple-choice reasoning)
  - [`part_a4_humaneval_python_coding.csv`](./releases/release_4.0_nov_2026/benchmark_data/part_a4_humaneval_python_coding.csv) (OpenAI HumanEval Python execution sandbox)
  - [`part_a_academic_baselines_scorecard.csv`](./releases/release_4.0_nov_2026/benchmark_data/part_a_academic_baselines_scorecard.csv) (Part A macro accuracy, latency, and power scorecard)
  - [`part_b_100k_word_horizon_scaling.csv`](./releases/release_4.0_nov_2026/benchmark_data/part_b_100k_word_horizon_scaling.csv) (100,000-word PG-19 context scaling & physical VRAM/wattage telemetry)
  - [`part_c_lifelong_persistence_scorecard.csv`](./releases/release_4.0_nov_2026/benchmark_data/part_c_lifelong_persistence_scorecard.csv) (100k-word lifelong persistence, zero-stutter retrieval, and online rule revision)
  - [`part_d_architectural_stress_scorecard.csv`](./releases/release_4.0_nov_2026/benchmark_data/part_d_architectural_stress_scorecard.csv) (Architectural edge-case battery: multi-hop, fan-in/out, prose noise, and density boundaries)
* **Key Innovations:**
  - **The "Brain & Mouth" Architecture:** Proves that LLMs are surface translators and static code compilers (Llama 8B achieves 92.0% on HumanEval, 82.0% on ARC), while Synapse provides the deterministic causal substrate and persistent memory controller.
  - **The Collapse of Edge LLMs:** Llama-3.2-1B collapses to 48.0% on CLADDER (coin flip) and 8.0% on BABILong distractor loads.
  - **The 100k-Word Hardware Wall:** Pushed a consumer RTX 5070 Ti to 99.2% VRAM (15,943 MB) and 302.1 Watts at 100k words, with 151.8 to 160.2-second query latencies (mean: 155.5s).
  - **Zero-Stutter Lifelong Persistence:** Synapse retrieves backward retrodiction in 5.29 ms median natively on CPU with 100% accuracy without prompt-history bloat, while stateless LLMs collapse to 15.0% without prompt re-sends.

---

### 🚀 [Release 3.0 (November 5, 2026) — The SICE Autonomous Cognitive Organism Evaluation](./releases/release_3.0_nov_2026/)
* **Compiled Publication PDF:** [`PUBLIC_RELEASE_3_ANNOUNCEMENT.pdf`](./releases/release_3.0_nov_2026/PUBLIC_RELEASE_3_ANNOUNCEMENT.pdf) (Complete formal publication)
* **Benchmark Datasets & Cryptographic Chains (`benchmark_data/`):**
  - [`benchmark_sice_pilot1_batteries.csv`](./releases/release_3.0_nov_2026/benchmark_data/benchmark_sice_pilot1_batteries.csv) (11-battery SICE Pilot-1 component evaluation baseline)
  - [`benchmark_sice_pilot1_battery2_paragraphs.csv`](./releases/release_3.0_nov_2026/benchmark_data/benchmark_sice_pilot1_battery2_paragraphs.csv) (Battery II raw scientific text parsing: 86.67% F1 Kuhn bipartite matching)
  - [`benchmark_sice_pilot2_per_world_lifecycle.csv`](./releases/release_3.0_nov_2026/benchmark_data/benchmark_sice_pilot2_per_world_lifecycle.csv) (10 procedural worlds across all 8 continuous cognitive stages)
  - [`benchmark_sice_pilot2_aggregate_metrics.csv`](./releases/release_3.0_nov_2026/benchmark_data/benchmark_sice_pilot2_aggregate_metrics.csv) (Macro performance scorecard with exact statistics, CIs, and p-values)
  - [`pilot1_benchmark_results.json`](./releases/release_3.0_nov_2026/benchmark_data/pilot1_benchmark_results.json) (Raw JSON Pilot-1 component verification)
  - [`pilot2_summary_results.json`](./releases/release_3.0_nov_2026/benchmark_data/pilot2_summary_results.json) (Raw JSON Pilot-2 summary metrics)
  - [`pilot2_audit_chain.jsonl`](./releases/release_3.0_nov_2026/benchmark_data/pilot2_audit_chain.jsonl) (Cryptographic SHA-256 tamper-evident verification ledger)
* **Key Innovations:**
  - **SICE-1 Pilot-1 Component Baseline:** 11/11 batteries passed in 5.06s. Unformatted raw text extraction achieves 86.67% F1 via constructivist grammar induction without LLMs.
  - **SICE-1 Pilot-2 Unbroken Organism Lifecycle:** 10 procedural worlds evaluated in 20.32s with 98.33% text recall and 100% active causal fault recovery (8/8 faults resolved, 2 avoided).
  - **Structural Analogy Transfer:** 80.0% zero-shot cross-domain analogy transfer ($p = 0.000416$ vs random chance).
  - **Synaptic Homeostasis & Continual Retention:** 479,621 synapses downscaled across 10 sleep cycles; 95.99% cumulative retention without catastrophic forgetting.
  - **Sub-Millisecond Sensorimotor Overhead:** 0.0407 ms sampling latency; 443.18 MB peak process RSS on a single consumer CPU core.

---

### 🌟 [Release 2.0 (November 2, 2026) — The Unified Cognitive Academy & Causal Discovery Benchmark](./releases/release_2.0_nov_2026/)
* **Executive Document:** [`PUBLIC_RELEASE_2_ANNOUNCEMENT.md`](./releases/release_2.0_nov_2026/PUBLIC_RELEASE_2_ANNOUNCEMENT.md)
* **Compiled Publication PDF:** [`PUBLIC_RELEASE_2_ANNOUNCEMENT.pdf`](./releases/release_2.0_nov_2026/PUBLIC_RELEASE_2_ANNOUNCEMENT.pdf) (Exact 3-page formal release)
* **Appended Benchmark Datasets (`benchmark_data/`):**
  - [`benchmark_adversarial_struggle_battery.csv`](./releases/release_2.0_nov_2026/benchmark_data/benchmark_adversarial_struggle_battery.csv) (175 adversarial struggle evaluations)
  - [`benchmark_parallel_cohort_scaling.csv`](./releases/release_2.0_nov_2026/benchmark_data/benchmark_parallel_cohort_scaling.csv) (8-student parallel cohort across 32 cores)
  - [`benchmark_exact_physics_reasoning.csv`](./releases/release_2.0_nov_2026/benchmark_data/benchmark_exact_physics_reasoning.csv) (6 exact physical equations, 0.00e+00 residual)
  - [`benchmark_component_ablations.csv`](./releases/release_2.0_nov_2026/benchmark_data/benchmark_component_ablations.csv) (5-condition component ablation suite)
  - [`benchmark_causal_discovery_30worlds.csv`](./releases/release_2.0_nov_2026/benchmark_data/benchmark_causal_discovery_30worlds.csv) (120 controlled runs across 30 micro-worlds)
  - [`benchmark_delayed_retention_sleep.csv`](./releases/release_2.0_nov_2026/benchmark_data/benchmark_delayed_retention_sleep.csv) (100.00% delayed retention post-sleep)
* **Key Innovations:**
  - **The Unified Cognitive Academy:** 94.97% Cold Baseline Accuracy, 98.67% Post-Grind Retest Accuracy (+75.00% jump on struggle items), 0.0910 Brier calibration score.
  - **32-Core Parallel Cohort Scalability:** 8 concurrent student organisms executed across 32 cores in 5.08s with 0.00% process variance (bit-level deterministic multiprocessing).
  - **Exact Quantitative Physics:** 6 physical equation systems solved on factor graphs with 0.00e+00 analytical residual.
  - **30-World Autonomous Causal Discovery:** 93.15% confounder rejection (SHD 48.4) via active inference vs 78.93% (SHD 83.9) passive observation.
  - **Zero Catastrophic Forgetting:** 100.00% delayed retention across all 30 micro-worlds post-sleep.
  - **Commodity CPU Execution:** Runs entirely on native host CPU with zero discrete GPUs required (flat process memory).

---

### 📦 [Release 1.0 (October 31, 2026) — The Tabula Rasa Proof of Concept](./releases/release_1.0_oct_2026/)
* **Executive Document:** [`PUBLIC_RELEASE_ANNOUNCEMENT.md`](./releases/release_1.0_oct_2026/PUBLIC_RELEASE_ANNOUNCEMENT.md)
* **Compiled Publication PDF:** [`PUBLIC_RELEASE_ANNOUNCEMENT.pdf`](./releases/release_1.0_oct_2026/PUBLIC_RELEASE_ANNOUNCEMENT.pdf)
* **Evaluation Dataset:** [`distillation_evaluation_probes.csv`](./releases/release_1.0_oct_2026/distillation_evaluation_probes.csv) (443 diagnostic probes)
* **Key Innovations:**
  - Initial demonstration of developmental distillation from tabula rasa across 155 modules and 874 episodes.
  - +47.18% net distillation gain across held-out forward prediction and backward retrodiction.
  - Sub-1.5 ms deterministic causal graph traversal with zero stochastic hallucination.
