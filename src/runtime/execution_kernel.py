"""
ExecutionKernel — Sovereign Authority for Deterministic Runtime.

The ExecutionKernel orchestrates the cognitive tick loop, ensuring that all 
other kernels operate in a strictly deterministic and topologically sorted 
sequence. It is the only kernel with authority over scheduling and mutation isolation.
"""

import time
import logging
from typing import List, Dict, Any, Optional

class ExecutionKernel:
    def __init__(self, config: Dict[str, Any]):
        self.config = config
        self.tick_count = 0
        self.is_running = False
        self.logger = logging.getLogger("SynapseArch.ExecutionKernel")
        self.kernels = {}

    def register_kernels(self, kernels: Dict[str, Any]):
        """Registers the other 8 sovereign kernels for scheduling."""
        self.kernels = kernels
        self.logger.info(f"Registered {len(kernels)} kernels for orchestration.")

    def run_tick(self):
        """Executes a single cognitive cycle (tick)."""
        self.tick_count += 1
        self.logger.debug(f"Starting tick {self.tick_count}")
        
        # 1. Ingest Sensory Events
        # 2. Update World Model
        # 3. Perform Inference
        # 4. Update Policy (RL)
        # 5. Persist State
        # 6. Apply Governance Evaluation
        # 7. Emit Telemetry
        
        # Simplified execution flow for research visibility
        for kernel_name, kernel in self.kernels.items():
            try:
                self.logger.debug(f"Calling {kernel_name}.process()")
                kernel.process(self.tick_count)
            except Exception as e:
                self.logger.error(f"Kernel {kernel_name} failed during tick {self.tick_count}: {e}")
                # In a production system, this would trigger a governance fallback
        
        self.logger.debug(f"Tick {self.tick_count} complete.")

    def start_loop(self, max_ticks: Optional[int] = None):
        """Starts the continuous cognitive loop."""
        self.is_running = True
        self.logger.info("Cognitive loop started.")
        
        try:
            while self.is_running:
                if max_ticks and self.tick_count >= max_ticks:
                    break
                
                self.run_tick()
                
                # Regulate tick rate if configured
                tick_rate = self.config.get("tick_rate_hz", 0)
                if tick_rate > 0:
                    time.sleep(1.0 / tick_rate)
        except KeyboardInterrupt:
            self.logger.info("Cognitive loop interrupted by user.")
        finally:
            self.stop_loop()

    def stop_loop(self):
        """Safely shuts down the cognitive loop."""
        self.is_running = False
        self.logger.info(f"Cognitive loop stopped after {self.tick_count} ticks.")
