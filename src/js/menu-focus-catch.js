const refs = {
  menu: document.querySelector('[mobile-menu]'),
  openMenuBtn: document.querySelector('[mobile-menu-open]'),
  closeMenuBtn: document.querySelector('[mobile-menu-close]'),
  htmlAndBody: document.querySelectorAll('[no-scroll]'),
};

// adds all elements to focus in mobile menu
const mobileFocusElem =
  "button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

const focusableContent = refs.menu?.querySelectorAll(mobileFocusElem);

const firstFocusElem = focusableContent[0]; // first el to focus in menu
const lastFocusElem = focusableContent[focusableContent.length - 1]; // last el to focus in menu

const onKeyDownCatchFocus = e => {
  if (
    refs.menu.classList.contains('visually-hidden') ||
    refs.openMenuBtn.getAttribute('aria-expanded') !== 'false'
  )
    return;
  else {
    if (e.code !== 'Tab') return;

    // Shift + tab
    if (e.shiftKey) {
      if (document.activeElement === firstFocusElem) {
        e.preventDefault(), lastFocusElem.focus();
      }
    } else if (document.activeElement === lastFocusElem) {
      // if Tab and focus reached last el -> focus first el.
      e.preventDefault(), firstFocusElem.focus();
    }
  }
};

const listenOnKeydownFocusCatch = () => {
  refs.menu?.addEventListener('keydown', onKeyDownCatchFocus);
};

const unlistenOnKeydownFocusCatch = () => {
  refs.menu?.removeEventListener('keydown', onKeyDownCatchFocus);
};

export {
  listenOnKeydownFocusCatch,
  firstFocusElem,
  unlistenOnKeydownFocusCatch,
  refs,
};
