export interface BaseProduct {
  src: string;
  alt: string;
  width: number;
  height: number;
  description: string;
}

export interface SimpleProduct extends BaseProduct {
  title: string;
}

export interface ArrayTitleProduct extends BaseProduct {
  title: string[];
}

export interface MacBookProduct extends BaseProduct {
  title: string;
  subtitle: string;
}

const PRODUCT_DATA = {
  playstation: {
    src: "/PlayStation.svg",
    alt: "PlayStation",
    width: 360,
    height: 343,
    title: "Playstation 5",
    description:
      "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
  } as SimpleProduct,

  airpods: {
    src: "/airpodsmax.svg",
    alt: "AirPods Max",
    width: 285.5,
    height: 272,
    title: ["Apple", "Airpods", "Max"],
    description: "Computational audio. <br /> Listen, it's powerful",
  } as ArrayTitleProduct,

  visionPro: {
    src: "/vp.svg",
    alt: "Vision Pro",
    width: 285.5,
    height: 272,
    title: ["Apple", "Vision", "Pro"],
    description: "An immersive way to <br />experience entertainment.",
  } as ArrayTitleProduct,

  macbook: {
    src: "/MacBookPro14.svg",
    alt: "MacBook Pro",
    width: 776,
    height: 600,
    title: "Macbook",
    subtitle: "Air",
    description:
      "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.",
  } as MacBookProduct,
} as const;
export default PRODUCT_DATA;
