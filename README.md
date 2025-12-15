# n8n-agentic-telesurgery-workflow
n8n workflows for secure, agent-based telesurgery automation
## 🏥 Agentic AI–Driven Secure & Fault-Tolerant Telesurgery

### n8n Automation Workflows with Webhooks, APIs & LLMs

This repository contains **n8n workflow automations** developed as part of the project
**“Agentic Architecture Enabling Secure and Fault-Tolerant Telesurgery”**.

The system demonstrates how **workflow automation, webhooks, REST APIs, and LLM-based agents** can be orchestrated to build a **secure, resilient, and fault-tolerant telehealth system**.

---

## 🚀 Project Overview

The project simulates a **remote telesurgery environment** where:

* Network instability or cyber threats (e.g., unauthorized access, connection loss)
* AI-driven decision-making
* Automated alerts and fallback mechanisms

are handled using **n8n workflows**.

The core idea is to use **Agentic AI + automation** to:

* Detect anomalies in real time
* Trigger secure responses automatically
* Maintain operational continuity through fallback logic

---

## 🧠 Agentic Architecture (Conceptual)

The system is inspired by an **Agentic AI architecture**, where multiple specialized agents collaborate:

* **Security Agent** – Detects suspicious events or anomalies
* **Protocol / Control Agent** – Decides next action based on context
* **Feedback Agent** – Aggregates decisions and generates final outputs
* **Backup / Failover Logic** – Ensures continuity if primary flow fails

These agents are coordinated using **n8n workflows**, webhooks, and REST APIs.

---

## 🛠️ Technologies Used

* **n8n** – Workflow orchestration & automation
* **Webhooks** – Event-driven workflow triggering
* **REST APIs** – Inter-workflow communication
* **Google Gemini LLM** – Structured AI reasoning (JSON outputs)
* **Node.js concepts** – API-style request/response handling
* **Gmail API** – Alert notifications
* **GitHub-hosted logs / datasets** – Input simulation

---

## 📂 Repository Structure

```text
├── TeleHealth_Secured_MCP.json
├── MCP Server Receiver.json
├── My workflow (Agentic Telesurgery).json
├── README.md
```

---

## 🔁 Workflow Descriptions

### 1️⃣ TeleHealth_Secured_MCP.json

**Purpose:** Detect network anomalies and generate security alerts.

**Flow:**

1. Triggered via **Webhook**
2. Fetches telemetry / log data via **HTTP Request**
3. Parses logs using **Code node**
4. Detects anomalies such as:

   * `unauthorized_access`
   * `connection_lost`
5. Labels threat reason and timestamps
6. Sends structured alert to MCP Server via REST API

**Key Concepts Demonstrated:**

* Webhook triggers
* HTTP API integration
* JSON parsing & transformation
* Conditional logic
* Security automation

---

### 2️⃣ MCP Server Receiver.json

**Purpose:** Central alert receiver and notification handler.

**Flow:**

1. Receives alert data via **Webhook**
2. Extracts structured fields:

   * Event
   * Remote ID
   * Reason
   * Timestamp
3. Sends **email notification** using Gmail API

**Key Concepts Demonstrated:**

* Webhook-based microservice pattern
* API-to-API communication
* Automated alerting
* Decoupled workflow design

---

### 3️⃣ Agentic Telesurgery Workflow (My workflow…)

**Purpose:** Demonstrates **multi-agent orchestration using LLMs**.

**Flow:**

1. Inputs are passed to multiple AI agents (Doctor, Security, Protocol Switcher)
2. **Google Gemini LLM** processes structured prompts
3. Agents return **strict JSON outputs**
4. n8n routes execution using conditional logic
5. Feedback agent finalizes decisions
6. Fallback / backup logic is triggered on failures

**Key Concepts Demonstrated:**

* LLM integration in automation
* Agent-based reasoning
* Deterministic JSON outputs
* Decision-driven workflows
* Fault tolerance

---

## 🔐 Security & Reliability Features

* Event-based anomaly detection
* Automated alert propagation
* Stateless webhook design
* Decoupled workflows for resilience
* Backup decision paths to prevent single-point failure

---

## 📄 Research Background

This implementation is based on my research paper:

**“Agentic Architecture Enabling Secure and Fault-Tolerant Telesurgery”**

The paper explores:

* Agentic AI coordination
* DDoS detection using TinyML
* Adaptive protocol switching
* Secure communication in telesurgery

This repository focuses on the **practical automation and orchestration layer** using **n8n**, translating theoretical concepts into executable workflows.

---

## ✅ Why This Project Matters for n8n

This repository demonstrates:

* Real-world webhook usage
* REST API orchestration
* JSON-based data handling
* AI-assisted automation
* Scalable, modular workflow design

It reflects how n8n can be used beyond simple automation - as a **control plane for intelligent, event-driven systems**.

---

## 📌 How to Use

1. Import `.json` files into n8n
2. Configure credentials (Gmail, Gemini, HTTP endpoints)
3. Activate workflows
4. Trigger via webhook calls or test payloads

---

## 👤 Author

**Briony Sayani**
Automation | n8n | Agentic AI | Workflow Orchestration


