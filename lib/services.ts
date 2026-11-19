// The eight service areas. Each one drives a medallion, a section on /services,
// a detail page and its rows on /pricing. Prices are "from" prices, excluding VAT where it applies.

export type Price = { zar: number; usd: number; per: "month" | "once" | "plan" | "workshop" | "project" };
export type Offer = { name: string; detail: string; price: Price };
export type Service = {
  slug: string;
  title: string;
  short: string;
  kind: "Core plan" | "Monthly add on" | "Specialist service";
  blurb: string;
  who: string;
  gets: string[];
  offers: Offer[];
};

export const SERVICES: Service[] = [
  {
    slug: "compliance-desk",
    title: "Compliance desk",
    short: "Compliance",
    kind: "Core plan",
    blurb: "Your data protection office, run for you every month: POPIA and PAIA in South Africa, the NDPA in Nigeria and the GDPR for European work.",
    who: "Firms, NGOs, schools, colleges and public bodies that hold personal information and have no full time information officer.",
    gets: [
      "Your PAIA manual, privacy notice and data protection policies kept current",
      "A data map of the personal information you hold, reviewed as you change",
      "Help on the day with access requests, complaints and suspected breaches",
      "Annual reports and filings prepared on time, with reminders well before each deadline",
    ],
    offers: [
      { name: "Essentials", detail: "Up to about 25 staff. Quarterly check in, documents kept current, breach help by email.", price: { zar: 2950, usd: 165, per: "month" } },
      { name: "Growth", detail: "Up to about 100 staff. Monthly check in, data map upkeep, quarterly staff awareness session.", price: { zar: 6500, usd: 365, per: "month" } },
      { name: "Institution", detail: "Universities, public bodies and larger organisations. Support for deputy information officers and twice yearly council reports.", price: { zar: 12500, usd: 695, per: "month" } },
    ],
  },
  {
    slug: "records-care",
    title: "Records care",
    short: "Records",
    kind: "Monthly add on",
    blurb: "A file plan, retention schedule and register that stay in step with how your organisation actually works.",
    who: "Any organisation whose shared drives, inboxes and paper files have grown faster than its filing rules.",
    gets: [
      "A file plan and naming rules your teams can follow",
      "A retention schedule, so records are kept as long as required and no longer",
      "A register of what you hold and where it sits",
      "A quarterly review with a short report on what changed",
    ],
    offers: [
      { name: "Records care plan", detail: "Ongoing upkeep of the file plan, register and retention reviews.", price: { zar: 1950, usd: 110, per: "month" } },
      { name: "Records set up", detail: "First file plan, retention schedule and register, built with your team.", price: { zar: 9500, usd: 530, per: "project" } },
    ],
  },
  {
    slug: "automation-care",
    title: "Automation care",
    short: "Automation",
    kind: "Monthly add on",
    blurb: "Routine admin moved onto automations that run on the tools you already use, and a clean house before AI tools are switched on.",
    who: "Teams that retype the same details, chase the same documents or want AI tools without exposing confidential files.",
    gets: [
      "Automations for intake, reminders, document filing and follow ups, built on n8n",
      "Monitoring and fixes when one of your tools changes",
      "A clean up of files and permissions before AI assistants go live",
      "A written AI use policy your staff can follow",
    ],
    offers: [
      { name: "Automation care plan", detail: "Hosting, monitoring and monthly improvements to your automations.", price: { zar: 2450, usd: 135, per: "month" } },
      { name: "First automation build", detail: "Scoped in the free consultation and quoted as a fixed price.", price: { zar: 7500, usd: 420, per: "project" } },
    ],
  },
  {
    slug: "training",
    title: "Training and AI literacy",
    short: "Training",
    kind: "Monthly add on",
    blurb: "Practical sessions on records, data protection and responsible AI, plus AI policies for colleges and universities.",
    who: "Staff teams, records officers, librarians and academic departments, online or on site.",
    gets: [
      "Live sessions pitched at your team's level, with materials they keep",
      "Short refresher sessions for new staff",
      "An AI use policy and guidelines written for your institution",
      "Attendance records for your skills development file",
    ],
    offers: [
      { name: "Training membership", detail: "One live session a month for your team plus the template library.", price: { zar: 1450, usd: 80, per: "month" } },
      { name: "Workshop", detail: "Half day workshop for up to 25 people, online or on site.", price: { zar: 8500, usd: 475, per: "workshop" } },
      { name: "AI policy and guidelines pack", detail: "Drafted with your staff and students, ready for your governance committee.", price: { zar: 18500, usd: 1030, per: "project" } },
    ],
  },
  {
    slug: "research-data",
    title: "Research data and open science",
    short: "Research data",
    kind: "Specialist service",
    blurb: "Data management plans and open science support for researchers and research offices.",
    who: "Researchers applying for funding, postgraduate offices and research offices preparing for South Africa's National Open Science Policy.",
    gets: [
      "Data management plans written or reviewed against your funder's requirements",
      "Repository, metadata and file format choices that keep data findable and reusable",
      "Consent and privacy wording that fits POPIA",
      "Workshops for research offices and postgraduate students",
    ],
    offers: [
      { name: "Data management plan review", detail: "Written feedback and a corrected plan.", price: { zar: 1800, usd: 100, per: "plan" } },
      { name: "Research data workshop", detail: "Half day session for researchers or postgraduates.", price: { zar: 9500, usd: 530, per: "workshop" } },
      { name: "Research office desk", detail: "Monthly support for a research office: plan reviews, queries and guidance.", price: { zar: 4500, usd: 250, per: "month" } },
    ],
  },
  {
    slug: "journal-publishing",
    title: "Journal publishing support",
    short: "Journals",
    kind: "Specialist service",
    blurb: "Open Journal Systems set up and care, and a clear path toward DOAJ, Crossref and accredited index listings.",
    who: "Journal editors, faculties and learned societies running or starting a scholarly journal.",
    gets: [
      "An indexing readiness review against DOAJ and accredited list criteria",
      "Open Journal Systems configured for DOIs, ORCID and metadata export",
      "Editorial policies and author guidelines that reviewers expect",
      "Monthly upkeep of the platform and each new issue",
    ],
    offers: [
      { name: "Indexing readiness review", detail: "A scored review with a prioritised fix list.", price: { zar: 8500, usd: 475, per: "once" } },
      { name: "Journal care plan", detail: "Platform upkeep, issue publishing support and metadata checks.", price: { zar: 2500, usd: 140, per: "month" } },
    ],
  },
  {
    slug: "library-systems",
    title: "Library systems",
    short: "Library systems",
    kind: "Specialist service",
    blurb: "Koha library management set up, migrated and supported, so small libraries are not left without technical help.",
    who: "School, college, church, NGO and special libraries that need a modern catalogue without licence fees.",
    gets: [
      "Koha installed, configured and branded for your library",
      "Your existing catalogue and borrower records migrated",
      "Staff trained on cataloguing, circulation and reports",
      "Backups, upgrades and support every month",
    ],
    offers: [
      { name: "Koha set up and migration", detail: "Installation, data migration and staff training.", price: { zar: 15000, usd: 835, per: "project" } },
      { name: "Koha care plan", detail: "Hosting, backups, upgrades and support.", price: { zar: 1950, usd: 110, per: "month" } },
    ],
  },
  {
    slug: "digitisation",
    title: "Digitisation and archive grants",
    short: "Digitisation",
    kind: "Specialist service",
    blurb: "Grant applications for at risk archives, then digitisation, cataloguing and online access built on IIIF.",
    who: "Archives, museums, universities and community collections with material at risk of loss.",
    gets: [
      "An eligibility check against open archive grant calls",
      "A grant application written with you, budget included",
      "Digitisation and cataloguing standards for the project team",
      "Online access through IIIF image viewers that scholars can cite",
    ],
    offers: [
      { name: "Grant application partnership", detail: "From first draft to submission for one call.", price: { zar: 12000, usd: 670, per: "project" } },
      { name: "Digitisation project", detail: "Quoted once the collection is assessed.", price: { zar: 0, usd: 0, per: "project" } },
    ],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const CORE = SERVICES[0];
