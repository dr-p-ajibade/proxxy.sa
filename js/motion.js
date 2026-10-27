/* Proxxy Media motion layer: GSAP + ScrollTrigger + SplitText + Lenis.
   Everything here runs ONLY when the visitor has not asked for reduced motion.
   With reduced motion (or if a library fails to load) the page is fully visible and static. */
(function () {
  if (!window.gsap) return;
  var gsap = window.gsap;
  var ST = window.ScrollTrigger;
  var Split = window.SplitText;
  if (ST) gsap.registerPlugin(ST);
  if (Split) gsap.registerPlugin(Split);

  var mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', function () {
    var lenis = null;
    var split = null;

    // Smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync.
    if (window.Lenis) {
      lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
      if (ST) lenis.on('scroll', ST.update);
      var raf = function (time) { lenis.raf(time * 1000); };
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          var id = a.getAttribute('href');
          if (id.length < 2) return;
          var target = document.querySelector(id);
          if (!target) return;
          e.preventDefault();
          lenis.scrollTo(target, { offset: -76 });
          if (target.id === 'main') target.focus({ preventScroll: true });
        });
      });
    }

    // Hero: the headline rises word by word, then the rest follows.
    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    var title = document.getElementById('hero-title');
    if (Split && title) {
      split = new Split(title, { type: 'words', wordsClass: 'word' });
      tl.from(split.words, { yPercent: 60, autoAlpha: 0, duration: 0.8, stagger: 0.07 });
    } else if (title) {
      tl.from(title, { y: 28, autoAlpha: 0, duration: 0.9 });
    }
    tl.from('.hero .lede', { y: 16, autoAlpha: 0, duration: 0.6 }, '-=0.45')
      .from('.hero-actions', { y: 16, autoAlpha: 0, duration: 0.5 }, '-=0.35')
      .from('.proof li', { y: 10, autoAlpha: 0, duration: 0.4, stagger: 0.07 }, '-=0.2');

    if (ST) {
      // Service cards arrive together as the section comes into view.
      gsap.from('.service', {
        y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.services', start: 'top 82%', once: true }
      });
      // The three step process is a real sequence, so it reveals in order.
      gsap.from('.steps li', {
        y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.steps', start: 'top 80%', once: true }
      });
    }

    return function () {
      if (split) split.revert();
      if (lenis) lenis.destroy();
    };
  });
})();
