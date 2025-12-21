// ============================================================
// Intersection Observer for [data-animate]
// ============================================================
export default function initAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${i * 0.1}s`;
          entry.target.classList.add('animate-fadeUp');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  elements.forEach((el) => observer.observe(el));
}

// Auto-run after page load
document.addEventListener('astro:page-load', initAnimations);