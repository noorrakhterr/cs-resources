export function NexusGeminiBanner() {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-okta-blue/20 bg-okta-blue/5 px-5 py-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-okta-blue/10 text-okta-blue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5" />
          <path d="M12 17h.01" />
        </svg>
      </span>
      <p className="text-sm text-slate-700">
        <span className="font-medium text-slate-900">Need something specific?</span>{" "}
        Ask Nexus or Gemini.
      </p>
    </div>
  );
}
