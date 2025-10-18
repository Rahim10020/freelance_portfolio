interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

export default function SectionTitle({ children, className = '' }: SectionTitleProps) {
    return (
        <h2
            className={`text-sm font-bold uppercase tracking-widest text-slate-200 dark:text-slate-200 light:text-slate-900 mb-8 lg:mb-12 sticky top-0 z-20 -mx-6 px-6 py-5 backdrop-blur bg-slate-900/75 dark:bg-slate-900/75 light:bg-[#faf8f5]/75 lg:relative lg:top-auto lg:mx-0 lg:px-0 lg:py-0 lg:backdrop-blur-none lg:bg-transparent ${className}`}
        >
            {children}
        </h2>
    );
}