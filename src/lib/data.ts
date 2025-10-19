import { Experience, Project, Service, SocialLink } from './types';

export const personalInfo = {
    name: 'Rahim ALI',
    title: 'Software Developer',
    bio: "I design and code beautifully simple things that make the web feel intuitive and alive — and I genuinely love what I do.",
    email: 'rahim100codeur@gmail.com',
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
        url: 'https://instagram.com/rahimali',
        icon: 'instagram',
    },
    {
        name: 'Facebook',
        url: 'https://facebook.com/rahimali',
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
        description: 'Building modern and responsive web applications using Django, Next.js, and React with clean architecture.',
        icon: '💻',
    },
    {
        id: '2',
        title: 'Mobile Development',
        description: 'Creating cross-platform mobile apps with Flutter and native Android applications using Kotlin & Jetpack Compose.',
        icon: '📱',
    },
    {
        id: '3',
        title: 'UI/UX Design',
        description: 'Designing intuitive and engaging user interfaces with Figma, focusing on user experience and modern design patterns.',
        icon: '🎨',
    },
    {
        id: '4',
        title: 'API Development',
        description: 'Developing robust RESTful APIs with Django REST Framework and implementing efficient backend solutions.',
        icon: '⚡',
    },
];

export const experiences: Experience[] = [
    {
        id: '1',
        period: '2023 — PRESENT',
        title: 'Senior Full Stack Developer',
        company: 'Tech Innovations Ltd',
        description: 'Led development of enterprise web applications using Django and Next.js. Implemented microservices architecture and improved application performance by 40%. Mentored junior developers and established code review processes.',
        technologies: ['Django', 'Next.js', 'PostgreSQL', 'Docker', 'AWS'],
        link: 'https://rahim-ali.com',
    },
    {
        id: '2',
        period: '2021 — 2023',
        title: 'Mobile Application Developer',
        company: 'Digital Solutions Inc',
        description: 'Developed cross-platform mobile applications using Flutter and native Android apps with Kotlin. Collaborated with design team to implement pixel-perfect UI/UX. Integrated RESTful APIs and implemented offline-first architecture.',
        technologies: ['Flutter', 'Kotlin', 'Firebase', 'REST API', 'Git'],
    },
    {
        id: '3',
        period: '2019 — 2021',
        title: 'Junior Software Developer',
        company: 'StartUp Ventures',
        description: 'Built web applications using Django and contributed to frontend development with React. Participated in agile development process and daily stand-ups. Implemented automated testing and CI/CD pipelines.',
        technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Jenkins'],
    },
];

export const projects: Project[] = [
    {
        id: '1',
        title: 'Essence Togo',
        image: '/images/projects/p1-accueil.png',
        description: 'A Kotlin mobile app built with Jetpack Compose that helps users quickly find nearby gas stations on a map. Fast, simple, and user-friendly.',
        technologies: ['Kotlin', 'Jetpack Compose', 'Firebase'],
        links: {
            github: 'https://github.com/Rahim10020/essence-togo',
            live: 'https://github.com/Rahim10020/essence-togo',
        },
    },
    {
        id: '2',
        title: 'PixelPulse - Blog Platform for Developers',
        image: '/images/projects/p2-detail.png',
        description: 'A modern blog platform designed for developers, content creators, and technology enthusiasts. It offers a rich ecosystem for sharing knowledge, technology insights, and interacting with a growing community.',
        technologies: ['Next.js', 'NextAuth.js', 'Tailwind css', 'PostgreSQL'],
        links: {
            github: 'https://github.com/Rahim10020/tech-pulse',
            live: 'https://pixelpulse-blog.vercel.app/',
        },
    },
    {
        id: '3',
        title: 'DocStore - Documents for Lome University',
        image: '/images/projects/p3-docstore.png',
        description: 'A website that provides visitors with documents and resources for the University of Lomé, covering all schools and faculties.',
        technologies: ['React', 'Tailwind css', 'Appwrite', 'Google Drive'],
        links: {
            github: 'https://github.com/crepin7/biblio-epl',
            live: 'https://docstore-univ.vercel.app/',
        },
    },
    {
        id: '4',
        title: 'Togo Stay - Apartment Booking Website',
        image: '/images/projects/p4-stay.png',
        description: 'A website that allows Togolese people to easily find and rent apartments, while also offering owners the opportunity to publish their rental advertisements.',
        technologies: ['Next.js', 'Firebase', 'Appwrite', 'TypeScript', 'Tailwind css', 'OpenStreetMap'],
        links: {
            github: 'https://github.com/crepin7/nyigba',
            live: 'https://stay-ashy.vercel.app/',
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
    'TypeScript',
    'Docker',
    'Firebase',
];