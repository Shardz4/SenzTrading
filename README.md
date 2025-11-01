# 🌌 SenzTrade — Decentralized Perception & Sentiment Markets

**SenzTrade** is a decentralized platform where communities **vote, predict, and express perception** about real-world or conceptual questions — powered by the **Aptos blockchain**.  
Unlike traditional prediction markets based on factual outcomes, SenzTrade focuses on **collective sentiment and fair voting** to measure public opinion with transparency and trust.

---

## 🧠 Philosophy

> *“Perception is value.”*  
SenzTrade transforms subjective opinions into measurable market signals.  
Users don’t just trade facts — they trade **beliefs, confidence, and community trust**.

---

## 🏗️ Architecture Overview

### 🔹 Smart Contracts (Aptos Move)
- **MarketFactory** — Deploys and manages markets with unique IDs  
- **Market** — Represents a single question or sentiment poll  
- **VotingPool** — Handles YES/NO or multi-choice votes with weighted stakes  
- **uUSD** — Stable asset for consistent market participation  
- **ResultModule** — Aggregates and finalizes results based on votes  
- **Governance** — DAO-controlled rules and upgrades  

### 🔹 Frontend (Next.js 14 + TypeScript)
- Built using **Next.js App Router**  
- Uses **@aptos-labs/wallet-adapter-react** for wallet connectivity  
- Data handled with **@tanstack/react-query**  
- UI styled with **Tailwind CSS**  
- Modular React components for markets, trades, and user portfolios  

---

## 🚀 Core Features

| Feature | Description |
|----------|--------------|
| 🗳️ **Community Voting Markets** | Create markets where users vote YES/NO on future or opinion-based outcomes |
| ✨ **Perception-based Rewards** | Rewards distributed based on sentiment alignment rather than factual correctness |
| 💬 **AI Sentiment Analysis** | AI-assisted analysis of market sentiment and community behavior |
| 💰 **uUSD-backed Participation** | Fair and stable token economics for voting and trading |
| 📊 **Market Analytics** | Visual breakdown of sentiment trends over time |
| 👤 **Portfolio Tracking** | Track personal markets, votes, and rewards from your Aptos wallet |

---

## 🖥️ Frontend Components

### 🎴 `MarketCard`
- Displays key question, market sentiment, and resolution time  
- Allows users to vote or express confidence in YES/NO outcomes  
- Shows live percentages for current sentiment  

### 💹 `TradeForm`
- Simplified form for fair voting rather than financial trading  
- Stake a small amount of uUSD on your perception  
- Displays consensus percentage after voting  

### 🧱 `CreateMarketForm`
- Allows users to create new community questions  
- Includes validation, time limit, and category tagging  
- Optional moderation or AI-assisted review  

### 👤 `Portfolio`
- View your connected Aptos wallet  
- See past markets you’ve voted in, rewards, and collective accuracy  
- Aggregated community trust score based on participation quality  

---

## ⚙️ Tech Stack

| Layer | Tools |
|-------|-------|
| **Blockchain** | Aptos (Move) |
| **Wallet Connection** | `@aptos-labs/wallet-adapter-react` |
| **Frontend Framework** | Next.js 14 (App Router, TypeScript) |
| **UI/UX** | Tailwind CSS |
| **Data Layer** | React Query |
| **Hosting** | Vercel |
| **AI Sentiment Engine (optional)** | OpenAI / Hugging Face APIs |

---

## 🧩 System Overview

```plaintext
┌────────────────────┐
│   Frontend (Next)  │
│  Market UI + Logic │
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│   Aptos Contracts  │
│  (Factory / Market)│
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│   Voting Pool / DAO│
│ Fair Sentiment Tally│
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│  Analytics Engine  │
│ Sentiment Analysis │
└────────────────────┘
