import type { ResourceLink, ResourceTag } from "../data/products";
import { ResourceCard } from "./ResourceCard";

type ResourceColumnProps = {
  title: string;
  links: ResourceLink[];
  activeTags: ResourceTag[];
};

function matchesTags(link: ResourceLink, activeTags: ResourceTag[]): boolean {
  if (activeTags.length === 0) return true;
  if (link.tags.some((tag) => activeTags.includes(tag))) return true;
  return link.subLinks?.some((sub) => matchesTags(sub, activeTags)) ?? false;
}

export function ResourceColumn({ title, links, activeTags }: ResourceColumnProps) {
  const filtered = links.filter((link) => matchesTags(link, activeTags));

  return (
    <div className="flex-1">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h3>
      {links.length === 0 ? (
        <p className="text-sm italic text-slate-400">Resources coming soon.</p>
      ) : filtered.length === 0 ? (
        <p className="text-sm italic text-slate-400">No resources match the selected filters.</p>
      ) : (
        <div className="space-y-2">
          {filtered.map((link) => (
            <ResourceCard key={link.title} {...link} />
          ))}
        </div>
      )}
    </div>
  );
}
