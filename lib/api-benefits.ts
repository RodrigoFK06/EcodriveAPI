import type { BenefitsApiResponse } from "@/types/benefits";
import { fallbackBenefits } from "./fallback-data";
import { fetchFromApi } from "./api";

export async function fetchBenefits(): Promise<BenefitsApiResponse> {
  return fetchFromApi("benefits", fallbackBenefits);
}
