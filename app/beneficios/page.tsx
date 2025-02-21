"use client"

import { useEffect, useState } from "react"
import type { Benefit } from "@/types/benefits"
import { fetchBenefits } from "@/lib/api-benefits"
import BenefitsHero from "@/components/benefits/benefits-hero"
import BenefitsGrid from "@/components/benefits/benefits-grid"
import BenefitsCTA from "@/components/benefits/benefits-cta"

export default function BenefitsPage() {
  const [benefits, setBenefits] = useState<Benefit[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const loadBenefits = async () => {
      try {
        setIsLoading(true)
        const response = await fetchBenefits()
        if (response.error) {
          setError(response.error)
        } else {
          setBenefits(response.data)
        }
      } catch (e) {
        setError("Error al cargar los beneficios")
      } finally {
        setIsLoading(false)
      }
    }

    loadBenefits()
  }, [])

  return (
    <main className="min-h-screen">
      <BenefitsHero />
      <div className="bg-[#FFF5E9] pt-16">
        <BenefitsGrid benefits={benefits} isLoading={isLoading} error={error} />
        <BenefitsCTA />
      </div>
    </main>
  )
}

