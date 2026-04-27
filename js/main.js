/**
 * main.js — Campaign Site
 * Handles: CSS vars, nav, content population,
 * countdown, issues, endorsements, events, contact form
 */

document.addEventListener('DOMContentLoaded', () => {
  const S = window.SITE;

  // ── Apply CSS variables ───────────────────────────────────
  const root = document.documentElement;
  root.style.setProperty('--primary',       S.colors.primary);
  root.style.setProperty('--primary-light', S.colors.primary_light);
  root.style.setProperty('--secondary',     S.colors.secondary);
  root.style.setProperty('--accent',        S.colors.accent);
  root.style.setProperty('--accent-light',  S.colors.accent_light);
  root.style.setProperty('--dark',          S.colors.dark);
  root.style.setProperty('--light',         S.colors.light);
  root.style.setProperty('--card-bg',       S.colors.card_bg);
  root.style.setProperty('--text',          S.colors.text);
  root.style.setProperty('--text-light',    S.colors.text_light);
  root.style.setProperty('--hero-overlay',  S.colors.hero_overlay);

  // ── Page title ────────────────────────────────────────────
  document.title = `${S.candidate.fullName} for ${S.candidate.office} — ${S.candidate.city}`;

  // ── Build navigation ─────────────────────────────────────
  const navList = document.getElementById('nav-links');
  if (navList) {
    S.nav.forEach((item, i) => {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href        = item.href;
      a.textContent = item.label;
      if (i === S.nav.length - 1) a.classList.add('nav-cta');
      li.appendChild(a);
      navList.appendChild(li);
    });
  }

  // Nav brand
  setText('nav-brand-name',   S.candidate.fullName);
  setText('nav-brand-office', S.candidate.office + (S.candidate.district ? ' · ' + S.candidate.district : ''));

  // Mobile hamburger
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', document.body.classList.contains('nav-open'));
    });
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => document.body.classList.remove('nav-open'));
    });
  }

  // Active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (sec.getBoundingClientRect().top <= 120) current = sec.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });

  // Top bar social links
  buildSocialLinks('topbar-social', true);

  // ── Hero ─────────────────────────────────────────────────
  const heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    heroBg.style.backgroundImage = `url('${S.photos.hero || S.placeholderHero}')`;
    setTimeout(() => heroBg.classList.add('loaded'), 100);
    window.addEventListener('scroll', () => {
      heroBg.style.transform = `scale(1.04) translateY(${window.scrollY * 0.12}px)`;
    }, { passive: true });
  }

  setText('hero-eyebrow',   S.hero.eyebrow);
  setText('hero-name',      S.hero.heading);
  setText('hero-office',    S.hero.subheading);
  setText('hero-slogan',    S.hero.caption);
  setText('hero-election-date', 'Election Day · ' + S.election.date);

  const ctaPrimary = document.getElementById('hero-cta-primary');
  const ctaSecondary = document.getElementById('hero-cta-secondary');
  if (ctaPrimary)   { ctaPrimary.textContent = S.hero.ctaPrimary.label; ctaPrimary.href = S.hero.ctaPrimary.href; }
  if (ctaSecondary) { ctaSecondary.textContent = S.hero.ctaSecondary.label; ctaSecondary.href = S.hero.ctaSecondary.href; }

  // Countdown
  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    function tick() {
      const diff = new Date(S.election.dateIso + 'T00:00:00') - new Date();
      if (diff <= 0) {
        countdownEl.innerHTML = `<div class="countdown-unit" style="width:100%"><span class="countdown-number" style="font-size:1.2rem">Election Day!</span></div>`;
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      countdownEl.innerHTML = [
        { n: d, l: 'Days' }, { n: h, l: 'Hrs' },
        { n: m, l: 'Min' },  { n: s, l: 'Sec' }
      ].map(u => `
        <div class="countdown-unit">
          <span class="countdown-number">${String(u.n).padStart(2,'0')}</span>
          <span class="countdown-label">${u.l}</span>
        </div>
      `).join('');
    }
    tick();
    setInterval(tick, 1000);
  }

  // ── About ────────────────────────────────────────────────
  const headshot = document.getElementById('candidate-headshot');
  if (headshot) headshot.src = S.photos.candidateHeadshot || S.placeholderHeadshot;

  setText('about-title',    'Meet ' + S.candidate.firstName);
  setText('about-subtitle', S.about.subtitle);

  const aboutParas = document.getElementById('about-paragraphs');
  if (aboutParas) {
    aboutParas.innerHTML = '';
    S.about.paragraphs.forEach(p => {
      const el = document.createElement('p');
      el.textContent = p;
      aboutParas.appendChild(el);
    });
  }

  const statsWrap = document.getElementById('about-stats');
  if (statsWrap) {
    statsWrap.innerHTML = '';
    S.about.stats.forEach(stat => {
      const el = document.createElement('div');
      el.className = 'about-stat fade-in';
      el.innerHTML = `
        <div class="about-stat-number">${stat.number}</div>
        <div class="about-stat-label">${stat.label}</div>
      `;
      statsWrap.appendChild(el);
    });
  }

  // ── Issues ───────────────────────────────────────────────
  setText('issues-title',    S.issues.title);
  setText('issues-subtitle', S.issues.subtitle);

  const issuesGrid = document.getElementById('issues-grid');
  if (issuesGrid) {
    S.issues.items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = `issue-card fade-in fade-delay-${(i % 3) + 1}`;
      card.innerHTML = `
        <span class="issue-icon">${item.icon}</span>
        <h3 class="issue-title">${item.title}</h3>
        <p class="issue-body">${item.body}</p>
      `;
      issuesGrid.appendChild(card);
    });
  }

  // ── Endorsements ─────────────────────────────────────────
  setText('endorsements-title',    S.endorsements.title);
  setText('endorsements-subtitle', S.endorsements.subtitle);

  const quotesGrid = document.getElementById('quotes-grid');
  if (quotesGrid) {
    S.endorsements.quotes.forEach(q => {
      const card = document.createElement('div');
      card.className = 'quote-card fade-in';
      card.innerHTML = `
        <span class="quote-mark">"</span>
        <p class="quote-text">${q.text}</p>
        <div class="quote-name">${q.name}</div>
        <div class="quote-title-label">${q.title}</div>
      `;
      quotesGrid.appendChild(card);
    });
  }

  const orgList = document.getElementById('org-list');
  if (orgList && S.endorsements.organizations.length) {
    S.endorsements.organizations.forEach(org => {
      const tag = document.createElement('span');
      tag.className   = 'org-tag';
      tag.textContent = org;
      orgList.appendChild(tag);
    });
  } else if (orgList) {
    orgList.closest('.org-endorsements')?.remove();
  }

  // ── Events ───────────────────────────────────────────────
  setText('events-title',    S.events.title);
  setText('events-subtitle', S.events.subtitle);

  const eventsList = document.getElementById('events-list');
  if (eventsList) {
    if (!S.events.items.length) {
      document.getElementById('events')?.remove();
    } else {
      S.events.items.forEach(ev => {
        const dateObj   = new Date(ev.date);
        const month     = dateObj.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
        const dayNum    = dateObj.getDate();

        const card = document.createElement('div');
        card.className = 'event-card fade-in';
        card.innerHTML = `
          <div class="event-date-block">
            <div class="event-month">${month}</div>
            <div class="event-day-num">${dayNum}</div>
            <div class="event-weekday">${ev.day}</div>
          </div>
          <div class="event-info">
            <h3 class="event-title">${ev.title}</h3>
            <div class="event-meta">
              <span class="event-meta-item">🕐 ${ev.time}</span>
              <span class="event-meta-item">📍 ${ev.location}</span>
            </div>
            <p class="event-description">${ev.description}</p>
          </div>
        `;
        eventsList.appendChild(card);
      });
    }
  }

  // ── Get Involved ─────────────────────────────────────────
  setText('get-involved-title',    S.getInvolved.title);
  setText('get-involved-subtitle', S.getInvolved.subtitle);

  // Volunteer card
  setText('volunteer-title',  S.getInvolved.volunteer.title);
  setText('volunteer-desc',   S.getInvolved.volunteer.description);
  const volBtn = document.getElementById('volunteer-btn');
  if (volBtn) { volBtn.textContent = S.getInvolved.volunteer.buttonLabel; volBtn.href = S.getInvolved.volunteer.url; }

  // Donate card
  setText('donate-title',       S.getInvolved.donate.title);
  setText('donate-desc',        S.getInvolved.donate.description);
  setText('donate-disclaimer',  S.getInvolved.donate.disclaimer);
  const donateBtn = document.getElementById('donate-btn');
  if (donateBtn) { donateBtn.textContent = S.getInvolved.donate.buttonLabel; donateBtn.href = S.getInvolved.donate.url; }

  // Contact form
  const isConfigured = S.getInvolved.formspreeEndpoint &&
                       !S.getInvolved.formspreeEndpoint.includes('YOUR_FORM_ID');
  if (isConfigured) {
    const note = document.getElementById('contact-setup-note');
    if (note) note.remove();
  }

  const form      = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit');
  const statusEl  = document.getElementById('contact-status');

  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value.trim();
      const msg  = document.getElementById('contact-message')?.value.trim();

      if (!name || !msg) {
        showStatus(statusEl, 'Please fill in your name and message.', 'error');
        return;
      }
      if (!isConfigured) {
        showStatus(statusEl, 'Form not yet configured. See setup instructions above.', 'error');
        return;
      }

      submitBtn.disabled    = true;
      submitBtn.textContent = 'Sending…';

      try {
        const res = await fetch(S.getInvolved.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        if (res.ok) {
          form.reset();
          showStatus(statusEl, S.getInvolved.successMessage, 'success');
          submitBtn.textContent = 'Message Sent ✓';
        } else {
          const data = await res.json();
          const err = data.errors ? data.errors.map(e => e.message).join(', ') : 'Something went wrong.';
          showStatus(statusEl, err, 'error');
          submitBtn.disabled    = false;
          submitBtn.textContent = 'Send Message →';
        }
      } catch {
        showStatus(statusEl, 'Network error — please try again.', 'error');
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Send Message →';
      }
    });
  }

  // ── Footer ───────────────────────────────────────────────
  setText('footer-name',       S.candidate.fullName);
  setText('footer-office',     S.candidate.office + (S.candidate.district ? ' · ' + S.candidate.district : ''));
  setText('footer-disclaimer', S.footer.disclaimer);
  setText('footer-copy',       S.footer.copy);
  buildSocialLinks('footer-social', false);

  // ── Scroll fade-in ────────────────────────────────────────
  const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => fadeObs.observe(el));
  }, 50);

});

// ── Build social links ────────────────────────────────────────
function buildSocialLinks(containerId, small) {
  const S         = window.SITE;
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  const links = [
    { key: 'facebook',  label: '📘 Facebook' },
    { key: 'twitter',   label: '🐦 Twitter' },
    { key: 'instagram', label: '📸 Instagram' }
  ];

  links.forEach(link => {
    const url = S.social[link.key];
    if (!url) return;
    const a = document.createElement('a');
    a.href        = url;
    a.textContent = link.label;
    a.target      = '_blank';
    a.rel         = 'noopener';
    container.appendChild(a);
  });
}

// ── Utilities ─────────────────────────────────────────────────
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function showStatus(el, message, type) {
  if (!el) return;
  el.textContent = message;
  el.className   = 'form-status ' + type;
}
