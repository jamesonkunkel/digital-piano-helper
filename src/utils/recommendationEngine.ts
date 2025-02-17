import { Piano } from "@/types/piano";
import { pianos } from "@/data/pianos";

interface RecommendationCriteria {
  budget: string;
  skillLevel: "beginner" | "intermediate" | "advanced";
  spaceAvailable: "small" | "medium" | "large";
  primaryUse: "learning" | "performing" | "composing";
  pianoType: "digital" | "acoustic" | "both";
}

export function getPianoRecommendations(
  criteria: RecommendationCriteria
): Piano[] {
  const [minBudget, maxBudget] = getBudgetRange(criteria.budget);

  return pianos
    .filter((piano) => {
      // Filter by budget
      if (piano.price < minBudget || piano.price > maxBudget) return false;

      // Filter by skill level
      if (criteria.skillLevel === "beginner" && piano.skillLevel === "advanced")
        return false;
      if (
        criteria.skillLevel === "intermediate" &&
        piano.skillLevel === "advanced"
      )
        return false;

      // Filter by space
      if (!isWithinSpaceConstraints(piano, criteria.spaceAvailable))
        return false;

      // Filter by primary use
      if (!piano.bestFor.includes(criteria.primaryUse)) return false;

      // Filter by piano type
      if (criteria.pianoType !== "both" && piano.type !== criteria.pianoType)
        return false;

      return true;
    })
    .sort((a, b) => {
      // Sort by best match (you can customize this logic)
      const aScore = calculateMatchScore(a, criteria);
      const bScore = calculateMatchScore(b, criteria);
      return bScore - aScore;
    });
}

function getBudgetRange(budget: string): [number, number] {
  switch (budget) {
    case "0-500":
      return [0, 500];
    case "501-1000":
      return [501, 1000];
    case "1001-2000":
      return [1001, 2000];
    case "2000+":
      return [2000, Infinity];
    default:
      return [0, Infinity];
  }
}

function isWithinSpaceConstraints(
  piano: Piano,
  spaceAvailable: string
): boolean {
  const totalArea = piano.dimensions.width * piano.dimensions.depth;

  switch (spaceAvailable) {
    case "small":
      return totalArea < 4000; // Less than 4000 sq cm
    case "medium":
      return totalArea < 6000; // Less than 6000 sq cm
    case "large":
      return true; // No restrictions
    default:
      return true;
  }
}

function calculateMatchScore(
  piano: Piano,
  criteria: RecommendationCriteria
): number {
  let score = 0;

  // Add points for matching skill level
  if (piano.skillLevel === criteria.skillLevel) score += 3;

  // Add points for matching primary use
  if (piano.bestFor.includes(criteria.primaryUse)) score += 2;

  // Add points for features based on use case
  if (criteria.primaryUse === "learning" && piano.features.builtInSongs)
    score += 1;
  if (
    criteria.primaryUse === "performing" &&
    piano.features.keyAction === "weighted"
  )
    score += 1;
  if (criteria.primaryUse === "composing" && piano.features.hasMidiConnection)
    score += 1;

  return score;
}
