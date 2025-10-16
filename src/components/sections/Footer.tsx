export default function Footer() {
    return (
        <footer className="mt-24 pb-16">
            <p className="text-sm text-slate-500">
                Built with{' '}
                <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-400 hover:text-teal-300 transition-colors"
                >
                    Next.js
                </a>
                {' '}and{' '}
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-400 hover:text-teal-300 transition-colors"
                >
                    Tailwind CSS
                </a>
                . Inspired by{' '}
                <a
                    href="https://brittanychiang.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-400 hover:text-teal-300 transition-colors"
                >
                    Brittany Chiang
                </a>
                .
            </p>
        </footer>
    );
}