export interface Piano {
  id: string;
  brand: string;
  model: string;
  price: number;
  skillLevel: "beginner" | "intermediate" | "advanced";
  dimensions: {
    width: number;
    depth: number;
    height: number;
  };
  weight: number;
  features: {
    keys: number;
    keyAction: "weighted" | "semi-weighted" | "synth-action";
    builtInSongs?: number;
    polyphony: number;
    hasMidiConnection: boolean;
    hasBluetoothConnection?: boolean;
    hasHeadphoneOutput: boolean;
    hasUSBConnection: boolean;
    speakers?: {
      count: number;
      power: number;
    };
  };
  bestFor: ("learning" | "performing" | "composing")[];
  imageUrl: string;
  affiliateLinks: {
    amazon?: string;
    sweetwater?: string;
    thomann?: string;
  };
  details: {
    description: string;
    keyFeatures: string[];
    soundEngine: {
      name: string;
      description: string;
    };
    keyboardDetails: {
      action: string;
      surface: string;
      touchSensitivity: string;
    };
    connectivity: {
      inputs: string[];
      outputs: string[];
      wireless: string[];
    };
    audio: {
      maxPolyphony: number;
      preset: {
        voices: number;
        demoSongs: number;
      };
      effects: string[];
    };
    pros: string[];
    cons: string[];
    idealFor: string[];
    reviews: {
      score: number;
      count: number;
      highlights: string[];
    };
  };
  type: "digital" | "acoustic";
}
