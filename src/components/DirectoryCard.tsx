import type { DirectoryEntry } from "../data/directory";

type DirectoryCardProps = {
  entry: DirectoryEntry;
  onSelect: (id: string) => void;
};

export function DirectoryCard({ entry, onSelect }: DirectoryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(entry.id)}
      className="flex h-full min-h-28 w-full flex-col items-start justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-6 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-okta-blue/40 hover:shadow-md"
    >
      <span className="text-lg font-semibold text-slate-900">{entry.name}</span>
      {entry.slackChannel && (
        <span className="text-xs text-slate-400">{entry.slackChannel.label}</span>
      )}
    </button>
  );
}
