import { Metadata } from "next";
import { pianos } from "@/data/pianos";
import { use } from "react";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const resolvedParams = use(params);
  const piano = pianos.find((p) => p.id === resolvedParams.id);

  if (!piano) {
    return {
      title: "Piano Not Found",
    };
  }

  return {
    title: `${piano.brand} ${piano.model} Digital Piano | Detailed Review`,
    description: `Detailed review of the ${piano.brand} ${piano.model} digital piano. Learn about its ${piano.features.keyAction} key action, ${piano.features.polyphony}-note polyphony, and why it's perfect for ${piano.skillLevel} players.`,
    openGraph: {
      title: `${piano.brand} ${piano.model} Digital Piano`,
      description: `Comprehensive review and specifications of the ${piano.brand} ${piano.model} digital piano.`,
      images: [
        {
          url: piano.imageUrl,
          width: 1200,
          height: 630,
          alt: `${piano.brand} ${piano.model}`,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return pianos.map((piano) => ({
    id: piano.id,
  }));
}
