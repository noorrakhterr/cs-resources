import type { QuickResourceGroup } from "../data/quickResources";

type QuickResourceCardProps = {
  group: QuickResourceGroup;
  onSelect: (id: string) => void;
};

export function QuickResourceCard({ group, onSelect }: QuickResourceCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(group.id)}
      className="flex h-full w-full flex-col items-start gap-2 rounded-xl border border-slate-200 bg-white px-5 py-6 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-okta-blue/40 hover:shadow-md"
    >
      <span className="font-heading text-lg font-semibold text-slate-900">{group.name}</span>
      {group.resources.length === 0 && (
        <span className="text-xs text-slate-400">Resources coming soon</span>
      )}
    </button>
  );
}
