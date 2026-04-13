'use client'

interface MarqueeBannerProps {
  text: string
  variant?: 'blue' | 'orange' | 'dark'
  speed?: number
}

export default function MarqueeBanner({ text, variant = 'blue', speed = 20 }: MarqueeBannerProps) {
  const bgClass = variant === 'blue'
    ? 'bg-gradient-to-r from-navy via-navy-mid to-navy'
    : variant === 'dark'
      ? 'bg-navy-deep'
      : 'bg-orange'

  const textClass = variant === 'blue' || variant === 'dark'
    ? 'text-white/30'
    : 'text-white/40'

  const items = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className={`${bgClass} py-4 overflow-hidden relative`}>
      <div
        className="flex whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {items.map((i) => (
          <span key={i} className={`mx-8 text-[13px] font-bold uppercase tracking-[0.15em] ${textClass} flex items-center gap-4`}>
            <span>{text}</span>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="opacity-40">
              <rect x="1" y="1" width="6" height="6" rx="1" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}
