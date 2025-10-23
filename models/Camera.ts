export interface Camera {
  brand: string;
  model: string;
  type: "Mirrorless" | "DSLR" | "Compact" | "Bridge";
  released: string;

  greatfor: string[];

  body: {
    weight_g: number;
    dimensions_mm: string;
    weatherSealed: boolean;
    buildMaterial: string;
  };

  lensMounts: string[];

  shutter: {
    type: string;
    maxShutterSpeed: string;
    shotsPerSec: number;
    shutterLifeExpectancy?: string;
  };

  screen: {
    type: string;
    size_inch: number;
    resolution?: string;
    touchscreen: boolean;
    articulated: boolean;
    tilted: boolean;
  };

  sensor: {
    type: string;
    size: string;
    megapixels: number;
    resolution: { width: number; height: number };
    isoRange: string;
    stabilization?: string;
  };

  imageProcessor: string;

  flash: {
    integrated: boolean;
    hotshoe: boolean;
    syncSpeed?: string;
  };

  video: {
    maxResolution: string;
    maxFps: number;
    stabilization?: string;
    bitrate?: string;
    formats?: string[];
    logProfiles?: string[];
  };

  autofocus: {
    points: number;
    detection: string[];
    eyeTracking: boolean;
    faceDetection: boolean;
  };

  battery: {
    model: string;
    shotsPerCharge: number;
    usbCharging: boolean;
  };

  connectivity: {
    wifi: boolean;
    bluetooth: boolean;
    nfc: boolean;
    usbType: string;
    hdmi: string;
    microphoneInput: boolean;
    headphoneOutput: boolean;
  };

  storage: {
    cardSlots: number;
    cardTypes: string[];
  };

  thumbnail?: string;
}
