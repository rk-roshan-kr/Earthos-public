<div align="center">

# Project Earthos · Synapse
### earthoslab | Continuous Causal Intelligence

**The Continuous Causal Computing Substrate for Autonomous Edge Intelligence**

[![Website](https://img.shields.io/badge/Website-earthoslab.com-0284c7?style=for-the-badge)](https://earthoslab.com)
[![Careers](https://img.shields.io/badge/Careers-Open_Applications-0284c7?style=for-the-badge)](https://earthoslab.com/careers)
[![Release](https://img.shields.io/badge/Release-4.0%20(Nov%202026)-0f172a?style=for-the-badge)](releases/release_4.0_nov_2026/)
[![Paper](https://img.shields.io/badge/White_Paper-PDF-dc2626?style=for-the-badge)](releases/release_4.0_nov_2026/PUBLIC_RELEASE_4_ANNOUNCEMENT.pdf)
[![Architecture](https://img.shields.io/badge/Architecture-Proprietary%20IP-f59e0b?style=for-the-badge)](#proprietary-technology--ip-notice)

<br/>

**Founder & Lead Architect:** Roshan Kumar Gupta  
**Laboratory:** `earthoslab` · **Contact:** [`roshan@earthoslab.com`](mailto:roshan@earthoslab.com)  
**Website:** [earthoslab.com](https://earthoslab.com)

</div>

---

## Executive Overview: Beyond Static Transformers

Modern artificial intelligence relies almost exclusively on monolithic Large Language Models (LLMs). While exceptional at natural language fluency and code generation, transformer self-attention encounters severe physical and architectural boundaries when deployed in autonomous, real-time, or edge environments:

* **Stateless Context Amnesia:** Transformers are episodic. They cannot maintain continuous lifelong memory without re-processing thousands of past tokens on every single query.
* **The Hardware & Energy Wall:** Dense full-attention scales quadratically. Pushing a leading 8B transformer across 100,000 words on a local GPU pins board power at 302 Watts, saturates 16 GB of VRAM (99.2%), and surges query latencies to over 2.5 minutes while accuracy collapses.
* **Stochastic Hallucination:** Optimizing next-token probabilities generates fluent syntax but lacks ground-truth causal invariants, leading to uncalibrated fabrications on unfamiliar domains.

### The Solution: The "Brain & The Mouth" Architecture

**earthoslab** develops **Synapse**, an autonomous, non-neural continuous cognitive substrate engineered from first principles:

| Capability Dimension | Monolithic LLMs (The "Mouth") | **Synapse (The "Brain")** |
| :--- | :--- | :--- |
| **Primary Role** | Language realization & code compilation | **Continuous causal reasoning & lifelong memory** |
| **Memory Persistence** | Stateless (Requires re-sending past context) | **Native lifelong persistence (0 past tokens re-sent)** |
| **Operational Hardware** | Massive GPU VRAM (16 GB - 80 GB+) | **Host CPU (0 MB GPU VRAM required)** |
| **Memory Footprint** | Bloats linearly with conversation history | **Flat predictable footprint (493 MB RAM)** |
| **Causal Grounding** | Probabilistic next-token sampling | **Deterministic causal graph proofs** |
| **Unfamiliar Queries** | High risk of stochastic hallucination | **0.0% false-positive rate (Epistemic abstention)** |
| **Edge Deployment** | Multi-hundred watt thermal limit | **Native edge execution on commodity hardware** |

> **The Sovereign Deployment Rule:** Use an LLM as the *mouth* to translate natural human dialogue into structured concepts; deploy **Synapse** as the *brain* to manage persistent world state, lifelong memory, and deterministic safety invariants locally.

---

## Proprietary Technology & IP Notice

> **Commercial Intellectual Property Policy:**  
> The core operational substrate, proprietary algorithms, and implementation source code of Synapse are **closed-source intellectual property of earthoslab**. 
> 
> As earthoslab operates as a commercial deep-tech startup, internal execution mechanics and state representations remain strictly proprietary. This public repository serves exclusively as the official archive for **executive release announcements, technical white papers, and empirical benchmark datasets**. All quantitative scorecards, model outputs, query latencies, and device telemetry logs are published in full for transparent third-party auditing and empirical validation.

---

## Empirical Release Catalog

### 🧠 [Release 4.0 (November 2026) — Where Attention Ends: Physical Limits of Transformers & The Continuous Substrate](./releases/release_4.0_nov_2026/)
* **Technical White Paper:** [`PUBLIC_RELEASE_4_ANNOUNCEMENT.pdf`](./releases/release_4.0_nov_2026/PUBLIC_RELEASE_4_ANNOUNCEMENT.pdf) *(Official 9-page formal paper with 8 canonical CSV datasets embedded)*
* **Executive Summary:** [`PUBLIC_RELEASE_4_ANNOUNCEMENT.md`](./releases/release_4.0_nov_2026/PUBLIC_RELEASE_4_ANNOUNCEMENT.md)
* **Empirical Datasets (`releases/release_4.0_nov_2026/benchmark_data/`):**
  - Standard academic baselines across 450 traces (CLADDER, BABILong, AI2 ARC-Science, OpenAI HumanEval).
  - 100,000-word context scaling telemetry on NVIDIA RTX 5070 Ti (latency, VRAM, and power draw).
  - 100,005-word lifelong persistence and online rule revision scorecard.
  - Architectural stress battery scorecard mapping edge-case failure boundaries.
  - Cryptographic checksum ledger: [`checksums.sha256`](./releases/release_4.0_nov_2026/benchmark_data/checksums.sha256).
* **Key Findings:**
  - **Hardware Wall:** Naive dense attention on an RTX 5070 Ti consumes 15,943 MB VRAM (99.2%), pulls 302.1W power, surges to 155s latency, and collapses to 0.0% accuracy at 100k words.
  - **Zero-Stutter Persistence:** Synapse recalled 100% of causal probes in **5.29 ms** on CPU with **zero past prompt history re-sent** after ingesting 100,005 continuous words. Stateless LLMs suffered near-total amnesia (15.0% score via guessing).
  - **Epistemic Abstention:** Achieved **0.0% false-positive assertions** on unfamiliar causal DAGs.

---

### 🚀 [Release 3.0 (November 2026) — Autonomous Cognitive Organism Evaluation](./releases/release_3.0_nov_2026/)
* **Technical White Paper:** [`PUBLIC_RELEASE_3_ANNOUNCEMENT.pdf`](./releases/release_3.0_nov_2026/PUBLIC_RELEASE_3_ANNOUNCEMENT.pdf)
* **Executive Summary:** [`PUBLIC_RELEASE_3_ANNOUNCEMENT.md`](./releases/release_3.0_nov_2026/PUBLIC_RELEASE_3_ANNOUNCEMENT.md)
* **Benchmark Datasets:** 11-battery component baseline, 10-world autonomous lifecycle logs, and cryptographic audit ledger.
* **Key Findings:**
  - Demonstrated end-to-end continuous learning and causal fault recovery across 10 complex procedural environments.
  - 95.99% cumulative knowledge retention across continuous sleep cycles without catastrophic forgetting.
  - Sub-millisecond sensorimotor latency with flat 443 MB peak process memory on consumer CPU.

---

### 🌟 [Release 2.0 (November 2026) — Causal Discovery & Robustness Benchmark](./releases/release_2.0_nov_2026/)
* **Technical White Paper:** [`PUBLIC_RELEASE_2_ANNOUNCEMENT.pdf`](./releases/release_2.0_nov_2026/PUBLIC_RELEASE_2_ANNOUNCEMENT.pdf)
* **Executive Summary:** [`PUBLIC_RELEASE_2_ANNOUNCEMENT.md`](./releases/release_2.0_nov_2026/PUBLIC_RELEASE_2_ANNOUNCEMENT.md)
* **Benchmark Datasets:** Adversarial struggle battery, 30-world causal discovery logs, parallel scaling telemetry, and retention scorecards.
* **Key Findings:**
  - 93.15% confounder rejection across 30 autonomous discovery environments.
  - 100.00% delayed retention across all environments with zero catastrophic interference.
  - Concurrent deterministic execution across 32 CPU cores with zero process variance.

---

### 📦 [Release 1.0 (October 2026) — The Continuous Baseline Proof of Concept](./releases/release_1.0_oct_2026/)
* **Technical White Paper:** [`PUBLIC_RELEASE_ANNOUNCEMENT.pdf`](./releases/release_1.0_oct_2026/PUBLIC_RELEASE_ANNOUNCEMENT.pdf)
* **Executive Summary:** [`PUBLIC_RELEASE_ANNOUNCEMENT.md`](./releases/release_1.0_oct_2026/PUBLIC_RELEASE_ANNOUNCEMENT.md)
* **Evaluation Dataset:** 443 diagnostic evaluation probes dataset.
* **Key Findings:**
  - Initial proof of concept for continuous online distillation without weight overwriting.
  - +47.18 percentage point net learning gain on held-out prediction and retrodiction probes.
  - Deterministic sub-1.5 ms causal graph traversal with zero stochastic fabrication.

---

## Careers at earthoslab · Open Applications

While we do not have immediate active openings today, earthoslab continuously reviews rolling and speculative applications from world-class researchers, systems engineers, and computational neuroscientists. 

If you are obsessed with moving beyond brute-force transformer scaling and want to build the next paradigm of sovereign continuous causal intelligence, we welcome your application:

* 🌐 **Submit Application:** [earthoslab.com/careers](https://earthoslab.com/careers)
* 🔬 **Disciplines of Interest:**
  - **Research:** Non-Autoregressive Architectures, Continuous Memory Substrates, Active Inference, and Computational Neuroscience.
  - **Systems Engineering:** High-Performance C/C++/Rust Systems, Compilers & Graph Runtimes, Embedded Edge Execution.
  - **Hardware & Silicon:** Low-Power Edge Compute, Neuromorphic & Sovereign Offline Accelerators.
* 📩 **Direct Inquiries:** Send an introduction, GitHub profile, or links to exceptional work directly to [`roshan@earthoslab.com`](mailto:roshan@earthoslab.com).

---

## Commercial Briefings & Inquiries

For technical briefings, enterprise deployment discussions, or institutional partnerships:

* **Founder & Lead Architect:** Roshan Kumar Gupta
* **Direct Email:** [`roshan@earthoslab.com`](mailto:roshan@earthoslab.com)
* **Official Website:** [earthoslab.com](https://earthoslab.com)
* **Organization:** `earthoslab`

---
<div align="center">
<small>© 2026 earthoslab. All rights reserved. Synapse and the Continuous Causal Substrate are proprietary technologies of earthoslab.</small>
</div>
