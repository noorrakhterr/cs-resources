import type { DirectoryEntry } from "./directory";

export const teams: DirectoryEntry[] = [
  {
    id: "pat",
    name: "PAT - Product Acceleration Team",
    sourceLink: {
      title: "See PAT wiki page here (updated regularly)",
      url: "https://oktainc.atlassian.net/wiki/spaces/PT/pages/636100191/Product+Acceleration+Team#MeetTeam",
      tags: [],
    },
    columns: [
      {
        heading: "Who we are",
        links: [
          {
            title: "Leadership Team",
            url: "https://oktainc.atlassian.net/wiki/spaces/PT/pages/636100191/Product+Acceleration+Team#Leadership",
            tags: [],
          },
          {
            title: "Subject Matter Experts (SME)",
            url: "https://oktainc.atlassian.net/wiki/spaces/PT/pages/636100191/Product+Acceleration+Team#Subject-Matter-Experts-(SMEs)",
            tags: [],
          },
        ],
      },
      {
        heading: "What we do",
        body: "PAT Team connects Okta's product teams with real customer feedback to make launches more successful. The team supports new products, from early testing to final release, making sure they are delivered faster and adopted easily.",
      },
      {
        heading: "Resources",
        body: "For product/program specific questions, please see current projects and reach out to the team members assigned",
        links: [
          {
            title: "Current Projects",
            url: "https://oktainc.atlassian.net/wiki/spaces/PT/pages/636100191/Product+Acceleration+Team#CurrentProjects",
            tags: [],
          },
          {
            title: "PAT Hosted Office Hours",
            url: "https://oktainc.atlassian.net/wiki/spaces/PT/pages/636116214/PAT+Hosted+Office+Hours",
            tags: [],
          },
        ],
      },
    ],
  },
  {
    id: "ps",
    name: "PS - Professional Services",
    sourceLink: {
      title: "See confluence page here",
      url: "https://oktainc.atlassian.net/wiki/spaces/customersuccess/pages/712727501/Why+When+and+How+to+Engage+Professional+Services",
      tags: [],
    },
    columns: [
      {
        heading: "Who we are",
        body: "PS can be engaged when a customer's desired outcome requires a level of technical execution, project management, or specialized expertise that falls outside the scope of their internal team's capacity or standard customer support.",
        links: [
          {
            title: "See Key Scenarios That Should Be a Trigger to Bring in PS",
            url: "https://oktainc.atlassian.net/wiki/spaces/customersuccess/pages/712727501/Why+When+and+How+to+Engage+Professional+Services#Initial-Implementation-%26-Onboarding",
            tags: [],
          },
        ],
      },
      {
        heading: "What we do",
        body: "Key Business Impacts of Professional Services:\n\nAccelerates Time-to-Value\nBoosts Customer Satisfaction (CSAT)\nStrengthens Renewals\nDrives Expansion & Upsell",
        links: [
          {
            title: "Key Business Impacts of Professional Services",
            url: "https://oktainc.atlassian.net/wiki/spaces/customersuccess/pages/712727501/Why+When+and+How+to+Engage+Professional+Services#Key-Business-Impacts-of-Professional-Services%3A",
            tags: [],
          },
        ],
      },
      {
        heading: "Resources",
        links: [
          {
            title: "Why, When, and How to Engage Professional Services",
            url: "https://oktainc.atlassian.net/wiki/spaces/customersuccess/pages/712727501/Why+When+and+How+to+Engage+Professional+Services",
            tags: [],
          },
          { title: "PS Rep Listed in Salesforce", url: "#", tags: [] },
        ],
      },
    ],
  },
  {
    id: "msft-compete",
    name: "Microsoft Compete",
    sourceLink: {
      title: "Highspot Page",
      url: "https://okta.highspot.com/items/6862d39656b49fd021af4bf7?lfrm=srp.0#2",
      tags: [],
    },
    columns: [
      {
        heading: "Who we are",
        body: "The Microsoft Compete team explains why customers should pick Okta over a bundled Microsoft deal. Essentially, their entire job is to prove that Okta is the faster, more flexible, and more secure choice for managing logins.",
      },
      {
        heading: "What we do",
        body: "The Microsoft Compete studies Microsoft's identity products to find their weaknesses and figure out exactly where Okta performs better.",
      },
      {
        heading: "Resources",
        links: [
          {
            title: "Playbook - pg 14 how to contact",
            url: "https://okta.highspot.com/items/68a76abde883d6f5e2cfc922?lfrm=srp.0#14",
            tags: [],
          },
          { title: "Bill Witten", url: "#", tags: [] },
        ],
      },
    ],
  },
  {
    id: "tam",
    name: "TAM - Technical Account Managers",
    sourceLink: {
      title: "See TAM wiki page here (updated regularly)",
      url: "https://oktainc.atlassian.net/wiki/spaces/GT1/pages/742005932/Technical+Account+Manager+TAM",
      tags: [],
    },
    columns: [
      {
        heading: "Who we are",
        body: "The Technical Account Management (TAM) team provides technical strategy, best practices and recommendations for customers on Okta's identity solutions.",
      },
      {
        heading: "What we do",
        body: "TAMs partner closely with cross-functional teams like Customer Success, Renewals, Pre-Sales, Engineering and Product to develop long-term relationships with customers across all aspects of their journey including onboarding, adoption, renewal and upsell.",
      },
      {
        heading: "Resources",
        links: [
          {
            title: "TAM Request Form & How to Instructions",
            url: "https://docs.google.com/document/d/1byWkWpJ-xgYYPGiwD3ZQK3MlZuwKPoSu0e94CS9lob8/edit?tab=t.0#heading=h.r0py2wu9s7ec",
            tags: [],
          },
          {
            title: "Secure Identity Progression Plan",
            url: "https://okta.highspot.com/items/69c2a36b97745390844f1649?lfrm=ssrp.26#1",
            tags: [],
          },
          {
            title: "TAMs Work FY27",
            url: "https://oktainc.atlassian.net/wiki/spaces/customersuccess/pages/712775286/How+TAMs+Work+-+FY27",
            tags: [],
          },
        ],
      },
    ],
  },
  {
    id: "ai-takeoff",
    name: "AI Take off Team / Presales AI Strike Team",
    slackChannel: {
      label: "#okta-secures-ai-questions",
      url: "https://okta.enterprise.slack.com/archives/C0A4LB3G7BN",
    },
    columns: [
      {
        heading: "Who we are",
        body: "AI Take off Team: Strategic GTM engine driving Okta's for AI Agents roadmap and cross-functional alignment.\n\nPresales AI Strike Team: Technical vanguard and 'learn-it-all' experts in agentic security and customer implementation.\n\nOur Culture: Operating with startup agility, customer obsession, and a laser focus on rapid decision-making.",
      },
      {
        heading: "What we do",
        body: "Grow: Exceeding booking targets by uniting product, marketing, and partners to drive market adoption.\n\nEarn Trust: Securing the agentic enterprise through deep investment in deployment and post-go-live success.\n\nScale: Documenting 0-1 success models to build the blueprint for global cross-functional scaling.",
      },
      {
        heading: "Resources",
        links: [
          {
            title: "Okta Secures AI",
            url: "https://okta.highspot.com/items/69a600129208418585110733?lfrm=shp.0",
            tags: [],
          },
          {
            title: "Presales AI Strike Team",
            url: "https://oktainc.atlassian.net/wiki/spaces/SE/pages/808092736/Presales+AI+Strike+Team#Slack-Channels",
            tags: [],
          },
          {
            title: "Okta for AI Agents (O4AA)",
            url: "https://oktainc.atlassian.net/wiki/spaces/customersuccess/pages/804749511/Okta+for+AI+Agents+O4AA",
            tags: [],
          },
        ],
      },
    ],
  },
  {
    id: "product-managers",
    name: "Product Managers",
    columns: [
      {
        heading: "Who we are",
        body: "Product Managers responsible for accelerating product adoption, supporting business growth targets, and managing time-to-market for new features.",
      },
      {
        heading: "What we do",
        body: "Quarterback Strategic Decisions: Lead cross-functional squads to prioritize market-differentiating innovation over routine maintenance.\n\nDrive Frictionless Scale: Transform complex technical requirements into high-adoption products that secure the world's identities.",
      },
      {
        heading: "Resources",
        links: [
          {
            title: "Who Owns What Wiki Page",
            url: "https://oktainc.atlassian.net/wiki/spaces/PM/overview",
            tags: [],
          },
        ],
      },
    ],
  },
  {
    id: "renewal-team",
    name: "Renewal Team",
    columns: [
      {
        heading: "Who we are",
        body: "Renewal Managers handle renewal opportunities and work closely with AEs and CSMs.\n\nTheir priorities include:\n1. Meet Customer Needs\n2. Retain\n3. Grow\n4. Execute on Time",
      },
      {
        heading: "The Process",
        body: "Standard Renewals: RM will engage Account Team 3-6 months in advance of Renewal.\n\nEarly Renewal w/ Upsell: AE will engage with RM when adding or upgrading products within 12 months of current contract.\n\nCancel & Restructure: AE engages RM when adding/upgrading products of $100K ARR (requires new contract).",
      },
      {
        heading: "Resources",
        links: [
          {
            title: "Highspot Page Here",
            url: "https://okta.highspot.com/items/65ae842861e453b6eb134694?lfrm=shp.0",
            tags: [],
          },
        ],
      },
    ],
  },
  {
    id: "tdi",
    name: "Technology, Data, & Intelligence (TDI)",
    slackChannel: { label: "#ask-tech-support" },
    columns: [
      {
        heading: "Who we are",
        body: "The success of Okta is powered by Business Technology.\n\nCapability Landscape:\n- Business Platforms\n- Employee Enablement\n- Business Architecture\n- Data & Insights\n- BT Quality\n- BT Program Management / Release Management",
      },
      {
        heading: "What we do",
        body: "The TDI team solves Okta's business challenges with secure technology solutions.",
      },
      {
        heading: "Resources",
        links: [
          {
            title: "Landing Page Here",
            url: "https://oktainc.atlassian.net/wiki/spaces/IHP/overview",
            tags: [],
          },
        ],
      },
    ],
  },
  {
    id: "security-legal-compliance",
    name: "Security/Legal/Compliance",
    columns: [
      {
        heading: "Auth0 Community",
        body: "Finding SOC2 and Other Compliance Related Reports\n\nProblem statement: Where can SOC2 and other compliance related reports be found? Solution: You can find the SOC2 and other compliance-related reports at the Auth0 Support Center here.",
        links: [{ title: "Auth0 Support Center", url: "#", tags: [] }],
      },
      {
        heading: "Compliance Documentation",
        body: "SOC 2 documentation available on the Security Trust Center covers the entire company. Federal specific documentation is available for our Federal/Regulated customers. Instructions can be found in this RFPIO.",
        links: [{ title: "RFPIO", url: "#", tags: [] }],
      },
    ],
  },
  {
    id: "education",
    name: "Education/Training/Certification",
    slackChannel: { label: "#okta-learning" },
    columns: [
      {
        heading: "Who we are",
        body: "Okta Learning is our modernized experience, built with your customers in mind – featuring 200+ public courses, curated learning paths, a new badging recognition program, our paid Expert Learning Pass offering, and more.",
      },
      { heading: "What we do" },
      { heading: "Resources" },
    ],
  },
  {
    id: "marketing-events",
    name: "Marketing/Events",
    columns: [
      {
        heading: "Who we are",
        body: "Cross-Functional Collaborators - Marketing acts as the strategic bridge between Product, Sales, and partners to deliver cohesive, high-impact campaigns that expand our global market share.",
      },
      {
        heading: "What we do",
        body: "Okta Marketing team shapes the global identity narrative by translating complex security technology into compelling stories that differentiate the brand. By leveraging data-driven campaigns and strategic industry alliances, they capture market intent to fuel the sales pipeline and accelerate global growth.",
      },
      {
        heading: "Resources",
        body: "Utilize Marketing events for engagement with Okta customers.",
      },
    ],
  },
  {
    id: "digital-success",
    name: "Digital Success",
    slackChannel: { label: "#ask-digital-success" },
    columns: [
      { heading: "Who we are" },
      {
        heading: "What we do",
        body: "Questions, feedback, and comments for the Digital Success team & programs (Matik, EverAfter/CS Hub, Automated IMM, Digital Journeys, Onboarding & Adoption, Digital-to-Human Scale).",
      },
      { heading: "Resources" },
    ],
  },
  {
    id: "business-value",
    name: "Business Value",
    slackChannel: { label: "#business-value" },
    columns: [
      { heading: "Who we are" },
      {
        heading: "What we do",
        body: "Per Slack: SUBMIT A DEAL SUPPORT REQUEST IN SFDC FOR COVERAGE.\n\nWe can only engage in net new opportunities over $250k.\n\nCheck our Highspot page before engaging; if your solution is not there we will be in touch.",
      },
      {
        heading: "Resources",
        links: [{ title: "Highspot Page", url: "#", tags: [] }],
      },
    ],
  },
];
