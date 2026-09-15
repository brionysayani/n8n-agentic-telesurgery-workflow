export type EventStatus = 'pending' | 'success' | 'warning' | 'error' | 'skipped';

export interface TraceEvent {
  id: string;
  agentId: string;
  timestampOffset: number; // e.g. 0, 1000, 2500 (ms from start)
  input: any;
  output: any;
  decision: string;
  status: EventStatus;
}

export interface Scenario {
  id: string;
  name: string;
  description: string;
  events: TraceEvent[];
}

export const SCENARIOS: Scenario[] = [
  {
    id: "normal",
    name: "Normal Operation",
    description: "Standard telesurgery execution trace with stable network conditions.",
    events: [
      {
        id: "e1",
        agentId: "doctor",
        timestampOffset: 500,
        input: { diagnosis: "heart" },
        decision: "Identified bypass surgery requirement.",
        output: {
          surgery_type: "heart",
          steps: ["Administer anesthesia", "Insert trocars and robotic arms", "Stabilize the heart region", "Perform bypass grafting using robotic tools", "Suture the graft site", "Remove tools and close incision", "Begin post-op monitoring"],
          status: "ready_for_robotic_surgery"
        },
        status: 'success'
      },
      {
        id: "e2",
        agentId: "security",
        timestampOffset: 1500,
        input: { network_label: "normal", latency: 45 },
        decision: "No security anomaly detected.",
        output: { alert: "false" },
        status: 'success'
      },
      {
        id: "e3",
        agentId: "protocolSwitcher",
        timestampOffset: 2500,
        input: { alert: "false", network_label: "normal" },
        decision: "Maintain current protocol and main server.",
        output: { action: "keep", new_protocol: "tcp", new_server: "https://main-server.com" },
        status: 'success'
      },
      {
        id: "e4",
        agentId: "feedback",
        timestampOffset: 3500,
        input: { surgery_status: "ready_for_robotic_surgery", protocol_action: "keep" },
        decision: "Systems stable. Proceed with surgical plan.",
        output: { insights: ["Network stable", "Protocol optimal"], final_instruction: "Continue" },
        status: 'success'
      },
      {
        id: "e5",
        agentId: "roboticArm",
        timestampOffset: 4500,
        input: { final_instruction: "Continue" },
        decision: "Executed predefined surgical steps.",
        output: { action_taken: "Administered anesthesia and prepared site.", status: "completed" },
        status: 'success'
      },
      {
        id: "e6",
        agentId: "backupSurgeon",
        timestampOffset: 5500,
        input: null,
        decision: "Not required.",
        output: { action_taken: "no_action", status: "not_required" },
        status: 'skipped'
      }
    ]
  },
  {
    id: "anomaly",
    name: "Security / Network Anomaly",
    description: "Demonstrates protocol switching when a suspicious network anomaly is detected.",
    events: [
      {
        id: "e1",
        agentId: "doctor",
        timestampOffset: 500,
        input: { diagnosis: "brain" },
        decision: "Identified tumor removal surgery requirement.",
        output: { surgery_type: "brain", steps: ["Administer general anesthesia", "Map the brain using MRI guidance", "Create access via small skull incision", "Insert robotic micro-tools"], status: "ready_for_robotic_surgery" },
        status: 'success'
      },
      {
        id: "e2",
        agentId: "security",
        timestampOffset: 1500,
        input: { network_label: "neptune", latency: 480, packet_loss: "14%" },
        decision: "Suspicious network pattern identified (simulated anomaly).",
        output: { alert: "true" },
        status: 'warning'
      },
      {
        id: "e3",
        agentId: "protocolSwitcher",
        timestampOffset: 2500,
        input: { alert: "true", network_label: "neptune" },
        decision: "Switched to alternative protocol and backup server for safety.",
        output: { action: "switch", new_protocol: "udp", new_server: "https://backup-server.com" },
        status: 'warning'
      },
      {
        id: "e4",
        agentId: "feedback",
        timestampOffset: 3500,
        input: { surgery_status: "ready_for_robotic_surgery", protocol_action: "switch" },
        decision: "Network instability handled. Pausing active robotic movement until connection is verified.",
        output: { insights: ["Network anomaly detected", "Protocol switched to UDP"], final_instruction: "Hold" },
        status: 'warning'
      },
      {
        id: "e5",
        agentId: "roboticArm",
        timestampOffset: 4500,
        input: { final_instruction: "Hold" },
        decision: "Surgery paused for safety.",
        output: { action_taken: "Robotic tools halted.", status: "on hold" },
        status: 'warning'
      },
      {
        id: "e6",
        agentId: "backupSurgeon",
        timestampOffset: 5500,
        input: null,
        decision: "Not required.",
        output: { action_taken: "no_action", status: "not_required" },
        status: 'skipped'
      }
    ]
  },
  {
    id: "failure",
    name: "Robotic Execution Failure",
    description: "Demonstrates automated failover to Backup Surgeon when the primary execution path fails.",
    events: [
      {
        id: "e1",
        agentId: "doctor",
        timestampOffset: 500,
        input: { diagnosis: "orthopedic" },
        decision: "Identified knee replacement surgery requirement.",
        output: { surgery_type: "orthopedic", steps: ["Administer spinal anesthesia", "Position patient and expose joint"], status: "ready_for_robotic_surgery" },
        status: 'success'
      },
      {
        id: "e2",
        agentId: "security",
        timestampOffset: 1500,
        input: { network_label: "normal", latency: 32 },
        decision: "No security anomaly detected.",
        output: { alert: "false" },
        status: 'success'
      },
      {
        id: "e3",
        agentId: "protocolSwitcher",
        timestampOffset: 2500,
        input: { alert: "false", network_label: "normal" },
        decision: "Maintain current protocol.",
        output: { action: "keep", new_protocol: "tcp", new_server: "https://main-server.com" },
        status: 'success'
      },
      {
        id: "e4",
        agentId: "feedback",
        timestampOffset: 3500,
        input: { surgery_status: "ready_for_robotic_surgery", protocol_action: "keep" },
        decision: "Systems stable. Proceed with surgical plan.",
        output: { insights: ["Network stable", "Protocol optimal"], final_instruction: "Continue" },
        status: 'success'
      },
      {
        id: "e5",
        agentId: "roboticArm",
        timestampOffset: 4500,
        input: { final_instruction: "Continue", simulated_error: "Hardware calibration fault" },
        decision: "Execution failed due to mechanical/calibration fault.",
        output: { action_taken: "Attempted to position robotic guide. Failed.", status: "error" },
        status: 'error'
      },
      {
        id: "e6",
        agentId: "backupSurgeon",
        timestampOffset: 5500,
        input: { robotic_status: "error" },
        decision: "Fallback triggered. Primary execution unrecoverable.",
        output: { action_taken: "performed emergency surgery", status: "backup_success" },
        status: 'warning'
      }
    ]
  }
];
