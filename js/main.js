// ── XAS-HR Site JS ───────────────────────────────────────────────

// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Contact form handler
const form = document.getElementById('contact-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('.form-submit');
  btn.textContent = 'Message sent ✓';
  btn.style.background = '#1B3A5C';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
    btn.disabled = false;
    form.reset();
  }, 3000);
});

// Smooth reveal on scroll (lightweight, no library)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .why-card, .process-step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ── Dark mode + Floating buttons ──────────────────────────────────
(function () {
  const root = document.documentElement;
  root.setAttribute('data-theme', localStorage.getItem('xas-theme') || 'light');

  function toggleTheme() {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('xas-theme', next);
    updateIcon();
  }

  function updateIcon() {
    const btn = document.getElementById('btn-theme');
    if (btn) btn.textContent = root.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  }

  function updateScroll() {
    const y   = window.scrollY;
    const max = document.body.scrollHeight - window.innerHeight;
    const up  = document.getElementById('btn-up');
    const dn  = document.getElementById('btn-dn');
    if (!up || !dn) return;
    up.style.opacity      = y > 200 ? '1' : '0';
    up.style.pointerEvents = y > 200 ? 'auto' : 'none';
    dn.style.opacity      = y < max - 200 ? '1' : '0';
    dn.style.pointerEvents = y < max - 200 ? 'auto' : 'none';
  }

  document.addEventListener('DOMContentLoaded', function () {
    const ui = document.createElement('div');
    ui.id = 'xas-float';
    ui.innerHTML =
      '<button id="btn-up"    onclick="window.scrollTo({top:0,behavior:\'smooth\'})">↑</button>' +
      '<button id="btn-theme" onclick="window.__xasToggle()">🌙</button>' +
      '<button id="btn-dn"    onclick="window.scrollTo({top:document.body.scrollHeight,behavior:\'smooth\'})">↓</button>';
    document.body.appendChild(ui);
    updateIcon();
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
  });

  window.__xasToggle = toggleTheme;
})();
