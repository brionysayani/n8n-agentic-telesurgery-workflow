export interface Integration {
  id: string;
  name: string;
  description: string;
}

export const INTEGRATIONS: Integration[] = [
  {
    id: "n8n",
    name: "n8n",
    description: "Deterministic orchestration, workflow control, and conditional routing."
  },
  {
    id: "gemini",
    name: "Google Gemini",
    description: "AI reasoning and contextual decision-making inside specialized agents."
  },
  {
    id: "sheets",
    name: "Google Sheets",
    description: "Persistent workflow state, execution logs, and output records."
  },
  {
    id: "gmail",
    name: "Gmail",
    description: "Automated security event and failure notifications."
  },
  {
    id: "github",
    name: "GitHub / HTTP",
    description: "External dataset retrieval and telemetry input sources."
  },
  {
    id: "webhooks",
    name: "Webhooks / REST APIs",
    description: "Event-driven communication between independent orchestration workflows."
  }
];
