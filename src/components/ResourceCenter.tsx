import type { Source } from "../data/sources";

type ResourceCenterProps = {
  sources: Source[];
};

export function ResourceCenter({ sources }: ResourceCenterProps) {
  return (
    <div>
      <h2 className="mb-3 font-heading text-xl font-semibold text-slate-900">Resource Center</h2>
      <div className="flex flex-wrap gap-2">
        {sources.map((source) => (
          <a
            key={source.name}
            href={source.url}
            target={source.url === "#" ? undefined : "_blank"}
            rel={source.url === "#" ? undefined : "noreferrer"}
            onClick={(e) => {
              if (source.url === "#") e.preventDefault();
            }}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-okta-blue/40 hover:bg-okta-blue/5 hover:text-okta-blue"
          >
            {source.name}
          </a>
        ))}
      </div>
    </div>
  );
}
