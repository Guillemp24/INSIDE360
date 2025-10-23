/* === ANIMACIONES reveal (aparecer al hacer scroll) === */
(function () {
  const els = document.querySelectorAll('.reveal');

  // Si el navegador no soporta IntersectionObserver, muestra todo sin animación
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('show'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
  );

  els.forEach((el) => io.observe(el));
})();

/* === Toggle menú móvil === */
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobileMenu');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );
}

/* === Header más oscuro al hacer scroll === */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 8) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

/* === Ajustar altura del header para el offset correcto === */
function setHeaderOffset() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const h = header.offsetHeight;
  document.documentElement.style.setProperty('--header-offset', h + 'px');
}
window.addEventListener('load', setHeaderOffset);
window.addEventListener('resize', setHeaderOffset);
