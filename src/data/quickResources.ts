import { getResourcesByTag, type ResourceLink } from "./products";

export type QuickResourceGroup = {
  id: string;
  name: string;
  resources: ResourceLink[];
};

// TODO: Office Hours Links and Useful Scale Resources are empty placeholders — add resources when available.
export const quickResources: QuickResourceGroup[] = [
  {
    id: "office-hours",
    name: "Office Hours Links",
    resources: [],
  },
  {
    id: "scale-resources",
    name: "Useful Scale Resources",
    resources: [],
  },
  {
    id: "slide-decks",
    name: "Slide Deck Repository",
    resources: getResourcesByTag("Slide Deck"),
  },
];
