// @ts-check
import {
  listenOnKeydownFocusCatch,
  firstFocusElem,
  unlistenOnKeydownFocusCatch,
  refs,
} from './menu-focus-catch.js';

const options = {
  once: true,
  passive: true,
};

const isMenuOpen = () =>
  refs.openMenuBtn.getAttribute('aria-expanded') || false;

const toggleMenu = () => {
  refs.openMenuBtn.setAttribute('aria-expanded', `${!isMenuOpen()}`);
  refs.menu?.classList.toggle('visually-hidden');
  refs.htmlAndBody.forEach(el => el.classList.toggle('no-scroll'));
};

const closeMenu = () => {
  setTimeout(() => {
    toggleMenu();
    document.removeEventListener('keydown', onEscCloseMenu);
    refs.menu.removeEventListener('click', onBackdropClick);
    unlistenOnKeydownFocusCatch();

    refs.openMenuBtn.focus();
  }, 10);
};

const onBackdropClick = e => {
  if (isMenuOpen() && e.target === refs.menu) {
    closeMenu();
  }
};

const onCloseMenuBtnClick = () => {
  closeMenu();
};

const onEscCloseMenu = e => {
  e.code === 'Escape' && closeMenu();
};

const onOpenMenuBtnClick = ({ target }) => {
  if (!isMenuOpen()) {
    return;
  }

  toggleMenu();

  refs.closeMenuBtn?.addEventListener('click', onCloseMenuBtnClick, options);
  refs.menu?.addEventListener('click', onBackdropClick, { passive: true });

  document.addEventListener('keydown', onEscCloseMenu, { passive: true });

  listenOnKeydownFocusCatch();
  setTimeout(() => {
    firstFocusElem.focus();
  }, 100);
};

const listenOnOpenMenuBtnClick = () =>
  refs.openMenuBtn?.addEventListener('click', onOpenMenuBtnClick);

export { listenOnOpenMenuBtnClick };
