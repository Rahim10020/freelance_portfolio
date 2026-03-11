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

export const projectDetailMocks: Record<string, ProjectDetail> = {
    'togo-stay': {
        slug: 'togo-stay',
        headline: 'Rental platform experience inspired by modern booking flows',
        location: 'Lome, Togo',
        meta: ['End-to-end product', 'Web app', 'Rental marketplace'],
        ratingLabel: '4.8',
        reviewLabel: 'User tests: 33 sessions',
        role: 'Product design + full-stack development',
        duration: '8 weeks',
        summary:
            'Togo Stay helps users discover and book apartments quickly while giving owners a clean dashboard to publish listings, manage availability, and communicate with prospects.',
        features: [
            'Hero media gallery inspired by booking platforms',
            'Listing search and filtering by location and price',
            'Owner flow for posting and managing properties',
            'Responsive booking experience for mobile-first users',
            'Map-based neighborhood preview and context',
        ],
        gallery: [
            { src: '/images/projects/p4-stay.png', alt: 'Main listing preview' },
            { src: '/images/projects/p5-detail.png', alt: 'Project detail and content layout' },
            { src: '/images/projects/p7-home.png', alt: 'Landing and discovery section' },
            { src: '/images/projects/p2-focus.png', alt: 'Dashboard-like secondary screen' },
            { src: '/images/projects/p3-docstore.png', alt: 'Compact card and panel composition' },
        ],
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
