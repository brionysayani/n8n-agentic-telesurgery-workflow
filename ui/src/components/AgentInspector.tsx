import { X } from 'lucide-react';
import { AGENTS } from '../data/agents';
import type { TraceEvent } from '../data/scenarios';
import { motion, AnimatePresence } from 'framer-motion';

interface AgentInspectorProps {
  agentId: string | null;
  event: TraceEvent | null;
  onClose: () => void;
}

export function AgentInspector({ agentId, event, onClose }: AgentInspectorProps) {
  if (!agentId) return null;
  
  const agent = AGENTS[agentId];
  if (!agent) return null;

  return (
    <AnimatePresence>
      {agentId && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed top-0 right-0 h-screen w-full md:w-96 bg-zinc-950/95 backdrop-blur-xl border-l border-zinc-800 shadow-2xl z-50 overflow-y-auto"
        >
          <div className="sticky top-0 bg-zinc-950/90 backdrop-blur border-b border-zinc-800 p-4 flex items-center justify-between z-10">
            <h2 className="text-lg font-medium text-zinc-100 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              {agent.name}
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-zinc-900 rounded-md text-zinc-400 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 flex flex-col gap-8">
            <section>
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Responsibility</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {agent.responsibility}
              </p>
            </section>

            {event ? (
              <>
                <section>
                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Input Context</h3>
                  <div className="bg-zinc-900 rounded-md p-4 border border-zinc-800/50">
                    <pre className="text-xs text-zinc-300 overflow-x-auto whitespace-pre-wrap font-mono">
                      {JSON.stringify(event.input, null, 2)}
                    </pre>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Decision / Action</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed border-l-2 border-blue-500 pl-3">
                    {event.decision}
                  </p>
                </section>

                <section>
                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Structured Output</h3>
                  <div className="bg-zinc-900 rounded-md p-4 border border-zinc-800/50">
                    <pre className="text-xs text-blue-300 overflow-x-auto whitespace-pre-wrap font-mono">
                      {JSON.stringify(event.output, null, 2)}
                    </pre>
                  </div>
                </section>
              </>
            ) : (
              <div className="flex items-center justify-center h-32 border border-dashed border-zinc-800 rounded-lg text-zinc-600 text-sm font-mono">
                No active execution trace
              </div>
            )}

            <section>
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Integrations</h3>
              <div className="flex flex-wrap gap-2">
                {agent.integrations.map(integration => (
                  <span key={integration} className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
                    {integration}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
