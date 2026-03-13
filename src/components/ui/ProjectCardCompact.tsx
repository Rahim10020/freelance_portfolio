import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardCompactProps {
  project: Project;
}

export default function ProjectCardCompact({
  project,
}: ProjectCardCompactProps) {
  const { t } = useLanguage();
  const projectTr = t.projects.list[project.id as keyof typeof t.projects.list];
  const title = projectTr?.title ?? "";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block min-w-[290px] max-w-[320px] overflow-hidden rounded-md"
    >
      {project.image && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={title}
            fill
            className="object-cover"
            sizes="320px"
          />
        </div>
      )}
      <div className="space-y-3 py-4">
        <h4 className="font-display text-lg font-semibold">{title}</h4>
      </div>
    </Link>
  );
}
