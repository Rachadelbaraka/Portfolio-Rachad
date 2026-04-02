document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const revealItems = document.querySelectorAll('[data-reveal]');
  const skillTabs = document.querySelectorAll('.skills-tab');
  const skillPanels = document.querySelectorAll('.skills-panel');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      const targetSelector = this.getAttribute('href');
      const target = document.querySelector(targetSelector);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  const revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        const element = entry.target;
        const delay = Number(element.dataset.delay || 0);
        window.setTimeout(function () {
          element.classList.add('in');
        }, delay);

        observer.unobserve(element);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  revealItems.forEach(function (item, index) {
    // Small staggered reveal for a premium page-load effect.
    item.dataset.delay = String((index % 6) * 80);
    revealObserver.observe(item);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && navLinks) {
      navLinks.classList.remove('active');
    }
  });

  skillTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const targetId = tab.dataset.skillTarget;

      skillTabs.forEach(function (item) {
        item.classList.remove('active');
      });

      skillPanels.forEach(function (panel) {
        panel.classList.remove('active');
      });

      tab.classList.add('active');

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
});
