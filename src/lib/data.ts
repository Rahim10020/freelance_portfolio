import {
  ImageSection,
  Project,
  ProjectDetail,
  Service,
  SocialLink,
} from "./types";

export const personalInfo = {
  name: "Rahim ALI",
  title: "Software Developer",
  bio: "I design and code beautifully simple things that make the web feel intuitive and alive — and I genuinely love what I do.",
  email: "rahim100codeur@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Rahim10020",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "http://www.linkedin.com/in/rahim-ali-a6003226b",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/rahim.aldev",
    icon: "instagram",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: "facebook",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    description: "Modern web apps — Django, Next.js & React.",
    icon: "globe",
    priceRangeUSD: "$500 – $2,000",
    priceRangeFCFA: "300k – 1.2M FCFA",
    priceRangeLabel: "Indicative range",
  },
  {
    id: "2",
    title: "Mobile Development",
    description: "Flutter & native Android (Kotlin, Jetpack Compose).",
    icon: "mobile",
    priceRangeUSD: "$800 – $2,500",
    priceRangeFCFA: "480k – 1.5M FCFA",
  },
  {
    id: "3",
    title: "UX/UI Design",
    description: "Interfaces with Figma — clear, usable, on brand.",
    icon: "figma",
    priceRangeUSD: "$300 – $1,200",
    priceRangeFCFA: "180k – 720k FCFA",
  },
  {
    id: "4",
    title: "API Development",
    description: "RESTful APIs with Django — robust & maintainable.",
    icon: "laptop",
    priceRangeUSD: "$400 – $1,500",
    priceRangeFCFA: "240k – 900k FCFA",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    slug: "essence-togo",
    image: "/images/projects/p1-accueil.png",
    imageFormat: "mobile",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase"],
    links: {
      github: "https://github.com/Rahim10020/essence-togo",
      live: "https://github.com/Rahim10020/essence-togo",
    },
  },
  {
    id: "2",
    slug: "focusly-work",
    image: "/images/projects/p2-focus.png",
    imageFormat: "web",
    technologies: [
      "Next.js",
      "React",
      "Tailwind css",
      "Supabase",
      "TypeScript",
    ],
    status: "in-progress",
    links: {
      github: "https://github.com/Rahim10020/focusly",
      live: "https://focusly-work.vercel.app/",
    },
  },
  {
    id: "3",
    slug: "docstore-ul",
    image: "/images/projects/p3-docstore.png",
    imageFormat: "web",
    technologies: ["React", "Tailwind css", "Appwrite", "Google Drive"],
    links: {
      github: "https://github.com/twocoderz/docstore",
      live: "https://docstore-univ.vercel.app/",
    },
  },
  {
    id: "4",
    slug: "ahoe",
    image: "/images/projects/p4-stay.png",
    imageFormat: "web",
    isSlideshow: true,
    slideshowFrames: [
      "/images/projects/p4-stay.png",
      "/images/projects/p5-detail.png",
      "/images/projects/p7-home.png",
      "/images/projects/p3-docstore.png",
    ],
    slideshowIntervalMs: 1800,
    technologies: [
      "Next.js",
      "React",
      "Firebase",
      "Appwrite",
      "TypeScript",
      "Tailwind css",
      "OpenStreetMap",
    ],
    status: "in-progress",
    best: true,
    links: {
      github: "https://github.com/twocoderz/ahoe",
      live: "https://ahoe-tg.vercel.app/",
    },
  },
  {
    id: "5",
    slug: "pixelpulse-blog",
    image: "/images/projects/p5-detail.png",
    imageFormat: "web",
    technologies: [
      "Next.js",
      "React",
      "NextAuth.js",
      "Tailwind css",
      "PostgreSQL",
    ],
    status: "completed",
    links: {
      github: "https://github.com/Rahim10020/tech-pulse",
      live: "https://pixelpulse-blog.vercel.app/",
    },
  },
  {
    id: "6",
    slug: "togo-xiwo",
    technologies: ["Futter", "Get X", "OpenStreetMap", "Dart"],
    status: "in-progress",
    links: {
      github: "https://github.com/twocoderz/Togo-xiwo",
    },
  },
  {
    id: "7",
    slug: "portify-builder",
    image: "/images/projects/p7-home.png",
    imageFormat: "web",
    isSlideshow: false,
    slideshowFrames: [
      "/images/projects/p7-home.png",
      "/images/projects/p2-focus.png",
      "/images/projects/p5-detail.png",
      "/images/projects/p4-stay.png",
    ],
    slideshowIntervalMs: 1400,
    technologies: [
      "Next.js",
      "React",
      "Tailwind css",
      "Firebase",
      "Framer Motion",
    ],
    best: true,
    status: "in-progress",
    links: {
      github: "https://github.com/Rahim10020/portify",
    },
  },
  {
    id: "8",
    slug: "atomic-habits",
    technologies: ["Next.js", "Typescript", "Tailwind css", "Supabase"],
    status: "upcoming",
    links: {
      github: "https://github.com/Rahim10020/atomic-habits",
    },
  },
];

const fallbackGallerySources = [
  "/images/projects/p2-focus.png",
  "/images/projects/p3-docstore.png",
  "/images/projects/p4-stay.png",
  "/images/projects/p5-detail.png",
  "/images/projects/p7-home.png",
  "/images/website.png",
];

const photoLibrary = {
  mobileHome: { src: "/images/projects/p1-accueil.png", format: "mobile" },
  webFocus: { src: "/images/projects/p2-focus.png", format: "web" },
  webDocstore: { src: "/images/projects/p3-docstore.png", format: "web" },
  webStay: { src: "/images/projects/p4-stay.png", format: "web" },
  webDetail: { src: "/images/projects/p5-detail.png", format: "web" },
  webHome: { src: "/images/projects/p7-home.png", format: "web" },
  webSite: { src: "/images/website.png", format: "web" },
} satisfies Record<string, { src: string; format: "mobile" | "web" }>;

type ImageInput = {
  src: string;
  format?: "mobile" | "web";
  alt?: string;
};

const createImageSection = (
  imageSources: Array<string | ImageInput>,
): ImageSection => ({
  images: imageSources.map((image, index) => {
    const src = typeof image === "string" ? image : image.src;
    const format = typeof image === "string" ? "web" : (image.format ?? "web");
    const alt =
      typeof image === "string"
        ? `Project screenshot ${index + 1}`
        : (image.alt ?? `Project screenshot ${index + 1}`);

    return { src, alt, format };
  }),
});

const narrativeBySlug: Record<
  string,
  Pick<
    ProjectDetail,
    | "tldr"
    | "contextAndProblem"
    | "solutionRetained"
    | "securityAndResponsibility"
    | "keyLearnings"
    | "futureRoadmap"
    | "whatYouCanLearn"
  >
> = {
  "essence-togo": {
    tldr: {
      what: "A mobile utility app to quickly locate nearby gas stations.",
      who: "Daily commuters and drivers in Togo.",
      challenges: [
        "Map readability on small screens",
        "Fast loading in unstable network conditions",
      ],
      result:
        "Delivered a practical location-first experience with strong field usability.",
    },
    contextAndProblem:
      "Drivers often lose time identifying available stations quickly, especially in unfamiliar areas.",
    solutionRetained:
      "A map-first approach with direct station access and lightweight interactions was retained for speed.",
    securityAndResponsibility: [
      "No sensitive personal data required for core usage",
      "Network calls minimized for reliability",
    ],
    keyLearnings: [
      "Map clarity matters more than visual complexity",
      "Fast first render is critical on low-end devices",
    ],
    futureRoadmap: [
      "Add station service filters",
      "Improve offline caching",
      "Introduce user-reported station updates",
    ],
    whatYouCanLearn: [
      "Designing utility-first mobile workflows",
      "Balancing UX simplicity with real constraints",
    ],
  },
  "focusly-work": {
    tldr: {
      what: "A Pomodoro productivity web app focused on sustained concentration.",
      who: "Students, freelancers, and creators needing structured focus sessions.",
      challenges: [
        "Reducing distraction without overloading features",
        "Maintaining smooth timer state",
      ],
      result:
        "A clean and focused timer experience with iterative user feedback.",
    },
    contextAndProblem:
      "Many productivity apps overload the UI and break focus instead of reinforcing it.",
    solutionRetained:
      "A minimalist timer-centric interface with clear session flow was chosen as the core direction.",
    securityAndResponsibility: [
      "Session data scoped to authenticated users",
      "Defensive handling for timer state consistency",
    ],
    keyLearnings: [
      "Minimal interfaces improve retention",
      "Users value predictable flow over feature quantity",
    ],
    futureRoadmap: [
      "Session analytics dashboard",
      "Cross-device continuity",
      "Focus streak milestones",
    ],
    whatYouCanLearn: [
      "Product-focused iteration with user feedback",
      "Structuring stateful UX in React",
    ],
  },
  "docstore-ul": {
    tldr: {
      what: "A document platform for University of Lome students.",
      who: "Students searching for academic resources by school and faculty.",
      challenges: [
        "Information architecture across many domains",
        "Fast retrieval under constrained connectivity",
      ],
      result:
        "A centralized access point that reduced search friction for users.",
    },
    contextAndProblem:
      "Students struggled to find reliable documents scattered across informal channels.",
    solutionRetained:
      "A categorized, faculty-driven browsing model was retained for fast discovery.",
    keyLearnings: [
      "Navigation depth must stay shallow",
      "Consistency in labeling improves trust",
    ],
    whatYouCanLearn: [
      "Designing structured content platforms",
      "Building searchable educational interfaces",
    ],
  },
  ahoe: {
    tldr: {
      what: "A rental marketplace inspired by modern booking flows.",
      who: "People searching apartments and owners publishing listings.",
      challenges: [
        "Making listing detail clear at first glance",
        "Balancing browsing speed with trust signals",
      ],
      result:
        "A media-rich detail flow with clearer decision support for renters.",
    },
    contextAndProblem:
      "Local apartment discovery lacked structured product experience and trustworthy listing presentation.",
    solutionRetained:
      "A listing-detail-first layout with visual priority and concise property context was retained.",
    securityAndResponsibility: [
      "Safe external link handling for navigation",
      "Controlled media and content mapping",
    ],
    keyLearnings: [
      "Visual hierarchy strongly impacts booking confidence",
      "Metadata clarity reduces bounce",
    ],
    futureRoadmap: [
      "Availability calendar improvements",
      "Owner verification badges",
      "Smarter filtering and alerts",
    ],
    whatYouCanLearn: [
      "Designing marketplace trust cues",
      "Turning visual inspiration into actionable UX",
    ],
  },
  "pixelpulse-blog": {
    tldr: {
      what: "A blog platform tailored for developers and tech creators.",
      who: "Developers publishing and reading technical content.",
      challenges: [
        "Balancing editorial readability with product features",
        "Maintaining clean authoring flow",
      ],
      result:
        "A content experience optimized for writing, reading, and discoverability.",
    },
    contextAndProblem:
      "Creators needed a modern publishing space with technical audience expectations.",
    solutionRetained:
      "A reading-first structure and lightweight author tools were prioritized.",
    securityAndResponsibility: [
      "Authenticated content actions",
      "Safer external navigation and input hygiene",
    ],
    keyLearnings: [
      "Readable typography has measurable impact on engagement",
      "Author friction must stay low",
    ],
    futureRoadmap: [
      "Topic subscriptions",
      "Author analytics",
      "Editorial workflow upgrades",
    ],
    whatYouCanLearn: [
      "Building creator-first platforms",
      "Structuring content systems with scalable UX",
    ],
  },
  "togo-xiwo": {
    tldr: {
      what: "A market discovery mobile concept for local commerce.",
      who: "Shoppers and users exploring nearby markets.",
      challenges: [
        "Data reliability for market information",
        "Simple exploration on mobile",
      ],
      result:
        "A usable prototype direction validated through early interviews.",
    },
    keyLearnings: [
      "Local context is crucial for discovery apps",
      "Prototype validation saves time on roadmap decisions",
    ],
    futureRoadmap: [
      "Merchant onboarding",
      "Market schedule data",
      "Order-ready shopping lists",
    ],
  },
  "portify-builder": {
    tldr: {
      what: "A no-code portfolio builder for fast personal branding.",
      who: "Freelancers, students, and creators who need a professional portfolio quickly.",
      challenges: [
        "Simplifying setup without reducing customization",
        "Keeping output quality consistent",
      ],
      result:
        "A guided builder flow that accelerates first publish experience.",
    },
    contextAndProblem:
      "Many users need portfolio presence but are blocked by technical setup complexity.",
    solutionRetained:
      "A guided, template-first onboarding was retained to optimize activation speed.",
    keyLearnings: [
      "Default quality matters more than deep settings initially",
      "Onboarding clarity drives completion",
    ],
    futureRoadmap: [
      "Template library expansion",
      "Portfolio analytics",
      "One-click deployment improvements",
    ],
    whatYouCanLearn: [
      "Designing no-code experiences",
      "Balancing speed and customization in product design",
    ],
  },
  "atomic-habits": {
    tldr: {
      what: "A habit tracking concept inspired by Atomic Habits principles.",
      who: "People building routines with measurable progress.",
      challenges: [
        "Avoiding feature bloat in habit tools",
        "Keeping motivation loops meaningful",
      ],
      result:
        "A clear roadmap focused on behavior consistency and progress visibility.",
    },
    contextAndProblem:
      "Users abandon habit apps when daily flow becomes complex or repetitive.",
    solutionRetained:
      "A lightweight daily check-in model with strong progress cues was selected.",
    keyLearnings: [
      "Consistency beats complexity for habit systems",
      "Small feedback loops improve retention",
    ],
    futureRoadmap: [
      "Habit streak analytics",
      "Goal-linked routines",
      "Coach-like reminder model",
    ],
    whatYouCanLearn: [
      "Designing behavioral product loops",
      "Prioritizing MVP scope for habit platforms",
    ],
  },
};

const createDetail = (
  detail: Omit<ProjectDetail, "gallery" | "photoSections">,
  sections: ImageSection[],
): ProjectDetail => {
  const fallbackSection =
    sections.length > 0
      ? sections
      : [createImageSection(fallbackGallerySources.slice(0, 3))];

  return {
    ...detail,
    ...narrativeBySlug[detail.slug],
    photoSections: fallbackSection,
    gallery: fallbackSection.flatMap((section) => section.images),
  };
};

export const projectDetails: Record<string, ProjectDetail> = {
  "essence-togo": createDetail(
    {
      slug: "essence-togo",
      headline: "Kotlin mobile app to locate nearby fuel stations quickly",
      location: "Lome, Togo",
      meta: ["Android app", "Geolocation", "Utility product"],
      ratingLabel: "4.7",
      reviewLabel: "Field tests with local users",
      role: "Mobile developer (Kotlin + Compose)",
      duration: "6 weeks",
      year: "2023",
      team: "Solo developer",
      platforms: ["Android"],
      summary:
        "Essence Togo was built to simplify fuel station discovery with a fast map-first flow. The app focuses on speed, clear UI, and practical location context for daily city movement.",
      features: [
        "Nearby station discovery with map context",
        "Fast loading and simple mobile-first interaction",
        "Compose UI architecture for maintainability",
        "Data flow prepared for real-time updates",
        "Clean utility experience with minimal friction",
      ],
    },
    [
      createImageSection([photoLibrary.mobileHome, photoLibrary.webFocus]),
      createImageSection([photoLibrary.webDocstore, photoLibrary.webStay]),
    ],
  ),
  "focusly-work": createDetail(
    {
      slug: "focusly-work",
      headline: "Pomodoro productivity app with focused work sessions",
      location: "Remote project",
      meta: ["Web app", "Productivity", "In progress"],
      ratingLabel: "4.8",
      reviewLabel: "Iteration feedback from active users",
      role: "Frontend + product implementation",
      duration: "Ongoing",
      year: "2024",
      team: "Solo product builder",
      platforms: ["Web"],
      summary:
        "Focusly-work structures concentration blocks with a practical timer experience and clean interface. The goal is to reduce distraction and keep users in a consistent deep-work rhythm.",
      features: [
        "Pomodoro timer flow with session tracking",
        "Responsive UI optimized for quick access",
        "Supabase-backed data persistence",
        "Type-safe frontend architecture with TypeScript",
        "Continuous feature iteration from user feedback",
      ],
    },
    [
      createImageSection([photoLibrary.webFocus, photoLibrary.webHome]),
      createImageSection([photoLibrary.webDetail, photoLibrary.webDocstore]),
    ],
  ),
  "docstore-ul": createDetail(
    {
      slug: "docstore-ul",
      headline: "Academic document hub for University of Lome students",
      location: "Lome, Togo",
      meta: ["Web platform", "Education", "Document access"],
      ratingLabel: "4.6",
      reviewLabel: "Student usage sessions",
      role: "Frontend contributor + integration",
      duration: "5 weeks",
      year: "2022",
      team: "Frontend + content coordination",
      platforms: ["Web"],
      summary:
        "DocStore centralizes key university resources so students can find materials faster. The experience was designed around clarity, quick discovery, and lightweight browsing on low bandwidth.",
      features: [
        "Centralized academic document library",
        "Simple navigation by school and faculty",
        "Fast access to downloadable resources",
        "Search-friendly content architecture",
        "Practical UI for repeat daily use",
      ],
    },
    [
      createImageSection([photoLibrary.webDocstore, photoLibrary.webDetail]),
      createImageSection([photoLibrary.mobileHome, photoLibrary.webFocus]),
    ],
  ),
  ahoe: createDetail(
    {
      slug: "ahoe",
      headline: "Rental platform with modern booking-inspired browsing",
      location: "Lome, Togo",
      meta: ["Marketplace", "Web app", "In progress"],
      ratingLabel: "4.8",
      reviewLabel: "User tests: 33 sessions",
      role: "Product design + full-stack development",
      duration: "8 weeks",
      year: "2024",
      team: "Product design + full-stack",
      platforms: ["Web", "Mobile web"],
      summary:
        "Ahoe helps users discover and book apartments quickly while giving owners a clean dashboard to publish listings, manage availability, and communicate with prospects.",
      features: [
        "Media-driven listing detail experience",
        "Search and filtering by key rental criteria",
        "Owner publishing and listing management flow",
        "Responsive booking UX for mobile-first usage",
        "Location context via map-based integration",
      ],
    },
    [
      createImageSection([
        photoLibrary.webStay,
        photoLibrary.webHome,
        photoLibrary.webDetail,
      ]),
      createImageSection([photoLibrary.webDocstore, photoLibrary.mobileHome]),
      createImageSection([photoLibrary.webFocus, photoLibrary.webSite]),
    ],
  ),
  "pixelpulse-blog": createDetail(
    {
      slug: "pixelpulse-blog",
      headline: "Blog platform for developers and technology creators",
      location: "Remote project",
      meta: ["Content platform", "Web app", "Completed"],
      ratingLabel: "4.9",
      reviewLabel: "Editorial workflow tests",
      role: "Full-stack web development",
      duration: "7 weeks",
      year: "2023",
      team: "Solo full-stack developer",
      platforms: ["Web"],
      summary:
        "PixelPulse enables developers to publish, discover, and discuss technical content in a modern interface. The project balances editorial readability, authentication, and scalable article management.",
      features: [
        "Developer-focused publishing workflow",
        "Authentication with secure user sessions",
        "Structured article pages with strong readability",
        "Database-backed content persistence",
        "Modern responsive UI with clean typography",
      ],
    },
    [
      createImageSection([photoLibrary.webDetail, photoLibrary.webFocus]),
      createImageSection([photoLibrary.webHome, photoLibrary.webDocstore]),
    ],
  ),
  "togo-xiwo": createDetail(
    {
      slug: "togo-xiwo",
      headline: "Mobile market discovery app for local commerce in Togo",
      location: "Togo",
      meta: ["Mobile app", "Commerce", "In progress"],
      ratingLabel: "4.5",
      reviewLabel: "Prototype market interviews",
      role: "Mobile app developer",
      duration: "Ongoing",
      year: "2025",
      team: "Solo mobile developer",
      platforms: ["Android"],
      summary:
        "Togo-xiwo is designed to help users find nearby markets, discover specialties, and prepare purchases more efficiently. The product focuses on practical local value and accessibility.",
      features: [
        "Nearby market discovery using map context",
        "Market specialty exploration",
        "Order preparation and simple flow planning",
        "Mobile navigation tuned for practical usage",
        "Progressive iteration with field constraints",
      ],
    },
    [
      createImageSection([photoLibrary.webSite, photoLibrary.mobileHome]),
      createImageSection([photoLibrary.webFocus, photoLibrary.webDocstore]),
    ],
  ),
  "portify-builder": createDetail(
    {
      slug: "portify-builder",
      headline: "No-code portfolio builder for fast personal branding",
      location: "Remote project",
      meta: ["SaaS-style product", "Web app", "In progress"],
      ratingLabel: "4.7",
      reviewLabel: "Creator onboarding feedback",
      role: "Frontend architecture + product implementation",
      duration: "Ongoing",
      year: "2025",
      team: "Solo builder + feedback loop",
      platforms: ["Web"],
      summary:
        "Portify helps users generate professional portfolios in minutes without writing code. The experience is built around speed, customization, and clear publishing workflow.",
      features: [
        "Template-driven portfolio creation",
        "Guided setup for non-technical users",
        "Responsive portfolio output pages",
        "Firebase-backed account and data logic",
        "Continuous iteration for onboarding quality",
      ],
    },
    [
      createImageSection([photoLibrary.webHome, photoLibrary.webDetail]),
      createImageSection([photoLibrary.webFocus, photoLibrary.webSite]),
    ],
  ),
  "atomic-habits": createDetail(
    {
      slug: "atomic-habits",
      headline: "Habit tracker inspired by the Atomic Habits framework",
      location: "Remote project",
      meta: ["Web app", "Habits", "Upcoming"],
      ratingLabel: "4.4",
      reviewLabel: "Concept validation phase",
      role: "Product conception + web development",
      duration: "Planned",
      year: "2026",
      team: "Solo product conception",
      platforms: ["Web"],
      summary:
        "Atomic Habits translates behavior design principles into a practical tracking product. The roadmap focuses on clarity, streak consistency, and motivation loops with measurable progress.",
      features: [
        "Habit creation and tracking foundation",
        "Behavior-change oriented progression model",
        "Supabase-ready data persistence strategy",
        "Simple dashboard for daily consistency",
        "Upcoming release with iterative milestones",
      ],
    },
    [
      createImageSection([photoLibrary.webSite, photoLibrary.webFocus]),
      createImageSection([photoLibrary.webDetail, photoLibrary.webDocstore]),
    ],
  ),
};

export const skills = [
  "Python & Django",
  "Java",
  "Kotlin & Jetpack Compose",
  "Flutter & Dart",
  "PostgreSQL",
  "UX/UI with Figma",
  "Design Patterns",
  "Architecture MVVM/MVP",
  "API REST",
  "Git",
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Firebase",
];
