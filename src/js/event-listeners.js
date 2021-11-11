// @ts-check
import { listenOnOpenMenuBtnClick } from './mobile-menu/mobile-menu.js';
import { listenOnPreviewImgClick } from './gallery/init-gallery.js';
import { listenOnResizeUpdateCanvas } from './decor-stars/init-decor.js';

const initEventListeners = () => {
  listenOnOpenMenuBtnClick();
  listenOnPreviewImgClick();
  listenOnResizeUpdateCanvas();
};

export { initEventListeners };
