# AgroWaste Connect

> **AI-Powered Agricultural Crop Waste Marketplace & Stubble Recycling Platform**

AgroWaste Connect is an intelligent, direct-to-industry agricultural marketplace that connects farmers selling crop waste (paddy straw / parali, wheat stalk, sugarcane bagasse, cotton stalk, mustard straw) with bio-energy plants, pellet manufacturers, pulp/paper mills, and cattle feed units. 

By replacing open field stubble burning with transparent AI pricing, automated field pickup logistics, and direct digital payments, AgroWaste Connect eliminates air pollution while generating substantial extra revenue for farming communities.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Production Build](#production-build)
- [Database Setup](#database-setup)
- [API Documentation](#api-documentation)
- [Authentication](#authentication)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

---

## Project Overview

In agricultural hubs across northern India and beyond, farmers burn over **92 million tonnes of crop waste** annually following harvest. Stubble burning creates toxic smog, releases millions of tonnes of CO2, deteriorates soil organic carbon, and causes severe respiratory diseases across urban and rural populations.

At the same time, growing industrial sectors—such as **Compressed Biogas (CBG)** plants, **Biomass Pellet** manufacturers, and **Paper Mills**—struggle to source raw crop waste efficiently.

**AgroWaste Connect** bridges this gap by offering an intuitive marketplace powered by AI pricing valuation, live stubble pickup tracking, and multi-language voice assistance for seamless adoption.

---

## Problem Statement

1. **Environmental & Health Crisis**: Stubble burning contributes up to 30% of seasonal air pollution (PM2.5 / PM10) in northern India, exacerbating asthma and lung illnesses.
2. **Economic Waste**: Farmers burn valuable biomass worth over **₹6,000+ Crore** annually due to lack of buyer access and tight harvesting windows.
3. **Logistics & Sourcing Barriers**: Industries lack visibility into field stubble location, moisture quality, and bulk transport logistics.
4. **Usability Challenges**: Smallholder farmers often struggle with complex digital interfaces and require voice support in regional languages (Hindi, Punjabi, Marathi, etc.).

---

## Solution

**AgroWaste Connect** provides an end-to-end digital circular economy platform:

- **Direct Farmer-to-Industry Marketplace**: Farmers list crop stubble; buyers place orders with automated field pickup scheduling.
- **AI Stubble Valuation Model**: Calculates fair market value per tonne based on crop type, moisture level (10%-20%), volume, and location.
- **Automated Field Pickup & Logistics Tracker**: Live tracking pipeline from field loading to factory weighing and payment release.
- **Multilingual Voice AI Assistant**: Voice recognition in regional languages (Hindi, Punjabi, Marathi, English) for effortless interaction.
- **Real-Time CO2 & Air Quality Impact Meter**: Visualizes metric tonnes of CO2 saved and air quality improvements per transaction.

---

## Features

- 🌾 **Live Stubble Marketplace**: Search, filter by crop type (Paddy, Wheat, Sugarcane, Cotton, Mustard), state, moisture level, and industrial use.
- 🤖 **AI Valuation & Price Calculator**: Instant estimation of crop waste value, total earnings, CO2 offset, and top industrial application matches.
- 🚚 **Order & Field Pickup Logistics Tracker**: Real-time 5-stage tracking (Order Confirmed -> Vehicle Dispatched -> Field Scale Loading -> In Transit -> Disbursed).
- 🎙️ **Multilingual Voice Assistant**: Speech query simulation in Hindi, Punjabi, Marathi, and English.
- 🔒 **Role-Based Auth Modals**: Simulated OTP-based phone authentication for Farmers and Industry Buyers.
- 📊 **Environmental & Financial Impact Dashboard**: Quantifies CO2 saved, trees equivalent preserved, and income generated.
- 📱 **Responsive & Glassmorphic UI**: Built with modern Tailwind CSS design system, dark mode support, and smooth micro-animations.

---

## Tech Stack

### Frontend & UI
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **UI Components**: Radix UI primitives, Lucide React Icons
- **State & Notifications**: React Hooks, Sonner toast notifications
- **Data Querying**: TanStack React Query v5

### Testing & Quality Assurance
- **Testing Framework**: Vitest
- **Linting**: ESLint 9 with TypeScript rules

---

## Project Structure

```text
agrowaste-connect/
├── index.html                  # HTML5 Entry Point with OpenGraph & SEO tags
├── package.json                # Project dependencies and scripts
├── vite.config.ts              # Vite configuration & path aliases (@/)
├── tailwind.config.ts          # Tailwind CSS theme tokens & animations
├── postcss.config.js           # PostCSS Tailwind plugin setup
├── eslint.config.js            # ESLint code style rules
├── vitest.config.ts            # Vitest unit test configuration
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules (node_modules, .env, build output)
└── src/
    ├── main.tsx                # Application root mounting point
    ├── App.tsx                 # Top-level routing & layout providers
    ├── index.css               # Global CSS design tokens & Tailwind imports
    ├── assets/                 # Static media and background graphics
    ├── components/             # Component directory
    │   ├── Navbar.tsx          # Navigation header with tool triggers
    │   ├── Hero.tsx            # Hero banner with quick stats & action buttons
    │   ├── Marketplace.tsx     # Live stubble listings & order booking modal
    │   ├── WasteCalculatorModal.tsx # AI price valuation modal
    │   ├── VoiceAssistantModal.tsx # Multilingual voice query assistant
    │   ├── OrderTrackerModal.tsx   # Live 5-stage pickup tracking modal
    │   ├── AuthModals.tsx      # Farmer & Buyer registration/login modal
    │   ├── Problem.tsx         # Stubble burning problem overview
    │   ├── Solution.tsx        # 5-step solution workflow
    │   ├── Features.tsx        # Platform feature highlights
    │   ├── AISection.tsx       # AI technology & live impact meter
    │   ├── HowItWorks.tsx      # Step-by-step process timeline
    │   ├── Impact.tsx          # Multi-stakeholder benefit breakdown
    │   ├── TechStack.tsx       # Platform architecture overview
    │   ├── Pitch.tsx           # 1-minute story pitch cards
    │   ├── Footer.tsx          # Footer navigation, demo notice, and copyright
    │   └── ui/                 # Reusable Shadcn / Radix UI primitives
    ├── pages/                  # Page routes
    │   ├── Index.tsx           # Main application dashboard
    │   └── NotFound.tsx        # 404 Error page
    └── test/                   # Vitest unit tests
        ├── example.test.ts     # General framework test
        └── marketplace.test.ts # Marketplace & AI valuation unit tests
```

---

## Prerequisites

- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `npm` (v9+) or `bun` / `yarn` / `pnpm`

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Tejaswini-2006/agrowaste-connect.git
   cd agrowaste-connect
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

---

## Environment Variables

Copy `.env.example` to `.env` in the project root:

```bash
cp .env.example .env
```

Available environment options:

```ini
# Application Configuration
VITE_APP_NAME="AgroWaste Connect"
VITE_APP_DESCRIPTION="AI-powered agricultural crop waste marketplace"
VITE_API_BASE_URL="https://api.agrowasteconnect.org/v1"

# Feature Flags
VITE_ENABLE_AI_VALUATION=true
VITE_ENABLE_LIVE_LOGISTICS=true
VITE_ENABLE_VOICE_ASSISTANT=true

# Placeholders (Never commit real API keys)
VITE_MAPS_API_KEY="YOUR_MAPS_API_KEY_HERE"
VITE_AI_MODEL_ENDPOINT="https://api.agrowasteconnect.org/v1/ai/analyze"
```

---

## Running the Project

To start the local Vite development server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Production Build

To test and compile the production bundle:

```bash
npm run build
```

To preview the built production site locally:

```bash
npm run preview
```

---

## Database Setup

AgroWaste Connect is currently configured with an in-memory state engine for instant demonstration. For production deployment:

1. **Database Schema**: Connect to **MongoDB** or **PostgreSQL** using Prisma / Mongoose schemas for `Users`, `WasteListings`, and `Orders`.
2. **Environment Key**: Set `DATABASE_URL` in `.env`.
3. **Migration Command**:
   ```bash
   npx prisma migrate dev --name init
   ```

---

## API Documentation

### 1. Crop Waste Marketplace API

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/v1/listings` | `GET` | Fetch active stubble listings (supports `cropType`, `state`, `moisture` filters) |
| `/api/v1/listings` | `POST` | Create a new crop waste listing from farmer input |
| `/api/v1/orders` | `POST` | Place an order for waste volume with field pickup request |
| `/api/v1/orders/:id/track` | `GET` | Retrieve live 5-stage logistics status for an order |

### 2. AI Stubble Valuation API

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/v1/ai/valuation` | `POST` | Input crop type, tonnage, moisture % & state; returns rate/tonne, total payout & CO2 saved |

---

## Authentication

Authentication uses an **OTP-over-SMS** verification model:

1. **Farmer Authentication**: User enters full name, mobile number, state, and primary crop. Receives 4-digit verification code (`1234` in demo mode).
2. **Buyer Authentication**: Representative enters business name, mobile number, state, and industry sector (Biofuel, CBG, Paper, Feed).
3. **Role Persistence**: Active user state is stored securely in React state / local storage.

---

## Testing

Run unit tests with Vitest:

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

Run code linting:

```bash
npm run lint
```

---

## Troubleshooting

### Issue: Vite CSS @import Order Warning
- **Cause**: CSS `@import` statements placed after `@layer` or `@tailwind` rules.
- **Fix**: Ensure `@import url('https://fonts.googleapis.com/...');` is placed at line 1 of `src/index.css`.

### Issue: ESLint TypeScript `no-require-imports`
- **Cause**: Using `require("tailwindcss-animate")` inside `tailwind.config.ts`.
- **Fix**: Import using standard ESM syntax: `import tailwindcssAnimate from "tailwindcss-animate"`.

---

## Future Improvements

1. **IoT Moisture Sensor Integration**: Direct Bluetooth sync with soil & stubble moisture probes.
2. **GIS Satellite Burning Heatmap**: Real-time integration with ISRO/NASA thermal satellite feeds to identify at-risk burning farms.
3. **Blockchain Carbon Credit Registry**: Tokenize verified avoided burning into carbon offsets for corporate buyers.
4. **Offline PWA Support**: Progressive Web App capabilities for offline listing creation in low-connectivity farm zones.

---

## Author

**Tejaswini Rakhunde**  
GitHub: [@Tejaswini-2006](https://github.com/Tejaswini-2006)  
Repository: [agrowaste-connect](https://github.com/Tejaswini-2006/agrowaste-connect)

---

## License

This project is open-source and available under the [MIT License](LICENSE).
