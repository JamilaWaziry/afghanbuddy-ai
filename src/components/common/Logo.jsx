const Logo = ({ dark = false }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 shadow-lg shadow-cyan-500/20">
        <svg viewBox="0 0 100 100" className="h-8 w-8" fill="none">
          <path d="M15 75 L45 30 L60 50 L75 35 L90 75 Z" fill="white" />

          <circle cx="72" cy="25" r="5" fill="#67E8F9" />
        </svg>
      </div>

      <div>
        <h1
          className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
            dark ? "text-slate-900" : "text-white"
          }`}
        >
          AfghanBuddy
        </h1>

        <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-300">
          AI TRAVEL
        </p>
      </div>
    </div>
  );
};

export default Logo;
