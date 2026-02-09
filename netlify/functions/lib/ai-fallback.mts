import Anthropic from "@anthropic-ai/sdk"
import OpenAI from "openai"

/**
 * AI provider fallback chain: Anthropic → OpenAI → Gemini
 * Tries each provider in order. Falls back on network/server errors only.
 */

const ANTHROPIC_MODEL = "claude-sonnet-4-5-20250929"
const OPENAI_MODEL = "gpt-4o"
const GEMINI_MODEL = "gemini-2.0-flash"

interface ChatParams {
  system: string
  messages: { role: "user" | "assistant"; content: string }[]
  maxTokens?: number
}

interface ChatResult {
  text: string
  provider: "anthropic" | "openai" | "gemini"
}

async function tryAnthropic(params: ChatParams): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY not configured")

  const client = new Anthropic({ apiKey })
  const response = await client.messages.create({
    model: ANTHROPIC_MODEL,
    max_tokens: params.maxTokens || 4096,
    system: params.system,
    messages: params.messages,
  })

  const textBlocks = response.content.filter(b => b.type === "text")
  return textBlocks.map(b => b.type === "text" ? b.text : "").join("\n")
}

async function tryOpenAI(params: ChatParams): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error("OPENAI_API_KEY not configured")

  const client = new OpenAI({ apiKey })
  const response = await client.chat.completions.create({
    model: OPENAI_MODEL,
    max_tokens: params.maxTokens || 4096,
    messages: [
      { role: "system", content: params.system },
      ...params.messages,
    ],
  })

  return response.choices[0]?.message?.content || ""
}

async function tryGemini(params: ChatParams): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) throw new Error("GEMINI_API_KEY not configured")

  const client = new OpenAI({
    apiKey,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
  })

  const response = await client.chat.completions.create({
    model: GEMINI_MODEL,
    max_tokens: params.maxTokens || 4096,
    messages: [
      { role: "system", content: params.system },
      ...params.messages,
    ],
  })

  return response.choices[0]?.message?.content || ""
}

export async function chatWithFallback(params: ChatParams): Promise<ChatResult> {
  // Try Anthropic first
  try {
    const text = await tryAnthropic(params)
    return { text, provider: "anthropic" }
  } catch (err) {
    console.warn("Anthropic failed:", err instanceof Error ? err.message : err)
  }

  // Try OpenAI
  try {
    const text = await tryOpenAI(params)
    return { text, provider: "openai" }
  } catch (err) {
    console.warn("OpenAI failed:", err instanceof Error ? err.message : err)
  }

  // Try Gemini
  try {
    const text = await tryGemini(params)
    return { text, provider: "gemini" }
  } catch (err) {
    console.warn("Gemini failed:", err instanceof Error ? err.message : err)
  }

  throw new Error("All AI providers failed. Check API keys and service availability.")
}
