"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTASectionProps {
  title: string
  description: string
  ctaText: string
  ctaHref: string
}

export function CTASection({
  title,
  description,
  ctaText,
  ctaHref,
}: CTASectionProps) {
  return (
    <section className="px-6 py-24">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
