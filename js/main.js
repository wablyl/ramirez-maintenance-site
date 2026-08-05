// ===========================================================
// Mobile nav toggle
// ===========================================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu when a link is tapped
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ===========================================================
// Quote form submission (Formspree)
//
// SETUP: Create a free form at https://formspree.io, then replace
// YOUR_FORM_ID below (and in quote.html's form action, as a fallback
// for JS-disabled browsers) with your real endpoint.
// ===========================================================
const quoteForm = document.querySelector('#quote-form');

if (quoteForm) {
  const statusEl = document.querySelector('#form-status');

  quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = quoteForm.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const response = await fetch(quoteForm.action, {
        method: 'POST',
        body: new FormData(quoteForm),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        statusEl.textContent = "Thanks — we'll get back to you within one business day.";
        statusEl.className = 'form-status visible success';
        quoteForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      statusEl.textContent = 'Something went wrong. Please call or email us directly — see contact info above.';
      statusEl.className = 'form-status visible error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
}

// ===========================================================
// Mark current page's nav link as active
// ===========================================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage) link.classList.add('active');
});
