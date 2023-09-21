import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setHistory((prev) => {
      if (replace) {
        // Replace the current mode with the new mode
        const newHistory = [...prev];
        newHistory.pop(); // Remove the current mode
        return [...newHistory, newMode];
      } else {
        // Just add the new mode to history
        return [...prev, newMode];
      }
    });
  }

  function back() {
    
    if (history.length > 1) {
      setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
    }
  }

  return { mode: history[history.length - 1], transition, back };
}








 