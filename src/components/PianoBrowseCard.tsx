"use client";

import { Piano } from "@/types/piano";
import Link from "next/link";
import Image from "next/image";
import { useFavorites } from "@/hooks/useFavorites";

interface PianoBrowseCardProps {
  piano: Piano;
}

export default function PianoBrowseCard({ piano }: PianoBrowseCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <div className="relative h-48">
        <Image
          src={piano.imageUrl}
          alt={`${piano.brand} ${piano.model}`}
          fill
          className="object-cover rounded-t-xl"
        />
        <button
          onClick={() => toggleFavorite(piano.id)}
          className="absolute top-4 right-4 z-10"
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
        </button>
      </div>
      <div className="p-6">
        <Link href={`/pianos/${piano.id}`} className="block group">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {piano.brand} {piano.model}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {piano.features.keys} keys • {piano.features.keyAction}
          </p>
          <span className="text-blue-600 dark:text-blue-400">
            View Details →
          </span>
        </Link>
      </div>
    </article>
  );
}
