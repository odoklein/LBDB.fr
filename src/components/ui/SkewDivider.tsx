interface SkewDividerProps {
  from?: string
  to?: string
  direction?: 'down' | 'up'
  height?: number
}

export default function SkewDivider({ from = '#ffffff', to = '#f5f5f0', direction = 'down', height = 64 }: SkewDividerProps) {
  const skewClass = direction === 'down' ? '-skew-y-[1.5deg]' : 'skew-y-[1.5deg]'

  return (
    <div className="relative" style={{ height: `${height}px`, marginTop: `-${height / 2}px`, marginBottom: `-${height / 2}px` }}>
      <div className="absolute inset-0" style={{ backgroundColor: from }} />
      <div className={`absolute inset-0 ${skewClass} origin-left`} style={{ backgroundColor: to }} />
    </div>
  )
}
