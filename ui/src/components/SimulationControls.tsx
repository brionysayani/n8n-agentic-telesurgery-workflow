import { Play, RotateCcw } from 'lucide-react';
import { SCENARIOS } from '../data/scenarios';
import { cn } from '../utils';

interface SimulationControlsProps {
  selectedScenarioId: string;
  onScenarioChange: (id: string) => void;
  onRun: () => void;
  onReset: () => void;
  isSimulating: boolean;
  isComplete: boolean;
}

export function SimulationControls({
  selectedScenarioId,
  onScenarioChange,
  onRun,
  onReset,
  isSimulating,
  isComplete
}: SimulationControlsProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="text-xs font-mono px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20 whitespace-nowrap">
          DEMO MODE
        </div>
        <p className="text-xs text-zinc-500 hidden md:block">
          Representative execution traces based on the underlying n8n implementation.
        </p>
      </div>
      
      <div className="flex-1" />
      
      <select 
        value={selectedScenarioId}
        onChange={(e) => onScenarioChange(e.target.value)}
        disabled={isSimulating}
        className="bg-zinc-950 border border-zinc-800 text-sm rounded-md px-3 py-2 text-zinc-300 focus:outline-none focus:border-zinc-600 disabled:opacity-50 w-full md:w-auto"
      >
        {SCENARIOS.map(s => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>

      <div className="flex gap-2 w-full md:w-auto">
        <button
          onClick={onReset}
          disabled={isSimulating && !isComplete}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-zinc-300 text-sm font-medium rounded-md transition-colors w-full md:w-auto"
        >
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
        <button
          onClick={onRun}
          disabled={isSimulating}
          className={cn(
            "flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium rounded-md transition-colors w-full md:w-auto",
            isSimulating ? "bg-blue-600/50 text-blue-200 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 text-white"
          )}
        >
          <Play className="w-4 h-4" /> {isSimulating ? 'Running...' : isComplete ? 'Replay' : 'Run Simulation'}
        </button>
      </div>
    </div>
  );
}
