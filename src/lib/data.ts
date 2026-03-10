import { Project, Service, SocialLink } from './types';

export const personalInfo = {
    name: 'Rahim ALI',
    title: 'Software Developer',
    bio: "I design and code beautifully simple things that make the web feel intuitive and alive — and I genuinely love what I do.",
    email: 'rahim100codeur@gmail.com',
    resumeUrl: 'https://rahim-ali-dev.vercel.app/', // Replace with your CV/resume PDF or page URL
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
    // {
    //     name: 'YouTube',
    //     url: 'http://www.linkedin.com/in/rahim-ali-a6003226b',
    //     icon: 'youtube',
    // },
    // {
    //     name: 'Twitter',
    //     url: 'http://www.linkedin.com/in/rahim-ali-a6003226b',
    //     icon: 'twitter',
    // },
];

export const services: Service[] = [
    {
        id: '1',
        title: 'Web Development',
        description: 'Building modern and responsive web applications with clean architecture.',
        icon: 'globe',
        priceUSD: 1500,
        priceFCFA: 900000,
    },
    {
        id: '2',
        title: 'Mobile Development',
        description: 'Creating cross-platform mobile apps with Flutter and native Android applications.',
        icon: 'mobile',
        priceUSD: 2000,
        priceFCFA: 1200000,
    },
    {
        id: '3',
        title: 'UI/UX Design',
        description: 'Designing intuitive and engaging user interfaces with Figma, focusing on user experience and modern design patterns.',
        icon: 'figma',
        priceUSD: 800,
        priceFCFA: 480000,
    },
    {
        id: '4',
        title: 'API Development',
        description: 'Developing robust RESTful APIs with Django REST Framework and implementing efficient backend solutions.',
        icon: 'laptop',
        priceUSD: 1200,
        priceFCFA: 720000,
    },
];

export const projects: Project[] = [
    {
        id: '1',
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
        image: '/images/projects/p3-docstore.png',
        technologies: ['React', 'Tailwind css', 'Appwrite', 'Google Drive'],
        links: {
            github: 'https://github.com/crepin7/biblio-epl',
            live: 'https://docstore-univ.vercel.app/',
        },
    },
    {
        id: '4',
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
        technologies: ['Futter', 'Get X', 'OpenStreetMap', 'Dart'],
        status: 'in-progress',
        links: {
            github: 'https://github.com/Rahim10020/Togo-ssiwo',
        },
    },
    {
        id: '7',
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
        technologies: ['Next.js', 'Typescript', 'Tailwind css', 'Supabase'],
        status: 'upcoming',
        links: {
            github: 'https://github.com/Rahim10020/atomic-habits',
        },
    },
];

export const skills = [
    'Python & Django',
    'Java',
    'Kotlin & Jetpack Compose',
    'Flutter & Dart',
    'PostgreSQL',
    'UI/UX with Figma',
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
