"use client";

import React, { useState } from "react";
import { getPianoRecommendations } from "@/utils/recommendationEngine";
import PianoRecommendations from "./PianoRecommendations";
import { Piano } from "@/types/piano";
import { useCurrency } from "@/context/CurrencyContext";
import { formatPrice, EXCHANGE_RATES } from "@/utils/currency";

interface ProfileFormData {
  budget: string;
  skillLevel: "beginner" | "intermediate" | "advanced";
  spaceAvailable: "small" | "medium" | "large";
  primaryUse: "learning" | "performing" | "composing";
  requiredFeatures: string[];
  pianoType: "digital" | "acoustic" | "both";
}

export default function ProfileForm() {
  const { currency } = useCurrency();
  const [formData, setFormData] = useState<ProfileFormData>({
    budget: "",
    skillLevel: "beginner",
    spaceAvailable: "medium",
    primaryUse: "learning",
    requiredFeatures: [],
    pianoType: "both",
  });
  const [recommendations, setRecommendations] = useState<Piano[]>([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const results = getPianoRecommendations(formData);
    setRecommendations(results);
    setHasSubmitted(true);
  };

  // Convert budget ranges based on current currency
  const getBudgetRanges = () => [
    {
      value: "0-500",
      label: `0 - ${formatPrice(500, currency)}`,
    },
    {
      value: "501-1000",
      label: `${formatPrice(501, currency)} - ${formatPrice(1000, currency)}`,
    },
    {
      value: "1001-2000",
      label: `${formatPrice(1001, currency)} - ${formatPrice(2000, currency)}`,
    },
    {
      value: "2000+",
      label: `${formatPrice(2000, currency)}+`,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
      >
        <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white text-center">
          Find Your Perfect Digital Piano
        </h2>

        <div className="grid gap-8 mb-8">
          {/* Piano Type */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Piano Type
            </label>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "digital", label: "Digital" },
                { value: "acoustic", label: "Acoustic" },
                { value: "both", label: "Both" },
              ].map((type) => (
                <button
                  key={type.value}
                  type="button"
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    formData.pianoType === type.value
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                      : "border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800"
                  }`}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      pianoType: type.value as ProfileFormData["pianoType"],
                    })
                  }
                >
                  {type.label}
                </button>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {formData.pianoType === "digital"
                ? "Digital pianos offer versatility, portability, and modern features"
                : formData.pianoType === "acoustic"
                ? "Acoustic pianos provide authentic touch and natural resonance"
                : "See recommendations for both digital and acoustic pianos"}
            </p>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Your Budget
            </label>
            <select
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
            >
              <option value="">Select a budget range</option>
              {getBudgetRanges().map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Skill Level */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Skill Level
            </label>
            <select
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.skillLevel}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  skillLevel: e.target.value as ProfileFormData["skillLevel"],
                })
              }
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Space Available */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Available Space
            </label>
            <select
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.spaceAvailable}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  spaceAvailable: e.target
                    .value as ProfileFormData["spaceAvailable"],
                })
              }
            >
              <option value="small">Small (Compact)</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          {/* Primary Use */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Primary Use
            </label>
            <select
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.primaryUse}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  primaryUse: e.target.value as ProfileFormData["primaryUse"],
                })
              }
            >
              <option value="learning">Learning</option>
              <option value="performing">Performing</option>
              <option value="composing">Composing</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Find My Piano
        </button>
      </form>

      {hasSubmitted && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            Recommended Pianos
          </h2>
          <PianoRecommendations recommendations={recommendations} />
        </div>
      )}
    </div>
  );
}
