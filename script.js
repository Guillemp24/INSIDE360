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
