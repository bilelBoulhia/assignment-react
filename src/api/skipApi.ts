/**
 * Fetches available skips by location.
 * @returns Promise<Skip[]> - List of skips
 * @throws Error if network response is not ok
 */
import { Skip } from "../types/skip";

export const fetchSkips = async (): Promise<Skip[]> => {
  const response = await fetch(
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
  );
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  return (data || [])
    .filter((item: any) => item.size && item.price_before_vat && item.hire_period_days)
    .map((item: any) => ({
      id: item.id,
      name: `${item.size} Yard Skip`,
      size: `${item.size} Yard`,
      price: item.price_before_vat,
      hirePeriod: item.hire_period_days,
      image: "",
    }))
    .sort((a: Skip, b: Skip) => parseInt(a.size) - parseInt(b.size));
}; 