"use client";

import { Piano } from "@/types/piano";
import Image from "next/image";
import { useState } from "react";
import PianoDetailView from "./PianoDetailView";
import { useFavorites } from "@/hooks/useFavorites";
import { useCurrency } from "@/context/CurrencyContext";
import { formatPrice } from "@/utils/currency";

interface PianoRecommendationsProps {
  recommendations: Piano[];
}

export default function PianoRecommendations({
  recommendations,
}: PianoRecommendationsProps) {
  const [selectedPiano, setSelectedPiano] = useState<Piano | null>(null);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { currency } = useCurrency();

  if (recommendations.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">
          No pianos found matching your criteria. Try adjusting your
          preferences.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {recommendations.map((piano) => (
          <div
            key={piano.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <div
                className="absolute top-4 right-4 z-10 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(piano.id);
                }}
              >
                <svg
                  className={`w-8 h-8 ${
                    isFavorite(piano.id)
                      ? "text-yellow-500 fill-current"
                      : "text-white stroke-current"
                  }`}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <div
                className="relative h-64 cursor-pointer"
                onClick={() => setSelectedPiano(piano)}
              >
                <Image
                  src={piano.imageUrl}
                  alt={`${piano.brand} ${piano.model}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {piano.brand} {piano.model}
              </h3>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {formatPrice(piano.price, currency)}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Skill Level: </span>
                    <span className="capitalize">{piano.skillLevel}</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Best For: </span>
                    {piano.bestFor.join(", ")}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      {piano.features.keys} keys, {piano.features.keyAction}
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      {piano.features.polyphony} note polyphony
                    </li>
                    {piano.features.builtInSongs && (
                      <li className="flex items-center">
                        <span className="mr-2">•</span>
                        {piano.features.builtInSongs} built-in songs
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href={`${piano.affiliateLinks.amazon}?tag=your-tag`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-500 text-white px-4 py-2 rounded-lg mr-3 hover:bg-amber-600"
                >
                  View on Amazon
                </a>
                <a
                  href={`${piano.affiliateLinks.sweetwater}?ref=your-ref`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  View on Sweetwater
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPiano && (
        <PianoDetailView
          piano={selectedPiano}
          onClose={() => setSelectedPiano(null)}
        />
      )}
    </>
  );
}
