
// ── Custom Cursor ──
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  if (cursor) { cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px'; }
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  if (cursorFollower) { cursorFollower.style.left = followerX + 'px'; cursorFollower.style.top = followerY + 'px'; }
  requestAnimationFrame(animateFollower);
}
animateFollower();

// ── Mobile Nav Toggle ──
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ── Smooth Scrolling ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Scroll Reveal ──
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < windowHeight - 80) el.classList.add('active');
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ── Project Card Cursor Effect ──
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => { if (cursor) { cursor.style.width = '55px'; cursor.style.height = '55px'; } });
  card.addEventListener('mouseleave', () => { if (cursor) { cursor.style.width = '20px'; cursor.style.height = '20px'; } });
});

// ── Stat Counter Animation ──
const wrapStatElements = () => {
  document.querySelectorAll('.stat-number').forEach(el => {
    const text = el.dataset.original || el.textContent.trim();
    const m = text.match(/^([^0-9]*)([0-9.,]+)(.*)$/);
    if (m) {
      el.dataset.original = text;
      el.dataset.prefix = m[1];
      el.dataset.value = m[2];
      el.dataset.suffix = m[3];
      el.innerHTML = `<span class="stat-prefix">${m[1]}</span><span class="stat-value">${m[2]}</span><span class="stat-suffix">${m[3]}</span>`;
    }
  });
};

const animateCounter = (element) => {
  const original = element.dataset.original || element.textContent.trim();
  const valueStr = element.dataset.value || '';
  const suffix = element.dataset.suffix || '';
  const prefix = element.dataset.prefix || '';
  const isDecimal = valueStr.includes('.');
  const numericValue = parseFloat(valueStr.replace(/,/g, ''));
  if (isNaN(numericValue)) return;

  const duration = 2000, steps = 60;
  const increment = numericValue / steps;
  let current = 0;
  const valueSpan = element.querySelector('.stat-value');
  if (!valueSpan) return;

  const timer = setInterval(() => {
    current += increment;
    if (current >= numericValue) { current = numericValue; clearInterval(timer); }
    valueSpan.textContent = isDecimal ? current.toFixed(2) : Math.floor(current).toLocaleString();
  }, duration / steps);
};

wrapStatElements();
const statsGrid = document.querySelector('.stats-grid');
if (statsGrid) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-number').forEach(el => animateCounter(el));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  observer.observe(statsGrid);
}

// ── Active Nav Highlight on Scroll ──
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) current = section.getAttribute('id');
  });
  navItems.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--primary)' : '';
  });
});

