/**
 * ============================================================
 *  CAMPAIGN SITE CONFIG — EDIT EVERYTHING HERE
 *  All photos, text, colors, issues, events, and links
 *  live in this file. No need to touch index.html.
 * ============================================================
 */

const SITE = {

  // ── CANDIDATE INFO ───────────────────────────────────────
  candidate: {
    firstName:  "Sarah",
    lastName:   "Mitchell",
    fullName:   "Sarah Mitchell",
    office:     "City Council",
    district:   "District 4",             // ← update or set "" to hide
    city:       "Grandview",
    state:      "Washington",
    party:      "",                        // ← e.g. "Democrat" / "Republican" / "" to hide
    slogan:     "A Voice for Every Neighbor",
    tagline:    "Experienced. Accountable. Ready to Serve.",
    email:      "sarah@sarahmitchell.com", // ← update
    phone:      "(509) 555-0198",          // ← update
    donateUrl:  "#donate",                 // ← update to real donation link
    volunteerUrl: "#volunteer",            // ← update to real signup link
  },

  // ── ELECTION INFO ────────────────────────────────────────
  election: {
    date:       "November 4, 2025",        // ← update
    dateIso:    "2025-11-04",              // ← update (YYYY-MM-DD)
    primaryDate:"August 5, 2025",          // ← update or set "" to hide
    pollsOpen:  "7:00 AM – 8:00 PM",
    pollsNote:  "Polls open Election Day. Vote by mail ballots must be postmarked by November 4.",
  },

  // ── COLORS ───────────────────────────────────────────────
  // Change any hex value to retheme the entire site instantly.
  colors: {
    primary:       "#0A2463",   // Deep navy — headers, buttons, accents
    primary_light: "#1A3A8F",   // Medium navy — hover states
    secondary:     "#C9A84C",   // Warm gold — accents, highlights
    accent:        "#E63946",   // Bold red — call-to-action buttons
    accent_light:  "#FF6B6B",   // Lighter red — CTA hover
    dark:          "#050F2E",   // Near-black navy — footer
    light:         "#F4F7FB",   // Cool off-white — page background
    card_bg:       "#FFFFFF",   // Card backgrounds
    text:          "#1A1A2E",   // Dark text
    text_light:    "#4A5568",   // Secondary text
    hero_overlay:  "rgba(5,15,46,0.68)"  // Hero image overlay
  },

  // ── PHOTOS ───────────────────────────────────────────────
  // HOW TO CHANGE PHOTOS:
  //   1. Upload photo to /images/ folder in GitHub
  //   2. Update the path below, e.g. "images/candidate.jpg"

  photos: {
    hero:          "images/coming-soon.jpg",        // Full-width hero background
    candidateHeadshot: "images/coming-soon.jpg",// Headshot in About section
    about:         "images/about.jpg",       // Second about section photo (optional)
  },

  // ── PLACEHOLDERS ─────────────────────────────────────────
  placeholderHero:      "https://placehold.co/1600x800/0A2463/ffffff?text=Add+Hero+Photo",
  placeholderHeadshot:  "https://placehold.co/500x600/0A2463/ffffff?text=Candidate+Photo",
  placeholderAbout:     "https://placehold.co/700x500/C9A84C/ffffff?text=Photo",

  // ── HERO SECTION ─────────────────────────────────────────
  hero: {
    eyebrow:   "Vote",                       // Small text above name
    heading:   "Sarah Mitchell",             // Main headline — usually candidate name
    subheading:"for Millbrook City Council", // Office line
    caption:   "A Voice for Every Neighbor", // Slogan
    ctaPrimary:   { label: "Get Involved",   href: "#volunteer" },
    ctaSecondary: { label: "Learn More",     href: "#about" },
  },

  // ── ABOUT SECTION ────────────────────────────────────────
  about: {
    title:    "Meet Sarah",
    subtitle: "Millbrook resident, community leader, and your neighbor.",

    // ↓ Replace with real candidate bio
    paragraphs: [
      "Sarah Mitchell has called Millbrook home for over 20 years. As a small business owner, PTA president, and longtime volunteer with the Millbrook Food Bank, she understands the challenges everyday families face — because she faces them too.",
      "After watching city decisions made without input from residents like us, Sarah decided it was time to step up. She believes city government should be transparent, accessible, and genuinely accountable to the people it serves.",
      "Sarah will bring fresh energy and a practical, problem-solving approach to City Council — fighting for better roads, safer neighborhoods, local economic opportunity, and a city hall that actually listens."
    ],

    // Quick facts shown as a row of stats
    stats: [
      { number: "20+", label: "Years in Millbrook" },
      { number: "3",   label: "Kids in Local Schools" },
      { number: "100+", label: "Doors Knocked" },
      { number: "0",   label: "Special Interests" },
    ]
  },

  // ── ISSUES / PLATFORM ────────────────────────────────────
  issues: {
    title:    "The Issues",
    subtitle: "What Sarah will fight for on Day One.",

    // Add, edit, or remove issues freely
    items: [
      {
        icon:  "🏘️",
        title: "Affordable Housing",
        body:  "Work with developers and nonprofit partners to increase the supply of workforce and starter homes. No neighborhood should be priced out of reach for the families who built it."
      },
      {
        icon:  "🛣️",
        title: "Roads & Infrastructure",
        body:  "Prioritize road repairs, sidewalk improvements, and safe routes to school. Basic infrastructure is not a luxury — it's a promise we make to every resident."
      },
      {
        icon:  "💼",
        title: "Local Economy",
        body:  "Cut red tape for small businesses, support the downtown district, and attract good-paying jobs that keep our young people here in Millbrook."
      },
      {
        icon:  "🌳",
        title: "Parks & Public Spaces",
        body:  "Invest in parks, green spaces, and community gathering places that bring neighbors together and make Millbrook a great place to raise a family."
      },
      {
        icon:  "🏫",
        title: "Public Safety",
        body:  "Support our police and fire departments with the resources they need. Work with community partners on prevention and mental health to address root causes of crime."
      },
      {
        icon:  "📋",
        title: "Transparent Government",
        body:  "Live-stream all council meetings, publish clear budget summaries, and hold regular town halls so every resident has a seat at the table — not just those with lobbyists."
      }
    ]
  },

  // ── ENDORSEMENTS ─────────────────────────────────────────
  endorsements: {
    title:    "Who Supports Sarah",
    subtitle: "Voices from across our community.",

    quotes: [
      {
        text:   "Sarah has been showing up for this community long before she decided to run. She listens, she follows through, and she genuinely cares. Millbrook needs more leaders like her.",
        name:   "Tom Rivera",
        title:  "Local Business Owner"
      },
      {
        text:   "As a teacher in this district, I've seen how city decisions impact our schools. Sarah understands the connection and has concrete plans to make things better for our kids.",
        name:   "Denise Park",
        title:  "Millbrook Elementary Teacher"
      },
      {
        text:   "I've known Sarah for fifteen years. Her integrity is unmatched. She says what she means and means what she says — that's rare in politics at any level.",
        name:   "Pastor James Okafor",
        title:  "Community Leader"
      }
    ],

    // Organization endorsements — set to [] to hide this section
    organizations: [
      "Millbrook Teachers Association",
      "Small Business Alliance of Millbrook",
      "Millbrook Fire Fighters Local 412",
      "Millbrook Environmental Coalition"
    ]
  },

  // ── EVENTS ───────────────────────────────────────────────
  events: {
    title:    "Upcoming Events",
    subtitle: "Come meet Sarah in person.",

    // Add, edit, or remove events freely
    // Set to [] to hide the events section entirely
    items: [
      {
        date:     "October 12, 2025",
        day:      "Sunday",
        time:     "2:00 PM – 4:00 PM",
        title:    "Community Meet & Greet",
        location: "Millbrook Community Center",
        address:  "210 Oak Avenue, Millbrook",
        description: "Join Sarah for coffee and conversation. Bring your questions and ideas!"
      },
      {
        date:     "October 19, 2025",
        day:      "Sunday",
        time:     "6:30 PM – 8:00 PM",
        title:    "Neighborhood Town Hall",
        location: "District 4 Library Branch",
        address:  "88 Elm Street, Millbrook",
        description: "An open forum on the issues that matter most to District 4 residents."
      },
      {
        date:     "October 26, 2025",
        day:      "Saturday",
        time:     "10:00 AM – 12:00 PM",
        title:    "Volunteer Canvassing Day",
        location: "Campaign Headquarters",
        address:  "504 Main Street, Millbrook",
        description: "Help knock doors and spread the word! Training provided, coffee and snacks included."
      }
    ]
  },

  // ── GET INVOLVED ─────────────────────────────────────────
  getInvolved: {
    title:    "Get Involved",
    subtitle: "Every door knocked, every sign planted, and every dollar donated makes a difference.",

    volunteer: {
      title:       "Volunteer",
      description: "Join our team of neighbors helping Sarah win. Canvass, phone bank, or help at events — every hour counts.",
      buttonLabel: "Sign Up to Volunteer",
      url:         "#",   // ← update to real volunteer signup URL
    },

    donate: {
      title:       "Donate",
      description: "Contributions from neighbors like you fund yard signs, mailers, and the grassroots work it takes to win a local race.",
      buttonLabel: "Donate Now",
      url:         "#",   // ← update to real donation page URL
      disclaimer:  "Contributions are subject to local campaign finance limits. Paid for by Friends of Sarah Mitchell."
    },

    // Contact form — Formspree
    // 1. Go to formspree.io → New Form → "Campaign Contact"
    // 2. Copy endpoint and paste below:
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",  // ← REPLACE

    successMessage: "Thank you! We'll be in touch soon. Together we'll win this! 🇺🇸"
  },

  // ── SOCIAL MEDIA ─────────────────────────────────────────
  social: {
    facebook:  "https://facebook.com",   // ← update or set "" to hide
    twitter:   "https://twitter.com",    // ← update or set "" to hide
    instagram: "https://instagram.com",  // ← update or set "" to hide
  },

  // ── NAVIGATION ───────────────────────────────────────────
  nav: [
    { label: "About",       href: "#about" },
    { label: "Issues",      href: "#issues" },
    { label: "Endorsements",href: "#endorsements" },
    { label: "Events",      href: "#events" },
    { label: "Get Involved",href: "#get-involved" },
  ],

  // ── FOOTER ───────────────────────────────────────────────
  footer: {
    disclaimer: "Paid for by Friends of Sarah Mitchell. Not authorized by any candidate or candidate's committee.",
    copy:       "© 2025 Sarah Mitchell for City Council. All rights reserved."
  }

};

window.SITE = SITE;
