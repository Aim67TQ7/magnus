# Changelog

All notable changes to Magnus are documented here.

---

## [1.0.0] — 2026-02-09

### Added
- **Initial release** — standalone equipment specialist split from Maggie
- Full Bunting equipment knowledge base (10 files, 500+ data points)
  - Plate magnets, overbands, drawer/grate magnets, drum/head pulleys
  - Metal detection, conveyors, inline/pneumatic/liquid separators
  - Tramp metals reference, selection decision tree, fundamentals
- AI fallback chain: Anthropic Claude Sonnet 4.5 → OpenAI GPT-4o → Gemini 2.0 Flash
- Citation dots for grounded responses (clickable inline source references)
- Dark theme with green accent (distinct from Maggie's blue)
- Status messages with personality and progress bar animation
- Supabase logging with app identifier (`magnus`)
- **Knowledge versioning** — `knowledge/VERSION` file, logged per conversation
- **Prompt versioning** — `prompts/VERSION` file, logged in metadata
- **Gap detection** — logs when Magnus deflects to sales/support (reveals knowledge gaps)
- Netlify Functions backend
- Vite + React + TypeScript + Tailwind CSS v4
