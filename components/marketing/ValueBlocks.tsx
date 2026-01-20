"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface ValueBlock {
  icon: LucideIcon
  title: string
  description: string
}

interface ValueBlocksProps {
  blocks: ValueBlock[]
}

export function ValueBlocks({ blocks }: ValueBlocksProps) {
  return (
    <section className="px-6 py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <block.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{block.title}</CardTitle>
                  <CardDescription className="text-base">
                    {block.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
