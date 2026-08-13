/* ============================================================
   INTRO ANIMATION — "build. test. ship."
   ============================================================ */

function initIntro() {
  var overlay = document.getElementById('intro-overlay');
  if (!overlay) return;

  var words = [
    document.getElementById('intro-w0'),
    document.getElementById('intro-w1'),
    document.getElementById('intro-w2')
  ];

  var current = 0;
  var timeline = [600, 900, 900, 900, 800]; // delays in ms

  function showWord(index) {
    words.forEach(function(w, i) {
      w.classList.remove('is-active', 'is-exiting');
      if (i < index) w.classList.add('is-exiting');
    });
    if (index < words.length) {
      words[index].classList.add('is-active');
    }
  }

  function finish() {
    overlay.classList.add('is-done');
    document.body.style.overflow = '';
    setTimeout(function() {
      overlay.style.display = 'none';
      initHeroTextReveal();
    }, 900);
  }

  // Skip on click
  overlay.addEventListener('click', function() {
    finish();
  });

  // Disable scroll during intro
  document.body.style.overflow = 'hidden';

  // Sequence: pause -> show word 0 -> pause -> exit 0, show 1 -> pause -> exit 1, show 2 -> pause -> finish
  setTimeout(function() {
    showWord(0);
    setTimeout(function() {
      words[0].classList.add('is-exiting');
      words[0].classList.remove('is-active');
      setTimeout(function() {
        showWord(1);
        setTimeout(function() {
          words[1].classList.add('is-exiting');
          words[1].classList.remove('is-active');
          setTimeout(function() {
            showWord(2);
            setTimeout(function() {
              finish();
            }, timeline[4]);
          }, 150);
        }, timeline[3]);
      }, 150);
    }, timeline[1]);
  }, timeline[0]);
}


/* ============================================================
   HERO TEXT REVEAL — character-by-character animation
   ============================================================ */

function initHeroTextReveal() {
  var heading = document.getElementById('hero-name');
  if (!heading) return;

  var html = heading.innerHTML;
  // Wrap each character in a span, preserving <br> tags
  var wrapped = '';
  var charIndex = 0;
  var inTag = false;

  for (var i = 0; i < html.length; i++) {
    if (html[i] === '<') { inTag = true; wrapped += html[i]; continue; }
    if (html[i] === '>') { inTag = false; wrapped += html[i]; continue; }
    if (inTag) { wrapped += html[i]; continue; }
    if (html[i] === ' ') {
      wrapped += ' ';
    } else {
      wrapped += '<span class="char" style="transition-delay:' + (charIndex * 25) + 'ms">' + html[i] + '</span>';
      charIndex++;
    }
  }

  heading.innerHTML = wrapped;

  // Trigger animation after a small delay
  setTimeout(function() {
    var chars = heading.querySelectorAll('.char');
    chars.forEach(function(ch) {
      ch.classList.add('is-visible');
    });
  }, 100);
}


/* ============================================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================================ */

function initScrollReveal() {
  var elements = document.querySelectorAll('.reveal, .reveal-right, .reveal-scale');
  if (!elements.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(function(el) { observer.observe(el); });
}


/* ============================================================
   MOBILE MENU
   ============================================================ */

function initMobileMenu() {
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function() {
    var isOpen = menu.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      menu.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });
}


/* ============================================================
   HEADER HIDE/SHOW ON SCROLL
   ============================================================ */

function initHeaderScroll() {
  var header = document.getElementById('site-header');
  if (!header) return;

  var lastScroll = 0;
  window.addEventListener('scroll', function() {
    var current = window.scrollY;
    if (current <= 56) { header.style.transform = ''; lastScroll = current; return; }
    if (Math.abs(current - lastScroll) < 5) return;
    header.style.transform = current > lastScroll ? 'translateY(-100%)' : 'translateY(0)';
    lastScroll = current;
  }, { passive: true });
}


/* ============================================================
   BACK TO TOP
   ============================================================ */

function initBackToTop() {
  var btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', function() {
    btn.classList.toggle('is-visible', window.scrollY > 600);
  }, { passive: true });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ============================================================
   COMMAND PALETTE — "Ask Tobi"
   ============================================================ */

function initCommandPalette() {
  var overlay = document.getElementById('cmd-overlay');
  var input = document.getElementById('cmd-input');
  var body = document.getElementById('cmd-body');
  var answerBox = document.getElementById('cmd-answer');
  var answerText = document.getElementById('cmd-answer-text');
  var suggestionsBox = document.getElementById('cmd-suggestions');
  if (!overlay || !input) return;

  var selectedIndex = -1;

  // Tobi's personality and knowledge base — all facts from Toby's actual profile
  var introText = "I'm Tobi, a digital version of Oluwatobiloba. I know about his projects, skills, and experience. What would you like to know?";

  var qa = [
    {
      question: 'who is toby',
      keywords: ['who', 'toby', 'tobi', 'oluwatobiloba', 'about him'],
      answer: 'Oluwatobiloba Olatunji is a Computer Engineering student at Covenant University in Lagos, Nigeria. He builds Python APIs, AI applications, event platforms, and the occasional embedded system. Currently interning at Union Bank of Nigeria.'
    },
    {
      question: 'what are his skills',
      keywords: ['skills', 'tech', 'stack', 'tools', 'technologies', 'languages'],
      answer: 'Python is his primary language. He works with FastAPI, Flask, React, scikit-learn, Docker, Supabase, and SQLAlchemy. He writes tests with pytest and documents everything. Also comfortable with AutoCAD and Fusion 360 from his engineering background.'
    },
    {
      question: 'show me his projects',
      keywords: ['projects', 'work', 'portfolio', 'built'],
      answer: 'His main projects include FocusPilot (productivity platform with Chrome extension), a Loan Prediction API (88.62% accuracy), FinSight AI (hackathon build), FedRec (federated learning research), Heroes Conference platform, and an IoT Vehicle Speed Detector. Scroll up to the Work section to see them.',
      action: function() { document.getElementById('work').scrollIntoView({ behavior: 'smooth' }); }
    },
    {
      question: 'what is his education',
      keywords: ['education', 'university', 'school', 'degree', 'cgpa', 'gpa'],
      answer: 'B.Eng. Computer Engineering at Covenant University (2023-2028). CGPA: 4.86/5.0. Coursework includes Intelligent Systems, Software Architecture, Data Structures & Algorithms, Linear Algebra, and Statistical Methods.'
    },
    {
      question: 'how can i contact him',
      keywords: ['contact', 'email', 'reach', 'hire', 'message'],
      answer: 'Email: olatunjitobiloba05@gmail.com. You can also connect on LinkedIn. He is looking for internship opportunities and open to collaboration.',
      action: function() { window.open('mailto:olatunjitobiloba05@gmail.com'); }
    },
    {
      question: 'show me his linkedin',
      keywords: ['linkedin', 'professional'],
      answer: 'Opening his LinkedIn profile...',
      action: function() { window.open('https://www.linkedin.com/in/olatunji-oluwatobiloba-186659291/', '_blank'); }
    },
    {
      question: 'show me his github',
      keywords: ['github', 'code', 'repos', 'repositories'],
      answer: 'Opening his GitHub profile...',
      action: function() { window.open('https://github.com/olatunjitobiloba', '_blank'); }
    },
    {
      question: 'where is he based',
      keywords: ['where', 'based', 'location', 'city', 'country', 'lagos', 'nigeria'],
      answer: 'Lagos, Nigeria. He studies at Covenant University in Ota, Ogun State.'
    },
    {
      question: 'what is his experience',
      keywords: ['experience', 'work history', 'intern', 'job', 'career'],
      answer: 'Currently interning at Union Bank of Nigeria (IT Department). Previously: Graphics Head at CU Technical Crew, Engineering Design Intern (SWEP) at Covenant University, In-Charge of 150+ students at Technical Crew, and Design Engineering Intern at HVAC Solutions Nigeria.',
      action: function() { document.getElementById('log').scrollIntoView({ behavior: 'smooth' }); }
    },
    {
      question: 'what are his hobbies',
      keywords: ['hobbies', 'interests', 'fun', 'free time'],
      answer: 'When he is not coding, he leads visual production for university events as Graphics Head of the Technical Crew. He also enjoys working on hardware projects and engineering design.'
    },
    {
      question: 'tell me a joke',
      keywords: ['joke', 'funny', 'laugh', 'humor'],
      answer: 'Why do programmers prefer dark mode? Because light attracts bugs. ...Toby told me that one. His site is in dark mode, so clearly he is cautious.'
    },
    {
      question: 'surprise me',
      keywords: ['surprise', 'random', 'fun fact', 'interesting'],
      answer: 'Toby placed 2nd in an IoT competition with a vehicle speed detector built using IR sensors and a microcontroller. Not bad for someone who mostly writes Python.'
    },
    {
      question: 'coffee or tea',
      keywords: ['coffee', 'tea', 'drink'],
      answer: 'I am a digital construct, so I do not have taste buds. But Toby would probably need coffee to get through those 4.86 CGPA semesters.'
    },
    {
      question: 'what does he read',
      keywords: ['read', 'books', 'learning', 'study'],
      answer: 'He learns mostly through building projects and documentation. His approach: define the problem, build a small system, test it, document the result, and improve what failed.'
    },
    {
      question: 'what time is it',
      keywords: ['time', 'clock'],
      answer: 'It is ' + new Date().toLocaleTimeString() + ' wherever you are. Time to check out his projects, maybe?'
    }
  ];

  var defaultSuggestions = [
    'who is toby',
    'what are his skills',
    'show me his projects',
    'how can i contact him',
    'what is his experience',
    'what is his education',
    'show me his github',
    'show me his linkedin',
    'where is he based',
    'what are his hobbies',
    'coffee or tea',
    'tell me a joke',
    'what does he read',
    'surprise me',
    'what time is it'
  ];

  function openPalette() {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    input.value = '';
    selectedIndex = -1;
    showIntro();
    renderSuggestions(defaultSuggestions);
    setTimeout(function() { input.focus(); }, 100);
  }

  function closePalette() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    input.value = '';
  }

  function showIntro() {
    answerBox.style.display = 'block';
    answerText.textContent = introText;
  }

  function showAnswer(text) {
    answerBox.style.display = 'block';
    answerText.textContent = text;
  }

  function renderSuggestions(list) {
    suggestionsBox.innerHTML = '';
    selectedIndex = -1;
    list.forEach(function(q, i) {
      var div = document.createElement('div');
      div.className = 'cmd-suggestion';
      div.setAttribute('data-index', i);
      div.innerHTML = '<span>' + q + '</span><span class="cmd-enter">&crarr;</span>';
      div.addEventListener('click', function() { handleQuestion(q); });
      suggestionsBox.appendChild(div);
    });
  }

  function findAnswer(query) {
    var q = query.toLowerCase();
    var best = null;
    var bestScore = 0;

    qa.forEach(function(item) {
      var score = 0;
      item.keywords.forEach(function(kw) {
        if (q.indexOf(kw) !== -1) score++;
      });
      if (score > bestScore) { bestScore = score; best = item; }
    });

    return best;
  }

  function handleQuestion(query) {
    var match = findAnswer(query);
    if (match) {
      showAnswer(match.answer);
      if (match.action) {
        setTimeout(function() { closePalette(); match.action(); }, 600);
      }
    } else {
      showAnswer('Hmm, I do not have a good answer for that. Try asking about Toby\'s skills, projects, education, or experience.');
    }
    input.value = query;

    // Filter suggestions to show remaining
    var remaining = defaultSuggestions.filter(function(s) { return s !== query; });
    renderSuggestions(remaining);
  }

  function updateSelection(items) {
    items.forEach(function(item, i) {
      item.classList.toggle('is-selected', i === selectedIndex);
    });
    if (selectedIndex >= 0 && items[selectedIndex]) {
      items[selectedIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  // Input filtering
  input.addEventListener('input', function() {
    var val = input.value.toLowerCase().trim();
    if (!val) {
      showIntro();
      renderSuggestions(defaultSuggestions);
      return;
    }

    var filtered = defaultSuggestions.filter(function(s) {
      return s.toLowerCase().indexOf(val) !== -1;
    });

    // Also check if any keyword matches
    if (filtered.length === 0) {
      var match = findAnswer(val);
      if (match) {
        filtered = [match.question];
      }
    }

    renderSuggestions(filtered);

    // Live preview answer
    var match = findAnswer(val);
    if (match) {
      showAnswer(match.answer);
    } else {
      answerBox.style.display = 'none';
    }
  });

  // Keyboard navigation
  input.addEventListener('keydown', function(e) {
    var items = suggestionsBox.querySelectorAll('.cmd-suggestion');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
      updateSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, -1);
      updateSelection(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        var q = items[selectedIndex].querySelector('span').textContent;
        handleQuestion(q);
      } else if (input.value.trim()) {
        handleQuestion(input.value.trim());
      }
    }
  });

  // Open triggers
  document.querySelectorAll('.ask-tobi-btn, #ask-tobi-trigger').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      openPalette();
    });
  });

  // Keyboard shortcut: Ctrl+K / Cmd+K
  document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (overlay.classList.contains('is-open')) {
        closePalette();
      } else {
        openPalette();
      }
    }
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closePalette();
    }
  });

  // Close on overlay click (not palette click)
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closePalette();
  });
}


/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
  initIntro();
  initScrollReveal();
  initMobileMenu();
  initHeaderScroll();
  initBackToTop();
  initCommandPalette();
});
