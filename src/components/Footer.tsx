import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>© {currentYear} Rohit Kumar . Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>and React</span>
          </div>

          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
