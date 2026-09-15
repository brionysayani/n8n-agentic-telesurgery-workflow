export interface AgentInfo {
  id: string;
  name: string;
  responsibility: string;
  integrations: string[];
}

export const AGENTS: Record<string, AgentInfo> = {
  doctor: {
    id: "doctor",
    name: "Doctor Agent",
    responsibility: "Interprets surgical context and produces the primary surgical plan or recommendation.",
    integrations: ["Google Gemini"]
  },
  security: {
    id: "security",
    name: "Security Agent",
    responsibility: "Evaluates network labels/data and identifies security anomalies (like suspicious traffic patterns).",
    integrations: ["Google Gemini"]
  },
  protocolSwitcher: {
    id: "protocolSwitcher",
    name: "Protocol Switcher",
    responsibility: "Selects an appropriate communication protocol/server action based on security alerts and network conditions.",
    integrations: ["Google Gemini"]
  },
  feedback: {
    id: "feedback",
    name: "Feedback Agent",
    responsibility: "Aggregates outputs from Doctor and Protocol Switcher, evaluates system stability, and provides final instruction.",
    integrations: ["Google Gemini"]
  },
  roboticArm: {
    id: "roboticArm",
    name: "Robotic Arm",
    responsibility: "Interprets final instruction and converts it into a surgical step and status.",
    integrations: ["Google Gemini", "Google Sheets"]
  },
  backupSurgeon: {
    id: "backupSurgeon",
    name: "Backup Surgeon",
    responsibility: "Provides an alternative fallback decision path when Robotic Arm execution fails.",
    integrations: ["Google Gemini", "Google Sheets"]
  }
};
