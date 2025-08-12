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
  // Ensure the default active tab is visible even without clicking
  const activeSection = document.querySelector('.tab-content.active');
  if (activeSection) {
    activeSection.style.display = 'block';
  }

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

// Tabs with Tailwind smooth transitions
function openTab(evt, tabName) {
  const tabcontent = document.getElementsByClassName('tab-content');
  const currentActive = document.querySelector('.tab-content.active');
  
  // Fade out current active tab
  if (currentActive) {
    currentActive.classList.remove('opacity-100', 'translate-y-0');
    currentActive.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => {
      currentActive.style.display = 'none';
      currentActive.classList.remove('active');
    }, 300);
  }

  // Remove active class from all tabs
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove('active');
  }

  // Remove active class from all tab buttons
  const tablinks = document.getElementsByClassName('tab-button');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show and animate the target tab
  const target = document.getElementById(tabName);
  if (target) {
    setTimeout(() => {
      target.style.display = 'block';
      target.classList.add('active');
      // Force reflow and animate in
      target.offsetHeight;
      target.classList.remove('opacity-0', 'translate-y-4');
      target.classList.add('opacity-100', 'translate-y-0');
    }, 300);
  }
  
  // Add active class to clicked button
  if (evt && evt.currentTarget) {
    evt.currentTarget.className += ' active';
  }

  // Refresh AOS animations after tab transition
  if (window.AOS) {
    setTimeout(() => AOS.refresh(), 600);
  }
}

// Expose to window for inline onclick
window.openTab = openTab;


