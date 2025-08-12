// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 100,
    });
  }

  // Default active tab
  const firstTab = document.querySelector('.tab-button');
  if (firstTab) firstTab.click();

  // Simple reveal for elements with .reveal-animation
  const revealElements = document.querySelectorAll('.reveal-animation');
  const revealOnScroll = () => {
    revealElements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      const visible = 150;
      if (top < window.innerHeight - visible) el.classList.add('revealed');
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

// Tabs
function openTab(evt, tabName) {
  const tabcontent = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
    tabcontent[i].classList.remove('active');
  }

  const tablinks = document.getElementsByClassName('tab-button');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  const target = document.getElementById(tabName);
  if (target) {
    target.style.display = 'block';
    target.classList.add('active');
  }
  if (evt && evt.currentTarget) {
    evt.currentTarget.className += ' active';
  }

  if (window.AOS) {
    setTimeout(() => AOS.refresh(), 100);
  }
}

// Expose to window for inline onclick
window.openTab = openTab;


