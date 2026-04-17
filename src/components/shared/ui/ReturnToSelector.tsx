import { Link } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';

export function ReturnToSelector() {
  return (
    <Link
      to="/"
      className="fixed top-6 left-6 z-[9999] group flex items-center gap-2 p-3 bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-2xl shadow-2xl hover:bg-white/60 dark:hover:bg-black/60 transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <div className="bg-green-600 p-1.5 rounded-lg text-white shadow-lg shadow-green-500/20 group-hover:rotate-[-10deg] transition-transform">
        <LayoutGrid className="h-4 w-4" />
      </div>
      <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 ease-in-out whitespace-nowrap text-[10px] font-black uppercase tracking-[0.2em] text-gray-800 dark:text-white">
        Módulos
      </span>
    </Link>
  );
}
