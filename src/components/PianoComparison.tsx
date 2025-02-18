import { Piano } from "@/types/piano";
import { useComparison } from "@/context/ComparisonContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatPrice } from "@/utils/currency";
import Image from "next/image";

export default function PianoComparison() {
  const { comparedPianos, removeFromComparison, clearComparison } =
    useComparison();
  const { currency } = useCurrency();

  if (comparedPianos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300">
          Select up to two pianos to compare their features
        </p>
      </div>
    );
  }

  const compareFields = [
    {
      label: "Price",
      getValue: (piano: Piano) => formatPrice(piano.price, currency),
    },
    { label: "Type", getValue: (piano: Piano) => piano.type },
    { label: "Skill Level", getValue: (piano: Piano) => piano.skillLevel },
    {
      label: "Key Action",
      getValue: (piano: Piano) => piano.features.keyAction,
    },
    {
      label: "Polyphony",
      getValue: (piano: Piano) => `${piano.features.polyphony} notes`,
    },
    {
      label: "Built-in Songs",
      getValue: (piano: Piano) => piano.features.builtInSongs || "N/A",
    },
    { label: "Weight", getValue: (piano: Piano) => `${piano.weight} kg` },
    {
      label: "Dimensions",
      getValue: (piano: Piano) =>
        `${piano.dimensions.width}W x ${piano.dimensions.depth}D x ${piano.dimensions.height}H cm`,
    },
    {
      label: "MIDI Connection",
      getValue: (piano: Piano) =>
        piano.features.hasMidiConnection ? "Yes" : "No",
    },
    {
      label: "Bluetooth",
      getValue: (piano: Piano) =>
        piano.features.hasBluetoothConnection ? "Yes" : "No",
    },
    {
      label: "USB Connection",
      getValue: (piano: Piano) =>
        piano.features.hasUSBConnection ? "Yes" : "No",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Piano Comparison
        </h2>
        <button
          onClick={clearComparison}
          className="text-red-600 hover:text-red-700 font-medium"
        >
          Clear Comparison
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {comparedPianos.map((piano) => (
          <div key={piano.id} className="relative">
            <button
              onClick={() => removeFromComparison(piano.id)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 z-20"
            >
              <svg
                className="w-4 h-4"
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
            <div className="relative h-48 mb-4 z-10">
              <Image
                src={piano.imageUrl}
                alt={`${piano.brand} ${piano.model}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {piano.brand} {piano.model}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {compareFields.map((field, index) => (
          <div
            key={field.label}
            className={`grid grid-cols-2 gap-8 py-3 ${
              index !== compareFields.length - 1
                ? "border-b border-gray-200 dark:border-gray-700"
                : ""
            }`}
          >
            <div className="font-medium text-gray-600 dark:text-gray-300">
              {field.label}
            </div>
            <div className="grid grid-cols-2 gap-8">
              {comparedPianos.map((piano) => (
                <div key={piano.id} className="text-gray-800 dark:text-white">
                  {field.getValue(piano)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
