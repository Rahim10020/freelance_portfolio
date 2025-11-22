'use client';

import { projects } from '@/lib/data';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import ArchiveLink from '../ui/ArchiveLink';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
    const { t } = useLanguage();

    // Separate best projects from others
    const bestProjects = projects.filter(project => project.best);
    const nonBestProjects = projects.filter(project => !project.best);

    // Sort non-best projects by status: completed first, then in-progress, then upcoming
    const sortedNonBestProjects = [...nonBestProjects].sort((a, b) => {
        const getStatusPriority = (status?: string) => {
            switch (status) {
                case 'completed':
                case undefined:
                    return 0; // completed/no status first
                case 'in-progress':
                    return 1; // in-progress second
                case 'upcoming':
                    return 2; // upcoming last
                default:
                    return 0;
            }
        };

        return getStatusPriority(a.status) - getStatusPriority(b.status);
    });

    // Display all best projects, then fill with sorted non-best up to 5 total
    const displayedProjects = [
        ...bestProjects,
        ...sortedNonBestProjects.slice(0, 5 - bestProjects.length)
    ];

    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>{t.projects.title}</SectionTitle>
            <div>
                <ol className="group/list">
                    {displayedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </ol>

                <div className="mt-12">
                    <ArchiveLink
                        href="/projects"
                        text={t.projects.viewArchive}
                    />
                </div>
            </div>
        </section>
    );
}