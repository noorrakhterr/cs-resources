const LAST_UPDATED = "2026-10-08";

type HeaderProps = {
  onLogoClick: () => void;
};

export function Header({ onLogoClick }: HeaderProps) {
  return (
    <header className="bg-okta-navy">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <button type="button" onClick={onLogoClick}>
          <span className="font-heading text-2xl font-semibold text-white">CS Resources</span>
        </button>
        <span className="text-sm text-slate-400">Date updated: {LAST_UPDATED}</span>
      </div>
    </header>
  );
}
