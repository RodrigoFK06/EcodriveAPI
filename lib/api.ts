import type { ApiResponse } from "@/types/rewards"
import { fallbackRewards } from "./fallback-data"

export async function fetchFromApi<T>(endpoint: string, fallbackData: T): Promise<{ data: T; message?: string; error?: string }> {
  try {
    const response = await fetch(`/api/${endpoint}`);

    if (!response.ok) {
      console.warn(`⚠️ API Error en ${endpoint}: ${response.statusText}`);
      return { data: fallbackData, message: `Mostrando datos de ejemplo. Actualizando ${endpoint}...` };
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error(`❌ Error en fetchFromApi(${endpoint}):`, error);
    return { data: fallbackData, message: `Mostrando datos de ejemplo. Actualizando ${endpoint}...`, error: "Error al obtener datos" };
  }
}


