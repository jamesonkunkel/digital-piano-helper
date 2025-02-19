"use client";

import { pianos } from "@/data/pianos";
import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/hooks/useFavorites";
import { useRouter } from "next/navigation";
import { use } from "react";

interface Props {
  params: { id: string };
}

export default function PianoPage({ params }: Props) {
  const resolvedParams = use(params);
  const piano = pianos.find((p) => p.id === resolvedParams.id);
  const { isFavorite, toggleFavorite } = useFavorites();
  const router = useRouter();

  if (!piano) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Piano Not Found
          </h1>
          <Link
            href="/pianos"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Browse All Pianos →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => router.back()}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </button>
          <button
            onClick={() => toggleFavorite(piano.id)}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-yellow-500"
          >
            <svg
              className={`w-6 h-6 mr-2 ${
                isFavorite(piano.id)
                  ? "text-yellow-500 fill-current"
                  : "stroke-current"
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
            {isFavorite(piano.id)
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>

        <article>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-96 lg:h-full">
              <Image
                src={piano.imageUrl}
                alt={`${piano.brand} ${piano.model}`}
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {piano.brand} {piano.model}
              </h1>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-xl mb-6">
                  Perfect for {piano.skillLevel} players looking for a
                  high-quality digital piano with professional features.
                </p>

                <h2>Key Features</h2>
                <ul>
                  <li>
                    {piano.features.keys} keys with {piano.features.keyAction}{" "}
                    action
                  </li>
                  <li>{piano.features.polyphony} note polyphony</li>
                  {piano.features.builtInSongs && (
                    <li>{piano.features.builtInSongs} built-in songs</li>
                  )}
                  {piano.features.hasMidiConnection && (
                    <li>MIDI connectivity</li>
                  )}
                  {piano.features.hasBluetoothConnection && (
                    <li>Bluetooth connectivity</li>
                  )}
                  {piano.features.hasUSBConnection && <li>USB connectivity</li>}
                </ul>

                <h2>Specifications</h2>
                <ul>
                  <li>Weight: {piano.weight} kg</li>
                  <li>
                    Dimensions: {piano.dimensions.width}W x{" "}
                    {piano.dimensions.depth}D x {piano.dimensions.height}H cm
                  </li>
                </ul>

                <div className="mt-8 space-x-4"></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
