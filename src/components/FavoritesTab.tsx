"use client";

import { useFavorites } from "@/hooks/useFavorites";
import { Piano } from "@/types/piano";
import { pianos } from "@/data/pianos";
import PianoRecommendations from "./PianoRecommendations";

export default function FavoritesTab() {
  const { favorites } = useFavorites();
  const favoritePianos = pianos.filter((piano) => favorites.includes(piano.id));

  if (favorites.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          No Favorites Yet
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Click the star icon on any piano to add it to your favorites
        </p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
        Your Favorite Pianos ({favorites.length})
      </h2>
      <PianoRecommendations recommendations={favoritePianos} />
    </div>
  );
}
