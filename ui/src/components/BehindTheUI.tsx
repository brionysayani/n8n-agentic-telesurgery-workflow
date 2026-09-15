import { FileJson, Code } from 'lucide-react';

export function BehindTheUI() {
  const files = [
    {
      name: "My workflow N8N.json",
      purpose: "Main multi-agent telesurgery orchestration workflow",
      url: "https://github.com/brionysayani/n8n-agentic-telesurgery-workflow/blob/main/My%20workflow%20N8N.json"
    },
    {
      name: "TeleHealth_Secured_MCP.json",
      purpose: "Security monitoring and alert-generation workflow",
      url: "https://github.com/brionysayani/n8n-agentic-telesurgery-workflow/blob/main/TeleHealth_Secured_MCP.json"
    },
    {
      name: "MCP Server Receiver.json",
      purpose: "Alert receiver and Gmail notification workflow",
      url: "https://github.com/brionysayani/n8n-agentic-telesurgery-workflow/blob/main/MCP%20Server%20Receiver.json"
    }
  ];

  return (
    <section className="py-16 max-w-5xl mx-auto px-6 border-t border-zinc-800/50">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-100 mb-2">Behind the Interface</h2>
          <p className="text-zinc-400 text-sm max-w-2xl">
            This interface is a visualization layer. The true engineering lies in the underlying orchestration, implemented as n8n workflows.
          </p>
        </div>
        <a 
          href="https://github.com/brionysayani/n8n-agentic-telesurgery-workflow" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-950 hover:bg-white rounded-md font-medium text-sm transition-colors shrink-0"
        >
          <Code className="w-4 h-4" /> View Source on GitHub
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {files.map((file, idx) => (
          <div key={idx} className="flex flex-col p-5 rounded-lg bg-zinc-900 border border-zinc-800">
            <div className="flex items-center gap-2 mb-3 text-zinc-300 font-mono text-sm">
              <FileJson className="w-4 h-4 text-blue-400" />
              <span className="truncate">{file.name}</span>
            </div>
            <p className="text-xs text-zinc-500 mb-6 flex-1">
              {file.purpose}
            </p>
            <a 
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
            >
              View File →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
