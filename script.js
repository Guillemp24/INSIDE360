const onScroll = () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('show');
    }
  });
};
document.addEventListener('scroll', onScroll);
document.addEventListener('DOMContentLoaded', onScroll);
// Toggle menú móvil
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobileMenu');
if (toggle && mobileMenu){
  toggle.addEventListener('click', ()=> mobileMenu.classList.toggle('open'));
}

// Header más oscuro al hacer scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', ()=>{
  if (window.scrollY > 8) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});
/* ===== Compensar exactamente la altura del header para evitar huecos ===== */
function setHeaderOffset(){
  const header = document.querySelector('.site-header');
  if(!header) return;
  const h = header.offsetHeight; // altura real del header ahora mismo
  document.documentElement.style.setProperty('--header-offset', h + 'px');
}
window.addEventListener('load', setHeaderOffset);
window.addEventListener('resize', setHeaderOffset);

/* (ya lo tenías) Oscurecer encabezado al hacer scroll */
const headerEl = document.querySelector('.site-header');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 10) headerEl.classList.add('scrolled');
  else headerEl.classList.remove('scrolled');
});
