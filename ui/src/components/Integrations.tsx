import { INTEGRATIONS } from '../data/integrations';

export function Integrations() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-6">
      <h2 className="text-2xl font-semibold text-zinc-100 mb-2">Connected Systems</h2>
      <p className="text-zinc-400 mb-8">The multi-agent workflow interacts with several external APIs and services.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {INTEGRATIONS.map(integration => (
          <div key={integration.id} className="p-5 rounded-lg bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <h3 className="font-medium text-zinc-200 mb-2">{integration.name}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              {integration.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
