import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill}>
            <div className="accent-chip flex items-center rounded-full px-3 py-1 text-xs font-medium font-display leading-5">
              {skill}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
