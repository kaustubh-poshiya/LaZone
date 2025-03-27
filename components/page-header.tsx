type PageHeaderProps = {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-4">{title}</h1>
        {subtitle && <p className="text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}

