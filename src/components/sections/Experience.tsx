'use client';

import { experiences } from '@/lib/data';
import SectionTitle from '../ui/SectionTitle';
import ExperienceCard from '../ui/ExperienceCard';
import ArchiveLink from '../ui/ArchiveLink';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Experience() {
    const { t } = useLanguage();

    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>{t.experience.title}</SectionTitle>
            <div>
                <ol className="group/list">
                    {experiences.map((experience) => (
                        <ExperienceCard key={experience.id} experience={experience} />
                    ))}
                </ol>

                <div className="mt-12">
                    <ArchiveLink
                        href="/resume.pdf"
                        text={t.experience.viewResume}
                        isExternal={true}
                    />
                </div>
            </div>
        </section>
    );
}