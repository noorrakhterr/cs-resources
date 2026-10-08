import type { QuickResourceGroup } from "../data/quickResources";
import { QuickResourceCard } from "./QuickResourceCard";

type QuickResourceGridProps = {
  groups: QuickResourceGroup[];
  onSelect: (id: string) => void;
};

export function QuickResourceGrid({ groups, onSelect }: QuickResourceGridProps) {
  return (
    <div>
      <h2 className="mb-4 font-heading text-xl font-semibold text-okta-navy">Quick Resources</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <QuickResourceCard key={group.id} group={group} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
