export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="h-1.5 bg-okta-blue" />
      <div className="mx-auto max-w-7xl px-6 py-6">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          CS Resources Hub
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Everything the Scale CS team needs, organized by product.
        </p>
      </div>
    </header>
  );
}
