import { Github, Discord } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} MyPoké. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
        <div className="flex items-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50">
            <Discord className="h-4 w-4" /> Join Support
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
