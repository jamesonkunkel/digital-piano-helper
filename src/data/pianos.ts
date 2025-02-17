import { Piano } from "@/types/piano";

export const pianos: Piano[] = [
  {
    id: "ydp-164",
    brand: "Yamaha",
    model: "YDP-164",
    price: 1499.99,
    skillLevel: "intermediate",
    dimensions: {
      width: 135.7,
      depth: 42.2,
      height: 84.9,
    },
    weight: 42,
    features: {
      keys: 88,
      keyAction: "weighted",
      builtInSongs: 10,
      polyphony: 192,
      hasMidiConnection: true,
      hasBluetoothConnection: false,
      hasHeadphoneOutput: true,
      hasUSBConnection: true,
      speakers: {
        count: 2,
        power: 20,
      },
    },
    bestFor: ["learning", "performing"],
    imageUrl:
      "https://images.unsplash.com/photo-1552422535-c45813c61732?w=800&q=80",
    affiliateLinks: {
      amazon:
        "https://www.amazon.com/Yamaha-YDP164B-Traditional-Console-Digital/dp/B07PMW5XWK",
      sweetwater:
        "https://www.sweetwater.com/store/detail/YDP164B--yamaha-ydp-164-digital-piano-black-walnut",
    },
    details: {
      description:
        "The Yamaha YDP-164 is a premium digital piano that combines authentic piano touch with modern features.",
      keyFeatures: [
        "Graded Hammer 3 Action",
        "CFX Sampling",
        "192-note polyphony",
      ],
      soundEngine: {
        name: "CFX Sampling",
        description:
          "Yamaha's flagship 9' concert grand piano, carefully sampled for maximum authenticity",
      },
      keyboardDetails: {
        action: "Graded Hammer 3 (GH3) Action",
        surface: "Synthetic Ebony and Ivory keytops",
        touchSensitivity: "Hard/Medium/Soft/Fixed",
      },
      connectivity: {
        inputs: ["USB to Host"],
        outputs: ["Headphones (2x)", "USB to Host"],
        wireless: [],
      },
      audio: {
        maxPolyphony: 192,
        preset: {
          voices: 10,
          demoSongs: 50,
        },
        effects: [
          "Reverb",
          "Intelligent Acoustic Control",
          "Stereophonic Optimizer",
        ],
      },
      pros: [
        "Excellent key action",
        "Premium sound quality",
        "Solid build quality",
      ],
      cons: ["Limited sound options", "No Bluetooth", "Higher price point"],
      idealFor: ["Serious students", "Home practice", "Classical pianists"],
      reviews: {
        score: 4.8,
        count: 245,
        highlights: [
          "Natural key feel",
          "Rich, warm tone",
          "Beautiful cabinet design",
        ],
      },
    },
    type: "digital",
  },
  {
    id: "fp-30x",
    brand: "Roland",
    model: "FP-30X",
    price: 799.99,
    skillLevel: "beginner",
    dimensions: {
      width: 130,
      depth: 28.4,
      height: 15.1,
    },
    weight: 14.3,
    features: {
      keys: 88,
      keyAction: "weighted",
      builtInSongs: 30,
      polyphony: 256,
      hasMidiConnection: true,
      hasBluetoothConnection: true,
      hasHeadphoneOutput: true,
      hasUSBConnection: true,
      speakers: {
        count: 2,
        power: 22,
      },
    },
    bestFor: ["learning", "performing"],
    imageUrl:
      "https://images.unsplash.com/photo-1595069906974-f8ae7ffc3e7a?w=800&q=80",
    affiliateLinks: {
      amazon:
        "https://www.amazon.com/Roland-FP-30X-Digital-Piano-Black/dp/B08VX6QNZX",
      sweetwater:
        "https://www.sweetwater.com/store/detail/FP30XBK--roland-fp-30x-digital-piano-black",
    },
    details: {
      description:
        "The Roland FP-30X is a versatile portable digital piano with premium features at an accessible price point.",
      keyFeatures: [
        "PHA-4 Standard keyboard",
        "SuperNATURAL Piano sound",
        "256-note polyphony",
      ],
      soundEngine: {
        name: "SuperNATURAL Piano",
        description:
          "Roland's acclaimed piano modeling technology for authentic acoustic piano sound",
      },
      keyboardDetails: {
        action: "PHA-4 Standard with Escapement",
        surface: "Ivory Feel",
        touchSensitivity: "5 types, Fixed touch",
      },
      connectivity: {
        inputs: ["USB to Host", "Bluetooth"],
        outputs: ["Headphones (2x)", "USB to Host"],
        wireless: ["Bluetooth Audio", "Bluetooth MIDI"],
      },
      audio: {
        maxPolyphony: 256,
        preset: {
          voices: 56,
          demoSongs: 30,
        },
        effects: ["Ambience", "Brilliance"],
      },
      pros: ["Excellent value", "Bluetooth connectivity", "Portable design"],
      cons: ["Basic onboard speakers", "Limited sound editing", "Basic stand"],
      idealFor: ["Beginners", "Students", "Apartment living"],
      reviews: {
        score: 4.6,
        count: 312,
        highlights: [
          "Great key feel",
          "Portable and lightweight",
          "Good sound quality",
        ],
      },
    },
    type: "digital",
  },
  {
    id: "yamaha-u1",
    brand: "Yamaha",
    model: "U1",
    type: "acoustic",
    price: 8999.99,
    skillLevel: "intermediate",
    dimensions: {
      width: 152,
      depth: 62,
      height: 121,
    },
    weight: 228,
    features: {
      keys: 88,
      keyAction: "weighted",
      polyphony: Infinity,
      hasMidiConnection: false,
      hasBluetoothConnection: false,
      hasHeadphoneOutput: false,
      hasUSBConnection: false,
    },
    bestFor: ["performing", "learning"],
    imageUrl:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80",
    affiliateLinks: {
      sweetwater:
        "https://www.sweetwater.com/store/detail/U1PE--yamaha-u1-acoustic-upright-piano-polished-ebony",
    },
    details: {
      description:
        "The Yamaha U1 is a professional upright piano known for its rich tone and exceptional build quality.",
      keyFeatures: [
        "Graded Hammer 3 Action",
        "CFX Sampling",
        "192-note polyphony",
      ],
      soundEngine: {
        name: "CFX Sampling",
        description:
          "Yamaha's flagship 9' concert grand piano, carefully sampled for maximum authenticity",
      },
      keyboardDetails: {
        action: "Graded Hammer 3 (GH3) Action",
        surface: "Synthetic Ebony and Ivory keytops",
        touchSensitivity: "Hard/Medium/Soft/Fixed",
      },
      connectivity: {
        inputs: ["USB to Host"],
        outputs: ["Headphones (2x)", "USB to Host"],
        wireless: [],
      },
      audio: {
        maxPolyphony: 192,
        preset: {
          voices: 10,
          demoSongs: 50,
        },
        effects: [
          "Reverb",
          "Intelligent Acoustic Control",
          "Stereophonic Optimizer",
        ],
      },
      pros: [
        "Excellent key action",
        "Premium sound quality",
        "Solid build quality",
      ],
      cons: ["Limited sound options", "No Bluetooth", "Higher price point"],
      idealFor: ["Serious students", "Home practice", "Classical pianists"],
      reviews: {
        score: 4.8,
        count: 245,
        highlights: [
          "Natural key feel",
          "Rich, warm tone",
          "Beautiful cabinet design",
        ],
      },
    },
  },
];
