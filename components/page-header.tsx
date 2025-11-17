import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type PageHeaderProps = {
  title: string
  subtitle?: string
  className?: string
  action?: ReactNode
}

export default function PageHeader({ title, subtitle, className, action }: PageHeaderProps) {
  return (
    <section className={cn("pt-32 pb-16 md:pt-40 md:pb-20", className)}>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-4">{title}</h1>
        {subtitle && <p className="text-current/80 max-w-2xl mx-auto mb-6">{subtitle}</p>}
        {action && (
          <div className="mt-8 flex justify-center">
            {action}
          </div>
        )}
      </div>
    </section>
  )
}

