import type { Source } from "../data/sources";

type SourcesStripProps = {
  sources: Source[];
};

export function SourcesStrip({ sources }: SourcesStripProps) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Where we get our resources
        </p>
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
    </footer>
  );
}
