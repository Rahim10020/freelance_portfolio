import type { Project, ProjectDetail } from "@/lib/types";

type ProjectSummaryAsideLabels = {
  projectSummary: string;
  role: string;
  duration: string;
  year: string;
  team: string;
  platforms: string;
  stack: string;
  viewLive: string;
  viewGithub: string;
};

type ProjectSummaryAsideProps = {
  project: Project;
  detail: ProjectDetail;
  labels: ProjectSummaryAsideLabels;
};

export default function ProjectSummaryAside({
  project,
  detail,
  labels,
}: ProjectSummaryAsideProps) {
  return (
    <aside className="lg:col-span-4">
      <div className="top-6 p-5 shadow-lg lg:sticky">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-[var(--c-text-strong)]">
          {labels.projectSummary}
        </h3>
        {/* Content */}
        <div className="mt-6 space-y-4">
          <div>
            <p className="text-xs uppercase font-display tracking-wide text-[var(--c-text-secondary)]">
              {labels.role}
            </p>
            <p className="mt-1 font-display font-medium text-[var(--c-text-strong)]">
              {detail.role}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase font-display tracking-wide text-[var(--c-text-secondary)]">
              {labels.team}
            </p>
            <p className="mt-1 font-display font-medium text-[var(--c-text-strong)]">
              {detail.team}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase font-display tracking-wide text-[var(--c-text-secondary)]">
              {labels.duration}
            </p>
            <p className="mt-1 font-medium font-display text-[var(--c-text-strong)]">
              {detail.duration}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase font-display tracking-wide text-[var(--c-text-secondary)]">
              {labels.year}
            </p>
            <p className="mt-1 font-medium font-display text-[var(--c-text-strong)]">
              {detail.year}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase font-display tracking-wide text-[var(--c-text-secondary)]">
              {labels.platforms}
            </p>
            <p className="mt-1 font-medium font-display text-[var(--c-text-strong)]">
              {detail.platforms.join(" / ")}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase font-display tracking-wide text-[var(--c-text-secondary)]">
              {labels.stack}
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="accent-chip rounded-full font-display px-3 py-1 text-xs font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Links (github & view live) */}
        <div className="mt-6 space-y-2">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display inline-flex w-full items-center justify-center bg-[rgb(var(--accent-bg-rgb))] px-4 py-2 font-semibold text-[var(--on-primary-text)] hover:bg-[rgb(var(--accent-rgb))]"
            >
              <span>{labels.viewLive}</span>
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display inline-flex w-full items-center justify-center px-4 py-2 font-semibold text-[var(--c-text-strong)] border border-[var(--c-border-input)]"
            >
              <span>{labels.viewGithub}</span>
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
