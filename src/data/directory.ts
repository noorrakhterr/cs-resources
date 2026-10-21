import type { ResourceLink } from "./products";

export type InfoColumn = {
  heading: string;
  body?: string;
  links?: ResourceLink[];
};

export type DirectoryEntry = {
  id: string;
  name: string;
  slackChannel?: { label: string; url?: string };
  sourceLink?: ResourceLink;
  columns: InfoColumn[];
};
