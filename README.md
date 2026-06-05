<div align="center">

# ⚡ ZeroKey AI

### Free Multi-Model AI Orchestrator — No API Key Required to Start

**Use frontier AI models completely free.**  
Works instantly with zero setup. Add optional free keys to unlock more power.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Single File](https://img.shields.io/badge/Single%20File-HTML-orange.svg)]()
[![No Backend](https://img.shields.io/badge/Backend-None-green.svg)]()
[![Zero Key Required](https://img.shields.io/badge/Key-Not%20Required-brightgreen.svg)]()
[![Free Forever](https://img.shields.io/badge/Cost-Free%20Forever-brightgreen.svg)]()

[**🚀 Live Demo**](https://your-username.github.io/zerokey-ai) · [**Quick Start**](#quick-start) · [**Add providers**](#optional-free-api-keys)

</div>

---

## What is ZeroKey AI?

ZeroKey AI is a **single HTML file** that gives you access to multiple AI models — completely free, with no signup required to get started.

**Open it. Start asking. That's it.**

Under the hood it's an intelligent router across free AI APIs. It automatically:

- ✦ **Works instantly** via Pollinations AI — no key, no account, no setup
- ⚡ **Switches automatically** between AI models when one runs out of quota — saving your work before switching
- 🌙 **Queues prompts overnight** if all quotas are exhausted, running them next morning
- 💾 **Stores everything locally** — no server, no account, your data never leaves your browser
- 🎨 **Dark & light theme** — toggle with one click

---

## Quick Start

### Option A — Open locally (2 seconds)

```bash
# Download and open — that's literally it
curl -O https://raw.githubusercontent.com/your-username/zerokey-ai/main/index.html
open index.html
```

### Option B — Use online via GitHub Pages

1. Fork this repo
2. Go to **Settings → Pages → Source → main / (root)**
3. Visit `https://your-username.github.io/zerokey-ai`

---

## AI Providers

### ✦ Built-in (no key needed)

| Provider | What it does | Cost |
|----------|-------------|------|
| **Pollinations AI** | Text + image generation | Free forever, no key |

### Optional free keys (more power + capacity)

| Provider | Model | Free Tier | Best For |
|----------|-------|-----------|----------|
| 🟠 **Groq** | Llama 3.3 70B | 14,400 req/day | Fast text, code, writing |
| 🔵 **Google Gemini** | Gemini 1.5 Flash | 1,500 req/day | Long analysis, reasoning |
| 🔴 **Mistral** | Mistral Small + Codestral | Free tier | Text, code |
| 🟢 **Cohere** | Command R+ | Free tier | Text, analysis |
| 🟣 **OpenRouter** | Llama 3.2 + DeepSeek | Free models | Text, code |
| 🟡 **HuggingFace** | FLUX.1-schnell | Free inference | Higher quality images |

---

## Optional Free API Keys

You don't need any of these to use ZeroKey AI. But they unlock better models and more daily capacity.

### 🟠 Groq (recommended first key — best quality + speed)
1. Go to [console.groq.com](https://console.groq.com) — sign up free, no credit card
2. **API Keys → Create API Key**
3. Paste in ZeroKey AI → 🔑 Keys → Groq → Save

### 🔵 Google Gemini
1. Go to [aistudio.google.com](https://aistudio.google.com/app/apikey)
2. Sign in with Google → **Create API Key**

### 🟣 OpenRouter (access to 100+ models)
1. Go to [openrouter.ai](https://openrouter.ai/keys) — sign up free
2. Create a key — free models never cost anything

### 🟡 HuggingFace (better image generation)
1. Go to [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)
2. **New token → Read → Generate**

---

## How the Routing Works

```
Your prompt
    │
    ▼
Task detection (image / code / analysis / creative / text)
    │
    ▼
Try providers in priority order:
    │
    ├─ Groq available? ──────────────────► Call API ──► ✓ Return response
    │       └─ Quota error? ──► Save session ──► Mark dead ──► next
    │
    ├─ Gemini available? ────────────────► Call API ──► ✓ Return response
    │
    └─ Pollinations (always available) ──► Call API ──► ✓ Return response
```

**There is always a fallback. ZeroKey AI never leaves you with nothing.**

---

## Features

- **Zero setup** — works out of the box via Pollinations AI
- **Smart routing** — detects task type and picks optimal provider
- **Auto-fallback** — switches providers on quota errors, saves progress first
- **Dark / light theme** — toggle in the header, preference saved
- **Session history** — all conversations saved locally in IndexedDB
- **Overnight queue** — prompts saved when all quotas exhausted, run next morning
- **Image generation** — Pollinations (no key) + FLUX via HuggingFace (optional key)
- **Code mode** — routes to Codestral/DeepSeek for programming tasks
- **Export** — download any session as `.txt`
- **No backend** — pure client-side, keys stored only in your browser

---

## Privacy & Security

- Keys stored in `localStorage` — only accessible by this page in your browser
- No analytics, no tracking, zero telemetry
- No account required
- Open source — every line visible in `index.html`

Your keys are sent **only** to each provider's official API endpoint.

---

## Contributing

Ideas for new providers or features:

- [ ] Cerebras (free, extremely fast)
- [ ] Together AI (many free models)  
- [ ] Perplexity (web search)
- [ ] Multi-turn conversation memory
- [ ] Custom system prompts
- [ ] Export to Markdown / PDF
- [ ] PWA support (installable app)

Pull requests welcome!

---

## License

MIT — free to use, modify, and distribute.

---

<div align="center">
<strong>Made for everyone who needs AI but doesn't want to pay a subscription.</strong>
<br><br>
⭐ Star this repo if ZeroKey AI helped you!
</div>
