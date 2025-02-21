"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import BenefitCard from "./benefit-card"
import LoadingMessage from "../ui/loading-message"

interface BenefitsGridProps {
  benefits: any[]
  isLoading: boolean
  message?: string
}

export default function BenefitsGrid({ benefits, isLoading, message }: BenefitsGridProps) {
  if (isLoading) {
    return <LoadingMessage />
  }

  return (
    <section className="py-16 container mx-auto px-4 bg-[#FFF5E9]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <Star className="w-24 h-24 text-[#E67E22] mx-auto mb-6" />
        <h2 className="text-5xl font-bold text-[#E67E22] tracking-wider">¡BENEFICIOS PARA TODOS!</h2>
        {message && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-[#E67E22] font-medium">
            {message}
          </motion.div>
        )}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BenefitCard {...benefit} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

