import { skills } from '@/lib/data';
import SectionTitle from '../ui/SectionTitle';

export default function Skills() {
    return (
        <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>Skills</SectionTitle>
            <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <li key={skill}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {skill}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}