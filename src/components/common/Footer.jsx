import { Mountain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-600 p-3">
                <Mountain className="text-white" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">AfghanBuddy AI</h2>

                <p className="text-sm text-slate-400">Explore Smarter</p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-slate-400">
              AI-powered travel platform for discovering Afghanistan's natural
              beauty, history and culture.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Explore</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Destinations</li>

              <li>Trip Planner</li>

              <li>AI Assistant</li>

              <li>Favorites</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Categories</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Nature</li>

              <li>History</li>

              <li>Adventure</li>

              <li>Culture</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Built With</h3>

            <ul className="space-y-3 text-slate-400">
              <li>React</li>

              <li>Tailwind CSS</li>

              <li>Supabase</li>

              <li>OpenRouter AI</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">
          © 2026 AfghanBuddy AI • Capstone Project
        </div>
      </div>
    </footer>
  );
}
