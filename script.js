/* ============================================
   Group A-2 — Berlin Travel Guide
   Shared JavaScript
   ============================================ */

// ---------- Hamburger Menu Toggle ----------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when a link is clicked (mobile UX)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      window.innerWidth <= 768 &&
      nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on Escape key (accessibility)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Reset when resizing back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ---------- Modal Helpers (kept for future use) ----------
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('open');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
  }
});