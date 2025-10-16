import SectionTitle from '../ui/SectionTitle';

export default function About() {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>About</SectionTitle>
            <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                    Back in 2019, I decided to dive into the world of software development and discovered
                    my passion for creating digital experiences. What started as curiosity quickly evolved
                    into a professional career building modern applications.
                </p>
                <p>
                    My main focus these days is building accessible, user-centered products for a variety
                    of clients. I enjoy working across the full stack—from designing intuitive interfaces
                    to implementing robust backend systems. I specialize in creating applications that
                    not only look great but also perform exceptionally well.
                </p>
                <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to
                    open-source projects, or sharing knowledge with the developer community.
                </p>
            </div>
        </section>
    );
}