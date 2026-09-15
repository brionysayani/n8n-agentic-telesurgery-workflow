import { Activity, ShieldAlert, Zap, Cpu, Network } from 'lucide-react';
import { cn } from '../utils';

interface SystemStatusProps {
  isSimulating: boolean;
  hasError: boolean;
  hasWarning: boolean;
}

export function SystemStatus({ isSimulating, hasError, hasWarning }: SystemStatusProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <StatusItem 
        label="System" 
        value={isSimulating ? "Active" : "Idle"} 
        icon={<Activity className="w-4 h-4" />}
        state={isSimulating ? "active" : "neutral"}
      />
      <StatusItem 
        label="Network" 
        value={hasWarning ? "Degraded" : "Normal"} 
        icon={<Network className="w-4 h-4" />}
        state={hasWarning ? "warning" : "active"}
      />
      <StatusItem 
        label="Security" 
        value={hasWarning ? "Threat" : "Safe"} 
        icon={<ShieldAlert className="w-4 h-4" />}
        state={hasWarning ? "error" : "active"}
      />
      <StatusItem 
        label="Execution" 
        value={hasError ? "Failed" : hasWarning ? "Hold" : isSimulating ? "Active" : "Ready"} 
        icon={<Zap className="w-4 h-4" />}
        state={hasError ? "error" : hasWarning ? "warning" : isSimulating ? "active" : "neutral"}
      />
      <StatusItem 
        label="Failover" 
        value={hasError ? "Activated" : "Standby"} 
        icon={<Cpu className="w-4 h-4" />}
        state={hasError ? "warning" : "neutral"}
      />
    </div>
  );
}

function StatusItem({ label, value, icon, state }: { label: string, value: string, icon: React.ReactNode, state: 'neutral' | 'active' | 'warning' | 'error' }) {
  return (
    <div className="flex flex-col gap-2 p-3 rounded-lg bg-zinc-900 border border-zinc-800">
      <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider">
        {icon}
        {label}
      </div>
      <div className={cn(
        "text-sm font-medium",
        state === 'neutral' ? "text-zinc-400" :
        state === 'active' ? "text-emerald-400" :
        state === 'warning' ? "text-amber-400" :
        "text-red-400"
      )}>
        {value}
      </div>
    </div>
  );
}
