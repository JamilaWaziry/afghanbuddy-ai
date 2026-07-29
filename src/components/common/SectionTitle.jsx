const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
        AfghanBuddy AI
      </p>

      <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">{title}</h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-8 text-slate-600">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
