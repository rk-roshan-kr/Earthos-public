"""
BaseEnvironment — Standard Interface for Research Environments.

Every environment used with Synapse Arch must implement this interface to 
ensure consistent sensory feedback and action execution.
"""

from abc import ABC, abstractmethod
from typing import Dict, Any, List

class BaseEnvironment(ABC):
    @abstractmethod
    def get_observations(self) -> Dict[str, Any]:
        """Returns the current sensory state of the environment."""
        pass

    @abstractmethod
    def step(self, action: Any) -> Dict[str, Any]:
        """Executes an action and returns the resulting state and reward."""
        pass

    @abstractmethod
    def reset(self) -> Dict[str, Any]:
        """Resets the environment to its initial state (for benchmarking only)."""
        pass

class MockEnvironment(BaseEnvironment):
    """A minimal survival-oriented mock environment for testing."""
    def __init__(self):
        self.state = {"energy": 100, "position": [0, 0]}

    def get_observations(self) -> Dict[str, Any]:
        return self.state

    def step(self, action: Any) -> Dict[str, Any]:
        # Simple depletion logic
        self.state["energy"] -= 1
        return {"obs": self.state, "reward": 0.1, "done": self.state["energy"] <= 0}

    def reset(self) -> Dict[str, Any]:
        self.state = {"energy": 100, "position": [0, 0]}
        return self.state
