export type CurrencyCode = "USD" | "EUR" | "GBP" | "JPY" | "AUD" | "CAD";

export const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  AUD: "A$",
  CAD: "C$",
};

// Exchange rates (as of a point in time - in production, you'd want to fetch these from an API)
export const EXCHANGE_RATES: Record<CurrencyCode, number> = {
  USD: 1,
  EUR: 0.93,
  GBP: 0.79,
  JPY: 149.5,
  AUD: 1.54,
  CAD: 1.36,
};

export function formatPrice(price: number, currency: CurrencyCode): string {
  const exchangeRate = EXCHANGE_RATES[currency];
  const convertedPrice = price * exchangeRate;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "JPY" ? 0 : 2,
  }).format(convertedPrice);
}
