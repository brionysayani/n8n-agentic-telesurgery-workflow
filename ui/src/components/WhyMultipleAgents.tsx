export function WhyMultipleAgents() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-6 border-t border-zinc-800/50">
      <h2 className="text-2xl font-semibold text-zinc-100 mb-6">Why Multiple Agents?</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="text-zinc-400 leading-relaxed text-sm">
          <p className="mb-4">
            Instead of delegating the complete system to one large language model prompt, the workflow separates responsibilities across specialized components.
          </p>
          <p className="mb-4">
            n8n provides the <strong>deterministic orchestration layer</strong>, managing routing, state, and retries. The AI components handle <strong>contextual reasoning</strong>, interpreting complex conditions and deciding on actions.
          </p>
          <p>
            This architecture prevents hallucination cascading, makes individual components testable, and provides distinct failure boundaries.
          </p>
        </div>
        
        <div className="flex flex-col gap-2 p-6 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Control Loop</div>
          <div className="flex flex-col gap-1 text-sm font-mono text-zinc-300">
            <div className="flex items-center gap-2"><span className="text-blue-400">Observe</span> telemetry and context</div>
            <div className="pl-2 border-l border-zinc-800 ml-2 py-1 flex items-center gap-2 text-zinc-500">↓</div>
            <div className="flex items-center gap-2"><span className="text-blue-400">Detect</span> anomalies or requirements</div>
            <div className="pl-2 border-l border-zinc-800 ml-2 py-1 flex items-center gap-2 text-zinc-500">↓</div>
            <div className="flex items-center gap-2"><span className="text-purple-400">Reason</span> over possible paths</div>
            <div className="pl-2 border-l border-zinc-800 ml-2 py-1 flex items-center gap-2 text-zinc-500">↓</div>
            <div className="flex items-center gap-2"><span className="text-purple-400">Decide</span> via structured output</div>
            <div className="pl-2 border-l border-zinc-800 ml-2 py-1 flex items-center gap-2 text-zinc-500">↓</div>
            <div className="flex items-center gap-2"><span className="text-emerald-400">Act</span> through APIs/robotics</div>
            <div className="pl-2 border-l border-zinc-800 ml-2 py-1 flex items-center gap-2 text-zinc-500">↓</div>
            <div className="flex items-center gap-2"><span className="text-emerald-400">Evaluate</span> execution success</div>
            <div className="pl-2 border-l border-zinc-800 ml-2 py-1 flex items-center gap-2 text-zinc-500">↓</div>
            <div className="flex items-center gap-2"><span className="text-amber-400">Recover</span> via fallback if required</div>
          </div>
        </div>
      </div>
    </section>
  );
}
