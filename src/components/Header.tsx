type HeaderProps = {
  onLogoClick: () => void;
};

export function Header({ onLogoClick }: HeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-okta-navy">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <button type="button" onClick={onLogoClick} className="flex items-center gap-2">
          {/* TODO: swap for the real Okta logo mark once available */}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-okta-blue text-xs font-bold text-white">
            o
          </span>
          <span className="font-heading text-lg font-semibold text-white">okta</span>
          <span className="ml-1 text-sm text-slate-400">CS Resources Hub</span>
        </button>
      </div>
    </header>
  );
}
