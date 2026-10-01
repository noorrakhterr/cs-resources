import type { ResourceLink } from "../data/products";

type SlideDeckGridProps = {
  resources: ResourceLink[];
};

export function SlideDeckGrid({ resources }: SlideDeckGridProps) {
  if (resources.length === 0) {
    return <p className="text-sm italic text-slate-400">Resources coming soon.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => (
        <a
          key={resource.title}
          href={resource.url}
          target="_blank"
          rel="noreferrer"
          className="flex h-full w-full flex-col items-start gap-1 rounded-xl border border-slate-200 bg-white px-5 py-6 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-okta-blue/40 hover:shadow-md"
        >
          <span className="text-lg font-semibold text-slate-900">{resource.productName}</span>
        </a>
      ))}
    </div>
  );
}
