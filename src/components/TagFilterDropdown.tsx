import { useEffect, useRef, useState } from "react";
import { RESOURCE_TAGS, type ResourceTag } from "../data/products";

type TagFilterDropdownProps = {
  activeTags: ResourceTag[];
  onToggle: (tag: ResourceTag) => void;
  onClear: () => void;
};

export function TagFilterDropdown({ activeTags, onToggle, onClear }: TagFilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={
          "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors " +
          (activeTags.length > 0
            ? "border-okta-blue bg-okta-blue text-white"
            : "border-slate-200 bg-white text-slate-600 hover:border-okta-blue/40 hover:text-okta-blue")
        }
      >
        Filter by type
        {activeTags.length > 0 && (
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-semibold text-okta-blue">
            {activeTags.length}
          </span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={"h-4 w-4 transition-transform " + (open ? "rotate-180" : "")}
        >
          <path d="M6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-20 mt-2 w-64 rounded-lg border border-slate-200 bg-white p-3 shadow-lg">
          <div className="space-y-1">
            {RESOURCE_TAGS.map((tag) => {
              const checked = activeTags.includes(tag);
              return (
                <label
                  key={tag}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggle(tag)}
                    className="h-4 w-4 rounded border-slate-300 text-okta-blue focus:ring-okta-blue"
                  />
                  {tag}
                </label>
              );
            })}
          </div>
          {activeTags.length > 0 && (
            <button
              type="button"
              onClick={onClear}
              className="mt-2 w-full rounded-md px-2 py-1.5 text-left text-xs font-medium text-slate-400 hover:bg-slate-50 hover:text-slate-600"
            >
              Clear all
            </button>
          )}
        </div>
      )}
    </div>
  );
}
