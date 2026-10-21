import type { DirectoryEntry } from "../data/directory";
import { DirectoryCard } from "./DirectoryCard";

type DirectoryGridProps = {
  title: string;
  entries: DirectoryEntry[];
  onSelect: (id: string) => void;
};

export function DirectoryGrid({ title, entries, onSelect }: DirectoryGridProps) {
  return (
    <div>
      <h2 className="mb-4 font-heading text-xl font-semibold text-okta-navy">{title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <DirectoryCard key={entry.id} entry={entry} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
