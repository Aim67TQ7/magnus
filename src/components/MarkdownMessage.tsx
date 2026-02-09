import { useState, useRef, useEffect, type ComponentPropsWithoutRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function CitationDot({ source, description }: { source: string; description?: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <span ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(v => !v)}
        className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-accent/20 text-accent hover:bg-accent/40 transition-colors text-[8px] font-bold leading-none align-super ml-0.5 cursor-pointer"
        title="View source"
      >
        •
      </button>
      {open && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 z-50 w-max max-w-[260px] bg-slate-700 border border-slate-600 rounded-md px-2.5 py-1.5 text-[11px] text-slate-200 shadow-lg whitespace-normal">
          <span className="font-semibold text-accent">{source}</span>
          {description && <span className="text-slate-300"> — {description}</span>}
        </span>
      )}
    </span>
  )
}

function CustomLink({ href, title, children, ...rest }: ComponentPropsWithoutRef<'a'>) {
  if (href?.startsWith('cite:')) {
    const source = href.slice(5)
    return <CitationDot source={source} description={title || undefined} />
  }
  return <a href={href} title={title} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>
}

const markdownComponents = {
  a: CustomLink,
}

export function MarkdownMessage({ content }: { content: string }) {
  return (
    <div className="prose prose-sm prose-invert max-w-none prose-p:my-1.5 prose-headings:my-2 prose-li:my-0.5 prose-ul:my-1 prose-ol:my-1 prose-table:my-2 prose-th:px-3 prose-th:py-1.5 prose-td:px-3 prose-td:py-1.5 prose-th:bg-slate-700 prose-pre:bg-slate-900 prose-code:text-accent prose-strong:text-slate-100">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
