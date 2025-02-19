"use client";

import { useState } from "react";
import ProfileForm from "@/components/ProfileForm";
import FavoritesTab from "@/components/FavoritesTab";
import CurrencySelector from "@/components/CurrencySelector";
import ComparePage from "@/app/compare/page";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "search" | "favorites" | "compare" | "browse"
  >("search");

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-end mb-4">
          <CurrencySelector />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Digital Piano Finder
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Find your perfect digital piano by answering a few simple questions
          about your needs and preferences.
        </p>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700">
            <button
              className={`px-6 py-3 ${
                activeTab === "search"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab("search")}
            >
              Find Your Perfect Piano
            </button>
            <Link
              href="/pianos"
              className={`px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800`}
            >
              Browse All
            </Link>
            <button
              className={`px-6 py-3 ${
                activeTab === "favorites"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab("favorites")}
            >
              My Favorites
            </button>
            <button
              className={`px-6 py-3 ${
                activeTab === "compare"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab("compare")}
            >
              Compare
            </button>
          </div>
        </div>

        {activeTab === "search" && <ProfileForm />}
        {activeTab === "favorites" && <FavoritesTab />}
        {activeTab === "compare" && <ComparePage />}
      </div>
    </main>
  );
}
