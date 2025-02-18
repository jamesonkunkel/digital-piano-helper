import { Piano } from "@/types/piano";

export const pianos: Piano[] = [
  {
    id: "ydp-164",
    brand: "Yamaha",
    model: "YDP-164",
    price: 1499.99,
    skillLevel: "intermediate",
    dimensions: { width: 135.7, depth: 42.2, height: 84.9 },
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
      speakers: { count: 2, power: 20 },
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
        "The Yamaha YDP-164 is a premium console digital piano from the Arius series. It combines the authentic feel of 88 weighted keys with Yamaha’s flagship CFX concert grand sampling. With 192-note polyphony and dual 20W speakers, it’s an excellent choice for home practice and performance.",
      keyFeatures: [
        "Graded Hammer Action 3 (GH3)",
        "CFX Sampling from a 9’ concert grand",
        "10 built-in voices",
        "Smart Pianist app compatibility (Apple only)",
      ],
      soundEngine: {
        name: "CFX Sampling",
        description:
          "Features samples from Yamaha’s flagship CFX concert grand piano for a rich, authentic tone.",
      },
      keyboardDetails: {
        action: "Graded Hammer Action 3 (GH3)",
        surface: "Synthetic ebony and ivory keytops",
        touchSensitivity: "4 levels (Hard, Medium, Soft, Fixed)",
      },
      connectivity: {
        inputs: ["USB to Host"],
        outputs: ["Headphones (2x)", "USB to Host"],
        wireless: [],
      },
      audio: {
        maxPolyphony: 192,
        preset: { voices: 10, demoSongs: 50 },
        effects: [
          "Reverb",
          "Intelligent Acoustic Control",
          "Stereophonic Optimizer",
        ],
      },
      pros: [
        "Authentic weighted key feel",
        "Premium CFX concert grand sound",
        "Robust build quality and design",
      ],
      cons: ["No Bluetooth connectivity", "Limited sound shaping options"],
      idealFor: ["learning", "performing"],
      reviews: {
        score: 4.8,
        count: 245,
        highlights: ["Natural key feel", "Rich tone"],
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
    dimensions: { width: 130, depth: 28.4, height: 15.1 },
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
      speakers: { count: 2, power: 22 },
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
        "The Roland FP-30X is a versatile and portable digital piano that offers excellent value with its weighted key action, 256-note polyphony, and Bluetooth connectivity. Its compact design makes it ideal for both home practice and small-stage performances.",
      keyFeatures: [
        "PHA-4 Standard keyboard",
        "SuperNATURAL Piano sound engine",
        "256-note polyphony",
      ],
      soundEngine: {
        name: "SuperNATURAL Piano",
        description:
          "Uses Roland’s acclaimed piano modeling technology for authentic acoustic piano sound.",
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
        preset: { voices: 56, demoSongs: 30 },
        effects: ["Ambience", "Brilliance"],
      },
      pros: ["Great key feel", "Bluetooth connectivity", "Portable design"],
      cons: ["Basic onboard speakers", "Limited sound editing"],
      idealFor: ["learning", "performing"],
      reviews: {
        score: 4.6,
        count: 312,
        highlights: ["Responsive keys", "Good sound quality"],
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
    dimensions: { width: 152, depth: 62, height: 121 },
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
    bestFor: ["learning", "performing"],
    imageUrl:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80",
    affiliateLinks: {
      sweetwater:
        "https://www.sweetwater.com/store/detail/U1PE--yamaha-u1-acoustic-upright-piano-polished-ebony",
    },
    details: {
      description:
        "The Yamaha U1 is a professional acoustic upright piano renowned for its rich tone and exceptional build quality. It’s a favorite among serious students and professional pianists for its reliability and classic design.",
      keyFeatures: [
        "Authentic graded hammer action",
        "Rich, warm acoustic tone",
      ],
      soundEngine: {
        name: "N/A",
        description: "Acoustic piano – naturally unlimited polyphony",
      },
      keyboardDetails: {
        action: "Graded Hammer 3 (GH3) Action",
        surface: "Natural ebony and ivory keys",
        touchSensitivity: "Acoustic feel",
      },
      connectivity: { inputs: [], outputs: [], wireless: [] },
      audio: {
        maxPolyphony: Infinity,
        preset: { voices: 1, demoSongs: 0 },
        effects: [],
      },
      pros: ["Outstanding tone", "Solid construction", "Responsive key action"],
      cons: ["Requires regular tuning", "High price point"],
      idealFor: ["learning", "performing"],
      reviews: {
        score: 4.8,
        count: 245,
        highlights: ["Beautiful tone", "Great touch"],
      },
    },
  },
  {
    id: "yp-125",
    brand: "Yamaha",
    model: "P-125",
    price: 749.99,
    skillLevel: "beginner",
    dimensions: { width: 132.5, depth: 29.5, height: 15.7 },
    weight: 11.8,
    features: {
      keys: 88,
      keyAction: "weighted",
      builtInSongs: 35,
      polyphony: 192,
      hasMidiConnection: true,
      hasBluetoothConnection: false,
      hasHeadphoneOutput: true,
      hasUSBConnection: true,
      speakers: { count: 2, power: 8 },
    },
    bestFor: ["learning", "performing", "composing"],
    imageUrl:
      "https://images.unsplash.com/photo-1549887536-6e4a9d2a8f1a?w=800&q=80",
    affiliateLinks: {
      amazon: "https://www.amazon.com/Yamaha-P-125-Digital-Piano/dp/B07K8W4T3H",
      sweetwater:
        "https://www.sweetwater.com/store/detail/P125BK--yamaha-p125-digital-piano-black",
    },
    details: {
      description:
        "The Yamaha P-125 is a compact, portable digital piano offering an authentic playing experience with weighted keys and rich piano sampling. With 192-note polyphony and a sleek design, it’s perfect for beginners and home performers on the go.",
      keyFeatures: [
        "88 weighted keys with Graded Hammer action",
        "192-note polyphony",
        "Built-in demo songs and USB connectivity",
      ],
      soundEngine: {
        name: "AWM Stereo Sampling",
        description:
          "Uses advanced sampling to recreate authentic grand piano tones.",
      },
      keyboardDetails: {
        action: "Weighted – Graded Hammer",
        surface: "Standard keytops",
        touchSensitivity: "4 levels adjustable",
      },
      connectivity: {
        inputs: ["USB to Host"],
        outputs: ["Headphone jack"],
        wireless: [],
      },
      audio: {
        maxPolyphony: 192,
        preset: { voices: 35, demoSongs: 35 },
        effects: ["Reverb"],
      },
      pros: ["Portable", "Great value", "Authentic feel for the price"],
      cons: ["No Bluetooth connectivity", "Limited built-in sounds"],
      idealFor: ["learning", "performing", "composing"],
      reviews: {
        score: 4.7,
        count: 180,
        highlights: ["Excellent key response", "Compact design"],
      },
    },
    type: "digital",
  },
  {
    id: "px-870",
    brand: "Casio",
    model: "PX-870",
    price: 1199.99,
    skillLevel: "intermediate",
    dimensions: { width: 137, depth: 42, height: 85 },
    weight: 42,
    features: {
      keys: 88,
      keyAction: "weighted",
      builtInSongs: 50,
      polyphony: 192,
      hasMidiConnection: true,
      hasBluetoothConnection: false,
      hasHeadphoneOutput: true,
      hasUSBConnection: true,
      speakers: { count: 2, power: 20 },
    },
    bestFor: ["learning", "performing", "composing"],
    imageUrl:
      "https://images.unsplash.com/photo-1579119142471-220b8c62381c?w=800&q=80",
    affiliateLinks: {
      amazon:
        "https://www.amazon.com/Casio-Privia-PX870-Digital-Piano/dp/B07B9J8BVK",
      sweetwater:
        "https://www.sweetwater.com/store/detail/PX870BK--casio-privia-px-870-digital-piano-black",
    },
    details: {
      description:
        "The Casio Privia PX-870 is a console-style digital piano that marries advanced piano sampling with a refined, furniture-style design. Its 88 weighted keys, 192-note polyphony, and robust 2×20W speaker system make it ideal for home practice and performance.",
      keyFeatures: [
        "Scaled Hammer Action for realistic touch",
        "CFX-inspired sampling engine",
        "50 built-in songs and user recording capability",
      ],
      soundEngine: {
        name: "AiR Sound Engine",
        description:
          "Delivers a rich and expressive piano tone modeled on an acoustic grand.",
      },
      keyboardDetails: {
        action: "Weighted – Scaled Hammer",
        surface: "Textured keytops",
        touchSensitivity: "Adjustable in 4 levels",
      },
      connectivity: {
        inputs: ["USB to Host"],
        outputs: ["Headphone jack"],
        wireless: [],
      },
      audio: {
        maxPolyphony: 192,
        preset: { voices: 10, demoSongs: 50 },
        effects: ["Reverb", "Chorus"],
      },
      pros: ["Elegant design", "Powerful speaker system", "Great tone quality"],
      cons: ["No Bluetooth", "Limited onboard sound options"],
      idealFor: ["learning", "performing", "composing"],
      reviews: {
        score: 4.7,
        count: 210,
        highlights: ["Clear sound", "Excellent build"],
      },
    },
    type: "digital",
  },
  {
    id: "es-920",
    brand: "Kawai",
    model: "ES920",
    price: 1899.99,
    skillLevel: "advanced",
    dimensions: { width: 130, depth: 28, height: 15 },
    weight: 14,
    features: {
      keys: 88,
      keyAction: "weighted",
      builtInSongs: 50,
      polyphony: 256,
      hasMidiConnection: true,
      hasBluetoothConnection: false,
      hasHeadphoneOutput: true,
      hasUSBConnection: true,
      speakers: { count: 2, power: 20 },
    },
    bestFor: ["performing", "composing"],
    imageUrl:
      "https://images.unsplash.com/photo-1608234132283-7267882a3b44?w=800&q=80",
    affiliateLinks: {
      amazon:
        "https://www.amazon.com/Kawai-ES920-Portable-Digital-Piano/dp/B07DJ5L7WS",
      sweetwater:
        "https://www.sweetwater.com/store/detail/ES920BK--kawai-es920-digital-piano-black",
    },
    details: {
      description:
        "The Kawai ES920 is a premium portable digital piano that delivers an exceptional playing experience with its advanced weighted action and concert grand piano sampling. With 256-note polyphony and a pair of powerful speakers, it’s ideal for gigging musicians and advanced home performers.",
      keyFeatures: [
        "Advanced weighted key action",
        "256-note polyphony",
        "High-quality concert grand sampling",
      ],
      soundEngine: {
        name: "Harmonic Imaging XL",
        description:
          "Uses stereo sampling from Kawai concert grands for a warm, expressive tone.",
      },
      keyboardDetails: {
        action: "Weighted – Optimized for expressive play",
        surface: "High-quality keytops",
        touchSensitivity: "4 adjustable levels",
      },
      connectivity: {
        inputs: ["USB to Host"],
        outputs: ["Headphone jack"],
        wireless: [],
      },
      audio: {
        maxPolyphony: 256,
        preset: { voices: 50, demoSongs: 50 },
        effects: ["Reverb", "Delay"],
      },
      pros: ["Professional tone", "Responsive key action", "Robust build"],
      cons: ["Higher price", "No Bluetooth"],
      idealFor: ["performing", "composing"],
      reviews: {
        score: 4.8,
        count: 150,
        highlights: ["Rich sound", "Excellent dynamics"],
      },
    },
    type: "digital",
  },
  {
    id: "yamaha-u3",
    brand: "Yamaha",
    model: "U3",
    price: 10999.99,
    skillLevel: "advanced",
    dimensions: { width: 152, depth: 66, height: 124 },
    weight: 240,
    features: {
      keys: 88,
      keyAction: "weighted",
      polyphony: Infinity,
      hasMidiConnection: false,
      hasBluetoothConnection: false,
      hasHeadphoneOutput: false,
      hasUSBConnection: false,
    },
    bestFor: ["learning", "performing"],
    imageUrl:
      "https://images.unsplash.com/photo-1580734073203-114f8e18f205?w=800&q=80",
    affiliateLinks: {
      sweetwater:
        "https://www.sweetwater.com/store/detail/U3PE--yamaha-u3-acoustic-upright-piano-polished-ebony",
    },
    details: {
      description:
        "The Yamaha U3 is a professional acoustic upright piano known for its exceptional tone, responsive action, and enduring build quality. A favorite of both teachers and advanced pianists, the U3 delivers a classic piano experience that grows with you.",
      keyFeatures: [
        "True acoustic piano action",
        "Rich, resonant tone",
        "Durable, time-tested design",
      ],
      soundEngine: { name: "Acoustic", description: "Natural acoustic sound" },
      keyboardDetails: {
        action: "Graded Hammer Action",
        surface: "Natural ebony and ivory keys",
        touchSensitivity: "Inherent to acoustic pianos",
      },
      connectivity: { inputs: [], outputs: [], wireless: [] },
      audio: {
        maxPolyphony: Infinity,
        preset: { voices: 1, demoSongs: 0 },
        effects: [],
      },
      pros: [
        "Outstanding acoustic tone",
        "Superior key touch",
        "Timeless design",
      ],
      cons: ["High maintenance (tuning required)", "Expensive"],
      idealFor: ["learning", "performing"],
      reviews: {
        score: 4.9,
        count: 120,
        highlights: ["Excellent responsiveness", "Beautiful projection"],
      },
    },
    type: "acoustic",
  },
  {
    id: "ydp-165",
    brand: "Yamaha",
    model: "YDP-165",
    price: 1799.99,
    skillLevel: "intermediate",
    dimensions: { width: 135.7, depth: 42.2, height: 84.9 },
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
      speakers: { count: 2, power: 20 },
    },
    bestFor: ["learning", "performing"],
    imageUrl:
      "https://images.unsplash.com/photo-1563371352-c2b223d4f1d1?w=800&q=80",
    affiliateLinks: {
      amazon:
        "https://www.amazon.com/Yamaha-YDP165B-Arius-Digital-Piano/dp/B07PMW5XYZ",
      sweetwater:
        "https://www.sweetwater.com/store/detail/YDP165B--yamaha-ydp-165-digital-piano-black",
    },
    details: {
      description:
        "The Yamaha YDP-165 is the successor to the popular YDP-164, offering a refined design and slightly enhanced key action for an even more expressive playing experience. It continues Yamaha’s tradition of combining authentic weighted keys with premium CFX sampling.",
      keyFeatures: [
        "Updated Graded Hammer Action 3",
        "Rich CFX concert grand sampling",
        "Sleek design with integrated bench and music rest",
      ],
      soundEngine: {
        name: "CFX Sampling",
        description:
          "Delivers an expressive, detailed grand piano tone sampled from Yamaha’s flagship concert grand.",
      },
      keyboardDetails: {
        action: "Graded Hammer Action 3 (GH3)",
        surface: "Synthetic ebony and ivory keytops with improved grip",
        touchSensitivity: "4 adjustable levels",
      },
      connectivity: {
        inputs: ["USB to Host"],
        outputs: ["Headphone jacks (2x)"],
        wireless: [],
      },
      audio: {
        maxPolyphony: 192,
        preset: { voices: 10, demoSongs: 50 },
        effects: ["Reverb", "Acoustic Optimizer"],
      },
      pros: [
        "Enhanced key response and touch",
        "Premium CFX sound quality",
        "Ideal for both lessons and performance",
      ],
      cons: ["No Bluetooth connectivity", "Price is higher than the YDP-164"],
      idealFor: ["learning", "performing"],
      reviews: {
        score: 4.8,
        count: 200,
        highlights: ["Expressive key action", "Beautiful tone"],
      },
    },
    type: "digital",
  },
  // New Kawai models
  {
    id: "kdp-120",
    brand: "Kawai",
    model: "KDP-120",
    price: 1599.99,
    skillLevel: "intermediate",
    dimensions: { width: 136, depth: 42, height: 85 },
    weight: 43,
    features: {
      keys: 88,
      keyAction: "weighted",
      builtInSongs: 50,
      polyphony: 192,
      hasMidiConnection: true,
      hasBluetoothConnection: false,
      hasHeadphoneOutput: true,
      hasUSBConnection: true,
      speakers: { count: 2, power: 20 },
    },
    bestFor: ["learning", "performing", "composing"],
    imageUrl:
      "https://images.unsplash.com/photo-1611078481017-5ec1a3b11a38?w=800&q=80",
    affiliateLinks: {
      amazon: "https://www.amazon.com/Kawai-KDP120-Digital-Piano/dp/B0KDP120EX",
      sweetwater:
        "https://www.sweetwater.com/store/detail/KDP120--kawai-kdp-120-digital-piano",
    },
    details: {
      description:
        "The Kawai KDP-120 is a slim console digital piano that delivers a realistic playing experience with its weighted keys and advanced sampling from Kawai concert grands. Its elegant design and robust connectivity make it ideal for home practice, performance, and creative composition.",
      keyFeatures: [
        "Responsive RHCII weighted action",
        "192-note polyphony",
        "High-quality concert grand sampling",
        "User-friendly interface",
      ],
      soundEngine: {
        name: "High-Quality Sampling Engine",
        description:
          "Features detailed samples from Kawai concert grand pianos for an authentic tone.",
      },
      keyboardDetails: {
        action: "Weighted – RHCII Action",
        surface: "Synthetic ebony and ivory keytops",
        touchSensitivity: "4 adjustable levels",
      },
      connectivity: {
        inputs: ["USB to Host"],
        outputs: ["Headphone jack"],
        wireless: [],
      },
      audio: {
        maxPolyphony: 192,
        preset: { voices: 10, demoSongs: 50 },
        effects: ["Reverb", "Chorus"],
      },
      pros: ["Authentic key feel", "Elegant design", "Great sound quality"],
      cons: ["Limited built-in voices", "No Bluetooth connectivity"],
      idealFor: ["learning", "performing", "composing"],
      reviews: {
        score: 4.7,
        count: 150,
        highlights: ["Realistic key action", "Excellent tone"],
      },
    },
    type: "digital",
  },
  {
    id: "ca-401",
    brand: "Kawai",
    model: "CA401",
    price: 3099.99,
    skillLevel: "advanced",
    dimensions: { width: 150, depth: 45, height: 95 },
    weight: 90,
    features: {
      keys: 88,
      keyAction: "weighted",
      builtInSongs: 50,
      polyphony: 256,
      hasMidiConnection: true,
      hasBluetoothConnection: false,
      hasHeadphoneOutput: true,
      hasUSBConnection: true,
      speakers: { count: 2, power: 40 },
    },
    bestFor: ["learning", "performing", "composing"],
    imageUrl:
      "https://images.unsplash.com/photo-1628091759101-51a7fcd75c4e?w=800&q=80",
    affiliateLinks: {
      amazon: "https://www.amazon.com/Kawai-CA401-Digital-Piano/dp/B0CA401XYZ",
      sweetwater:
        "https://www.sweetwater.com/store/detail/CA401--kawai-ca-401-digital-piano",
    },
    details: {
      description:
        "The Kawai CA401 is a high-end console digital piano featuring premium weighted key action with synthetic wood-like keytops, advanced sampling from Kawai concert grands, and robust internal speakers. It delivers an expressive, authentic piano experience for advanced players and is ideal for home practice, performance, and composition.",
      keyFeatures: [
        "Premium weighted key action with Grand Feel",
        "256-note polyphony",
        "High-quality concert grand sampling",
        "Elegant cabinet design",
      ],
      soundEngine: {
        name: "Advanced Sampling Engine",
        description:
          "Uses detailed samples from Kawai’s flagship concert grands to deliver a dynamic, authentic tone.",
      },
      keyboardDetails: {
        action: "Weighted – Grand Feel Action",
        surface: "Synthetic wood-like ebony and ivory keytops",
        touchSensitivity: "5 adjustable levels",
      },
      connectivity: {
        inputs: ["USB to Host"],
        outputs: ["Headphone jack"],
        wireless: [],
      },
      audio: {
        maxPolyphony: 256,
        preset: { voices: 24, demoSongs: 50 },
        effects: ["Reverb", "Chorus", "EQ"],
      },
      pros: [
        "Authentic grand piano feel",
        "Elegant design",
        "Exceptional tone quality",
      ],
      cons: ["Higher price", "Lacks Bluetooth connectivity"],
      idealFor: ["learning", "performing", "composing"],
      reviews: {
        score: 4.8,
        count: 100,
        highlights: ["Expressive key action", "Rich sound"],
      },
    },
    type: "digital",
  },
];
