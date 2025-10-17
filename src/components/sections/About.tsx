import SectionTitle from '../ui/SectionTitle';
import Skills from './Skills';

export default function About() {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>About</SectionTitle>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
                <p>
                    Since the beginning of my journey as a freelance designer over a decade ago,
                    I've had the opportunity to work remotely with agencies, consult for startups,
                    and collaborate with talented people to create digital products for both business and everyday users.
                </p>
                <p>
                    My main focus these days is building accessible, user-centered products for a variety
                    of clients. I enjoy working across the full stack—from designing intuitive interfaces
                    to implementing robust backend systems. I specialize in creating applications that
                    not only look great but also perform exceptionally well.
                </p>

            </div>
            <Skills />
        </section>
    );
}