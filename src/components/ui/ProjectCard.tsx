import { Project } from '@/lib/types';
import Image from 'next/image';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const hasLink = project.links.github || project.links.live;
    const mainLink = project.links.live || project.links.github;

    const content = (
        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.2)] dark:lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            {project.image && (
                <div className="z-10 sm:col-span-2">
                    <div className="rounded border-2 border-slate-300/30 dark:border-slate-200/10 transition group-hover:border-slate-300/50 dark:group-hover:border-slate-200/30">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={300}
                            className="rounded"
                            loading="lazy"
                        />
                    </div>
                </div>
            )}

            <div className={`z-10 ${project.image ? 'sm:col-span-6' : 'sm:col-span-8'}`}>
                <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-200">
                    {hasLink ? (
                        <a
                            href={mainLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-300 focus-visible:text-teal-700 dark:focus-visible:text-teal-300 group/link text-base"
                        >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>
                                {project.title}
                                <svg
                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </a>
                    ) : (
                        <span className="text-base">{project.title}</span>
                    )}
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">{project.description}</p>
                {(project.links.github || project.links.live) && (
                    <div className="mt-4 flex gap-4 text-xs">
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-20 inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-300"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                        )}
                        {project.links.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-20 inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-300"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                )}
                <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <li key={tech}>
                            <div className="flex items-center rounded-full bg-teal-500/20 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                                {tech}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return <li className="mb-12 hover:cursor-pointer">{content}</li>;
}