import type { TraceEvent } from '../data/scenarios';
import { AGENTS } from '../data/agents';
import { cn } from '../utils';
import { CheckCircle2, AlertCircle, AlertTriangle, Clock } from 'lucide-react';

interface ExecutionTimelineProps {
  events: TraceEvent[];
}

export function ExecutionTimeline({ events }: ExecutionTimelineProps) {
  if (events.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center text-zinc-600 text-sm font-mono border border-zinc-800/50 rounded-lg bg-zinc-900/30">
        Awaiting execution...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-lg h-96 overflow-y-auto">
      <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest sticky top-0 bg-zinc-950/80 backdrop-blur-sm p-2 -mx-2 -mt-2 mb-2 z-10">
        Execution Timeline
      </div>
      
      {events.map((event, index) => {
        const agent = AGENTS[event.agentId];
        const isLast = index === events.length - 1;
        
        return (
          <div key={event.id} className="flex gap-4 group">
            <div className="flex flex-col items-center">
              <div className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center shrink-0 border",
                event.status === 'success' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" :
                event.status === 'error' ? "bg-red-500/10 border-red-500/20 text-red-500" :
                event.status === 'warning' ? "bg-amber-500/10 border-amber-500/20 text-amber-500" :
                event.status === 'skipped' ? "bg-zinc-800 border-zinc-700 text-zinc-500" :
                "bg-blue-500/10 border-blue-500/20 text-blue-500"
              )}>
                {event.status === 'success' ? <CheckCircle2 className="w-3 h-3" /> :
                 event.status === 'error' ? <AlertCircle className="w-3 h-3" /> :
                 event.status === 'warning' ? <AlertTriangle className="w-3 h-3" /> :
                 event.status === 'skipped' ? <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> :
                 <Clock className="w-3 h-3" />}
              </div>
              {!isLast && <div className="w-px h-full bg-zinc-800 my-1 group-hover:bg-zinc-700 transition-colors" />}
            </div>
            
            <div className="flex flex-col pb-4 pt-0.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-zinc-300">{agent?.name || 'System Event'}</span>
                <span className="text-[10px] font-mono text-zinc-600">
                  +{event.timestampOffset}ms
                </span>
              </div>
              <div className="text-xs text-zinc-500 mt-1">
                {event.decision}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
