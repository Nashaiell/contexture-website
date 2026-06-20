// Nav burger toggle
const nav = document.querySelector('nav');
const burger = document.querySelector('.nav-burger');
if (burger) {
  burger.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('.nav-links a, .nav-cta').forEach(el =>
    el.addEventListener('click', () => nav.classList.remove('open'))
  );
}

// Support form — mailto fallback
const form = document.querySelector('.support-form form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.querySelector('[name=name]')?.value || '';
    const email   = form.querySelector('[name=email]')?.value || '';
    const subject = form.querySelector('[name=subject]')?.value || 'ConTexture Support';
    const message = form.querySelector('[name=message]')?.value || '';
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:rygelmir@outlook.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
}
