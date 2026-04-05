import { stockImageSlots, type StockImageSlotId } from '@/lib/stock-image-slots'
import { cn } from '@/lib/utils/css'

const ratioClassMap: Record<string, string> = {
  '16:10': 'aspect-[16/10]',
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
}

interface StockImageSlotProps {
  slot: StockImageSlotId
  className?: string
}

export default function StockImageSlot({ slot, className }: StockImageSlotProps) {
  const config = stockImageSlots[slot]
  const ratioClass = ratioClassMap[config.ratio] ?? 'aspect-[4/3]'

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface via-white to-surface',
        ratioClass,
        className
      )}
      aria-label={`Image placeholder: ${config.label}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,68,5,0.18),transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-orange/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
        <p className="text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">Stock Image Slot</p>
        <p className="text-[16px] font-semibold text-ink">{config.label}</p>
        <p className="text-[13px] text-steel">Ratio conseille: {config.ratio}</p>
      </div>
    </div>
  )
}
