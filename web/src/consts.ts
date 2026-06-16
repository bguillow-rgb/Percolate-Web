// Site-wide constants. Single source of truth for the Astro site.
// Update these as the project evolves; everything else (schema, footer,
// social cards, llms.txt) reads from here.

export const SITE = {
  name: 'Percolate',
  // Legal operating entity behind the app/site. Surfaced in the footer and
  // Organization schema (legalName) for brand-entity consistency, and mirrors
  // the App Store developer display name.
  legalEntity: 'Timberline Ventures LLC',
  tagline: 'Know What You\u2019re Brewing',
  description:
    'Percolate is an iOS app for specialty coffee drinkers. Build your coffee shelf, log structured cupping notes on every bag, scan a label to identify any coffee, take a flavor quiz for roast and origin matches, and get a personal taste profile from the beans you brew.',
  url: 'https://percolateapp.com',
  locale: 'en-US',
  supportEmail: 'support@percolateapp.com',
  // Set when the App Store listing is live. Until then, /download routes to a
  // \u201Ccoming soon\u201D state.
  appStoreUrl: '', // e.g. 'https://apps.apple.com/app/percolate/id0000000000'
  bundleId: 'com.percolate.app',
  appleTeamId: 'ZNS5TNLB2D',
  // Founder / publisher, used for Person and Organization schema. The
  // /about page is the canonical entity anchor.
  founder: {
    name: 'Bob Guillow',
    role: 'Founder',
    sameAs: [
      // Add LinkedIn / X / GitHub when ready. Empty entries are filtered out
      // before rendering so it\u2019s safe to leave them blank.
      // 'https://www.linkedin.com/in/...',
      // 'https://x.com/...',
    ],
  },
  // Organization-level sameAs, canonical identifiers for the brand entity.
  // Used in OrganizationSchema. Add a Wikidata QID when the entity is minted.
  orgSameAs: [],
  // Analytics + tracking. All values come from env vars at build time so
  // local builds and forks don't fire analytics.
  analytics: {
    ga4Id: import.meta.env.PUBLIC_GA4_ID ?? '',
    gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION ?? '',
    indexNowKey: import.meta.env.PUBLIC_INDEXNOW_KEY ?? '',
  },
  // Brand colors, espresso & cream. Mirrors the in-app palette in
  // config/verticals/percolate.ts. Cream dominates as negative space; espresso
  // ink is the high-contrast hero; gold is rationed to the recommender's voice.
  theme: {
    bg: '#F2E8D5',      // warm cream canvas
    card: '#FCF6EA',    // elevated cream surface
    text: '#231A14',    // espresso ink
    muted: '#6B5C49',   // taupe
    accent: '#C19A53',  // brass gold
    border: '#DBCBAE',
  },
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Blog', href: '/articles' },
  { label: 'About', href: '/about' },
  { label: 'Support', href: '/support' },
];

export const FOOTER_NAV = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Delete Account', href: '/delete-account' },
];
