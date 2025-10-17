import { projects } from '@/lib/data';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import ArchiveLink from '../ui/ArchiveLink';

export default function Projects() {
    // Afficher seulement les 5 premiers projets
    const displayedProjects = projects.slice(0, 5);

    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>Projects</SectionTitle>
            <div>
                <ol className="group/list">
                    {displayedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </ol>

                <div className="mt-12">
                    <ArchiveLink
                        href="/projects"
                        text="View Full Project Archive"
                    />
                </div>
            </div>
        </section>
    );
}