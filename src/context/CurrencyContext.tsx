"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { CurrencyCode, CURRENCY_SYMBOLS } from "@/utils/currency";

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");

  // Load currency from localStorage on mount
  useEffect(() => {
    const savedCurrency = localStorage.getItem(
      "preferredCurrency"
    ) as CurrencyCode;
    if (
      savedCurrency &&
      Object.keys(CURRENCY_SYMBOLS).includes(savedCurrency)
    ) {
      setCurrency(savedCurrency);
    }
  }, []);

  // Save currency to localStorage when it changes
  const updateCurrency = (newCurrency: CurrencyCode) => {
    setCurrency(newCurrency);
    localStorage.setItem("preferredCurrency", newCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: updateCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
