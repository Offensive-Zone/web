// ============================================================
// Offensive Zone — site behaviour
// ============================================================

document.getElementById('year').textContent = new Date().getFullYear();

/* ---- nav scroll state ---- */
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 40) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---- mobile nav toggle ---- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);

/* ---- scroll reveal ---- */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

/* ---- radar sweep animation (respects reduced motion) ---- */
const sweep = document.getElementById('sweep');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (sweep && !prefersReduced) {
  let angle = 0;
  const spin = () => {
    angle = (angle + 0.15) % 360;
    sweep.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(spin);
  };
  requestAnimationFrame(spin);
}

/* ---- contact form ----
   NOTE for deploy: this currently only simulates a submission.
   Wire it to a real backend (Formspree, EmailJS, or your own
   endpoint) before going live — search for "TODO: backend" below. */
const form = document.getElementById('contactForm');
const msgOk = document.getElementById('msgOk');
const msgErr = document.getElementById('msgErr');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  msgOk.classList.remove('show');
  msgErr.classList.remove('show');

  if (!form.checkValidity()) {
    msgErr.textContent = 'Completa todos los campos antes de enviar.';
    msgErr.classList.add('show');
    return;
  }

  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;

  try {
    // TODO: backend — replace this block with a real fetch() call to
    // your form endpoint (e.g. Formspree, EmailJS, or a serverless function).
    await new Promise(resolve => setTimeout(resolve, 700));

    msgOk.classList.add('show');
    form.reset();
  } catch (err) {
    msgErr.textContent = 'Error de red. Intente de nuevo.';
    msgErr.classList.add('show');
  } finally {
    submitBtn.textContent = 'Enviar mensaje';
    submitBtn.disabled = false;
  }
});
