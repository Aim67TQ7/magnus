import { useState, useRef, useEffect } from 'react'
import { Send, Loader2, User, Wrench } from 'lucide-react'
import { MarkdownMessage } from './MarkdownMessage'
import { sendEquipmentChat } from '../lib/api'
import type { ChatMessage } from '../lib/api'

const STATUS_MESSAGES = [
  ["Checking the knowledge base...", "Cross-referencing specs...", "Almost there..."],
  ["Let me look that up...", "Reviewing the technical data...", "Putting it together..."],
  ["One moment — pulling specs...", "Comparing options...", "Wrapping up..."],
  ["Good question — digging in...", "Checking application notes...", "Nearly done..."],
]

function useStatusMessage(loading: boolean) {
  const [phase, setPhase] = useState(0)
  const [messageSet, setMessageSet] = useState(0)

  useEffect(() => {
    if (!loading) { setPhase(0); return }
    setMessageSet(Math.floor(Math.random() * STATUS_MESSAGES.length))
    setPhase(0)
    const t1 = setTimeout(() => setPhase(1), 4000)
    const t2 = setTimeout(() => setPhase(2), 10000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [loading])

  return loading ? STATUS_MESSAGES[messageSet][phase] : ''
}

const SUGGESTIONS = [
  'What plate magnet do I need for a 24" conveyor?',
  'Compare drawer magnets vs grate magnets',
  'What equipment for food processing?',
  'Can rare earth magnets handle 200°F?',
  'How do I size an overband magnet?',
  'What tramp metals are common in recycling?',
]

export function EquipmentView() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const statusMessage = useStatusMessage(loading)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    setInput('')
    setError(null)
    const userMsg: ChatMessage = { role: 'user', content: text }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)

    try {
      const { reply } = await sendEquipmentChat(text, messages)
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to send message'
      setError(msg)
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Wrench className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-100">Magnus</h1>
            <p className="text-xs text-slate-500">Bunting Equipment Specialist</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto px-6 py-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-7 h-7 text-slate-500" />
            </div>
            <p className="text-slate-400 text-sm mb-1">Ask me anything about Bunting equipment.</p>
            <p className="text-slate-600 text-xs mb-5">Magnetic separators, metal detectors, conveyors, sizing & selection</p>
            <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
              {SUGGESTIONS.map(suggestion => (
                <button
                  key={suggestion}
                  onClick={() => { setInput(suggestion); inputRef.current?.focus() }}
                  className="text-xs px-3 py-1.5 rounded-full border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
            {msg.role === 'assistant' && (
              <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                <Wrench className="w-3.5 h-3.5 text-accent" />
              </div>
            )}
            <div
              className={`max-w-[75%] rounded-lg px-4 py-3 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-accent text-white'
                  : 'bg-slate-800 text-slate-200'
              }`}
            >
              {msg.role === 'assistant' ? (
                <MarkdownMessage content={msg.content} />
              ) : (
                <div className="whitespace-pre-wrap">{msg.content}</div>
              )}
            </div>
            {msg.role === 'user' && (
              <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center shrink-0 mt-1">
                <User className="w-3.5 h-3.5 text-slate-400" />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
              <Wrench className="w-3.5 h-3.5 text-accent" />
            </div>
            <div className="bg-slate-800 rounded-lg px-4 py-3 min-w-[220px] max-w-[320px]">
              <div className="flex items-center gap-2 mb-2">
                <Loader2 className="w-3.5 h-3.5 text-accent animate-spin shrink-0" />
                <p className="text-sm text-slate-300 italic transition-all duration-300">{statusMessage}</p>
              </div>
              <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-accent/60 rounded-full animate-[progress_8s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-danger/10 border border-danger/20 rounded-lg px-4 py-3 text-sm text-danger">
            {error}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex gap-2 px-6 py-4 border-t border-slate-800">
        <textarea
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about equipment, sizing, selection, specs... (Enter to send)"
          rows={1}
          className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-500 resize-none focus:outline-none focus:border-accent transition-colors"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="px-4 py-3 bg-accent hover:bg-accent-hover disabled:bg-slate-700 disabled:text-slate-500 text-white rounded-lg transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  )
}
