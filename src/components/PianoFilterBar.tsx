"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Piano } from "@/types/piano";
import { pianos } from "@/data/pianos";
import { useFavorites } from "@/hooks/useFavorites";

interface FilterOptions {
  priceRange: [number, number];
  skillLevels: string[];
  brands: string[];
  keyActions: string[];
  features: string[];
  showOnlyFavorites: boolean;
}

interface PianoFilterBarProps {
  onFilterChange: (filteredPianos: Piano[]) => void;
}

export default function PianoFilterBar({
  onFilterChange,
}: PianoFilterBarProps) {
  const { isFavorite } = useFavorites();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, Math.max(...pianos.map((p) => p.price))],
    skillLevels: [],
    brands: [],
    keyActions: [],
    features: [],
    showOnlyFavorites: false,
  });

  const availableBrands = [...new Set(pianos.map((p) => p.brand))];
  const availableKeyActions = [
    ...new Set(pianos.map((p) => p.features.keyAction)),
  ];

  const filterPianos = useCallback(() => {
    const filtered = pianos.filter((piano) => {
      if (filters.showOnlyFavorites && !isFavorite(piano.id)) {
        return false;
      }

      const matchesPrice =
        piano.price >= filters.priceRange[0] &&
        piano.price <= filters.priceRange[1];
      const matchesSkill =
        filters.skillLevels.length === 0 ||
        filters.skillLevels.includes(piano.skillLevel);
      const matchesBrand =
        filters.brands.length === 0 || filters.brands.includes(piano.brand);
      const matchesKeyAction =
        filters.keyActions.length === 0 ||
        filters.keyActions.includes(piano.features.keyAction);
      const matchesFeatures =
        filters.features.length === 0 ||
        filters.features.every((feature) => {
          switch (feature) {
            case "bluetooth":
              return piano.features.hasBluetoothConnection;
            case "midi":
              return piano.features.hasMidiConnection;
            case "usb":
              return piano.features.hasUSBConnection;
            default:
              return true;
          }
        });

      return (
        matchesPrice &&
        matchesSkill &&
        matchesBrand &&
        matchesKeyAction &&
        matchesFeatures
      );
    });

    return filtered;
  }, [filters, isFavorite]);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to apply filters
    timeoutRef.current = setTimeout(() => {
      const filtered = filterPianos();
      onFilterChange(filtered);
    }, 100);

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [filterPianos, onFilterChange]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
        Filters
      </h2>

      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/30 -mx-6 px-6 py-4 border-l-4 border-blue-500">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.showOnlyFavorites}
              onChange={(e) =>
                setFilters({ ...filters, showOnlyFavorites: e.target.checked })
              }
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-blue-700 dark:text-blue-300 font-medium">
              Show Only Favorites
            </span>
          </label>
        </div>

        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min={0}
              max={Math.max(...pianos.map((p) => p.price))}
              value={filters.priceRange[1]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  priceRange: [filters.priceRange[0], Number(e.target.value)],
                })
              }
              className="w-full"
            />
            <span className="text-sm">
              Up to ${filters.priceRange[1].toLocaleString()}
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Skill Level</h3>
          <div className="space-y-2">
            {["beginner", "intermediate", "advanced"].map((level) => (
              <label key={level} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.skillLevels.includes(level)}
                  onChange={(e) => {
                    const newSkillLevels = e.target.checked
                      ? [...filters.skillLevels, level]
                      : filters.skillLevels.filter((l) => l !== level);
                    setFilters({ ...filters, skillLevels: newSkillLevels });
                  }}
                  className="mr-2"
                />
                <span className="capitalize">{level}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Brands</h3>
          <div className="space-y-2">
            {availableBrands.map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={(e) => {
                    const newBrands = e.target.checked
                      ? [...filters.brands, brand]
                      : filters.brands.filter((b) => b !== brand);
                    setFilters({ ...filters, brands: newBrands });
                  }}
                  className="mr-2"
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Key Action</h3>
          <div className="space-y-2">
            {availableKeyActions.map((action) => (
              <label key={action} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.keyActions.includes(action)}
                  onChange={(e) => {
                    const newActions = e.target.checked
                      ? [...filters.keyActions, action]
                      : filters.keyActions.filter((a) => a !== action);
                    setFilters({ ...filters, keyActions: newActions });
                  }}
                  className="mr-2"
                />
                <span className="capitalize">{action.replace("-", " ")}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Features</h3>
          <div className="space-y-2">
            {["bluetooth", "midi", "usb"].map((feature) => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.features.includes(feature)}
                  onChange={(e) => {
                    const newFeatures = e.target.checked
                      ? [...filters.features, feature]
                      : filters.features.filter((f) => f !== feature);
                    setFilters({ ...filters, features: newFeatures });
                  }}
                  className="mr-2"
                />
                <span className="capitalize">{feature}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
