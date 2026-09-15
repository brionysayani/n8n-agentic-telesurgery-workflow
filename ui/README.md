# Agentic Telesurgery Control System UI

This directory contains the visualization frontend for the n8n agentic telesurgery workflow. 

It is designed to demonstrate the multi-agent architecture, system orchestration, and failure recovery paths using representative execution traces. 

**This interface does NOT require the underlying n8n instance to remain online for the simulation to work.**

## Setup & Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

## Deployment to Vercel

This project is a standard Vite static site and is ready to be deployed on Vercel.

1. Create a new project in Vercel.
2. Import the GitHub repository.
3. Important: Set the **Root Directory** to `ui` in the Vercel project settings.
4. Leave the Build Command as `npm run build` and Output Directory as `dist`.
5. Deploy!

## Technical Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Data & Simulation

The execution traces inside `src/data/scenarios.ts` reflect the actual structure and JSON schema of the committed n8n workflow. The values are representative of standard execution patterns, anomalies, and failures, allowing the architecture to be explored seamlessly.
