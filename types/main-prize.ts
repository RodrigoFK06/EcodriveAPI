export interface MainPrize {
  title: string
  subtitle: string
  note: string
  date: string
  imageUrl: string
}

export interface MainPrizeResponse {
  data: MainPrize
  error?: string
}

