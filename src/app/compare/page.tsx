"use client";

import { useState } from "react";
import { Piano } from "@/types/piano";
import { pianos } from "@/data/pianos";
import PianoComparison from "@/components/PianoComparison";
import PianoFilterBar from "@/components/PianoFilterBar";
import PianoCompareCard from "@/components/PianoCompareCard";
import { useComparison } from "@/context/ComparisonContext";

export default function ComparePage() {
  const [filteredPianos, setFilteredPianos] = useState<Piano[]>(pianos);
  const { comparedPianos } = useComparison();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Compare Pianos
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <PianoFilterBar onFilterChange={setFilteredPianos} />
          </div>

          <div className="lg:col-span-2">
            {comparedPianos.length > 0 && (
              <div className="mb-8">
                <PianoComparison />
              </div>
            )}

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Available Pianos ({filteredPianos.length})
              </h2>
              <div className="space-y-4">
                {filteredPianos.map((piano) => (
                  <PianoCompareCard key={piano.id} piano={piano} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
