type SectionHeaderProps = {
  title: string;
  onBack: () => void;
  backLabel?: string;
};

export function SectionHeader({ title, onBack, backLabel = "All products" }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-okta-blue transition-colors hover:bg-okta-blue/5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M15 18 9 12 15 6" />
        </svg>
        {backLabel}
      </button>
      <h2 className="font-heading text-2xl font-semibold text-slate-900">{title}</h2>
    </div>
  );
}
