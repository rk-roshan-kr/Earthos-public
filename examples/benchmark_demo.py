"""
benchmark_demo.py — Running the Competence Scaling Harness.

This example demonstrates how to evaluate an agent's performance 
using the standardized competence metrics of Synapse Arch.
"""

import sys
import os
import logging

# Add src to path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../src')))

from benchmarking.competence_harness import CompetenceScalingHarness
from environment.base_environment import MockEnvironment

def main():
    logging.basicConfig(level=logging.INFO, format='%(name)s: %(message)s')
    logger = logging.getLogger("SynapseArch.BenchmarkDemo")

    env = MockEnvironment()
    agent = {} # Mock agent
    harness = CompetenceScalingHarness(agent, env)

    logger.info("Starting Competence Benchmark [Survival-v1]...")
    metrics = harness.run_benchmark("Survival-v1", duration_ticks=50)
    
    logger.info(f"Benchmark results: {metrics}")
    
    competence = harness.get_aggregate_competence()
    logger.info(f"Aggregate Cognitive Competence: {competence:.2f}")

if __name__ == "__main__":
    main()
