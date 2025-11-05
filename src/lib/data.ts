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
        url: 'http://www.linkedin.com/in/rahim-ali-a6003226b',
        icon: 'instagram',
    },
    {
        name: 'Facebook',
        url: 'http://www.linkedin.com/in/rahim-ali-a6003226b',
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
        icon: '💻',
        priceUSD: 1500,
        priceFCFA: 900000,
    },
    {
        id: '2',
        title: 'Mobile Development',
        description: 'Creating cross-platform mobile apps with Flutter and native Android applications.',
        icon: '📱',
        priceUSD: 2000,
        priceFCFA: 1200000,
    },
    {
        id: '3',
        title: 'UI/UX Design',
        description: 'Designing intuitive and engaging user interfaces with Figma, focusing on user experience and modern design patterns.',
        icon: '🎨',
        priceUSD: 800,
        priceFCFA: 480000,
    },
    {
        id: '4',
        title: 'API Development',
        description: 'Developing robust RESTful APIs with Django REST Framework and implementing efficient backend solutions.',
        icon: '⚡',
        priceUSD: 1200,
        priceFCFA: 720000,
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
        link: 'https://example.com',
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
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform with admin dashboard, payment integration, and real-time inventory management. Built with Django REST Framework backend and Next.js frontend.',
        technologies: ['Next.js', 'Django', 'PostgreSQL', 'Stripe', 'Redis'],
        links: {
            github: 'https://github.com/Rahim10020',
            live: 'https://example.com',
        },
    },
    {
        id: '2',
        title: 'Task Management Mobile App',
        description: 'Cross-platform mobile application for task and project management with offline support, push notifications, and team collaboration features.',
        technologies: ['Flutter', 'Firebase', 'Provider', 'SQLite'],
        links: {
            github: 'https://github.com/Rahim10020',
        },
    },
    {
        id: '3',
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard for social media management with real-time data visualization, scheduled posting, and multi-account support.',
        technologies: ['React', 'Django', 'Chart.js', 'WebSocket', 'Docker'],
        links: {
            github: 'https://github.com/Rahim10020',
            live: 'https://example.com',
        },
    },
    {
        id: '4',
        title: 'Fitness Tracking App',
        description: 'Native Android fitness application with workout plans, progress tracking, and nutrition logging using MVVM architecture.',
        technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit', 'MVVM'],
        links: {
            github: 'https://github.com/Rahim10020',
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