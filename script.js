/* ============================================================
   DAVINA CHOP — JavaScript
   Animations, Navbar, Menu mobile, Formulaire
   ============================================================ */

'use strict';

/* ── 1. NAVBAR : changement de style au scroll ──────────────── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // vérifier l'état initial
})();


/* ── 2. MENU MOBILE ─────────────────────────────────────────── */
(function initMobileMenu() {
  const btn    = document.getElementById('menuBtn');
  const menu   = document.getElementById('mobileMenu');
  const links  = menu ? menu.querySelectorAll('.mobile-menu__link') : [];
  if (!btn || !menu) return;

  let isOpen = false;

  const toggle = (force) => {
    isOpen = (force !== undefined) ? force : !isOpen;

    btn.classList.toggle('open', isOpen);
    menu.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);

    // Empêcher le scroll du body quand le menu est ouvert
    document.body.style.overflow = isOpen ? 'hidden' : '';

    // Focus trap simple
    links.forEach(l => l.setAttribute('tabindex', isOpen ? '0' : '-1'));
  };

  btn.addEventListener('click', () => toggle());

  // Fermer au clic sur un lien
  links.forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });

  // Fermer avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      toggle(false);
      btn.focus();
    }
  });
})();


/* ── 3. ANIMATIONS AU SCROLL (Intersection Observer) ───────── */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  // Respecter prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // déclencher une seule fois
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach(el => observer.observe(el));
})();


/* ── 4. FORMULAIRE DE CONTACT ───────────────────────────────── */
(function initForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours…';

    // Simulation d'envoi (à remplacer par un vrai appel API / EmailJS / etc.)
    setTimeout(() => {
      success.textContent = '✓ Message envoyé ! Nous vous répondrons sous 24h.';
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Envoyer le message';

      // Effacer le message après 6 secondes
      setTimeout(() => { success.textContent = ''; }, 6000);
    }, 1500);
  });
})();


/* ── 5. LIENS DE NAVIGATION ACTIFS (optionnel) ──────────────── */
(function initActiveLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__links a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.style.color = link.getAttribute('href') === `#${entry.target.id}`
              ? 'var(--gold)'
              : '';
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach(s => observer.observe(s));
})();
