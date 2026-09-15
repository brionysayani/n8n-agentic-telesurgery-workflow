import { CheckCircle } from 'lucide-react';

export function WhatIBuilt() {
  const items = [
    "Multi-agent workflow architecture",
    "Agent-specific responsibilities and prompts",
    "Structured agent outputs (JSON)",
    "Conditional decision routing",
    "External API/service integrations",
    "Persistent workflow logging/state",
    "Security alert propagation",
    "Failure and fallback paths"
  ];

  return (
    <section className="py-16 max-w-5xl mx-auto px-6 border-t border-zinc-800/50">
      <h2 className="text-2xl font-semibold text-zinc-100 mb-6">What I Built</h2>
      <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl mb-8">
        This project explores translating theoretical AI capabilities into an executable, fault-tolerant engineering architecture. Rather than building a chatbot, I focused on system design:
      </p>
      
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-zinc-900 border border-zinc-800">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="text-sm text-zinc-300">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
