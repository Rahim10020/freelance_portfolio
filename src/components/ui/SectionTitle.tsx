interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`section-title uppercase text-right text-[var(--c-text-primary)] mb-8 lg:mb-12 sticky top-0 z-20 -mx-6 px-6 py-5 backdrop-blur bg-[var(--c-bg-sticky)] md:bg-transparent lg:relative lg:top-auto lg:mx-0 lg:px-0 lg:py-0 lg:backdrop-blur-none ${className}`}
    >
      {children}
    </h2>
  );
}
