import type { BenefitsApiResponse } from "@/types/benefits"
import { fallbackBenefits } from "./fallback-data"

export async function fetchBenefits(): Promise<BenefitsApiResponse> {
  try {
    const response = await fetch("/api/benefits")
    if (!response.ok) {
      return {
        data: fallbackBenefits,
        message: "Mostrando beneficios de ejemplo. Actualizando contenido...",
      }
    }
    return await response.json()
  } catch (error) {
    return {
      data: fallbackBenefits,
      message: "Mostrando beneficios de ejemplo. Actualizando contenido...",
    }
  }
}

