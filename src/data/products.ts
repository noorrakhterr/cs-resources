export type ResourceTag =
  | "Documentation"
  | "Datasheet"
  | "Implementation Guide"
  | "Slide Deck"
  | "Demo"
  | "Tutorial"
  | "Blog/Article"
  | "Learning Path"
  | "Training/Course"
  | "Sales Enablement";

export const RESOURCE_TAGS: ResourceTag[] = [
  "Documentation",
  "Datasheet",
  "Implementation Guide",
  "Slide Deck",
  "Demo",
  "Tutorial",
  "Blog/Article",
  "Learning Path",
  "Training/Course",
  "Sales Enablement",
];

export type ResourceLink = {
  title: string;
  description?: string;
  url: string;
  tags: ResourceTag[];
  subLinks?: ResourceLink[];
};

export type Product = {
  id: string;
  name: string;
  // AI-drafted from general product knowledge, not sourced from the resource doc — please review/edit.
  description: string;
  customerFacing: ResourceLink[];
  internal: ResourceLink[];
};

export const products: Product[] = [
  {
    id: "getting-started",
    name: "Getting Started",
    description:
      "A general onboarding entry point for new CSMs and admins — not tied to a single product. Covers self-service resources by Premier package tier, the admin launch kit, and recurring office hours.",
    customerFacing: [],
    internal: [
      {
        title: "Self service resources by Premier package",
        description: "Slide deck breaking down self-service resources available by Premier package tier.",
        url: "https://docs.google.com/presentation/d/1JQ8U0kXzI9FzIfvsudN1J009e7Z0lbN0Vq9A87HZ97k/edit?slide=id.g3f0a4cf0695_0_4080#slide=id.g3f0a4cf0695_0_4080",
        tags: ["Implementation Guide"],
      },
      {
        title: "Launch kit for Okta admins",
        url: "https://support.okta.com/help/s/launch-kit-for-okta-admins/",
        tags: ["Implementation Guide"],
      },
      {
        title: "Workflows office hours",
        description: "Recurring community office hours for Okta Workflows.",
        url: "https://okta.zoom.us/zbook/okta-workflows/community-office-hours",
        tags: ["Training/Course"],
      },
    ],
  },
  {
    id: "fastpass",
    name: "FastPass",
    description:
      "Okta FastPass is Okta's phishing-resistant passwordless authentication factor, letting users sign in with device-based biometrics or PIN instead of a password. It's a core building block of Okta's broader passwordless and phishing-resistant authentication strategy.",
    customerFacing: [
      {
        title: "Learning Path: Implement Passwordless Authentication",
        url: "https://learning.okta.com/path/implement-passwordless-authentication",
        tags: ["Learning Path"],
      },
      {
        title: "Step-by-step guide to implementing FastPass",
        description: "Guide to becoming phishing-resistant with Okta FastPass (April 2025).",
        url: "https://www.okta.com/sites/default/files/2025-04/Step-by-step-guide-to-becoming-phishing-resistant-with-Okta-FastPass-April-2025.pdf",
        tags: ["Implementation Guide"],
      },
      {
        title: "FastPass technical whitepaper",
        url: "https://www.okta.com/sites/default/files/2024-06/OktaFastPassTechnicalWhitepaper.pdf",
        tags: ["Documentation"],
      },
      {
        title: "FastPass Okta Article",
        description: "A deep dive into Okta FastPass.",
        url: "https://www.okta.com/blog/product-innovation/a-deep-dive-into-okta-fastpass/",
        tags: ["Blog/Article"],
      },
      {
        title: "FastPass Product Hub",
        url: "https://support.okta.com/help/s/product-hub/fastpass?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "FastPass demo",
        url: "https://www.youtube.com/watch?v=mRNoq3CK8vA",
        tags: ["Demo"],
      },
      {
        title: "Before and after demo video",
        url: "https://okta.highspot.com/items/652d96263a1855e64a2d6627",
        tags: ["Demo"],
      },
      {
        title: "FastPass slide deck",
        url: "https://okta.highspot.com/items/658463258a6e85d9c8163907",
        tags: ["Slide Deck"],
      },
      {
        title: "Change management toolkit for FastPass",
        description: "Personalized end-user adoption toolkit for FastPass rollouts.",
        url: "https://spaces.okta.com/story/personalized-end-user-adoption-toolkit-fastpass-copy/page/1",
        tags: ["Implementation Guide"],
      },
      {
        title: "FastPass docs",
        url: "https://help.okta.com/oie/en-us/content/topics/identity-engine/devices/fp/fp-main.htm",
        tags: ["Documentation"],
        subLinks: [
          {
            title: "Setting up policies for a passwordless experience",
            url: "https://support.okta.com/help/s/article/Setting-Up-Policies-for-a-Passwordless-Authentication-Experience-with-FastPass?language=en_US",
            tags: ["Implementation Guide"],
          },
          {
            title: "FastPass FAQ",
            url: "https://help.okta.com/oie/en-us/content/topics/identity-engine/devices/fp/fp-faq.htm",
            tags: ["Documentation"],
          },
        ],
      },
    ],
    internal: [],
  },
  {
    id: "amfa-device-assurance",
    name: "AMFA / Device Assurance",
    description:
      "Adaptive Multi-Factor Authentication (AMFA) applies context-aware policies to step up or adjust authentication requirements based on risk signals. Device Assurance extends this by checking device posture (OS version, encryption, screen lock, etc.) as a condition of access, strengthening security without always requiring extra user friction.",
    customerFacing: [
      {
        title: "Factor Assurance Information",
        url: "https://www.okta.com/resources/datasheets/factor-assurance/",
        tags: ["Datasheet"],
      },
      {
        title: "Adaptive Multi-Factor Authentication Datasheet",
        url: "https://www.okta.com/resources/datasheets/okta-adaptive-multi-factor-authentication-product-datasheet/",
        tags: ["Datasheet"],
      },
      {
        title: "Device Assurance Slide Deck",
        url: "https://okta.highspot.com/items/67f6de417237e4dd8eceeb05#4",
        tags: ["Slide Deck"],
      },
      {
        title: "Device Assurance Demo Video",
        url: "https://okta.highspot.com/items/652d954e8fc14a0324c4782f",
        tags: ["Demo"],
      },
      {
        title: "MFA Support Hub",
        url: "https://support.okta.com/help/s/product-hub/oce/multi-factor-authentication?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "Advanced Posture Checks guide article",
        url: "https://okta.highspot.com/items/67e455c0d4edc2aec5292d34#1",
        tags: ["Implementation Guide"],
      },
      {
        title: "Device Assurance Best Practices",
        description: "Ebook: Unlock the full power of Device Assurance.",
        url: "https://www.okta.com/resources/ebooks/unlock-the-full-power-of-device-assurance/",
        tags: ["Implementation Guide"],
      },
    ],
    internal: [
      {
        title: "Device Assurance objection handling",
        url: "https://docs.google.com/presentation/d/1SpdWyfV7f75tJ6HHvhPZDqMkdh1QNJ3ONZB7IQG8Nys/edit?slide=id.g3913a8f5da9_0_1526#slide=id.g3913a8f5da9_0_1526",
        tags: ["Sales Enablement"],
      },
    ],
  },
  {
    id: "workflows",
    name: "Workflows",
    description:
      "Okta Workflows is a no-code automation engine for identity processes — building flows that trigger on events (like a new hire being created) and chain together actions across Okta and connected apps. It's commonly used to automate provisioning, lifecycle, and governance tasks without custom scripting.",
    customerFacing: [
      {
        title: "Okta Blog: Introduction to Workflows",
        url: "https://www.okta.com/blog/product-innovation/introduction-to-okta-workflows/",
        tags: ["Blog/Article"],
      },
      {
        title: "YouTube playlist: Workflows tutorials",
        url: "https://www.youtube.com/playlist?list=PLIid085fSVdvyK8F4xuk49EchBPmAVNHG",
        tags: ["Tutorial"],
      },
      {
        title: "Workflows office hours",
        url: "https://okta.zoom.us/zbook/okta-workflows/community-office-hours",
        tags: ["Training/Course"],
      },
      {
        title: "Workflows docs",
        url: "https://help.okta.com/wf/en-us/content/topics/workflows/workflows-main.htm",
        tags: ["Documentation"],
      },
      {
        title: "Getting started with Okta Workflows",
        url: "https://support.okta.com/help/s/article/Getting-started-with-Okta-Workflows?language=en_US",
        tags: ["Implementation Guide"],
      },
      {
        title: "Workflows whitepaper",
        description: "Automate complex identity processes without code.",
        url: "https://www.okta.com/sites/default/files/pdf/Automate%20Complex%20Identity%20Processes%20Without%20Code.pdf",
        tags: ["Documentation"],
      },
      {
        title: "Workflows support hub",
        url: "https://support.okta.com/help/s/product-hub/workflows?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "Workflows learning paths",
        url: "https://learning.okta.com/page/workflows-series-i",
        tags: ["Learning Path"],
        subLinks: [
          {
            title: "Workflows I (certification series)",
            url: "https://learning.okta.com/page/workflows-series-i",
            tags: ["Learning Path"],
          },
          {
            title: "Automate User Lifecycle Management with Workflows",
            url: "https://learning.okta.com/path/automate-user-lifecycle-management-with-workflows",
            tags: ["Learning Path"],
          },
          {
            title: "Automate Identity Security with Workflows",
            url: "https://learning.okta.com/path/automate-identity-security-with-workflows",
            tags: ["Learning Path"],
          },
          {
            title: "Streamline Identity Governance with Workflows",
            url: "https://learning.okta.com/path/streamline-identity-governance-with-workflows",
            tags: ["Learning Path"],
          },
        ],
      },
    ],
    internal: [
      {
        title: "Discovery questions and objection handling",
        url: "https://docs.google.com/presentation/d/1azah6QOcbDXbZPSbfg77bPi_d0qoaRW2eMc8fsnFwsE/edit?slide=id.g3584d0a65b3_4_789#slide=id.g3584d0a65b3_4_789",
        tags: ["Sales Enablement"],
      },
    ],
  },
  {
    id: "lcm",
    name: "LCM",
    description:
      "Lifecycle Management (LCM) automates the provisioning and deprovisioning of user accounts and access as people join, move within, or leave an organization (JML — joiner/mover/leaver). It keeps user profiles and app access in sync with HR and other source-of-truth systems, reducing manual admin work and access sprawl.",
    customerFacing: [
      {
        title: "Automate User Access article",
        url: "https://okta.highspot.com/items/6862fbcbcb9b1504238b534b#1",
        tags: ["Blog/Article"],
      },
      {
        title: "LCM Datasheet",
        url: "https://www.okta.com/resources/datasheets/okta-lifecycle-management/",
        tags: ["Datasheet"],
      },
      {
        title: "LCM Slide deck",
        url: "https://okta.highspot.com/items/635b6340012a4abb0f9cd867#15",
        tags: ["Slide Deck"],
      },
      {
        title: "LCM demo video",
        url: "https://okta.highspot.com/items/68a874817c3d4d0622493497",
        tags: ["Demo"],
      },
      {
        title: "LCM Getting started guide",
        url: "https://www.okta.com/solutions/lifecycle-management/getting-started-guide/",
        tags: ["Implementation Guide"],
      },
      {
        title: "Top 5 reasons to automate identity with LCM",
        url: "https://www.okta.com/sites/default/files/pdf/Okta-Whitepaper%20-%20Top%205%20Reasons%20to%20Automate%20Identity%20Lifecycle%20April%202016.pdf",
        tags: ["Documentation"],
      },
      {
        title: "LCM support hub",
        url: "https://support.okta.com/help/s/product-hub/oce/lifecycle-management?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "JML information",
        url: "https://help.okta.com/oie/en-us/content/topics/provisioning/lcm/lcm-provisioning-workflow.htm",
        tags: ["Documentation"],
      },
      {
        title: "LCM Learning Path - Automate User Provisioning",
        url: "https://learning.okta.com/path/automate-user-provisioning",
        tags: ["Learning Path"],
      },
      {
        title: "LCM Security Essentials",
        url: "https://okta.csod.com/ui/lms-learning-details/app/course/93030520-6af3-4760-981a-5c73c9736246",
        tags: ["Training/Course"],
      },
    ],
    internal: [
      {
        title: "LCM discovery questions",
        url: "https://okta.highspot.com/items/635b620ff68a69bb32dda74a",
        tags: ["Sales Enablement"],
      },
      {
        title: "LCM Spotlight session",
        description: "Security essentials: LCM toolkit for CTAs.",
        url: "https://oktau.edcast.com/insights/spotlight-session-security-essentials-lcm-toolkit-ctas",
        tags: ["Training/Course"],
      },
      {
        title: "LCM security essentials toolkit",
        url: "https://okta.highspot.com/items/68b1cf4469c732296b862623?lfrm=srp.0",
        tags: ["Implementation Guide"],
      },
      {
        title: "LCM Conversation and discovery guide",
        url: "https://okta.highspot.com/items/68ac5482275b617552a1303c#4",
        tags: ["Sales Enablement"],
      },
      {
        title: "Addressing common objections to LCM",
        url: "https://okta.highspot.com/items/68ac56a5275b617552a13d21#2",
        tags: ["Sales Enablement"],
      },
      {
        title: "Why LCM? Advantages",
        url: "https://okta.highspot.com/items/68ac562abd36fa2dbc95cf96#1",
        tags: ["Sales Enablement"],
      },
      {
        title: "LCM 1-pager from ScaleU",
        url: "https://docs.google.com/document/d/1FbIl78AuwCbZrTxHBsBV9yz-UUmiTwuPUDh1UddQAh8/edit?tab=t.0",
        tags: ["Documentation"],
      },
    ],
  },
  {
    id: "ud-sso",
    name: "UD/SSO",
    description:
      "Universal Directory (UD) is Okta's flexible user profile and attribute store, letting admins define, map, and organize user data from multiple sources. Single Sign-On (SSO) sits on top of it, giving users one set of credentials to access all their connected applications through Okta.",
    customerFacing: [
      {
        title: "SSO Slide Deck",
        url: "https://docs.google.com/presentation/d/1r8Xaha_Y7G0B2S4hY1pfBgv1iO8mDGF3GoPEfZuhihA/edit?slide=id.p24#slide=id.p24",
        tags: ["Slide Deck"],
      },
      {
        title: "SSO Product Hub",
        url: "https://www.okta.com/products/single-sign-on-workforce-identity/",
        tags: ["Documentation"],
      },
      {
        title: "UD Product Hub",
        url: "https://www.okta.com/products/universal-directory/",
        tags: ["Documentation"],
      },
      {
        title: "Universal Directory Support Hub",
        url: "https://support.okta.com/help/s/product-hub/oie/universal-directory?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "SSO Support Hub",
        url: "https://support.okta.com/help/s/product-hub/oie/single-sign-on?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "SSO Docs",
        url: "https://help.okta.com/oie/en-us/content/topics/apps/apps-about-sso.htm",
        tags: ["Documentation"],
      },
      {
        title: "SSO Learning Path",
        url: "https://learning.okta.com/path/create-app-integrations",
        tags: ["Learning Path"],
      },
      {
        title: "UD Learning Paths",
        url: "https://learning.okta.com/path/define-your-users-in-okta",
        tags: ["Learning Path"],
        subLinks: [
          {
            title: "Define Your Users in Okta",
            url: "https://learning.okta.com/path/define-your-users-in-okta",
            tags: ["Learning Path"],
          },
          {
            title: "Integrate with Active Directory",
            url: "https://learning.okta.com/path/integrate-with-active-directory",
            tags: ["Learning Path"],
          },
          {
            title: "Manage User Profiles in Universal Directory",
            url: "https://learning.okta.com/path/manage-user-profiles-in-ud",
            tags: ["Learning Path"],
          },
          {
            title: "Organize Users with Groups",
            url: "https://learning.okta.com/path/organize-users-with-groups",
            tags: ["Learning Path"],
          },
          {
            title: "Define Okta Administrators",
            url: "https://learning.okta.com/path/define-okta-administrators",
            tags: ["Learning Path"],
          },
          {
            title: "Extend Administrator Operations",
            url: "https://learning.okta.com/path/extend-administrator-operations",
            tags: ["Learning Path"],
          },
        ],
      },
    ],
    internal: [],
  },
  {
    id: "itp",
    name: "ITP",
    description:
      "Identity Threat Protection (ITP) continuously evaluates risk signals after a user has already authenticated, detecting account takeover and session hijacking in progress and automatically responding — e.g. prompting re-authentication or terminating a session.",
    customerFacing: [],
    internal: [],
  },
  {
    id: "oig",
    name: "OIG",
    description:
      "Okta Identity Governance (OIG) helps organizations manage who has access to what, with access requests, certification campaigns, and separation-of-duties checks — supporting compliance and audit requirements around access governance.",
    customerFacing: [
      {
        title: "YouTube playlist",
        url: "https://www.youtube.com/watch?v=Qh2vC7DCbbY&list=PLIid085fSVdssO1Z8YFZ23G3yXY9oYVCt",
        tags: ["Tutorial"],
      },
      {
        title: "OIG Datasheet",
        url: "https://www.okta.com/resources/datasheets/okta-identity-governance/",
        tags: ["Datasheet"],
      },
      {
        title: "OIG whitepaper",
        description: "Identity Governance buyer's guide.",
        url: "https://www.okta.com/resources/whitepapers/identity-governance-buyers-guide/",
        tags: ["Documentation"],
      },
      {
        title: "Top 5 Ways Identity Governance Increases Security",
        url: "https://www.okta.com/resources/briefs/top-5-ways-identity-governance-strengthens-security/",
        tags: ["Blog/Article"],
      },
      {
        title: "Your Guide to Identity Governance",
        url: "https://www.okta.com/blog/industry-insights/your-guide-to-modern-identity-governance/",
        tags: ["Blog/Article"],
      },
      {
        title: "OIG deck",
        url: "https://docs.google.com/presentation/d/1Z_rYKUGk7SsMVk3QgBZ1sWhx5ZXA5FxwbuTP7X3t0Ko/edit?slide=id.g37e2a4de59b_0_1728#slide=id.g37e2a4de59b_0_1728",
        tags: ["Slide Deck"],
      },
      {
        title: "OIG Support hub",
        url: "https://support.okta.com/help/s/product-hub/okta-identity-governance?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "OIG docs",
        url: "https://help.okta.com/oie/en-us/content/topics/identity-governance/iga.htm",
        tags: ["Documentation"],
        subLinks: [
          {
            title: "Best practices for creating campaigns",
            url: "https://help.okta.com/oie/en-us/content/topics/identity-governance/access-certification/best-practices-create-campaign.htm",
            tags: ["Implementation Guide"],
          },
          {
            title: "Identity Governance FAQ",
            url: "https://support.okta.com/help/s/article/Identity-Governance-FAQs?language=en_US",
            tags: ["Documentation"],
          },
        ],
      },
      {
        title: "OIG learning path",
        url: "https://learning.okta.com/path/examine-okta-identity-governance-oig-foundations",
        tags: ["Learning Path"],
      },
    ],
    internal: [],
  },
  {
    id: "opa",
    name: "OPA",
    description:
      "Okta Privileged Access (OPA) extends identity governance to privileged accounts and infrastructure (servers, databases), providing just-in-time access, session management, and credential vaulting for high-risk administrative access.",
    customerFacing: [],
    internal: [],
  },
  {
    id: "oda",
    name: "ODA",
    description:
      "Okta Device Access (ODA) brings identity-aware security to the local device login — syncing Okta credentials and policy to the OS login screen (including offline) and enabling passwordless, phishing-resistant desktop sign-in alongside Okta's cloud policies.",
    customerFacing: [
      {
        title: "ODA slide deck",
        url: "https://okta.highspot.com/items/648b2ab133866f40d2b2bc12",
        tags: ["Slide Deck"],
      },
      {
        title: "ODA datasheet",
        url: "https://okta.highspot.com/items/6a2c2756439b003d0e9c7ac9",
        tags: ["Datasheet"],
      },
      {
        title: "ODA demo",
        url: "https://okta.highspot.com/items/6a0dfb702c05b2f1e0cfb9d8",
        tags: ["Demo"],
      },
      {
        title: "ODA product hub",
        url: "https://support.okta.com/help/s/product-hub/okta-device-access?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "ODA docs",
        url: "https://help.okta.com/oie/en-us/content/topics/oda/oda-overview.htm",
        tags: ["Documentation"],
      },
      {
        title: "ODA learning path",
        url: "https://learning.okta.com/path/secure-local-device-data-with-okta-device-access",
        tags: ["Learning Path"],
        subLinks: [
          {
            title: "Get Started with Okta Device Access",
            url: "https://learning.okta.com/path/secure-local-device-data-with-okta-device-access",
            tags: ["Learning Path"],
          },
          {
            title: "Manage BYOD via Identity-Aware Integration",
            url: "https://learning.okta.com/path/manage-byod-via-identity-aware-integration",
            tags: ["Learning Path"],
          },
          {
            title: "Optimize Device Security and Management",
            url: "https://learning.okta.com/path/optimize-device-security-and-management",
            tags: ["Learning Path"],
          },
        ],
      },
    ],
    internal: [
      {
        title: "Value Driver for ODA",
        url: "https://okta.highspot.com/items/66e33e713cc9aabb17aa0399#14",
        tags: ["Sales Enablement"],
      },
    ],
  },
  {
    id: "ismp",
    name: "ISMP",
    description:
      "Identity Security Posture Management (ISMP) continuously scans an org's Okta and connected app configuration for identity-related security gaps and misconfigurations, giving admins prioritized recommendations to reduce their identity attack surface.",
    customerFacing: [
      {
        title: "First 5 Steps with ISMP",
        url: "https://okta.highspot.com/items/683865dd106b9f5966f60e27#1",
        tags: ["Implementation Guide"],
      },
      {
        title: "ISMP datasheet",
        url: "https://www.okta.com/resources/datasheets/identity-security-posture-management/",
        tags: ["Datasheet"],
      },
      {
        title: "ISMP deck",
        url: "https://okta.highspot.com/items/6696ceb9840716eaad68f5bf",
        tags: ["Slide Deck"],
      },
      {
        title: "ISMP support hub",
        url: "https://support.okta.com/help/s/product-hub/identity-security-posture-management?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "ISMP docs",
        url: "https://help.okta.com/ispm/en-us/content/topics/ispm/home.htm",
        tags: ["Documentation"],
      },
      {
        title: "ISMP learning path",
        url: "https://help.okta.com/ispm/en-us/content/topics/ispm/home.htm",
        tags: ["Learning Path"],
      },
    ],
    internal: [
      {
        title: "ISMP enablement for CSMs and TAMs",
        url: "https://okta.highspot.com/items/69090b5da09256a504a0b5bd",
        tags: ["Sales Enablement"],
      },
      {
        title: "ISMP sales enablement for CSMs",
        url: "https://okta.highspot.com/items/68b0a8f49f7709397a493ae3",
        tags: ["Sales Enablement"],
      },
      {
        title: "ISMP product deep dive",
        url: "https://okta.highspot.com/items/685af1fb45101f6f77bef0af",
        tags: ["Documentation"],
      },
      {
        title: "ISMP sales enablement",
        url: "https://okta.highspot.com/items/665e7553a580524b802c4101#10",
        tags: ["Sales Enablement"],
      },
      {
        title: "ISMP customer talking points",
        url: "https://okta.highspot.com/items/661864c9ffc75a08c08f9889",
        tags: ["Sales Enablement"],
      },
      {
        title: "ISMP course for navigating customer conversations",
        url: "https://okta.highspot.com/items/667edc135fd7802e3aadcdf2#/training/learner",
        tags: ["Training/Course"],
      },
      {
        title: "ISMP course",
        url: "https://okta.csod.com/ui/lms-learning-details/app/course/e5a1a663-c5fb-4de0-9c5f-5c1b6e497c02",
        tags: ["Training/Course"],
      },
    ],
  },
  {
    id: "oie-upgrade",
    name: "OIE upgrade",
    description:
      "Okta Identity Engine (OIE) is the modern, policy-driven architecture underpinning current Okta products, replacing the legacy Classic Engine. This section covers resources for guiding customers through the Classic-to-OIE upgrade.",
    customerFacing: [
      {
        title: "YouTube Playlist",
        url: "https://www.youtube.com/watch?v=r8LjFj5iAkw&list=PLIid085fSVduvUaN-gBdN1cudndqR9IH8&index=11",
        tags: ["Tutorial"],
      },
      {
        title: "OIE deck",
        url: "https://okta.highspot.com/items/64c92726f09ba1d44767e450#4",
        tags: ["Slide Deck"],
      },
    ],
    internal: [],
  },
  {
    id: "identity-maturity",
    name: "Identity Maturity",
    description:
      "Identity Maturity resources help assess where a customer sits on their identity journey — from basic SSO/MFA to full lifecycle automation and governance — and plan a roadmap to the next stage.",
    customerFacing: [
      {
        title: "A Comprehensive Guide for Your Customer Identity Maturity Journey",
        url: "https://www.okta.com/content/dam/tmp---migration/files_live/2023-11/A-Comprehensive%20-Guide-for-Your-Customer-Identity-Maturity-Journey_102023.pdf",
        tags: ["Documentation"],
      },
      {
        title: "Okta's Identity Maturity Checklist",
        url: "https://support.okta.com/help/s/article/okta-s-identity-maturity-checklist?language=en_US",
        tags: ["Implementation Guide"],
      },
    ],
    internal: [
      {
        title: "Identity Maturity 101 Class",
        url: "https://okta.csod.com/ui/lms-learning-details/app/course/c99e2901-2e23-4fe0-9141-dba6dcdf0dfd",
        tags: ["Training/Course"],
      },
      {
        title: "Identity Maturity 201 Class",
        url: "https://okta.csod.com/ui/lms-learning-details/app/course/75c82008-ffee-476e-b796-8974057e7824",
        tags: ["Training/Course"],
      },
    ],
  },
];
