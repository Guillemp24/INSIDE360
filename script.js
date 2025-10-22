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
