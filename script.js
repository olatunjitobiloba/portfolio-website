/* oluwatobiloba.olatunji — portfolio
   vanilla js · no deps · respects prefers-reduced-motion */

(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const header = $('#site-header');
  const menuToggle = $('#menu-toggle');
  const mobileMenu = $('#mobile-menu');
  const navLinks = $$('.nav-desktop a');
  const sections = $$('main section[id]');

  /* ---------- header scroll state ---------- */
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 8);
    lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- reveal on scroll ---------- */
  const revealTargets = $$('.section, .hero, .metrics-strip, .work-item, .extra-link, .log-row');
  revealTargets.forEach(el => el.classList.add('reveal'));

  if (reduceMotion) {
    revealTargets.forEach(el => el.classList.add('visible'));
  } else {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealTargets.forEach(el => io.observe(el));
  }

  /* ---------- counters in metrics strip ---------- */
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    if (isNaN(target)) return;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const decimals = (el.dataset.count.split('.')[1] || '').length;
    const duration = 1200;
    const start = performance.now();

    if (reduceMotion) {
      el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
      return;
    }

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = target * eased;
      el.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const metricsSection = $('.metrics-strip');
  if (metricsSection) {
    const mo = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $$('.metric-num[data-count]', entry.target).forEach(animateCount);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    mo.observe(metricsSection);
  }

  /* ---------- active nav highlight ---------- */
  const setActiveNav = () => {
    const offset = window.innerHeight * 0.35;
    let currentId = '';
    sections.forEach(sec => {
      if (sec.getBoundingClientRect().top <= offset) currentId = sec.id;
    });
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${currentId}`);
    });
  };
  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();

  /* ---------- mobile menu ---------- */
  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    if (mobileMenu) mobileMenu.setAttribute('aria-hidden', 'true');
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      menuToggle.setAttribute('aria-expanded', String(open));
      mobileMenu.setAttribute('aria-hidden', String(!open));
      if (open) {
        const firstMenuLink = $('a', mobileMenu);
        if (firstMenuLink) firstMenuLink.focus();
      }
    });
    $$('a', mobileMenu).forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
        closeMenu();
        menuToggle.focus();
      }
    });

    const desktopViewport = window.matchMedia('(min-width: 641px)');
    const closeMenuAtDesktop = (event) => {
      if (event.matches && document.body.classList.contains('menu-open')) {
        closeMenu();
        menuToggle.focus();
      }
    };

    if (desktopViewport.addEventListener) {
      desktopViewport.addEventListener('change', closeMenuAtDesktop);
    } else {
      desktopViewport.addListener(closeMenuAtDesktop);
    }
  }

  /* ---------- smooth scroll for in-page anchors ---------- */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = $(targetId);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      target.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start'
      });
    });
  });

  /* ---------- signature interaction:
     hovering hero-card briefly highlights matching live-list link
     (subtle, single instance) ---------- */
  const card = $('.hero-card');
  if (card && !reduceMotion) {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 4;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 4;
      card.style.transform = `translateY(-12px) rotateX(${-y}deg) rotateY(${x}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(-12px)';
    });
  }
})();
