export type ServiceIcon = "globe" | "mobile" | "figma" | "laptop";

export interface Project {
  id: string;
  slug: string;
  technologies: string[];
  image?: string;
  isSlideshow?: boolean;
  slideshowFrames?: string[];
  slideshowIntervalMs?: number;
  status?: "completed" | "in-progress" | "upcoming";
  best?: boolean;
  links: {
    github?: string;
    live?: string;
  };
}

export interface ProjectImage {
  src: string;
  alt: string;
  format: "mobile" | "web";
}

export interface ImageSection {
  images: ProjectImage[];
}

export interface ProjectTldr {
  what?: string;
  who?: string;
  challenges?: string[];
  result?: string;
}

export interface ProjectDetail {
  slug: string;
  headline: string;
  location: string;
  meta: string[];
  ratingLabel: string;
  reviewLabel: string;
  role: string;
  duration: string;
  year: string;
  team: string;
  platforms: string[];
  summary: string;
  features: string[];
  gallery: ProjectImage[];
  photoSections: ImageSection[];
  tldr?: ProjectTldr;
  contextAndProblem?: string;
  solutionRetained?: string;
  securityAndResponsibility?: string[];
  keyLearnings?: string[];
  futureRoadmap?: string[];
  whatYouCanLearn?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  /** Indicative price range (USD) — string to avoid fixed scary numbers */
  priceRangeUSD: string;
  /** Indicative price range (FCFA) */
  priceRangeFCFA: string;
  /** Optional label above ranges (UI) */
  priceRangeLabel?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
