/* ============================================================
   PAL SYSTEMS — interactions (zero dependencies)
   ============================================================ */
(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lerp = (a, b, n) => a + (b - a) * n;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- Smooth scroll (Lenis-style) ---------- */
  const Smooth = (() => {
    let current = 0, target = 0, ease = 0.085, rafId;
    const onScroll = () => { target = window.scrollY; };
    function update() {
      current = lerp(current, target, ease);
      if (Math.abs(target - current) < 0.1) current = target;
      // expose normalized velocity for parallax
      Smooth.value = current;
      rafId = requestAnimationFrame(update);
    }
    return {
      value: 0,
      start() {
        if (reduce) return;
        window.addEventListener('scroll', onScroll, { passive: true });
        update();
      }
    };
  })();
  Smooth.start();

  /* ---------- Preloader ---------- */
  const loader = $('#loader');
  const countEl = $('#loaderCount');
  const bar = $('.loader__bar span');
  let p = 0;
  const tick = () => {
    p += Math.max(1, (100 - p) * 0.07);
    if (p >= 100) p = 100;
    countEl.textContent = Math.floor(p);
    bar.style.width = p + '%';
    if (p < 100) {
      setTimeout(tick, 90 + Math.random() * 80);
    } else {
      setTimeout(reveal, 350);
    }
  };
  function reveal() {
    document.body.classList.add('loaded');
    animateHero();
    setTimeout(() => loader && (loader.style.display = 'none'), 1300);
  }
  window.addEventListener('load', tick);
  // safety: if load is slow, start anyway
  setTimeout(() => { if (p === 0) tick(); }, 1200);

  /* ---------- Hero word stagger ---------- */
  function animateHero() {
    const words = $$('.hero__title .word');
    words.forEach((w, i) => {
      w.style.transition = 'transform 1s cubic-bezier(.16,1,.3,1)';
      w.style.transitionDelay = 80 * i + 'ms';
      requestAnimationFrame(() => { w.style.transform = 'translateY(0)'; });
    });
    $$('.hero .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), 500 + i * 120);
    });
  }

  /* ---------- Custom cursor ---------- */
  const cursor = $('.cursor');
  const cLabel = $('.cursor__label');
  if (cursor && !matchMedia('(hover:none)').matches) {
    let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
    addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    (function loop() {
      cx = lerp(cx, tx, 0.2); cy = lerp(cy, ty, 0.2);
      cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    const targets = '[data-cursor], a, button, .proj';
    document.addEventListener('mouseover', e => {
      const t = e.target.closest(targets);
      if (!t) return;
      const label = t.getAttribute('data-cursor');
      cursor.classList.add('is-active');
      cLabel.textContent = label || '';
      if (!label) cursor.classList.remove('is-active');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(targets)) cursor.classList.remove('is-active');
    });
    addEventListener('mouseleave', () => cursor.classList.add('is-hide'));
    addEventListener('mouseenter', () => cursor.classList.remove('is-hide'));
  }

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- Word-by-word lit statement ---------- */
  const words = $$('.reveal-word');
  if (words.length) {
    const wio = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const idx = words.indexOf(en.target);
          setTimeout(() => en.target.classList.add('lit'), idx * 45);
          wio.unobserve(en.target);
        }
      });
    }, { threshold: 0.6 });
    words.forEach(w => wio.observe(w));
  }

  /* ---------- Hero parallax ---------- */
  const heroImg = $('#heroImg');
  if (heroImg && !reduce) {
    (function pllx() {
      const y = Smooth.value * 0.18;
      heroImg.style.transform = `scale(1.15) translateY(${y}px)`;
      requestAnimationFrame(pllx);
    })();
  }

  /* ---------- Magnetic buttons ---------- */
  if (!matchMedia('(hover:none)').matches) {
    $$('[data-magnetic]').forEach(el => {
      const strength = 28;
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / r.width;
        const y = (e.clientY - r.top - r.height / 2) / r.height;
        el.style.transform = `translate(${x * strength}px,${y * strength}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
      el.style.transition = 'transform .4s cubic-bezier(.16,1,.3,1)';
    });
  }

  /* ---------- Work hover image preview ---------- */
  const preview = $('#workPreview');
  const pImg = preview && $('img', preview);
  if (preview) {
    let px = 0, py = 0, tpx = 0, tpy = 0;
    addEventListener('mousemove', e => { tpx = e.clientX; tpy = e.clientY; }, { passive: true });
    (function pl() {
      px = lerp(px, tpx, 0.12); py = lerp(py, tpy, 0.12);
      preview.style.left = px + 'px'; preview.style.top = py + 'px';
      requestAnimationFrame(pl);
    })();
    $$('.proj').forEach(proj => {
      proj.addEventListener('mouseenter', () => {
        const src = proj.getAttribute('data-img');
        if (src) pImg.src = src;
        preview.classList.add('is-on');
      });
      proj.addEventListener('mouseleave', () => preview.classList.remove('is-on'));
    });
  }

  /* ---------- Nav hide on scroll down ---------- */
  const nav = $('#nav');
  let lastY = 0;
  addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 200 && y > lastY) nav.classList.add('is-hidden');
    else nav.classList.remove('is-hidden');
    lastY = y;
  }, { passive: true });

  /* ---------- Live clock ---------- */
  const clock = $('#clock');
  if (clock) {
    const upd = () => {
      const d = new Date();
      const t = [d.getHours(), d.getMinutes(), d.getSeconds()]
        .map(n => String(n).padStart(2, '0')).join(':');
      clock.textContent = t + ' EET';
    };
    upd(); setInterval(upd, 1000);
  }

  /* ---------- Smooth anchor scroll ---------- */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  /* ---------- Copy email on click ---------- */
  $$('[data-cursor="Copy"], [data-cursor="Email us"]').forEach(el => {
    el.addEventListener('click', e => {
      const mail = 'hello@palsystems.io';
      if (navigator.clipboard && el.dataset.cursor === 'Copy') {
        e.preventDefault();
        navigator.clipboard.writeText(mail).then(() => {
          const prev = el.textContent;
          el.textContent = 'Copied ✓';
          setTimeout(() => el.textContent = prev, 1400);
        });
      }
    });
  });
})();
