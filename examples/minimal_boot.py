"""
minimal_boot.py — Demonstrates the Synapse Arch startup sequence.

This example initializes the core substrate and runs a series of 
cognitive cycles in a mock environment.
"""

import sys
import os
import logging

# Add src to path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../src')))

from runtime.execution_kernel import ExecutionKernel
from runtime.governance_kernel import GovernanceKernel
from runtime.telemetry_kernel import RuntimeTelemetryKernel
from reasoning.inference_kernel import InferenceKernel
from learning.grounded_rl_kernel import GroundedReinforcementKernel
from embodiment.embodiment_loop import EmbodimentLoop
from environment.base_environment import MockEnvironment

def main():
    # Configure logging for research visibility
    logging.basicConfig(level=logging.INFO, format='%(name)s: %(message)s')
    logger = logging.getLogger("SynapseArch.Boot")

    logger.info("Initializing Synapse Arch Substrate...")

    # 1. Setup Configuration
    config = {
        "tick_rate_hz": 1,
        "telemetry_buffer_size": 1,
        "audit_interval_ticks": 5
    }

    # 2. Instantiate Sovereign Kernels
    execution = ExecutionKernel(config)
    governance = GovernanceKernel(config)
    telemetry = RuntimeTelemetryKernel(config)
    inference = InferenceKernel(config)
    rl = GroundedReinforcementKernel(config)

    # 3. Setup Environment and Embodiment Loop
    env = MockEnvironment()
    embodiment = EmbodimentLoop({"Inference": inference, "RL": rl}, env)

    # 4. Register Kernels with Execution Kernel
    kernels = {
        "Telemetry": telemetry,
        "Governance": governance,
        "Inference": inference,
        "RL": rl,
        "Embodiment": embodiment
    }
    execution.register_kernels(kernels)

    # 5. Start Cognitive Loop (Run for 10 ticks)
    logger.info("Substrate initialized. Starting cognitive loop...")
    execution.start_loop(max_ticks=10)

    logger.info("Demo complete.")

if __name__ == "__main__":
    main()
