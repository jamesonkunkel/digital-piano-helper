"use client";

import { CURRENCY_SYMBOLS, CurrencyCode } from "@/utils/currency";
import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
      className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm"
    >
      {Object.entries(CURRENCY_SYMBOLS).map(([code, symbol]) => (
        <option key={code} value={code}>
          {code} ({symbol})
        </option>
      ))}
    </select>
  );
}
