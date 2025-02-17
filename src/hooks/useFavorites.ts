"use client";

import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    // Load favorites from localStorage on mount
    const stored = localStorage.getItem("favoritePianos");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const toggleFavorite = (pianoId: string) => {
    const newFavorites = favorites.includes(pianoId)
      ? favorites.filter((id) => id !== pianoId)
      : [...favorites, pianoId];

    setFavorites(newFavorites);
    localStorage.setItem("favoritePianos", JSON.stringify(newFavorites));
  };

  const isFavorite = (pianoId: string) => favorites.includes(pianoId);

  return { favorites, toggleFavorite, isFavorite };
}
