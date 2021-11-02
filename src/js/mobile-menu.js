export const initMobileMenu = () => {
  const refs = {
    menu: document.querySelector('[mobile-menu]'),
    openMenuBtn: document.querySelector('[mobile-menu-open]'),
    closeMenuBtn: document.querySelector('[mobile-menu-close]'),
    htmlAndBody: document.querySelectorAll('[no-scroll]'),
  };

  const toggleMenu = () => {
    const isMenuOpen = refs.openMenuBtn.getAttribute('aria-expanded') || false;
    refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.menu?.classList.toggle('is-hidden');
    refs.htmlAndBody.forEach(el.classList.toggle('no-scroll'));
  };

  const onCloseMenuBtnClick = e => {
    toggleMenu();
    document.removeEventListener('keydown', onEscCloseMenu);

    refs.openMenuBtn.addEventListener('click', onOpenMenuBtnClick, {
      once: true,
    });
  };

  const onOpenMenuBtnClick = ({ target }) => {
    const isMenuOpen = target.getAttribute('aria-expanded') || false;

    if (isMenuOpen) {
      return;
    }

    toggleMenu();

    refs.closeMenuBtn?.addEventListener('click', onCloseMenuBtnClick, {
      once: true,
    });

    document.addEventListener('keydown', onEscCloseMenu);
  };

  refs.openMenuBtn?.addEventListener('click', onMenuOpen, { once: true });
};
