import { Experience } from '@/lib/types';

interface ExperienceCardProps {
    experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    const content = (
        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.2)] dark:lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-500 sm:col-span-2">
                {experience.period}
            </header>

            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-200">
                    <div>
                        {experience.link ? (
                            <a
                                href={experience.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-300 focus-visible:text-teal-700 dark:focus-visible:text-teal-300 group/link text-base"
                            >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                <span>
                                    {experience.title} · {experience.company}
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
                            <span className="text-base">
                                {experience.title} · {experience.company}
                            </span>
                        )}
                    </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">{experience.description}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
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