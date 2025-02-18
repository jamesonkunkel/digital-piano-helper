"use client";

import { Piano } from "@/types/piano";
import { useComparison } from "@/context/ComparisonContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatPrice } from "@/utils/currency";
import Image from "next/image";

interface PianoCompareCardProps {
  piano: Piano;
}

export default function PianoCompareCard({ piano }: PianoCompareCardProps) {
  const { comparedPianos, addToComparison, removeFromComparison } =
    useComparison();
  const { currency } = useCurrency();
  const isCompared = comparedPianos.some((p) => p.id === piano.id);

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image
          src={piano.imageUrl}
          alt={`${piano.brand} ${piano.model}`}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {piano.brand} {piano.model}
        </h3>
        <p className="text-blue-600 dark:text-blue-400">
          {formatPrice(piano.price, currency)}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {piano.features.keys} keys, {piano.features.keyAction}
        </p>
      </div>

      <button
        onClick={() => {
          if (isCompared) {
            removeFromComparison(piano.id);
          } else {
            addToComparison(piano);
          }
        }}
        disabled={!isCompared && comparedPianos.length >= 2}
        className={`px-4 py-2 rounded-lg ${
          isCompared
            ? "bg-red-500 text-white hover:bg-red-600"
            : comparedPianos.length >= 2
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {isCompared ? "Remove" : "Compare"}
      </button>
    </div>
  );
}
