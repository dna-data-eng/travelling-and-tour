/* ==========================================================================
   AKWANTUFUO TRAVEL CONSULT — SITE SCRIPT
   Small, focused modules. Each one does exactly one job and only runs
   if its markup is actually present on the page.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  setYear();
  setupHeaderShadow();
  setupMobileNav();
  setupScrollReveal();
  setupCarousel();
  setupFaqAccordion();
  setupBackToTop();
  setupBookingForm();
});

/* --------------------------------------------------------------------
   Footer copyright year
   -------------------------------------------------------------------- */
function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* --------------------------------------------------------------------
   Header gains a shadow once the page has scrolled past the top
   -------------------------------------------------------------------- */
function setupHeaderShadow() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const toggleShadow = () => header.classList.toggle('scrolled', window.scrollY > 10);
  toggleShadow();
  window.addEventListener('scroll', toggleShadow, { passive: true });
}

/* --------------------------------------------------------------------
   Mobile navigation: hamburger toggle + auto-close on link tap
   -------------------------------------------------------------------- */
function setupMobileNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* --------------------------------------------------------------------
   Fade-and-rise reveal for sections as they enter the viewport
   -------------------------------------------------------------------- */
function setupScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  // Respect users who've asked for reduced motion: show everything immediately.
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    items.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------
   Gallery carousel: one slide at a time, arrows + dots + swipe.
   Slides can be photos or videos (set via data-type on .carousel-slide).
   Any video is paused automatically whenever the carousel moves away
   from it, so nothing keeps playing off-screen.
   -------------------------------------------------------------------- */
function setupCarousel() {
  const carousel = document.getElementById('carousel');
  const track = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  if (!carousel || !track || !dotsWrap || !prevBtn || !nextBtn) return;

  const slides = Array.from(track.children);
  if (!slides.length) return;

  let index = 0;

  // Build one dot per slide.
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function pauseAllVideos() {
    slides.forEach((slide) => {
      const video = slide.querySelector('video');
      if (video) video.pause();
    });
  }

  function goTo(newIndex) {
    pauseAllVideos();
    index = (newIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  prevBtn.addEventListener('click', () => goTo(index - 1));
  nextBtn.addEventListener('click', () => goTo(index + 1));

  // Keyboard arrows while the carousel is focused/hovered.
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goTo(index + 1);
    if (e.key === 'ArrowLeft') goTo(index - 1);
  });

  // Basic touch swipe support for mobile.
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) < 40) return; // ignore small taps
    if (deltaX < 0) goTo(index + 1); else goTo(index - 1);
  });

  goTo(0);
}

/* --------------------------------------------------------------------
   FAQ accordion — one question open at a time
   -------------------------------------------------------------------- */
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close any other open item first.
      faqItems.forEach((other) => {
        other.classList.remove('open');
        other.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
}

/* --------------------------------------------------------------------
   Back-to-top button: appears after scrolling, scrolls smoothly to top
   -------------------------------------------------------------------- */
function setupBackToTop() {
  const btn = document.getElementById('topBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------
   Booking form — this site has no backend, so we build a pre-filled
   mailto: draft rather than pretending to submit somewhere real.
   Swap this for a fetch() call once a backend or form service
   (e.g. Formspree) is connected.
   -------------------------------------------------------------------- */
function setupBookingForm() {
  const form = document.getElementById('bookingForm');
  const successMsg = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const name = data.get('fullName');
    const phone = data.get('phone');
    const email = data.get('email');
    const service = data.get('service');
    const message = data.get('message') || '(none)';

    const subject = encodeURIComponent(`New enquiry: ${service} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`
    );

    window.location.href = `mailto:akwantufuogh@outlook.com?subject=${subject}&body=${body}`;

    if (successMsg) successMsg.classList.add('show');
    form.reset();
  });
}
