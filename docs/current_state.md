# Current State & Capabilities

This document provides a realistic, unpolished assessment of where the Earthos research platform actually stands. We explicitly separate what is working from what is being investigated, and what is genuinely unknown.

---

## Research Status

| Capability | Status |
|---|---|
| Deterministic runtime and execution replay | Operational |
| Persistent memory across session boundaries | Operational |
| Context Executive Layer (Gating) | Prototype |
| Schema Ecology (Prediction tracking) | Prototype |
| Probabilistic Belief Ecology | Prototype |
| Basic Forward World Models | Prototype |
| Counterfactual Search Engine | Conceptual |
| State Cloning Engine (Identity tracking) | Conceptual |
| Decision Ecology (Multi-pressure planning) | Conceptual |
| Developmental Adaptation Engine | Conceptual |
| Field coupling dynamics (FCFT) | Experimental Hypothesis |

**Operational** means running code with validated behavior in research environments.  
**Prototype** means partial implementation under active testing — it sometimes works, sometimes fails, and we understand roughly why.  
**Conceptual** means theoretically defined and accepted via architecture migrations, but no production code exists yet. Aspirational research direction.  
**Experimental Hypothesis** means an unproven representational paradigm being tested alongside core mechanics.

---

## Validation Approach

We verify system integrity through structured experimental cycles that test the substrate across a range of conditions: normal operation, adversarial noise injection, environmental rule changes, and extended long-horizon execution.

The core thing we are checking is not task performance. It is developmental integrity — whether the system maintains coherent representational structure and behavioral competence over time, under conditions it wasn't specifically prepared for.

---

## What Is Actually Working

The substrate successfully maintains state across session boundaries. A system that runs today will start tomorrow from where it left off — with the same memory associations, the same learned priors, and the same schemas. The "clean slate" assumption is broken by design.

Under bounded synthetic environments, the system demonstrates improved behavioral competence over time compared to stateless episodic baselines. The persistence advantage is empirically observable, not just theoretically expected.

The governance layer successfully prevents the most dangerous failure modes we've encountered: shadow execution, self-referential optimization loops, and unconstrained representational growth.

---

## Known Hard Problems

### The Homeostasis vs. Adaptation Dilemma

This is the central unsolved tension in the architecture.

To maintain coherent self-model continuity, the governance layer dampens representational updates during high-pressure environmental transitions. This protection is necessary — without it, the agent's identity fractures and it loses access to its own history.

But the protection creates a serious problem: when the environment genuinely changes its rules, the agent cannot adapt. It chooses stable ignorance over disruptive learning. It maintains its prior **World Model** even as prediction errors accumulate, because the cost of restructuring feels greater than the cost of being wrong.

> [!NOTE]
> **Phase 38.1**: We ran the agent through a ruleset inversion experiment. Instead of adapting, the system locked into its existing world model and accepted persistent high prediction error rather than allow its representational geometry to reorganize. It chose stagnation over self-modification. We have since improved the balance between continuity protection and adaptive flexibility — but this tension has not been resolved.

### Causal Learning Under Noise

The causal learning subsystem requires clean, structured observational conditions to reliably extract causal relationships. When sensory noise is high, it mistakes random temporal correlations for genuine causal structure and pursues meaningless optimization paths.

Active inference — the ability to test causal hypotheses by taking deliberate actions to reduce uncertainty (Epistemic Curiosity) — partially addresses this. But the solution is incomplete.

### Predictive Model Fragility Under High Entropy

The predictive World Model struggles in high-entropy conditions. When environmental variance exceeds the system's developmental tolerance, it can enter a kind of representational panic — wiping short-term structure to escape the noise rather than adapting to it. This is the cognitive equivalent of a system crash followed by a reboot.

We have made this failure mode less frequent. We have not eliminated it.

---

## What We Are Not

We are not a production system. We are not a finished architecture. We are not claiming general intelligence.

We are a research project investigating whether the developmental predictive cognition approach described here actually works at scale, under real-world conditions, over real developmental timescales.

The honest answer, as of now: it partially works in bounded conditions. Whether it can survive the open world remains the central empirical question.

> [!NOTE]
> Internal validation pipeline details, experimental telemetry, and lifecycle audit mechanics are maintained in research archives and are excluded from public documentation.
