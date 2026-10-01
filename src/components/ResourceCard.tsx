import type { ResourceLink } from "../data/products";

export function ResourceCard({ title, description, url }: ResourceLink) {
  const isPlaceholder = url === "#";

  return (
    <a
      href={url}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noreferrer"}
      aria-disabled={isPlaceholder}
      onClick={(e) => {
        if (isPlaceholder) e.preventDefault();
      }}
      className={
        "block rounded-lg border px-4 py-3 transition-colors " +
        (isPlaceholder
          ? "cursor-default border-slate-200 bg-slate-50"
          : "border-slate-200 bg-white hover:border-okta-blue/40 hover:bg-okta-blue/5")
      }
    >
      <div className="flex items-start justify-between gap-2">
        <span className={"text-sm font-medium " + (isPlaceholder ? "text-slate-400" : "text-slate-900")}>
          {title}
        </span>
        {!isPlaceholder && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
          >
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </svg>
        )}
      </div>
      {description && (
        <p className={"mt-1 text-xs " + (isPlaceholder ? "text-slate-400" : "text-slate-500")}>
          {description}
        </p>
      )}
      {isPlaceholder && (
        <p className="mt-1 text-xs italic text-slate-400">Link coming soon</p>
      )}
    </a>
  );
}
