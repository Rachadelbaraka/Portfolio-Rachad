// Portfolio Interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Fade in on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.project-card, .skill-card, .bloc-card').forEach(el => {
    observer.observe(el);
  });

  // Analytics event tracking
  document.querySelectorAll('.btn, .project-links a').forEach(btn => {
    btn.addEventListener('click', function() {
      if (window.gtag) {
        gtag('event', 'click', {
          'event_category': 'engagement',
          'event_label': this.textContent,
          'value': 1
        });
      }
    });
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search (future feature)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      console.log('Search triggered');
    }

    // Esc to close mobile menu
    if (e.key === 'Escape' && navLinks) {
      navLinks.classList.remove('active');
    }
  });

  // Dark mode toggle (optional)
  const darkModeToggle = document.querySelector('[data-toggle-dark-mode]');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      document.documentElement.getAttribute('data-theme') === 'dark' ?
        document.documentElement.removeAttribute('data-theme') :
        document.documentElement.setAttribute('data-theme', 'dark');
    });
  }

  console.log('Portfolio loaded successfully!');
});

// Utility function to detect if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
