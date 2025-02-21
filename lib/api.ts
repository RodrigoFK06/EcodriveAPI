import type { ApiResponse } from "@/types/rewards"
import { fallbackRewards } from "./fallback-data"

export async function fetchDriverRewards(): Promise<ApiResponse> {
  try {
    const response = await fetch("/api/driver-rewards")
    if (!response.ok) {
      return {
        data: fallbackRewards.driverRewards,
        message: "Mostrando datos de ejemplo. Actualizando premios...",
      }
    }
    return await response.json()
  } catch (error) {
    return {
      data: fallbackRewards.driverRewards,
      message: "Mostrando datos de ejemplo. Actualizando premios...",
    }
  }
}

export async function fetchPassengerRewards(): Promise<ApiResponse> {
  try {
    const response = await fetch("/api/passenger-rewards")
    if (!response.ok) {
      return {
        data: fallbackRewards.passengerRewards,
        message: "Mostrando datos de ejemplo. Actualizando premios...",
      }
    }
    return await response.json()
  } catch (error) {
    return {
      data: fallbackRewards.passengerRewards,
      message: "Mostrando datos de ejemplo. Actualizando premios...",
    }
  }
}

