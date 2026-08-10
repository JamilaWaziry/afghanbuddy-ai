const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 md:text-sm">
        AfghanBuddy AI
      </p>

      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>

      {subtitle && (
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
