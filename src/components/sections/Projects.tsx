import { projects } from '@/lib/data';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>Projects</SectionTitle>
            <div>
                <ol className="group/list">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </ol>
            </div>
        </section>
    );
}