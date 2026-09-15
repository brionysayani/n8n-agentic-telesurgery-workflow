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

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

1. Ensure the `base` in `ui/vite.config.ts` matches your repository name (e.g., `'/n8n-agentic-telesurgery-workflow/'`).
2. Commit and push the changes to the `main` branch.
3. In your GitHub repository settings, go to **Pages**.
4. Set the Source to **GitHub Actions**.
5. The included `.github/workflows/deploy.yml` will automatically build and deploy your `/ui` folder.

## Deployment to Vercel

## Technical Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Data & Simulation

The execution traces inside `src/data/scenarios.ts` reflect the actual structure and JSON schema of the committed n8n workflow. The values are representative of standard execution patterns, anomalies, and failures, allowing the architecture to be explored seamlessly.
