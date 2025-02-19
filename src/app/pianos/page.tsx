import { Metadata } from "next";
import { pianos } from "@/data/pianos";
import PianoBrowseCard from "@/components/PianoBrowseCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Piano Collection | Browse All Pianos",
  description:
    "Browse our comprehensive collection of digital pianos from top brands. Compare features, prices, and find the perfect piano for your needs.",
};

export default function PianosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link
            href="/"
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
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Digital Piano Collection
        </h1>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p>
            Discover our comprehensive collection of digital pianos, featuring
            top brands like Yamaha, Roland, Kawai, and more. Whether you're a
            beginner looking for your first piano or an advanced player seeking
            professional-grade instruments, we have options to suit every skill
            level and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pianos.map((piano) => (
            <PianoBrowseCard key={piano.id} piano={piano} />
          ))}
        </div>
      </div>
    </div>
  );
}
