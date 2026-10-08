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
  // instead of a single flat list (e.g. SBR vs. Phishing Resistance).
  categories?: QuickResourceCategory[];
  // Resources shown above the categories, not filed under either one.
  standaloneResources?: ResourceLink[];
  // Product ids with a "See <product>" tab linking to that product's full page.
  relatedProductIds?: string[];
};

const successHubDemos: ResourceLink[] = [
  {
    title: "New Success Hub Demo",
    description: "Demo video of the new Success Hub experience.",
    url: "https://www.youtube.com/watch?v=emezaZWS6X8&t=1s",
    tags: ["Demo"],
  },
  {
    title: "Success Hub Security Demo",
    description: "Demo video of Success Hub's security capabilities.",
    url: "https://drive.google.com/file/d/1j8AxDF5DjCsp3-5dudgTlgRZ5iOIhSsE/view?resourcekey",
    tags: ["Demo"],
  },
];

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
  ...successHubDemos,
];

const sbrCategoryResources: ResourceLink[] = [
  {
    title: "SBR Playbook",
    description: "Internal playbook for running Security Business Reviews.",
    url: "https://docs.google.com/presentation/d/1BEr00YXrPp3LAIX30BKGCQUCnUWPrLcqKvgo2BxWbUs/edit?slide=id.g3f5717515d0_0_864#slide=id.g3f5717515d0_0_864",
    tags: ["Enablement"],
  },
  {
    title: "SBR Guide for AE and SEs",
    description: "Internal guide for Account Executives and Solutions Engineers on SBRs.",
    url: "https://docs.google.com/presentation/d/1kqst-mk1HjHqf-_TJtL9PtFc4XESUvsJ_uDXBX81rAk/edit?slide=id.p#slide=id.p",
    tags: ["Enablement"],
  },
  {
    title: "SBR Training",
    description: "Internal training course on running Security Business Reviews.",
    url: "https://oktau.edcast.com/insights/ECL-56eb7220-e02f-42ee-834e-a21d59c513c0",
    tags: ["Learning & Training"],
  },
  {
    title: "SBR Assist Gem",
    description: "Internal AI assistant for drafting and supporting SBRs.",
    url: "https://vertexaisearch.cloud.google.com/home/cid/cd50f96b-072d-4a0a-9ac3-8699ac11797f/r/agent/7944332289853326822/session/-",
    tags: ["AI Tools"],
  },
  {
    title: "SBR Quality Checker Agent",
    description: "Internal AI agent for reviewing SBR quality before delivery.",
    url: "https://vertexaisearch.cloud.google.com/home/cid/cd50f96b-072d-4a0a-9ac3-8699ac11797f/r/agent/9576353426048634315/session/-",
    tags: ["AI Tools"],
  },
];

const phishingResistanceInternalResources: ResourceLink[] = [
  {
    title: "Phishing Resistance Field Guide",
    description: "Internal field guide for positioning phishing-resistant authentication.",
    url: "https://okta.highspot.com/items/6ab6c4eea4f69a5c3c55738c#19",
    tags: ["Implementation Guide"],
  },
  {
    title: "10 Step Phishing Resistance Success Factors",
    description: "Internal guide to the 10 success factors for phishing resistance.",
    url: "https://okta.highspot.com/items/6aa975a6d4cde0ba48bbdaa0#1",
    tags: ["Implementation Guide"],
  },
];

const phishingResistanceExternalResources: ResourceLink[] = [
  {
    title: "10 Step Phishing Resistance Success Factors (Support Center)",
    description: "Customer-facing article on the 10 success factors for phishing resistance.",
    url: "https://support.okta.com/help/s/article/10-step-phishing-resistance-success-factors?language=en_US",
    tags: ["Documentation"],
  },
  {
    title: "Phishing Resistant Snapshot",
    description: "Customer-facing snapshot summarizing phishing-resistant authentication.",
    url: "https://app.matik.io/create/templates/10809/slides/732387",
    tags: ["Slide Deck"],
  },
];

const sbrInternalResources: ResourceLink[] = sbrCategoryResources;
const sbrExternalResources: ResourceLink[] = [];

const sbrPhishingResistanceCategories: QuickResourceCategory[] = [
  { name: "SBR — Internal", resources: sbrInternalResources },
  { name: "SBR — External", resources: sbrExternalResources },
  { name: "Phishing Resistance — Internal", resources: phishingResistanceInternalResources },
  { name: "Phishing Resistance — External", resources: phishingResistanceExternalResources },
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
    id: "sbr-phishing-resistance",
    name: "SBR & Phishing Resistance",
    resources: [
      ...successHubDemos,
      ...sbrCategoryResources,
      ...phishingResistanceInternalResources,
      ...phishingResistanceExternalResources,
    ],
    categories: sbrPhishingResistanceCategories,
    standaloneResources: successHubDemos,
    relatedProductIds: ["fastpass", "oie-upgrade"],
  },
];
