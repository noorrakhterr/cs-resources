type HeaderProps = {
  onLogoClick: () => void;
};

export function Header({ onLogoClick }: HeaderProps) {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-6">
        <button type="button" onClick={onLogoClick}>
          <span className="font-heading text-2xl font-semibold text-slate-900">CS Resources</span>
        </button>
      </div>
    </header>
  );
}
