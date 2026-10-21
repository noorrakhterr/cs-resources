import type { QuickResourceGroup } from "../data/quickResources";

type QuickResourceCardProps = {
  group: QuickResourceGroup;
  onSelect: (id: string) => void;
  hasContent?: boolean;
};

export function QuickResourceCard({ group, onSelect, hasContent }: QuickResourceCardProps) {
  const isEmpty = hasContent === undefined ? group.resources.length === 0 : !hasContent;

  return (
    <button
      type="button"
      onClick={() => onSelect(group.id)}
      className="flex h-full min-h-28 w-full flex-col items-start justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-6 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-okta-blue/40 hover:shadow-md"
    >
      <span className="text-lg font-semibold text-slate-900">{group.name}</span>
      {isEmpty && <span className="text-xs text-slate-400">Resources coming soon</span>}
    </button>
  );
}
