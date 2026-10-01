import { RESOURCE_TAGS, type ResourceTag } from "../data/products";

type TagFilterProps = {
  activeTags: ResourceTag[];
  onToggle: (tag: ResourceTag) => void;
  onClear: () => void;
};

export function TagFilter({ activeTags, onToggle, onClear }: TagFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        Filter by type
      </span>
      {RESOURCE_TAGS.map((tag) => {
        const isActive = activeTags.includes(tag);
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onToggle(tag)}
            className={
              "rounded-full border px-3 py-1 text-xs font-medium transition-colors " +
              (isActive
                ? "border-okta-blue bg-okta-blue text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-okta-blue/40 hover:text-okta-blue")
            }
          >
            {tag}
          </button>
        );
      })}
      {activeTags.length > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="text-xs font-medium text-slate-400 underline-offset-2 hover:text-slate-600 hover:underline"
        >
          Clear
        </button>
      )}
    </div>
  );
}
