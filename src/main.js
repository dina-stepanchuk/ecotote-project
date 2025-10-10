
  (function () {
    const btn = document.querySelector('.burger');
    const panel = document.getElementById('mobile-menu');
    if (!btn || !panel) return;

    function openMenu() {
      panel.removeAttribute('hidden');          // показати панель під хедером
      btn.classList.add('is-open');             // анімація «гамбургер → Х»
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Закрити меню');
      document.documentElement.classList.add('no-scroll'); // заборона скролу сторінки
    }

    function closeMenu() {
      panel.setAttribute('hidden', '');         // сховати панель
      btn.classList.remove('is-open');          // обраена анімація
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Відкрити меню');
      document.documentElement.classList.remove('no-scroll');
    }

    btn.addEventListener('click', () => {
      const opened = btn.classList.contains('is-open');
      opened ? closeMenu() : openMenu();
    });

    // Закриття по Esc (якщо меню відкрите)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && btn.classList.contains('is-open')) {
        closeMenu();
      }
    });
  })();

