import type { ResourceLink } from "../data/products";
import { ResourceCard } from "./ResourceCard";

type ResourceColumnProps = {
  title: string;
  links: ResourceLink[];
};

export function ResourceColumn({ title, links }: ResourceColumnProps) {
  return (
    <div className="flex-1">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h3>
      <div className="space-y-2">
        {links.map((link) => (
          <ResourceCard key={link.title} {...link} />
        ))}
      </div>
    </div>
  );
}
