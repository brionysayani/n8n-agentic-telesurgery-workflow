import { Activity, ShieldCheck, Zap, GitBranch } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-16 text-center max-w-4xl mx-auto px-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs mb-8 font-mono">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        Research prototype / simulation — not intended for real-world clinical use.
      </div>
      
      <h1 className="text-4xl md:text-5xl font-semibold text-zinc-100 tracking-tight mb-4">
        Agentic Telesurgery<br/>Control System
      </h1>
      
      <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
        Multi-agent orchestration for secure and fault-tolerant remote telesurgery.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-left">
        <MetricCard icon={<Activity className="w-5 h-5 text-blue-400" />} label="Specialized AI Agents" value="6" />
        <MetricCard icon={<GitBranch className="w-5 h-5 text-purple-400" />} label="External Integrations" value="4+" />
        <MetricCard icon={<Zap className="w-5 h-5 text-amber-400" />} label="Structured Communication" value="Event-Driven" />
        <MetricCard icon={<ShieldCheck className="w-5 h-5 text-emerald-400" />} label="Automated Recovery" value="Fault-Tolerant" />
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#simulation" className="px-6 py-3 rounded-md bg-zinc-100 text-zinc-950 font-medium hover:bg-white transition-colors">
          Run Simulation
        </a>
        <a href="#architecture" className="px-6 py-3 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors">
          Explore Architecture
        </a>
        <a href="https://github.com/brionysayani/n8n-agentic-telesurgery-workflow" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors">
          View GitHub
        </a>
      </div>
    </section>
  );
}

function MetricCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/50 flex flex-col gap-2">
      <div className="text-zinc-500">{icon}</div>
      <div>
        <div className="text-xl font-semibold text-zinc-200">{value}</div>
        <div className="text-xs text-zinc-500 uppercase tracking-wider">{label}</div>
      </div>
    </div>
  );
}
