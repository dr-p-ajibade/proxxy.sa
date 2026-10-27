/* Proxxy Media motion layer: GSAP + ScrollTrigger + Lenis.
   Everything here runs ONLY when the visitor has not asked for reduced motion.
   With reduced motion (or if a library fails to load) the page is fully visible and static. */
(function () {
  if (!window.gsap) return;
  var gsap = window.gsap;
  if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

  var mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', function () {
    var lenis = null;

    // Smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync.
    if (window.Lenis) {
      lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
      if (window.ScrollTrigger) lenis.on('scroll', window.ScrollTrigger.update);
      var raf = function (time) { lenis.raf(time * 1000); };
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      // In page links glide instead of jumping, and account for the sticky header.
      document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          var id = a.getAttribute('href');
          if (id.length < 2) return;
          var target = document.querySelector(id);
          if (!target) return;
          e.preventDefault();
          lenis.scrollTo(target, { offset: -72 });
          if (target.id === 'main') target.focus({ preventScroll: true });
        });
      });
    }

    // One orchestrated moment: the hero assembles, then the register files itself.
    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero h1', { y: 28, autoAlpha: 0, duration: 0.9 })
      .from('.hero .lede, .hero-actions, .hero-note', { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, '-=0.5')
      .from('.folder', { y: 24, autoAlpha: 0, duration: 0.8 }, '-=0.6')
      .from('.register tbody tr', { y: -8, autoAlpha: 0, duration: 0.45, stagger: 0.18 }, '-=0.2')
      .from('.register .status', { scale: 0.8, autoAlpha: 0, duration: 0.35, stagger: 0.18, ease: 'back.out(2)' }, '<0.15');

    // The three step process is a real sequence, so it reveals in order as you reach it.
    if (window.ScrollTrigger) {
      gsap.from('.steps li', {
        y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.steps', start: 'top 80%', once: true }
      });
    }

    return function () {
      if (lenis) lenis.destroy();
    };
  });
})();
