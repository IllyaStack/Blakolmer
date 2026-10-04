(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function revealAll() {
    [].forEach.call(document.querySelectorAll('.reveal'), function (el) { el.classList.add('in'); });
  }

  try {
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('toggle');
    var menu = document.getElementById('menu');

    function setMenu(open) {
      nav.classList.toggle('open', open);
      document.body.classList.toggle('lock', open);
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    }
    toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 1000) setMenu(false); });

    function onScroll() { nav.classList.toggle('solid', window.scrollY > 40); }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    var els = document.querySelectorAll('.reveal');
    if (reduce || !('IntersectionObserver' in window)) {
      revealAll();
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
      els.forEach(function (el) { io.observe(el); });
      // safety net: never leave content hidden
      setTimeout(revealAll, 4000);
    }

    if (!reduce) {
      var imgs = [].slice.call(document.querySelectorAll('[data-parallax]'));
      var ticking = false;
      var par = function () {
        var vh = window.innerHeight;
        imgs.forEach(function (img) {
          var r = img.parentElement.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          var p = (r.top + r.height / 2 - vh / 2) / vh;
          img.style.transform = 'translate3d(0,' + (p * -24).toFixed(1) + 'px,0) scale(1.08)';
        });
        ticking = false;
      };
      window.addEventListener('scroll', function () {
        if (!ticking) { ticking = true; requestAnimationFrame(par); }
      }, { passive: true });
      par();
    }

    var y = document.getElementById('y');
    if (y) y.textContent = new Date().getFullYear();
  } catch (err) {
    root.classList.remove('js');
    revealAll();
  }
})();
