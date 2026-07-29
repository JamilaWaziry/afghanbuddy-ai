const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 shadow-lg">
        {/* Mountain */}

        <svg viewBox="0 0 100 100" className="h-8 w-8" fill="none">
          <path d="M15 75 L45 30 L60 50 L75 35 L90 75 Z" fill="white" />

          <circle cx="72" cy="25" r="5" fill="#6EE7B7" />
        </svg>
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight text-white">
          AfghanBuddy
        </h1>

        <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-300">
          AI TRAVEL
        </p>
      </div>
    </div>
  );
};

export default Logo;
