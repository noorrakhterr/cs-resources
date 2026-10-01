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
  productName?: string;
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
      "A general onboarding entry point for new CSMs and admins — not tied to a single product. Covers self-service resources by Premier package tier and the admin launch kit.",
    customerFacing: [],
    internal: [
      {
        title: "Self-Service Resources by Premier Package",
        description: "Slide deck breaking down self-service resources available by Premier package tier.",
        url: "https://docs.google.com/presentation/d/1JQ8U0kXzI9FzIfvsudN1J009e7Z0lbN0Vq9A87HZ97k/edit?slide=id.g3f0a4cf0695_0_4080#slide=id.g3f0a4cf0695_0_4080",
        tags: ["Implementation Guide"],
      },
      {
        title: "Launch Kit for Okta Admins",
        description: "Starter kit of resources for admins launching Okta at a new customer.",
        url: "https://support.okta.com/help/s/launch-kit-for-okta-admins/",
        tags: ["Implementation Guide"],
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
        description: "Guided learning path covering end-to-end passwordless setup.",
        url: "https://learning.okta.com/path/implement-passwordless-authentication",
        tags: ["Learning Path"],
      },
      {
        title: "Step-By-Step Guide to Implementing FastPass",
        description: "Guide to becoming phishing-resistant with Okta FastPass (April 2025).",
        url: "https://www.okta.com/sites/default/files/2025-04/Step-by-step-guide-to-becoming-phishing-resistant-with-Okta-FastPass-April-2025.pdf",
        tags: ["Implementation Guide"],
      },
      {
        title: "FastPass Technical Whitepaper",
        description: "Deep technical overview of how FastPass works under the hood.",
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
        description: "Central support hub for all things FastPass.",
        url: "https://support.okta.com/help/s/product-hub/fastpass?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "FastPass Demo",
        description: "Short product demo of FastPass in action.",
        url: "https://www.youtube.com/watch?v=mRNoq3CK8vA",
        tags: ["Demo"],
      },
      {
        title: "Before and After Demo Video",
        description: "Side-by-side demo of the login experience before and after FastPass.",
        url: "https://okta.highspot.com/items/652d96263a1855e64a2d6627",
        tags: ["Demo"],
      },
      {
        title: "FastPass Slide Deck",
        description: "Overview slide deck for presenting FastPass to customers.",
        url: "https://okta.highspot.com/items/658463258a6e85d9c8163907",
        tags: ["Slide Deck"],
      },
      {
        title: "Change Management Toolkit for FastPass",
        description: "Personalized end-user adoption toolkit for FastPass rollouts.",
        url: "https://spaces.okta.com/story/personalized-end-user-adoption-toolkit-fastpass-copy/page/1",
        tags: ["Implementation Guide"],
      },
      {
        title: "FastPass Docs",
        description: "Official documentation for configuring and managing FastPass.",
        url: "https://help.okta.com/oie/en-us/content/topics/identity-engine/devices/fp/fp-main.htm",
        tags: ["Documentation"],
        subLinks: [
          {
            title: "Setting Up Policies for a Passwordless Experience",
            description: "How to configure authentication policies for passwordless sign-in.",
            url: "https://support.okta.com/help/s/article/Setting-Up-Policies-for-a-Passwordless-Authentication-Experience-with-FastPass?language=en_US",
            tags: ["Implementation Guide"],
          },
          {
            title: "FastPass FAQ",
            description: "Frequently asked questions about FastPass.",
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
        description: "Datasheet explaining factor assurance and how it strengthens authentication.",
        url: "https://www.okta.com/resources/datasheets/factor-assurance/",
        tags: ["Datasheet"],
      },
      {
        title: "Adaptive Multi-Factor Authentication Datasheet",
        description: "Product datasheet for Okta's Adaptive MFA capabilities.",
        url: "https://www.okta.com/resources/datasheets/okta-adaptive-multi-factor-authentication-product-datasheet/",
        tags: ["Datasheet"],
      },
      {
        title: "Device Assurance Slide Deck",
        description: "Overview slide deck for presenting Device Assurance to customers.",
        url: "https://okta.highspot.com/items/67f6de417237e4dd8eceeb05#4",
        tags: ["Slide Deck"],
      },
      {
        title: "Device Assurance Demo Video",
        description: "Product demo showing Device Assurance policies in action.",
        url: "https://okta.highspot.com/items/652d954e8fc14a0324c4782f",
        tags: ["Demo"],
      },
      {
        title: "MFA Support Hub",
        description: "Central support hub for multi-factor authentication.",
        url: "https://support.okta.com/help/s/product-hub/oce/multi-factor-authentication?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "Advanced Posture Checks Guide Article",
        description: "Guide to configuring advanced device posture checks.",
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
        title: "Device Assurance Objection Handling",
        description: "Deck for addressing common customer objections to Device Assurance.",
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
        description: "Introductory blog post explaining what Okta Workflows is and why it matters.",
        url: "https://www.okta.com/blog/product-innovation/introduction-to-okta-workflows/",
        tags: ["Blog/Article"],
      },
      {
        title: "YouTube Playlist: Workflows Tutorials",
        description: "Playlist of tutorial videos covering common Workflows use cases.",
        url: "https://www.youtube.com/playlist?list=PLIid085fSVdvyK8F4xuk49EchBPmAVNHG",
        tags: ["Tutorial"],
      },
      {
        title: "Workflows Office Hours",
        description: "Recurring community office hours for Okta Workflows.",
        url: "https://okta.zoom.us/zbook/okta-workflows/community-office-hours",
        tags: ["Training/Course"],
      },
      {
        title: "Workflows Docs",
        description: "Official documentation for building and managing Workflows.",
        url: "https://help.okta.com/wf/en-us/content/topics/workflows/workflows-main.htm",
        tags: ["Documentation"],
      },
      {
        title: "Getting Started With Okta Workflows",
        description: "Step-by-step article for building your first flow.",
        url: "https://support.okta.com/help/s/article/Getting-started-with-Okta-Workflows?language=en_US",
        tags: ["Implementation Guide"],
      },
      {
        title: "Workflows Whitepaper",
        description: "Automate complex identity processes without code.",
        url: "https://www.okta.com/sites/default/files/pdf/Automate%20Complex%20Identity%20Processes%20Without%20Code.pdf",
        tags: ["Documentation"],
      },
      {
        title: "Workflows Support Hub",
        description: "Central support hub for Okta Workflows.",
        url: "https://support.okta.com/help/s/product-hub/workflows?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "Workflows Learning Paths",
        description: "Certification and skill-building learning paths for Workflows.",
        url: "https://learning.okta.com/page/workflows-series-i",
        tags: ["Learning Path"],
        subLinks: [
          {
            title: "Workflows I (Certification Series)",
            description: "First course in the Workflows certification series.",
            url: "https://learning.okta.com/page/workflows-series-i",
            tags: ["Learning Path"],
          },
          {
            title: "Automate User Lifecycle Management With Workflows",
            description: "Learning path on automating lifecycle management tasks with Workflows.",
            url: "https://learning.okta.com/path/automate-user-lifecycle-management-with-workflows",
            tags: ["Learning Path"],
          },
          {
            title: "Automate Identity Security With Workflows",
            description: "Learning path on automating identity security tasks with Workflows.",
            url: "https://learning.okta.com/path/automate-identity-security-with-workflows",
            tags: ["Learning Path"],
          },
          {
            title: "Streamline Identity Governance With Workflows",
            description: "Learning path on using Workflows to streamline governance processes.",
            url: "https://learning.okta.com/path/streamline-identity-governance-with-workflows",
            tags: ["Learning Path"],
          },
        ],
      },
    ],
    internal: [
      {
        title: "Discovery Questions and Objection Handling",
        description: "Deck of discovery questions and objection handling for Workflows conversations.",
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
        title: "Automate User Access Article",
        description: "Article on automating user access provisioning with LCM.",
        url: "https://okta.highspot.com/items/6862fbcbcb9b1504238b534b#1",
        tags: ["Blog/Article"],
      },
      {
        title: "LCM Datasheet",
        description: "Product datasheet for Okta Lifecycle Management.",
        url: "https://www.okta.com/resources/datasheets/okta-lifecycle-management/",
        tags: ["Datasheet"],
      },
      {
        title: "LCM Slide Deck",
        description: "Overview slide deck for presenting LCM to customers.",
        url: "https://okta.highspot.com/items/635b6340012a4abb0f9cd867#15",
        tags: ["Slide Deck"],
      },
      {
        title: "LCM Demo Video",
        description: "Product demo showing LCM provisioning workflows in action.",
        url: "https://okta.highspot.com/items/68a874817c3d4d0622493497",
        tags: ["Demo"],
      },
      {
        title: "LCM Getting Started Guide",
        description: "Guide to getting started with Lifecycle Management.",
        url: "https://www.okta.com/solutions/lifecycle-management/getting-started-guide/",
        tags: ["Implementation Guide"],
      },
      {
        title: "Top 5 Reasons to Automate Identity With LCM",
        description: "Whitepaper on the business case for automating identity lifecycle.",
        url: "https://www.okta.com/sites/default/files/pdf/Okta-Whitepaper%20-%20Top%205%20Reasons%20to%20Automate%20Identity%20Lifecycle%20April%202016.pdf",
        tags: ["Documentation"],
      },
      {
        title: "LCM Support Hub",
        description: "Central support hub for Lifecycle Management.",
        url: "https://support.okta.com/help/s/product-hub/oce/lifecycle-management?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "JML Information",
        description: "Documentation on joiner/mover/leaver provisioning workflows.",
        url: "https://help.okta.com/oie/en-us/content/topics/provisioning/lcm/lcm-provisioning-workflow.htm",
        tags: ["Documentation"],
      },
      {
        title: "LCM Learning Path - Automate User Provisioning",
        description: "Learning path on automating user provisioning with LCM.",
        url: "https://learning.okta.com/path/automate-user-provisioning",
        tags: ["Learning Path"],
      },
      {
        title: "LCM Security Essentials",
        description: "Course covering security essentials for Lifecycle Management.",
        url: "https://okta.csod.com/ui/lms-learning-details/app/course/93030520-6af3-4760-981a-5c73c9736246",
        tags: ["Training/Course"],
      },
    ],
    internal: [
      {
        title: "LCM Discovery Questions",
        description: "Discovery questions to use in LCM customer conversations.",
        url: "https://okta.highspot.com/items/635b620ff68a69bb32dda74a",
        tags: ["Sales Enablement"],
      },
      {
        title: "LCM Spotlight Session",
        description: "Security essentials: LCM toolkit for CTAs.",
        url: "https://oktau.edcast.com/insights/spotlight-session-security-essentials-lcm-toolkit-ctas",
        tags: ["Training/Course"],
      },
      {
        title: "LCM Security Essentials Toolkit",
        description: "Toolkit of resources for discussing LCM security value with customers.",
        url: "https://okta.highspot.com/items/68b1cf4469c732296b862623?lfrm=srp.0",
        tags: ["Implementation Guide"],
      },
      {
        title: "LCM Conversation and Discovery Guide",
        description: "Guide for structuring LCM discovery conversations.",
        url: "https://okta.highspot.com/items/68ac5482275b617552a1303c#4",
        tags: ["Sales Enablement"],
      },
      {
        title: "Addressing Common Objections to LCM",
        description: "Deck covering common customer objections to LCM and how to address them.",
        url: "https://okta.highspot.com/items/68ac56a5275b617552a13d21#2",
        tags: ["Sales Enablement"],
      },
      {
        title: "Why LCM? Advantages",
        description: "Deck outlining the key advantages of adopting LCM.",
        url: "https://okta.highspot.com/items/68ac562abd36fa2dbc95cf96#1",
        tags: ["Sales Enablement"],
      },
      {
        title: "LCM 1-Pager From ScaleU",
        description: "One-page summary of LCM talking points from ScaleU.",
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
        description: "Overview slide deck for presenting SSO to customers.",
        url: "https://docs.google.com/presentation/d/1r8Xaha_Y7G0B2S4hY1pfBgv1iO8mDGF3GoPEfZuhihA/edit?slide=id.p24#slide=id.p24",
        tags: ["Slide Deck"],
      },
      {
        title: "SSO Product Hub",
        description: "Central product page for Single Sign-On.",
        url: "https://www.okta.com/products/single-sign-on-workforce-identity/",
        tags: ["Documentation"],
      },
      {
        title: "UD Product Hub",
        description: "Central product page for Universal Directory.",
        url: "https://www.okta.com/products/universal-directory/",
        tags: ["Documentation"],
      },
      {
        title: "Universal Directory Support Hub",
        description: "Central support hub for Universal Directory.",
        url: "https://support.okta.com/help/s/product-hub/oie/universal-directory?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "SSO Support Hub",
        description: "Central support hub for Single Sign-On.",
        url: "https://support.okta.com/help/s/product-hub/oie/single-sign-on?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "SSO Docs",
        description: "Official documentation for configuring Single Sign-On.",
        url: "https://help.okta.com/oie/en-us/content/topics/apps/apps-about-sso.htm",
        tags: ["Documentation"],
      },
      {
        title: "SSO Learning Path",
        description: "Learning path on creating app integrations for SSO.",
        url: "https://learning.okta.com/path/create-app-integrations",
        tags: ["Learning Path"],
      },
      {
        title: "UD Learning Paths",
        description: "Collection of learning paths covering Universal Directory fundamentals.",
        url: "https://learning.okta.com/path/define-your-users-in-okta",
        tags: ["Learning Path"],
        subLinks: [
          {
            title: "Define Your Users in Okta",
            description: "Learning path on defining user profiles in Okta.",
            url: "https://learning.okta.com/path/define-your-users-in-okta",
            tags: ["Learning Path"],
          },
          {
            title: "Integrate With Active Directory",
            description: "Learning path on integrating Okta with Active Directory.",
            url: "https://learning.okta.com/path/integrate-with-active-directory",
            tags: ["Learning Path"],
          },
          {
            title: "Manage User Profiles in Universal Directory",
            description: "Learning path on managing user profiles in UD.",
            url: "https://learning.okta.com/path/manage-user-profiles-in-ud",
            tags: ["Learning Path"],
          },
          {
            title: "Organize Users With Groups",
            description: "Learning path on organizing users into groups.",
            url: "https://learning.okta.com/path/organize-users-with-groups",
            tags: ["Learning Path"],
          },
          {
            title: "Define Okta Administrators",
            description: "Learning path on defining and scoping Okta administrator roles.",
            url: "https://learning.okta.com/path/define-okta-administrators",
            tags: ["Learning Path"],
          },
          {
            title: "Extend Administrator Operations",
            description: "Learning path on extending administrator operations in Okta.",
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
        title: "YouTube Playlist",
        description: "Playlist of videos covering Okta Identity Governance.",
        url: "https://www.youtube.com/watch?v=Qh2vC7DCbbY&list=PLIid085fSVdssO1Z8YFZ23G3yXY9oYVCt",
        tags: ["Tutorial"],
      },
      {
        title: "OIG Datasheet",
        description: "Product datasheet for Okta Identity Governance.",
        url: "https://www.okta.com/resources/datasheets/okta-identity-governance/",
        tags: ["Datasheet"],
      },
      {
        title: "OIG Whitepaper",
        description: "Identity Governance buyer's guide.",
        url: "https://www.okta.com/resources/whitepapers/identity-governance-buyers-guide/",
        tags: ["Documentation"],
      },
      {
        title: "Top 5 Ways Identity Governance Increases Security",
        description: "Brief on how identity governance strengthens overall security posture.",
        url: "https://www.okta.com/resources/briefs/top-5-ways-identity-governance-strengthens-security/",
        tags: ["Blog/Article"],
      },
      {
        title: "Your Guide to Identity Governance",
        description: "Blog post walking through modern identity governance concepts.",
        url: "https://www.okta.com/blog/industry-insights/your-guide-to-modern-identity-governance/",
        tags: ["Blog/Article"],
      },
      {
        title: "OIG Deck",
        description: "Overview slide deck for presenting OIG to customers.",
        url: "https://docs.google.com/presentation/d/1Z_rYKUGk7SsMVk3QgBZ1sWhx5ZXA5FxwbuTP7X3t0Ko/edit?slide=id.g37e2a4de59b_0_1728#slide=id.g37e2a4de59b_0_1728",
        tags: ["Slide Deck"],
      },
      {
        title: "OIG Support Hub",
        description: "Central support hub for Okta Identity Governance.",
        url: "https://support.okta.com/help/s/product-hub/okta-identity-governance?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "OIG Docs",
        description: "Official documentation for configuring Identity Governance.",
        url: "https://help.okta.com/oie/en-us/content/topics/identity-governance/iga.htm",
        tags: ["Documentation"],
        subLinks: [
          {
            title: "Best Practices for Creating Campaigns",
            description: "Best practices for setting up access certification campaigns.",
            url: "https://help.okta.com/oie/en-us/content/topics/identity-governance/access-certification/best-practices-create-campaign.htm",
            tags: ["Implementation Guide"],
          },
          {
            title: "Identity Governance FAQ",
            description: "Frequently asked questions about Identity Governance.",
            url: "https://support.okta.com/help/s/article/Identity-Governance-FAQs?language=en_US",
            tags: ["Documentation"],
          },
        ],
      },
      {
        title: "OIG Learning Path",
        description: "Learning path covering OIG foundations.",
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
        title: "ODA Slide Deck",
        description: "Overview slide deck for presenting ODA to customers.",
        url: "https://okta.highspot.com/items/648b2ab133866f40d2b2bc12",
        tags: ["Slide Deck"],
      },
      {
        title: "ODA Datasheet",
        description: "Product datasheet for Okta Device Access.",
        url: "https://okta.highspot.com/items/6a2c2756439b003d0e9c7ac9",
        tags: ["Datasheet"],
      },
      {
        title: "ODA Demo",
        description: "Product demo showing Device Access in action.",
        url: "https://okta.highspot.com/items/6a0dfb702c05b2f1e0cfb9d8",
        tags: ["Demo"],
      },
      {
        title: "ODA Product Hub",
        description: "Central support hub for Okta Device Access.",
        url: "https://support.okta.com/help/s/product-hub/okta-device-access?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "ODA Docs",
        description: "Official documentation for configuring Device Access.",
        url: "https://help.okta.com/oie/en-us/content/topics/oda/oda-overview.htm",
        tags: ["Documentation"],
      },
      {
        title: "ODA Learning Path",
        description: "Collection of learning paths covering Device Access setup and management.",
        url: "https://learning.okta.com/path/secure-local-device-data-with-okta-device-access",
        tags: ["Learning Path"],
        subLinks: [
          {
            title: "Get Started With Okta Device Access",
            description: "Learning path for getting started with Device Access.",
            url: "https://learning.okta.com/path/secure-local-device-data-with-okta-device-access",
            tags: ["Learning Path"],
          },
          {
            title: "Manage BYOD via Identity-Aware Integration",
            description: "Learning path on managing BYOD devices with identity-aware policies.",
            url: "https://learning.okta.com/path/manage-byod-via-identity-aware-integration",
            tags: ["Learning Path"],
          },
          {
            title: "Optimize Device Security and Management",
            description: "Learning path on optimizing device security and management practices.",
            url: "https://learning.okta.com/path/optimize-device-security-and-management",
            tags: ["Learning Path"],
          },
        ],
      },
    ],
    internal: [
      {
        title: "Value Driver for ODA",
        description: "Deck outlining the value drivers for adopting Device Access.",
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
        title: "First 5 Steps With ISMP",
        description: "Quick-start guide for the first five steps after enabling ISMP.",
        url: "https://okta.highspot.com/items/683865dd106b9f5966f60e27#1",
        tags: ["Implementation Guide"],
      },
      {
        title: "ISMP Datasheet",
        description: "Product datasheet for Identity Security Posture Management.",
        url: "https://www.okta.com/resources/datasheets/identity-security-posture-management/",
        tags: ["Datasheet"],
      },
      {
        title: "ISMP Deck",
        description: "Overview slide deck for presenting ISMP to customers.",
        url: "https://okta.highspot.com/items/6696ceb9840716eaad68f5bf",
        tags: ["Slide Deck"],
      },
      {
        title: "ISMP Support Hub",
        description: "Central support hub for Identity Security Posture Management.",
        url: "https://support.okta.com/help/s/product-hub/identity-security-posture-management?language=en_US",
        tags: ["Documentation"],
      },
      {
        title: "ISMP Docs",
        description: "Official documentation for Identity Security Posture Management.",
        url: "https://help.okta.com/ispm/en-us/content/topics/ispm/home.htm",
        tags: ["Documentation"],
      },
      {
        title: "ISMP Learning Path",
        description: "Learning path covering ISMP fundamentals.",
        url: "https://help.okta.com/ispm/en-us/content/topics/ispm/home.htm",
        tags: ["Learning Path"],
      },
    ],
    internal: [
      {
        title: "ISMP Enablement for CSMs and TAMs",
        description: "Enablement deck preparing CSMs and TAMs to discuss ISMP.",
        url: "https://okta.highspot.com/items/69090b5da09256a504a0b5bd",
        tags: ["Sales Enablement"],
      },
      {
        title: "ISMP Sales Enablement for CSMs",
        description: "Sales enablement materials for CSMs covering ISMP.",
        url: "https://okta.highspot.com/items/68b0a8f49f7709397a493ae3",
        tags: ["Sales Enablement"],
      },
      {
        title: "ISMP Product Deep Dive",
        description: "In-depth walkthrough of ISMP product capabilities.",
        url: "https://okta.highspot.com/items/685af1fb45101f6f77bef0af",
        tags: ["Documentation"],
      },
      {
        title: "ISMP Sales Enablement",
        description: "General sales enablement materials for ISMP.",
        url: "https://okta.highspot.com/items/665e7553a580524b802c4101#10",
        tags: ["Sales Enablement"],
      },
      {
        title: "ISMP Customer Talking Points",
        description: "Key talking points for discussing ISMP with customers.",
        url: "https://okta.highspot.com/items/661864c9ffc75a08c08f9889",
        tags: ["Sales Enablement"],
      },
      {
        title: "ISMP Course for Navigating Customer Conversations",
        description: "Course on handling ISMP customer conversations.",
        url: "https://okta.highspot.com/items/667edc135fd7802e3aadcdf2#/training/learner",
        tags: ["Training/Course"],
      },
      {
        title: "ISMP Course",
        description: "Core training course covering ISMP.",
        url: "https://okta.csod.com/ui/lms-learning-details/app/course/e5a1a663-c5fb-4de0-9c5f-5c1b6e497c02",
        tags: ["Training/Course"],
      },
    ],
  },
  {
    id: "oie-upgrade",
    name: "OIE Upgrade",
    description:
      "Okta Identity Engine (OIE) is the modern, policy-driven architecture underpinning current Okta products, replacing the legacy Classic Engine. This section covers resources for guiding customers through the Classic-to-OIE upgrade.",
    customerFacing: [
      {
        title: "YouTube Playlist",
        description: "Playlist of videos covering the OIE upgrade process.",
        url: "https://www.youtube.com/watch?v=r8LjFj5iAkw&list=PLIid085fSVduvUaN-gBdN1cudndqR9IH8&index=11",
        tags: ["Tutorial"],
      },
      {
        title: "OIE Deck",
        description: "Overview slide deck for presenting the OIE upgrade to customers.",
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
        description: "Whitepaper guiding customers through their identity maturity journey.",
        url: "https://www.okta.com/content/dam/tmp---migration/files_live/2023-11/A-Comprehensive%20-Guide-for-Your-Customer-Identity-Maturity-Journey_102023.pdf",
        tags: ["Documentation"],
      },
      {
        title: "Okta's Identity Maturity Checklist",
        description: "Checklist for assessing a customer's current identity maturity level.",
        url: "https://support.okta.com/help/s/article/okta-s-identity-maturity-checklist?language=en_US",
        tags: ["Implementation Guide"],
      },
    ],
    internal: [
      {
        title: "Identity Maturity 101 Class",
        description: "Foundational training on identity maturity concepts.",
        url: "https://okta.csod.com/ui/lms-learning-details/app/course/c99e2901-2e23-4fe0-9141-dba6dcdf0dfd",
        tags: ["Training/Course"],
      },
      {
        title: "Identity Maturity 201 Class",
        description: "Advanced training on identity maturity concepts.",
        url: "https://okta.csod.com/ui/lms-learning-details/app/course/75c82008-ffee-476e-b796-8974057e7824",
        tags: ["Training/Course"],
      },
    ],
  },
];

export function getResourcesByTag(tag: ResourceTag): ResourceLink[] {
  const out: ResourceLink[] = [];

  function collect(links: ResourceLink[], productName: string) {
    for (const link of links) {
      if (link.tags.includes(tag)) out.push({ ...link, productName });
      if (link.subLinks) collect(link.subLinks, productName);
    }
  }

  for (const product of products) {
    collect(product.customerFacing, product.name);
    collect(product.internal, product.name);
  }

  return out;
}
