import type { MainPrizeResponse } from "@/types/main-prize"

const fallbackMainPrize = {
  title: "¡GRAN PREMIO DEL MES!",
  subtitle: "2 Viajes a Malabrigo 3D/2N\n(2 personas todo pagado)",
  note: "Nota: La entrega del premio será para conductor y pasajero",
  date: "Fecha: 30 de Marzo",
  imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-MxfnQwYd5biTfe7wGrW7q6qS8eAN7C.png",
}

export async function fetchMainPrize(): Promise<MainPrizeResponse> {
  try {
    const response = await fetch("/api/main-prize")
    if (!response.ok) {
      return {
        data: fallbackMainPrize,
        error: "Error al cargar el premio principal",
      }
    }
    return await response.json()
  } catch (error) {
    return {
      data: fallbackMainPrize,
      error: "Error al cargar el premio principal",
    }
  }
}

