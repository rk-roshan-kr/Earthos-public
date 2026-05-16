"""
sensorimotor_demo.py — Visualizing the sensorimotor loop.

This example provides a trace of the information flow between 
sensors, the world model, and actuators during a simple survival task.
"""

import sys
import os
import logging

# Add src to path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../src')))

from environment.base_environment import MockEnvironment

def main():
    logging.basicConfig(level=logging.INFO, format='%(name)s: %(message)s')
    logger = logging.getLogger("SynapseArch.SensorimotorDemo")

    env = MockEnvironment()
    logger.info("Starting sensorimotor trace...")

    for i in range(5):
        obs = env.get_observations()
        logger.info(f"Step {i} | Sense: {obs}")
        
        # Simplified "thought" process
        action = "move_forward"
        logger.info(f"Step {i} | Think: Selecting action '{action}'")
        
        result = env.step(action)
        logger.info(f"Step {i} | Act: Result {result}")

    logger.info("Sensorimotor trace complete.")

if __name__ == "__main__":
    main()
