import type { DirectoryEntry } from "../data/directory";
import type { ResourceLink } from "../data/products";

function DirectoryLink({ title, url }: ResourceLink) {
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
        "flex items-center gap-1 text-sm " +
        (isPlaceholder
          ? "cursor-default italic text-white/50"
          : "text-white underline decoration-white/40 underline-offset-2 hover:decoration-white")
      }
    >
      {title}
      {isPlaceholder ? (
        <span className="text-xs">(coming soon)</span>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5 shrink-0"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      )}
    </a>
  );
}

type DirectoryDetailProps = {
  entry: DirectoryEntry;
};

export function DirectoryDetail({ entry }: DirectoryDetailProps) {
  return (
    <div>
      {(entry.sourceLink || entry.slackChannel) && (
        <div className="mb-6 flex flex-wrap items-center gap-3">
          {entry.sourceLink && (
            <a
              href={entry.sourceLink.url}
              target={entry.sourceLink.url === "#" ? undefined : "_blank"}
              rel={entry.sourceLink.url === "#" ? undefined : "noreferrer"}
              className="text-sm font-medium text-okta-blue underline underline-offset-2 hover:text-okta-blue-dark"
            >
              {entry.sourceLink.title}
            </a>
          )}
          {entry.slackChannel && (
            <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-medium text-lime-700">
              Slack:{" "}
              {entry.slackChannel.url ? (
                <a href={entry.slackChannel.url} target="_blank" rel="noreferrer" className="underline">
                  {entry.slackChannel.label}
                </a>
              ) : (
                entry.slackChannel.label
              )}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {entry.columns.map((column) => {
          const isEmpty = !column.body && (!column.links || column.links.length === 0);
          return (
            <div
              key={column.heading}
              className="flex-1 basis-64 rounded-xl bg-okta-blue p-5 text-white"
            >
              <h3 className="mb-3 text-base font-semibold">{column.heading}</h3>
              {isEmpty ? (
                <p className="text-sm italic text-white/60">Coming soon.</p>
              ) : (
                <div className="space-y-3">
                  {column.body && (
                    <p className="whitespace-pre-line text-sm leading-relaxed text-white/90">
                      {column.body}
                    </p>
                  )}
                  {column.links && column.links.length > 0 && (
                    <div className="flex flex-col gap-2">
                      {column.links.map((link) => (
                        <DirectoryLink key={link.title} {...link} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
