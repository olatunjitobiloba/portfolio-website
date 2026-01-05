// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  if (cursor) {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  }
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  
  if (cursorFollower) {
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
  }
  
  requestAnimationFrame(animateFollower);
}

animateFollower();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;
    
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Project card interactions
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    if (cursor) {
      cursor.style.width = '60px';
      cursor.style.height = '60px';
      cursor.style.borderColor = '#478BEB';
    }
  });
  
  card.addEventListener('mouseleave', () => {
    if (cursor) {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.borderColor = '#478BEB';
    }
  });
});

// Wrap numeric value and suffix into separate spans so we can style the suffix
const wrapStatElements = () => {
  document.querySelectorAll('.stat-number').forEach(el => {
    const text = el.textContent.trim();
    const m = text.match(/^([0-9.,]+)(.*)$/);
    if (m) {
      const value = m[1];
      const suffix = m[2] || '';
      el.dataset.original = text;
      el.innerHTML = `<span class="stat-value">${value}</span><span class="stat-suffix">${suffix}</span>`;
    }
  });
};

// Number animation that updates only the numeric span
const animateCounter = (element) => {
  const original = element.dataset.original || element.textContent.trim();
  const isPercentage = original.includes('%');
  const isDollar = original.includes('$');
  const decimalMatch = original.match(/\d+\.\d+/);
  const isDecimal = decimalMatch !== null;

  let numericValue;
  if (isDollar) {
    numericValue = parseFloat(original.replace('$', '').replace('M', ''));
  } else if (isPercentage) {
    numericValue = parseFloat(original.replace('%', ''));
  } else if (isDecimal) {
    numericValue = parseFloat(original);
  } else {
    numericValue = parseInt(original.replace(/\D/g, ''));
  }
  if (isNaN(numericValue)) return;

  const duration = 2000;
  const steps = 60;
  const increment = numericValue / steps;
  let current = 0;

  const valueSpan = element.querySelector('.stat-value');
  const suffixSpan = element.querySelector('.stat-suffix');

  const timer = setInterval(() => {
    current += increment;
    if (current >= numericValue) { current = numericValue; clearInterval(timer); }

    if (isPercentage && isDecimal) {
      valueSpan.textContent = current.toFixed(2);
    } else if (isDecimal && !isDollar && !isPercentage) {
      valueSpan.textContent = current.toFixed(2);
    } else if (isDollar) {
      valueSpan.textContent = Math.floor(current);
    } else {
      valueSpan.textContent = Math.floor(current);
    }

    // suffixSpan already contains the original suffix (%, M, +, etc.) so we leave it.
  }, duration / steps);
};

// prepare elements then observe and trigger animation once
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
  }, { threshold: 0.5 });
  observer.observe(statsGrid);
}