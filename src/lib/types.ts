export interface Experience {
    id: string;
    period: string;
    title: string;
    company: string;
    description: string;
    technologies: string[];
    link?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    links: {
        github?: string;
        live?: string;
    };
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}