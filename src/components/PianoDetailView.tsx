"use client";

import { Piano } from "@/types/piano";
import Image from "next/image";
import { useEffect } from "react";

interface PianoDetailViewProps {
  piano: Piano;
  onClose: () => void;
}

export default function PianoDetailView({
  piano,
  onClose,
}: PianoDetailViewProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {piano.brand} {piano.model}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="relative h-96 mb-6">
                <Image
                  src={piano.imageUrl}
                  alt={`${piano.brand} ${piano.model}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                  Quick Overview
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Price Range:</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {" "}
                      Premium
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Skill Level:</span>
                    <span className="text-gray-600 dark:text-gray-300 capitalize">
                      {" "}
                      {piano.skillLevel}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Overview
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {piano.details.description}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Ideal For
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {piano.details.idealFor.map((use, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-2">•</span> {use}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                  <ul className="space-y-1">
                    {piano.details.pros.map((pro, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-green-500 mr-2">✓</span> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-red-600 mb-2">Cons</h4>
                  <ul className="space-y-1">
                    {piano.details.cons.map((con, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-red-500 mr-2">×</span> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 mt-8 border-t pt-8">
            <section>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Sound Engine
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h4 className="font-medium text-lg mb-2">
                  {piano.details.soundEngine.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {piano.details.soundEngine.description}
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Keyboard Details
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Key Action</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {piano.details.keyboardDetails.action}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Key Surface</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {piano.details.keyboardDetails.surface}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Touch Sensitivity</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {piano.details.keyboardDetails.touchSensitivity}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Audio Features
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Effects & Processing</h4>
                  <ul className="space-y-2">
                    {piano.details.audio.effects.map((effect, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <span className="mr-2">•</span> {effect}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Presets & Voices</h4>
                  <dl className="space-y-2 text-gray-600 dark:text-gray-300">
                    <div>
                      <dt className="font-medium">Built-in Voices:</dt>
                      <dd>{piano.details.audio.preset.voices}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Demo Songs:</dt>
                      <dd>{piano.details.audio.preset.demoSongs}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                User Reviews
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl font-bold text-blue-600">
                    {piano.details.reviews.score}/5
                  </div>
                  <div className="ml-4 text-gray-600">
                    Based on {piano.details.reviews.count} reviews
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">What Users Love</h4>
                  <ul className="space-y-2">
                    {piano.details.reviews.highlights.map(
                      (highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-600 dark:text-gray-300"
                        >
                          <span className="text-yellow-500 mr-2">★</span>{" "}
                          {highlight}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Purchase Options
            </h3>
            <div className="flex flex-wrap gap-4">
              {piano.affiliateLinks.amazon && (
                <a
                  href={`${piano.affiliateLinks.amazon}?tag=your-tag`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600"
                >
                  <span className="font-medium">View on Amazon</span>
                </a>
              )}
              {piano.affiliateLinks.sweetwater && (
                <a
                  href={`${piano.affiliateLinks.sweetwater}?ref=your-ref`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
                >
                  <span className="font-medium">View on Sweetwater</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
