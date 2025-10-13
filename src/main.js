(function () {
  const btn = document.querySelector('.burger');
  const panel = document.getElementById('mobile-menu');
  const overlay = document.querySelector('.overlay');

  if (!btn || !panel) return;

  function openMenu() {
    panel.removeAttribute('hidden'); // показати панель під хедером
    btn.classList.add('is-open'); // анімація «гамбургер → Х»
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Закрити меню');
    document.documentElement.classList.add('no-scroll'); // заборона скролу сторінки

    // показати overlay і ввімкнути йому прийом кліків
    if (overlay) {
      overlay.hidden = false;
      requestAnimationFrame(() => overlay.classList.add('active'));
    }
  }

  function closeMenu() {
    panel.setAttribute('hidden', ''); // сховати панель
    btn.classList.remove('is-open'); // обернена анімація
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Відкрити меню');
    document.documentElement.classList.remove('no-scroll');

    // прибрати overlay
    if (overlay) {
      overlay.classList.remove('active');
      overlay.hidden = true;
    }
  }

  // натискання на бургер
  btn.addEventListener('click', () => {
    const opened = btn.classList.contains('is-open');
    opened ? closeMenu() : openMenu();
  });

  // Закриття по Esc
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && btn.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Клік по напівпрозорому фону — також закриває меню
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
})();
