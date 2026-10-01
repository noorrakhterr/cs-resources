import { useState } from "react";
import { TAG_COLORS, type ResourceLink } from "../data/products";

export function ResourceCard({ title, description, url, tags, subLinks, productName }: ResourceLink) {
  const [expanded, setExpanded] = useState(false);
  const isPlaceholder = url === "#";
  const hasSubLinks = !!subLinks?.length;

  return (
    <div>
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
        {(tags.length > 0 || productName) && (
          <div className="mt-2 flex flex-wrap items-center gap-1">
            {productName && (
              <span className="rounded-full bg-okta-blue/10 px-2 py-0.5 text-[10px] font-medium text-okta-blue">
                {productName}
              </span>
            )}
            {tags.map((tag) => (
              <span
                key={tag}
                className={"rounded-full px-2 py-0.5 text-[10px] font-medium " + TAG_COLORS[tag]}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </a>

      {hasSubLinks && (
        <div className="mt-1">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 px-1 py-1 text-xs font-medium text-okta-blue hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={"h-3 w-3 transition-transform " + (expanded ? "rotate-90" : "")}
            >
              <path d="M9 18 15 12 9 6" />
            </svg>
            {expanded ? "Hide" : "Show"} {subLinks!.length} related link{subLinks!.length > 1 ? "s" : ""}
          </button>

          {expanded && (
            <div className="ml-4 mt-1 space-y-2 border-l border-slate-200 pl-3">
              {subLinks!.map((sub) => (
                <ResourceCard key={sub.title} {...sub} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
