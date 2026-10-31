# Empirical Research & Benchmark Experiments

This directory documents the empirical validation benchmarks of the **Synapse Cognitive Architecture** developed under Project **Earthos** by **earthoslab**.

---

## Featured Benchmark: 5.05-Hour Autonomous Distillation Run

* **Full Research Report:** [`5HR_AUTONOMOUS_DISTILLATION_RESEARCH_REPORT.md`](5HR_AUTONOMOUS_DISTILLATION_RESEARCH_REPORT.md)
* **Date Conducted:** October 31, 2026
* **Execution Duration:** 18,171.5 seconds (5.05 hours continuous, uninterrupted loop)
* **Teacher Oracle:** Local Ollama (`llama3.2:1b` on NVIDIA RTX 5070 Ti)
* **Student Architecture:** Synapse Autonomous Cognitive Substrate (Non-transformer, factor graph execution)
* **Curriculum Coverage:** 155 sequential modules across physical, biological, and computational sciences
* **Empirical Learning Metric:** 443 held-out diagnostic probes (**24.15% $\to$ 71.33%**, +47.18 pp net developmental gain; **4.22% $\to$ 69.28%** on first-encounter novel queries)
* **Power & Compute Profile:** Sub-5W execution on a single consumer CPU core (0 discrete GPUs required by the student in production)

---

## Evaluation Datasets

All raw numerical records and unedited probe logs are published in the [`data/`](../data/) directory:
* [`data/distillation_evaluation_probes.csv`](../data/distillation_evaluation_probes.csv): Complete 443 held-out diagnostic probe dataset with pre-test baseline, post-consolidation results, and inference latencies.
* [`data/distillation_time_series.csv`](../data/distillation_time_series.csv): 20-column numerical time series recorded across all 155 curriculum rounds.
