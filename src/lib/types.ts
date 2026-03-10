export type ServiceIcon = 'globe' | 'mobile' | 'figma' | 'laptop';

export interface Project {
    id: string;
    technologies: string[];
    image?: string;
    status?: 'completed' | 'in-progress' | 'upcoming';
    best?: boolean;
    links: {
        github?: string;
        live?: string;
    };
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: ServiceIcon;
    priceUSD: number;
    priceFCFA: number;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}
