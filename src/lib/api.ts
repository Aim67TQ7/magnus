const API_BASE = ""

export interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

export interface ChatResponse {
  reply: string
}

export async function sendEquipmentChat(message: string, history: ChatMessage[]): Promise<ChatResponse> {
  const res = await fetch(`${API_BASE}/api/equipment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Request failed" }))
    throw new Error(err.error || `HTTP ${res.status}`)
  }

  return res.json()
}
