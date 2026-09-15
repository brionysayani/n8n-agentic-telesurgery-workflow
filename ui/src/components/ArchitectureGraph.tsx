import { motion } from 'framer-motion';
import { AGENTS } from '../data/agents';
import { cn } from '../utils';
import { Database, Mail, Cpu } from 'lucide-react';

interface ArchitectureGraphProps {
  activeAgentId: string | null;
  completedAgentIds: string[];
  onAgentClick: (agentId: string) => void;
  isSimulating: boolean;
  hasError: boolean;
}

export function ArchitectureGraph({
  activeAgentId,
  completedAgentIds,
  onAgentClick,
  isSimulating,
  hasError
}: ArchitectureGraphProps) {
  return (
    <div id="architecture" className="relative w-full max-w-5xl mx-auto p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/50 my-12">
      <div className="absolute top-4 left-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
        System Architecture
      </div>
      
      <div className="flex flex-col items-center gap-12 mt-8">
        
        {/* Input Layer */}
        <div className="flex justify-center w-full">
          <GraphNode 
            label="Telemetry / Surgical Context" 
            sublabel="Input Data"
            icon={<Cpu className="w-4 h-4" />}
            isActive={isSimulating && !activeAgentId}
            isCompleted={!!activeAgentId || completedAgentIds.length > 0}
          />
        </div>

        {/* Primary Agents Layer */}
        <div className="flex justify-center gap-8 w-full relative">
          <Edge start="top" end="Doctor Agent" />
          <Edge start="top" end="Security Agent" />
          
          <AgentNode 
            id="doctor"
            activeAgentId={activeAgentId}
            completedAgentIds={completedAgentIds}
            onClick={onAgentClick}
          />
          <AgentNode 
            id="security"
            activeAgentId={activeAgentId}
            completedAgentIds={completedAgentIds}
            onClick={onAgentClick}
            isWarning={activeAgentId === 'security' && hasError}
          />
        </div>

        {/* Middle Decision Layer */}
        <div className="flex justify-center gap-8 w-full">
          <AgentNode 
            id="protocolSwitcher"
            activeAgentId={activeAgentId}
            completedAgentIds={completedAgentIds}
            onClick={onAgentClick}
            isWarning={activeAgentId === 'protocolSwitcher' && hasError}
          />
        </div>

        {/* Feedback Layer */}
        <div className="flex justify-center w-full">
          <AgentNode 
            id="feedback"
            activeAgentId={activeAgentId}
            completedAgentIds={completedAgentIds}
            onClick={onAgentClick}
            isWarning={activeAgentId === 'feedback' && hasError}
          />
        </div>

        {/* Execution Layer */}
        <div className="flex justify-center w-full relative">
          <AgentNode 
            id="roboticArm"
            activeAgentId={activeAgentId}
            completedAgentIds={completedAgentIds}
            onClick={onAgentClick}
            isError={hasError && (activeAgentId === 'roboticArm' || completedAgentIds.includes('roboticArm'))}
          />
        </div>

        {/* Fallback / Output Layer */}
        <div className="flex justify-center gap-16 w-full mt-4">
          <AgentNode 
            id="backupSurgeon"
            activeAgentId={activeAgentId}
            completedAgentIds={completedAgentIds}
            onClick={onAgentClick}
            isWarning={activeAgentId === 'backupSurgeon'}
          />
          
          <GraphNode 
            label="Google Sheets" 
            sublabel="Persistent State"
            icon={<Database className="w-4 h-4" />}
            isCompleted={completedAgentIds.length > 0 && !activeAgentId && !isSimulating}
          />
          
          <GraphNode 
            label="Gmail Alerts" 
            sublabel="Security Notification"
            icon={<Mail className="w-4 h-4" />}
            isWarning={hasError && activeAgentId !== 'doctor' && activeAgentId !== null}
            isCompleted={completedAgentIds.includes('security') && hasError}
          />
        </div>

      </div>
    </div>
  );
}

function Edge(_props: { start: string, end: string }) {
  // A simple visual placeholder for edges, as absolute SVG lines are complex without a canvas
  // In a real controlled grid we can use CSS borders, but for this demo, keeping it minimal
  return null;
}

function AgentNode({ 
  id, 
  activeAgentId, 
  completedAgentIds, 
  onClick,
  isWarning,
  isError
}: { 
  id: string, 
  activeAgentId: string | null, 
  completedAgentIds: string[], 
  onClick: (id: string) => void,
  isWarning?: boolean,
  isError?: boolean
}) {
  const agent = AGENTS[id];
  const isActive = activeAgentId === id;
  const isCompleted = completedAgentIds.includes(id) && !isActive;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(id)}
      className={cn(
        "relative flex flex-col items-center justify-center p-4 min-w-[200px] rounded-lg border text-left cursor-pointer transition-all duration-300",
        isActive ? "bg-blue-900/20 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/30" : 
        isError ? "bg-red-900/20 border-red-500/50" :
        isWarning ? "bg-amber-900/20 border-amber-500/50" :
        isCompleted ? "bg-zinc-800/50 border-zinc-700 text-zinc-300" :
        "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
      )}
    >
      {isActive && (
        <span className={cn(
          "absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping",
          isWarning ? "bg-amber-500" : isError ? "bg-red-500" : "bg-blue-500"
        )} />
      )}
      <div className="font-medium text-sm mb-1">{agent.name}</div>
      <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
        {isCompleted ? 'Completed' : isActive ? 'Processing...' : 'Standby'}
      </div>
    </motion.button>
  );
}

function GraphNode({ 
  label, 
  sublabel, 
  icon,
  isActive,
  isCompleted,
  isWarning
}: { 
  label: string, 
  sublabel?: string, 
  icon?: React.ReactNode,
  isActive?: boolean,
  isCompleted?: boolean,
  isWarning?: boolean
}) {
  return (
    <div className={cn(
      "flex items-center gap-3 p-3 px-5 rounded-full border transition-colors",
      isActive ? "bg-blue-900/20 border-blue-500/50 text-blue-200" :
      isWarning ? "bg-amber-900/20 border-amber-500/50 text-amber-200" :
      isCompleted ? "bg-zinc-800 border-zinc-700 text-zinc-300" :
      "bg-zinc-900 border-zinc-800 text-zinc-500"
    )}>
      {icon}
      <div className="flex flex-col">
        <span className="text-sm font-medium">{label}</span>
        {sublabel && <span className="text-[10px] opacity-70 uppercase tracking-wider font-mono">{sublabel}</span>}
      </div>
    </div>
  );
}
