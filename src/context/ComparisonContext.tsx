"use client";

import { createContext, useContext, useState } from "react";
import { Piano } from "@/types/piano";

interface ComparisonContextType {
  comparedPianos: Piano[];
  addToComparison: (piano: Piano) => void;
  removeFromComparison: (pianoId: string) => void;
  clearComparison: () => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(
  undefined
);

export function ComparisonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [comparedPianos, setComparedPianos] = useState<Piano[]>([]);

  const addToComparison = (piano: Piano) => {
    if (
      comparedPianos.length < 2 &&
      !comparedPianos.find((p) => p.id === piano.id)
    ) {
      setComparedPianos([...comparedPianos, piano]);
    }
  };

  const removeFromComparison = (pianoId: string) => {
    setComparedPianos(comparedPianos.filter((p) => p.id !== pianoId));
  };

  const clearComparison = () => {
    setComparedPianos([]);
  };

  return (
    <ComparisonContext.Provider
      value={{
        comparedPianos,
        addToComparison,
        removeFromComparison,
        clearComparison,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison must be used within a ComparisonProvider");
  }
  return context;
}
