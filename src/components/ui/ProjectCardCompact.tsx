import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardCompactProps {
  project: Project;
}

export default function ProjectCardCompact({ project }: ProjectCardCompactProps) {
  const { t } = useLanguage();
  const projectTr = t.projects.list[project.id as keyof typeof t.projects.list];
  const title = projectTr?.title ?? "";
  const description = projectTr?.description ?? "";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block min-w-[290px] max-w-[320px] overflow-hidden rounded-lg border border-slate-700/40 bg-slate-900/40"
    >
      {project.image && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="320px"
          />
        </div>
      )}
      <div className="space-y-3 p-4">
        <h4 className="font-sans text-lg font-semibold text-slate-100">{title}</h4>
        <p className="line-clamp-3 font-display text-sm text-slate-300">{description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <li key={tech} className="accent-chip rounded-full px-2.5 py-1 text-xs font-medium">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
