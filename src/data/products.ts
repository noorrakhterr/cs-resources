export type ResourceLink = {
  title: string;
  description?: string;
  url: string;
};

export type Product = {
  id: string;
  name: string;
  customerFacing: ResourceLink[];
  internal: ResourceLink[];
};

// TODO: Replace placeholder titles/descriptions and "#" urls with real links.
export const products: Product[] = [
  {
    id: "wic",
    name: "Workforce Identity Cloud",
    customerFacing: [
      { title: "WIC Product Documentation", description: "Official setup and admin docs", url: "#" },
      { title: "WIC Release Notes", description: "Latest feature releases", url: "#" },
      { title: "Okta Help Center — WIC", description: "Customer-facing support articles", url: "#" },
    ],
    internal: [
      { title: "WIC Sales Deck", description: "Latest pitch deck", url: "#" },
      { title: "WIC Battlecards", description: "Competitive positioning", url: "#" },
      { title: "WIC CS Playbook", description: "Onboarding & renewal guidance", url: "#" },
    ],
  },
  {
    id: "cic",
    name: "Customer Identity Cloud (Auth0)",
    customerFacing: [
      { title: "Auth0 Docs", description: "Developer & admin documentation", url: "#" },
      { title: "Auth0 Quickstarts", description: "Implementation guides by platform", url: "#" },
    ],
    internal: [
      { title: "CIC Sales Deck", description: "Latest pitch deck", url: "#" },
      { title: "CIC CS Playbook", description: "Onboarding & renewal guidance", url: "#" },
    ],
  },
  {
    id: "governance",
    name: "Identity Governance",
    customerFacing: [
      { title: "Governance Product Documentation", description: "Setup and admin docs", url: "#" },
      { title: "Governance Release Notes", url: "#" },
    ],
    internal: [
      { title: "Governance Sales Deck", url: "#" },
      { title: "Governance CS Playbook", url: "#" },
    ],
  },
  {
    id: "pam",
    name: "Privileged Access",
    customerFacing: [
      { title: "Privileged Access Documentation", url: "#" },
      { title: "Okta Help Center — Privileged Access", url: "#" },
    ],
    internal: [
      { title: "Privileged Access Sales Deck", url: "#" },
      { title: "Privileged Access CS Playbook", url: "#" },
    ],
  },
  {
    id: "itp",
    name: "Identity Threat Protection",
    customerFacing: [
      { title: "ITP Product Documentation", url: "#" },
      { title: "ITP Release Notes", url: "#" },
    ],
    internal: [
      { title: "ITP Sales Deck", url: "#" },
      { title: "ITP CS Playbook", url: "#" },
    ],
  },
  {
    id: "general",
    name: "Cross-Product / General",
    customerFacing: [
      { title: "Okta Help Center", description: "General customer support hub", url: "#" },
      { title: "Okta Trust & Status Page", url: "#" },
    ],
    internal: [
      { title: "CS Onboarding Guide", url: "#" },
      { title: "Renewal & Escalation Process", url: "#" },
    ],
  },
];
