import { SCENARIOS } from '../data/scenarios';
import type { Scenario, TraceEvent } from '../data/scenarios';

export interface ExecutionProvider {
  getScenarios(): Scenario[];
  executeScenario(scenarioId: string, onEvent: (event: TraceEvent) => void, onComplete: () => void): void;
}

export class DemoExecutionProvider implements ExecutionProvider {
  getScenarios(): Scenario[] {
    return SCENARIOS;
  }

  executeScenario(scenarioId: string, onEvent: (event: TraceEvent) => void, onComplete: () => void): void {
    const scenario = SCENARIOS.find(s => s.id === scenarioId);
    if (!scenario) {
      onComplete();
      return;
    }

    const events = [...scenario.events].sort((a, b) => a.timestampOffset - b.timestampOffset);
    let completedCount = 0;

    events.forEach(event => {
      setTimeout(() => {
        onEvent(event);
        completedCount++;
        if (completedCount === events.length) {
          setTimeout(onComplete, 500); // little buffer before complete
        }
      }, event.timestampOffset);
    });
  }
}

// Future implementation could be LiveExecutionProvider using actual n8n webhooks
export class LiveExecutionProvider implements ExecutionProvider {
  getScenarios(): Scenario[] {
    return SCENARIOS; // Might still use scenarios for basic dropdown population, or fetch dynamically
  }

  executeScenario(_scenarioId: string, _onEvent: (event: TraceEvent) => void, onComplete: () => void): void {
    console.warn("LiveExecutionProvider is not yet implemented. Set VITE_N8N_WEBHOOK_URL to enable.");
    onComplete();
  }
}

// Provide appropriate provider based on env
export function getExecutionProvider(): ExecutionProvider {
  const liveUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
  if (liveUrl) {
    return new LiveExecutionProvider();
  }
  return new DemoExecutionProvider();
}
