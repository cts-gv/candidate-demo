# 🗳️ Campaign Website Template — City Council

A professional single-page campaign website built for GitHub Pages.
Deep navy, warm gold, and bold red. Clean, trustworthy, approachable.
All content managed from one config file.

---

## 🚀 Quick Start

```
/
├── index.html        ← Single page — rarely needs editing
├── css/style.css     ← All styles
├── js/
│   ├── config.js     ← ★ EDIT THIS FILE for all content
│   └── main.js       ← All behavior
├── images/           ← Your photos go here
└── README.md
```

**Go live:** GitHub repo → Settings → Pages → main branch → Save

---

## ✏️ What to Edit in config.js

### Candidate Info
```js
candidate: {
  firstName: "Sarah",
  lastName:  "Mitchell",
  fullName:  "Sarah Mitchell",
  office:    "City Council",
  district:  "District 4",   // set "" to hide
  city:      "Millbrook",
  slogan:    "A Voice for Every Neighbor",
}
```

### Election Date
```js
election: {
  date:    "November 4, 2025",  // displayed on site
  dateIso: "2025-11-04",        // drives the countdown timer
}
```

### Colors
```js
colors: {
  primary:      "#0A2463",  // Navy
  secondary:    "#C9A84C",  // Gold
  accent:       "#E63946",  // Red (CTA buttons)
  // etc.
}
```

### Photos
```js
photos: {
  hero:              "images/hero.jpg",      // Full background
  candidateHeadshot: "images/headshot.jpg",  // About section
}
```

### Platform Issues
```js
issues: {
  items: [
    { icon: "🏘️", title: "Housing", body: "Your policy here." },
    // add or remove freely
  ]
}
```

### Events
```js
events: {
  items: [
    { date: "2025-10-12", day: "Sunday", time: "2:00 PM",
      title: "Meet & Greet", location: "Community Center",
      address: "210 Oak Ave", description: "Come say hello!" },
  ]
  // Set to [] to hide the events section entirely
}
```

### Endorsement Quotes & Organizations
All in `config.js → endorsements.quotes` and `endorsements.organizations`.

---

## 📬 Formspree Contact Form

1. [formspree.io](https://formspree.io) → free account → New Form → "Campaign Contact"
2. Copy endpoint → paste into `config.js → getInvolved.formspreeEndpoint`
3. Yellow setup box disappears automatically

---

## 🎨 Reusing for Another Candidate

Open `config.js` → change candidate name, office, city, colors, issues, events, photos → done.
Every section updates from the config — no HTML edits needed.
