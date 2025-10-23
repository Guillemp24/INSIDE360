// === Menú móvil ===
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobileMenu');

if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// === Efecto revelar (.reveal) al hacer scroll ===
(function () {
  const elements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('show'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
  );

  elements.forEach(el => observer.observe(el));
})();

// === Evitar que el hero tape las secciones ===
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const header = document.querySelector(".site-header");
  if (hero && header) {
    const headerHeight = header.offsetHeight;
    hero.style.marginTop = `-${headerHeight}px`;
    hero.style.paddingTop = `${headerHeight}px`;
  }
});
