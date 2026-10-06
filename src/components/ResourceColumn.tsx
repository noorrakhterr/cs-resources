import { TAG_SORT_ORDER, type ResourceLink, type ResourceTag } from "../data/products";
import { ResourceCard } from "./ResourceCard";

type ResourceColumnProps = {
  title?: string;
  links: ResourceLink[];
  activeTags: ResourceTag[];
  showTags?: boolean;
};

function matchesTags(link: ResourceLink, activeTags: ResourceTag[]): boolean {
  if (activeTags.length === 0) return true;
  if (link.tags.some((tag) => activeTags.includes(tag))) return true;
  return link.subLinks?.some((sub) => matchesTags(sub, activeTags)) ?? false;
}

function primaryTagIndex(link: ResourceLink): number {
  let best = TAG_SORT_ORDER.length;
  for (const tag of link.tags) {
    const i = TAG_SORT_ORDER.indexOf(tag);
    if (i !== -1 && i < best) best = i;
  }
  return best;
}

function sortByCategory(links: ResourceLink[]): ResourceLink[] {
  return [...links].sort((a, b) => primaryTagIndex(a) - primaryTagIndex(b));
}

export function ResourceColumn({ title, links, activeTags, showTags = true }: ResourceColumnProps) {
  const filtered = sortByCategory(links.filter((link) => matchesTags(link, activeTags)));

  return (
    <div className="flex-1">
      {title && (
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </h3>
      )}
      {links.length === 0 ? (
        <p className="text-sm italic text-slate-400">Resources coming soon.</p>
      ) : filtered.length === 0 ? (
        <p className="text-sm italic text-slate-400">No resources match the selected filters.</p>
      ) : (
        <div className="space-y-2">
          {filtered.map((link) => (
            <ResourceCard key={link.title} {...link} showTags={showTags} />
          ))}
        </div>
      )}
    </div>
  );
}
