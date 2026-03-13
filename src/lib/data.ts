import { Project, ProjectDetail, Service, SocialLink } from './types';

export const personalInfo = {
    name: 'Rahim ALI',
    title: 'Software Developer',
    bio: "I design and code beautifully simple things that make the web feel intuitive and alive — and I genuinely love what I do.",
    email: 'rahim100codeur@gmail.com',
    resumeUrl: 'https://rahim-ali-dev.vercel.app/',
};

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/Rahim10020',
        icon: 'github',
    },
    {
        name: 'LinkedIn',
        url: 'http://www.linkedin.com/in/rahim-ali-a6003226b',
        icon: 'linkedin',
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/rahim.aldev',
        icon: 'instagram',
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
        icon: 'facebook',
    },
];

export const services: Service[] = [
    {
        id: '1',
        title: 'Web Development',
        description: 'Modern web apps — Django, Next.js & React.',
        icon: 'globe',
        priceRangeUSD: '$500 – $2,000',
        priceRangeFCFA: '300k – 1.2M FCFA',
        priceRangeLabel: 'Indicative range',
    },
    {
        id: '2',
        title: 'Mobile Development',
        description: 'Flutter & native Android (Kotlin, Jetpack Compose).',
        icon: 'mobile',
        priceRangeUSD: '$800 – $2,500',
        priceRangeFCFA: '480k – 1.5M FCFA',
    },
    {
        id: '3',
        title: 'UX/UI Design',
        description: 'Interfaces with Figma — clear, usable, on brand.',
        icon: 'figma',
        priceRangeUSD: '$300 – $1,200',
        priceRangeFCFA: '180k – 720k FCFA',
    },
    {
        id: '4',
        title: 'API Development',
        description: 'RESTful APIs with Django — robust & maintainable.',
        icon: 'laptop',
        priceRangeUSD: '$400 – $1,500',
        priceRangeFCFA: '240k – 900k FCFA',
    },
];

export const projects: Project[] = [
    {
        id: '1',
        slug: 'essence-togo',
        image: '/images/projects/p1-accueil.png',
        technologies: ['Kotlin', 'Jetpack Compose', 'Firebase'],
        best: true,
        links: {
            github: 'https://github.com/Rahim10020/essence-togo',
            live: 'https://github.com/Rahim10020/essence-togo',
        },
    },
    {
        id: '2',
        slug: 'focusly-work',
        image: '/images/projects/p2-focus.png',
        technologies: ['Next.js', 'React', 'Tailwind css', 'Supabase', 'TypeScript'],
        status: 'in-progress',
        best: true,
        links: {
            github: 'https://github.com/Rahim10020/focusly',
            live: 'https://focusly-work.vercel.app/',
        },
    },
    {
        id: '3',
        slug: 'docstore-ul',
        image: '/images/projects/p3-docstore.png',
        technologies: ['React', 'Tailwind css', 'Appwrite', 'Google Drive'],
        links: {
            github: 'https://github.com/crepin7/biblio-epl',
            live: 'https://docstore-univ.vercel.app/',
        },
    },
    {
        id: '4',
        slug: 'togo-stay',
        image: '/images/projects/p4-stay.png',
        technologies: ['Next.js', 'React', 'Firebase', 'Appwrite', 'TypeScript', 'Tailwind css', 'OpenStreetMap'],
        status: 'in-progress',
        best: true,
        links: {
            github: 'https://github.com/crepin7/nyigba',
            live: 'https://stay-ashy.vercel.app/',
        },
    },
    {
        id: '5',
        slug: 'pixelpulse-blog',
        image: '/images/projects/p5-detail.png',
        technologies: ['Next.js', 'React', 'NextAuth.js', 'Tailwind css', 'PostgreSQL'],
        status: 'completed',
        best: true,
        links: {
            github: 'https://github.com/Rahim10020/tech-pulse',
            live: 'https://pixelpulse-blog.vercel.app/',
        },
    },
    {
        id: '6',
        slug: 'togo-xiwo',
        technologies: ['Futter', 'Get X', 'OpenStreetMap', 'Dart'],
        status: 'in-progress',
        links: {
            github: 'https://github.com/Rahim10020/Togo-ssiwo',
        },
    },
    {
        id: '7',
        slug: 'portify-builder',
        image: '/images/projects/p7-home.png',
        technologies: ['Next.js', 'React', 'Tailwind css', 'Firebase', 'Framer Motion'],
        status: 'in-progress',
        best: true,
        links: {
            github: 'https://github.com/Rahim10020/portify',
        },
    },
    {
        id: '8',
        slug: 'atomic-habits',
        technologies: ['Next.js', 'Typescript', 'Tailwind css', 'Supabase'],
        status: 'upcoming',
        links: {
            github: 'https://github.com/Rahim10020/atomic-habits',
        },
    },
];

const commonGallery = [
    '/images/projects/p2-focus.png',
    '/images/projects/p3-docstore.png',
    '/images/projects/p4-stay.png',
    '/images/projects/p5-detail.png',
    '/images/projects/p7-home.png',
    '/images/website.png',
];

const galleryFor = (primary?: string) => {
    const seed = primary ? [primary, ...commonGallery] : commonGallery;
    const unique = Array.from(new Set(seed));
    return unique.slice(0, 6).map((src, index) => ({
        src,
        alt: `Project capture ${index + 1}`,
    }));
};

export const projectDetails: Record<string, ProjectDetail> = {
    'essence-togo': {
        slug: 'essence-togo',
        headline: 'Kotlin mobile app to locate nearby fuel stations quickly',
        location: 'Lome, Togo',
        meta: ['Android app', 'Geolocation', 'Utility product'],
        ratingLabel: '4.7',
        reviewLabel: 'Field tests with local users',
        role: 'Mobile developer (Kotlin + Compose)',
        duration: '6 weeks',
        summary:
            'Essence Togo was built to simplify fuel station discovery with a fast map-first flow. The app focuses on speed, clear UI, and practical location context for daily city movement.',
        features: [
            'Nearby station discovery with map context',
            'Fast loading and simple mobile-first interaction',
            'Compose UI architecture for maintainability',
            'Data flow prepared for real-time updates',
            'Clean utility experience with minimal friction',
        ],
        gallery: galleryFor('/images/projects/p1-accueil.png'),
    },
    'focusly-work': {
        slug: 'focusly-work',
        headline: 'Pomodoro productivity app with focused work sessions',
        location: 'Remote project',
        meta: ['Web app', 'Productivity', 'In progress'],
        ratingLabel: '4.8',
        reviewLabel: 'Iteration feedback from active users',
        role: 'Frontend + product implementation',
        duration: 'Ongoing',
        summary:
            'Focusly-work structures concentration blocks with a practical timer experience and clean interface. The goal is to reduce distraction and keep users in a consistent deep-work rhythm.',
        features: [
            'Pomodoro timer flow with session tracking',
            'Responsive UI optimized for quick access',
            'Supabase-backed data persistence',
            'Type-safe frontend architecture with TypeScript',
            'Continuous feature iteration from user feedback',
        ],
        gallery: galleryFor('/images/projects/p2-focus.png'),
    },
    'docstore-ul': {
        slug: 'docstore-ul',
        headline: 'Academic document hub for University of Lome students',
        location: 'Lome, Togo',
        meta: ['Web platform', 'Education', 'Document access'],
        ratingLabel: '4.6',
        reviewLabel: 'Student usage sessions',
        role: 'Frontend contributor + integration',
        duration: '5 weeks',
        summary:
            'DocStore centralizes key university resources so students can find materials faster. The experience was designed around clarity, quick discovery, and lightweight browsing on low bandwidth.',
        features: [
            'Centralized academic document library',
            'Simple navigation by school and faculty',
            'Fast access to downloadable resources',
            'Search-friendly content architecture',
            'Practical UI for repeat daily use',
        ],
        gallery: galleryFor('/images/projects/p3-docstore.png'),
    },
    'togo-stay': {
        slug: 'togo-stay',
        headline: 'Rental platform with modern booking-inspired browsing',
        location: 'Lome, Togo',
        meta: ['Marketplace', 'Web app', 'In progress'],
        ratingLabel: '4.8',
        reviewLabel: 'User tests: 33 sessions',
        role: 'Product design + full-stack development',
        duration: '8 weeks',
        summary:
            'Togo Stay helps users discover and book apartments quickly while giving owners a clean dashboard to publish listings, manage availability, and communicate with prospects.',
        features: [
            'Media-driven listing detail experience',
            'Search and filtering by key rental criteria',
            'Owner publishing and listing management flow',
            'Responsive booking UX for mobile-first usage',
            'Location context via map-based integration',
        ],
        gallery: galleryFor('/images/projects/p4-stay.png'),
    },
    'pixelpulse-blog': {
        slug: 'pixelpulse-blog',
        headline: 'Blog platform for developers and technology creators',
        location: 'Remote project',
        meta: ['Content platform', 'Web app', 'Completed'],
        ratingLabel: '4.9',
        reviewLabel: 'Editorial workflow tests',
        role: 'Full-stack web development',
        duration: '7 weeks',
        summary:
            'PixelPulse enables developers to publish, discover, and discuss technical content in a modern interface. The project balances editorial readability, authentication, and scalable article management.',
        features: [
            'Developer-focused publishing workflow',
            'Authentication with secure user sessions',
            'Structured article pages with strong readability',
            'Database-backed content persistence',
            'Modern responsive UI with clean typography',
        ],
        gallery: galleryFor('/images/projects/p5-detail.png'),
    },
    'togo-xiwo': {
        slug: 'togo-xiwo',
        headline: 'Mobile market discovery app for local commerce in Togo',
        location: 'Togo',
        meta: ['Mobile app', 'Commerce', 'In progress'],
        ratingLabel: '4.5',
        reviewLabel: 'Prototype market interviews',
        role: 'Mobile app developer',
        duration: 'Ongoing',
        summary:
            'Togo-xiwo is designed to help users find nearby markets, discover specialties, and prepare purchases more efficiently. The product focuses on practical local value and accessibility.',
        features: [
            'Nearby market discovery using map context',
            'Market specialty exploration',
            'Order preparation and simple flow planning',
            'Mobile navigation tuned for practical usage',
            'Progressive iteration with field constraints',
        ],
        gallery: galleryFor('/images/website.png'),
    },
    'portify-builder': {
        slug: 'portify-builder',
        headline: 'No-code portfolio builder for fast personal branding',
        location: 'Remote project',
        meta: ['SaaS-style product', 'Web app', 'In progress'],
        ratingLabel: '4.7',
        reviewLabel: 'Creator onboarding feedback',
        role: 'Frontend architecture + product implementation',
        duration: 'Ongoing',
        summary:
            'Portify helps users generate professional portfolios in minutes without writing code. The experience is built around speed, customization, and clear publishing workflow.',
        features: [
            'Template-driven portfolio creation',
            'Guided setup for non-technical users',
            'Responsive portfolio output pages',
            'Firebase-backed account and data logic',
            'Continuous iteration for onboarding quality',
        ],
        gallery: galleryFor('/images/projects/p7-home.png'),
    },
    'atomic-habits': {
        slug: 'atomic-habits',
        headline: 'Habit tracker inspired by the Atomic Habits framework',
        location: 'Remote project',
        meta: ['Web app', 'Habits', 'Upcoming'],
        ratingLabel: '4.4',
        reviewLabel: 'Concept validation phase',
        role: 'Product conception + web development',
        duration: 'Planned',
        summary:
            'Atomic Habits translates behavior design principles into a practical tracking product. The roadmap focuses on clarity, streak consistency, and motivation loops with measurable progress.',
        features: [
            'Habit creation and tracking foundation',
            'Behavior-change oriented progression model',
            'Supabase-ready data persistence strategy',
            'Simple dashboard for daily consistency',
            'Upcoming release with iterative milestones',
        ],
        gallery: galleryFor('/images/website.png'),
    },
};

export const skills = [
    'Python & Django',
    'Java',
    'Kotlin & Jetpack Compose',
    'Flutter & Dart',
    'PostgreSQL',
    'UX/UI with Figma',
    'Design Patterns',
    'Architecture MVVM/MVP',
    'API REST',
    'Git',
    'Next.js',
    'React',
    'Tailwind CSS',
    'TypeScript',
    'Firebase',
];
