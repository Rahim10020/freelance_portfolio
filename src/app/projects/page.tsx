import Link from 'next/link';
import { projects } from '@/lib/data';
import MouseEffect from '@/components/ui/MouseEffect';

export const metadata = {
    title: 'Projects Archive - Rahim ALI',
    description: 'Complete archive of my projects and work',
};

export default function ProjectsArchive() {
    return (
        <>
            <MouseEffect />
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-15 lg:px-24 lg:py-18">
                {/* Back button */}
                <div className="mb-16">
                    <Link
                        href="/"
                        className="group inline-flex items-center font-semibold leading-tight text-teal-700 dark:text-teal-300 hover:text-teal-800"
                    >
                        <svg
                            className="mr-2 h-8 w-8 transition-transform group-hover:-translate-x-2"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M8.71967 3.21967C9.01256 2.92678 9.48744 2.92678 9.78033 3.21967C10.0732 3.51256 10.0732 3.98744 9.78033 4.28033L8.71967 3.21967ZM5 8L4.46967 7.46967C4.17678 7.76256 4.17678 8.23744 4.46967 8.53033L5 8ZM9.78033 11.7197C10.0732 12.0126 10.0732 12.4874 9.78033 12.7803C9.48744 13.0732 9.01256 13.0732 8.71967 12.7803L9.78033 11.7197ZM9.78033 4.28033L5.53033 8.53033L4.46967 7.46967L8.71967 3.21967L9.78033 4.28033ZM5.53033 7.46967L9.78033 11.7197L8.71967 12.7803L4.46967 8.53033L5.53033 7.46967Z"
                            />
                            <path
                                stroke="currentColor"
                                d="M14.25 8H5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                        Rahim ALI
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl mb-4">
                        All Projects
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        A complete archive of projects I&apos;ve built over the years.
                    </p>
                </div>

                {/* Projects Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead className="sticky top-0 z-10 transition motion-reduce:transition-none bg-white/50 dark:bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.2)] dark:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:drop-shadow-lg">
                            <tr>
                                <th className="py-4 pr-8 text-sm font-semibold text-slate-900 dark:text-slate-200">Year</th>
                                <th className="py-4 pr-8 text-sm font-semibold text-slate-900 dark:text-slate-200">Project</th>
                                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-900 dark:text-slate-200 lg:table-cell">
                                    Built with
                                </th>
                                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-900 dark:text-slate-200 sm:table-cell">
                                    Link
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project, index) => {
                                const year = new Date().getFullYear() - Math.floor(index / 2);
                                const hasLink = project.links.github || project.links.live;
                                const mainLink = project.links.live || project.links.github;

                                return (
                                    <tr
                                        key={project.id}
                                        className="border-b border-slate-300/10 last:border-none"
                                    >
                                        <td className="py-4 pr-4 align-top text-sm">
                                            <div className="translate-y-px text-slate-500">{year}</div>
                                        </td>
                                        <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                            <div>
                                                {hasLink ? (
                                                    <a
                                                        href={mainLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                                    >
                                                        <span className="inline-block">
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
                                                    <span>{project.title}</span>
                                                )}
                                            </div>
                                            <div className="mt-2 text-sm leading-normal text-slate-400 font-normal">
                                                {project.description}
                                            </div>
                                        </td>
                                        <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                            <ul className="flex flex-wrap gap-2">
                                                {project.technologies.slice(0, 4).map((tech) => (
                                                    <li key={tech}>
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                            {tech}
                                                        </div>
                                                    </li>
                                                ))}
                                                {project.technologies.length > 4 && (
                                                    <li className="text-xs text-slate-500">
                                                        +{project.technologies.length - 4} more
                                                    </li>
                                                )}
                                            </ul>
                                        </td>
                                        <td className="hidden py-4 align-top sm:table-cell">
                                            <div className="flex gap-3">
                                                {project.links.github && (
                                                    <a
                                                        href={project.links.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-slate-400 hover:text-teal-300 transition-colors"
                                                        aria-label="GitHub"
                                                    >
                                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {project.links.live && (
                                                    <a
                                                        href={project.links.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-slate-400 hover:text-teal-300 transition-colors"
                                                        aria-label="Live Demo"
                                                    >
                                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
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
                                                    </a>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}