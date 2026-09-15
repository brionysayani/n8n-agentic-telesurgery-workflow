import { useState } from 'react';
import { Hero } from './components/Hero';
import { ArchitectureGraph } from './components/ArchitectureGraph';
import { SimulationControls } from './components/SimulationControls';
import { ExecutionTimeline } from './components/ExecutionTimeline';
import { AgentInspector } from './components/AgentInspector';
import { SystemStatus } from './components/SystemStatus';
import { Integrations } from './components/Integrations';
import { WhyMultipleAgents } from './components/WhyMultipleAgents';
import { WhatIBuilt } from './components/WhatIBuilt';
import { BehindTheUI } from './components/BehindTheUI';
import { Footer } from './components/Footer';
import { getExecutionProvider } from './services/executionProvider';
import type { TraceEvent } from './data/scenarios';

function App() {
  const provider = getExecutionProvider();
  const scenarios = provider.getScenarios();
  
  const [selectedScenarioId, setSelectedScenarioId] = useState(scenarios[0]?.id || '');
  const [isSimulating, setIsSimulating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [events, setEvents] = useState<TraceEvent[]>([]);
  const [inspectedAgentId, setInspectedAgentId] = useState<string | null>(null);

  // Computed state
  const activeAgentId = isSimulating && events.length > 0 && !isComplete ? events[events.length - 1].agentId : null;
  const completedAgentIds = events.map(e => e.agentId);
  const hasError = events.some(e => e.status === 'error');
  const hasWarning = events.some(e => e.status === 'warning');

  // Find the event corresponding to the inspected agent to show its data
  const inspectedEvent = inspectedAgentId 
    ? events.slice().reverse().find(e => e.agentId === inspectedAgentId) || null 
    : null;

  const runSimulation = () => {
    setIsSimulating(true);
    setIsComplete(false);
    setEvents([]);
    setInspectedAgentId(null);
    
    provider.executeScenario(
      selectedScenarioId,
      (event) => {
        setEvents(prev => [...prev, event]);
      },
      () => {
        setIsSimulating(false);
        setIsComplete(true);
      }
    );
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setIsComplete(false);
    setEvents([]);
    setInspectedAgentId(null);
  };

  const handleScenarioChange = (id: string) => {
    setSelectedScenarioId(id);
    if (!isSimulating) {
      resetSimulation();
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-500/30">
      <Hero />

      <main id="simulation" className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <SystemStatus 
            isSimulating={isSimulating} 
            hasError={hasError} 
            hasWarning={hasWarning} 
          />
        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-8 items-start">
          <div className="flex flex-col gap-8">
            <SimulationControls 
              selectedScenarioId={selectedScenarioId}
              onScenarioChange={handleScenarioChange}
              onRun={runSimulation}
              onReset={resetSimulation}
              isSimulating={isSimulating}
              isComplete={isComplete}
            />
            
            <ArchitectureGraph 
              activeAgentId={activeAgentId}
              completedAgentIds={completedAgentIds}
              onAgentClick={setInspectedAgentId}
              isSimulating={isSimulating}
              hasError={hasError || hasWarning}
            />
          </div>

          <div className="lg:sticky lg:top-8">
            <ExecutionTimeline events={events} />
          </div>
        </div>
      </main>

      <WhyMultipleAgents />
      <WhatIBuilt />
      <Integrations />
      <BehindTheUI />
      <Footer />

      <AgentInspector 
        agentId={inspectedAgentId} 
        event={inspectedEvent} 
        onClose={() => setInspectedAgentId(null)} 
      />
    </div>
  );
}

export default App;
