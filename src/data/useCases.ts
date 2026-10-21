import type { DirectoryEntry } from "./directory";

export const useCases: DirectoryEntry[] = [
  {
    id: "pubsec-fedramp",
    name: "US Public Sector Environment & FedRAMP",
    columns: [
      {
        heading: "Overview",
        body: 'FedRAMP is the "Federal Risk and Authorization Management Program" - an attempt to standardize the compliance model for the Civilian government agencies.',
      },
      {
        heading: "Use Cases",
        body: "Okta for Government Moderate: OK5/OK10 Okta Cells\n\nOkta for Government High: OG1 Okta Cells\n\nOkta for US Military: OM1 Okta Cells",
      },
      {
        heading: "Resources",
        links: [
          {
            title: "US PubSec Environment or Data User Access Request Procedures",
            url: "https://oktainc.atlassian.net/wiki/spaces/security/pages/700810603/U.S.+Public+Sector+Environment+or+Data+User+Access+Request+Procedures",
            tags: [],
          },
          {
            title: "Access & Use SubManager/Tableau",
            url: "https://docs.google.com/document/d/1_4QS2IjRRwb51ZBB5dDV6PPUc6fqt3u-yxUF-ae9M0Q/edit?tab=t.0",
            tags: [],
          },
          {
            title: "Data Sharing Guidelines",
            url: "https://drive.google.com/file/d/1D_f_gBpmvT5nfgnS84RGi1o40TWTzo_m/view",
            tags: [],
          },
        ],
      },
    ],
  },
  {
    id: "red-account",
    name: "Red Account",
    sourceLink: {
      title: "See Confluence page here (updated Jan 2026)",
      url: "https://oktainc.atlassian.net/wiki/spaces/CSupport/pages/669616655/Customer+First+-+Red+Account+Program",
      tags: [],
    },
    columns: [
      {
        heading: "When to Use",
        body: "If you run into an issue with a customer (churn, product, not satisfied, break-fix) → confirm process with your scenario with management.",
      },
      {
        heading: "Resources",
        links: [
          {
            title: "Commercial RA Dashboard",
            url: "https://okta.lightning.force.com/lightning/r/Report/00O4z000006XoJ7EAK/view?queryScope=userFolders",
            tags: [],
          },
          {
            title: "Support Escalations VS Red Account which process to use (11m video)",
            url: "https://drive.google.com/file/d/1wOvRkUtKnfDqZp273fJPZhgXWm6TrfVI/view",
            tags: [],
          },
          {
            title: "Red Account Process",
            url: "https://drive.google.com/file/d/1P1d8og9cDxrXtymtU-MF3A3UDe-4-OMV/view",
            tags: [],
          },
          {
            title: "Regional Manager - Red Account Approval Checklist",
            url: "https://drive.google.com/file/d/1P1d8og9cDxrXtymtU-MF3A3UDe-4-OMV/view",
            tags: [],
          },
        ],
      },
    ],
  },
  {
    id: "internal-support-ticket",
    name: "Internal Support Ticket",
    columns: [
      {
        heading: "How To",
        body: "1. Salesforce\n2. Search account\n3. Click arrow next to \"I need help\"\n4. Click \"Customer Support Needed\"\n5. Click \"Internal Case\"\n6. Click \"next\"\n7. Follow steps",
      },
    ],
  },
  {
    id: "external-support-ticket",
    name: "External Support Ticket",
    slackChannel: {
      label: "#escalate-to-support",
      url: "https://okta.enterprise.slack.com/archives/C063M2S3LAF",
    },
    columns: [
      {
        heading: "How To",
        body: "Reference customer's case support ticket number within Salesforce.\n\nContact Support Engineer listed in ticket and reach out via Slack or Email.",
      },
    ],
  },
  {
    id: "reporting",
    name: "Reporting",
    columns: [
      {
        heading: "Resources",
        body: "Please see…",
        links: [
          {
            title: "OIE: Okta Docs: Reports",
            url: "https://help.okta.com/oie/en-us/content/topics/reports/report-types.htm",
            tags: [],
          },
          {
            title: "Classic: Okta Docs: Reports",
            url: "https://help.okta.com/en-us/content/topics/reports/report-types.htm",
            tags: [],
          },
        ],
      },
    ],
  },
  {
    id: "dedupe",
    name: "Dedupe",
    columns: [
      {
        heading: "Main Resource",
        links: [
          {
            title: "FAQ - User Count Deduplication",
            url: "https://docs.google.com/document/d/1nqWr2i2dXKSp_UYutj93q3tzfQHqt0V9vH5QTxDbnhU/edit?tab=t.0#heading=h.j9mmhecr33jt",
            tags: [],
          },
        ],
      },
      {
        heading: "Important",
        body: "Please note that deduplication is not a right but rather a privilege. Deduplication is only granted to certain customers that meet specific criteria. Subscription Compliance (subscriptioncompliance@okta.com) is the gatekeeper for all deduplication requests and approvals. Before deduplication language is included in an Order Form, Subscription Compliance must review and approve the deduplication request.",
      },
    ],
  },
  {
    id: "deal-support-ticket",
    name: "Deal Support Ticket",
    columns: [{ heading: "Resources" }],
  },
  {
    id: "specific-product-questions",
    name: "Specific Product Questions",
    columns: [
      {
        heading: "Slack Channels",
        links: [
          { title: "#okta-workforceidentity-roadmap", url: "#", tags: [] },
          { title: "#cf-no-stupid-questions", url: "#", tags: [] },
        ],
      },
    ],
  },
  {
    id: "feature-request",
    name: "Feature Request",
    columns: [{ heading: "Resources" }],
  },
  {
    id: "security-review",
    name: "Security Review Requests",
    columns: [
      {
        heading: "Use Cases",
        body: "Customers asking for our security team to review and provide feedback on documents.",
      },
      {
        heading: "Resources",
        links: [
          { title: "GTM Security Questionnaires", url: "#", tags: [] },
          { title: "Security Assurance Cheat Sheet", url: "#", tags: [] },
        ],
      },
    ],
  },
  {
    id: "okta-ideas",
    name: "Okta Ideas",
    columns: [{ heading: "Resources" }],
  },
];
