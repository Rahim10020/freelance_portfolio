import Link from 'next/link';

interface ArchiveLinkProps {
    href: string;
    text: string;
    isExternal?: boolean;
}

export default function ArchiveLink({ href, text, isExternal = false }: ArchiveLinkProps) {
    const content = (
        <span className="inline-flex items-center font-medium leading-tight text-slate-200 dark:text-slate-200 light:text-slate-900 group">
            <span className="border-b border-transparent group-hover:border-teal-300 dark:group-hover:border-teal-300 light:group-hover:border-teal-700 transition-all duration-300">
                {text}
            </span>
            <svg
                className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="currentColor"
                    d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                />
                <path
                    stroke="currentColor"
                    d="M1.75 8H11"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        </span>
    );

    if (isExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-base font-semibold leading-tight text-slate-200 dark:text-slate-200 light:text-slate-900 hover:text-teal-300 dark:hover:text-teal-300 light:hover:text-teal-700 focus-visible:text-teal-300 dark:focus-visible:text-teal-300 light:focus-visible:text-teal-700 transition-colors"
            >
                {content}
            </a>
        );
    }

    return (
        <Link
            href={href}
            className="inline-flex items-center text-base font-semibold leading-tight text-slate-200 dark:text-slate-200 light:text-slate-900 hover:text-teal-300 dark:hover:text-teal-300 light:hover:text-teal-700 focus-visible:text-teal-300 dark:focus-visible:text-teal-300 light:focus-visible:text-teal-700 transition-colors"
        >
            {content}
        </Link>
    );
}