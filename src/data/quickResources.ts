import { getResourcesByTag, type ResourceLink } from "./products";

export type QuickResourceCategory = {
  name: string;
  resources: ResourceLink[];
};

export type QuickResourceGroup = {
  id: string;
  name: string;
  resources: ResourceLink[];
  // When set, the group's detail page renders one column per category
  // instead of a single flat list (e.g. SBR vs. Phishing Resistant).
  categories?: QuickResourceCategory[];
};

const usefulScaleResources: ResourceLink[] = [
  {
    title: "Self-Service Resources by Premier Package",
    description: "Slide deck breaking down self-service resources available by Premier package tier.",
    url: "https://docs.google.com/presentation/d/1JQ8U0kXzI9FzIfvsudN1J009e7Z0lbN0Vq9A87HZ97k/edit?slide=id.g3f0a4cf0695_0_4080#slide=id.g3f0a4cf0695_0_4080",
    tags: ["Implementation Guide"],
  },
  {
    title: "TAM Request Form",
    description: "Form to request a Technical Account Manager for a customer.",
    url: "https://okta.gainsightcloud.com/v1/sites/Oktags/SurveyResponse?at=1I0025DXE6KKG8JCV1LPIQLIRWE5RXAW5F8T",
    tags: ["Implementation Guide"],
  },
  {
    title: "How to Request a Gold CSM/TAM",
    description: "Guide for requesting Gold-tier CSM or TAM coverage for a customer.",
    url: "https://docs.google.com/document/d/1byWkWpJ-xgYYPGiwD3ZQK3MlZuwKPoSu0e94CS9lob8/edit?tab=t.0#heading=h.822nuf153jcf",
    tags: ["Implementation Guide"],
  },
  {
    title: "How to Request a Silver CSM",
    description: "Guide for requesting Silver-tier CSM coverage for a customer.",
    url: "https://docs.google.com/document/d/1fBFfK7V12C2VllQkgi2-Xprxo9Rt-HfmK9yNMFQAnAo/edit?tab=t.0",
    tags: ["Implementation Guide"],
  },
];

// TODO: Resources pending — populate SBR and Phishing Resistant with real links.
const sbrPhishingResistantCategories: QuickResourceCategory[] = [
  { name: "SBR", resources: [] },
  { name: "Phishing Resistant", resources: [] },
];

export const quickResources: QuickResourceGroup[] = [
  {
    id: "office-hours",
    name: "Office Hours Links",
    resources: getResourcesByTag("Office Hours"),
  },
  {
    id: "scale-resources",
    name: "Useful Scale Resources",
    resources: usefulScaleResources,
  },
  {
    id: "slide-decks",
    name: "Slide Deck Repository",
    resources: getResourcesByTag("Slide Deck"),
  },
  {
    id: "sbr-phishing-resistant",
    name: "SBR & Phishing Resistant",
    resources: sbrPhishingResistantCategories.flatMap((c) => c.resources),
    categories: sbrPhishingResistantCategories,
  },
];
