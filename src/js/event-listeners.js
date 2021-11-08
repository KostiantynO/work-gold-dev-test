// @ts-check
import { listenOnOpenMenuBtnClick } from './mobile-menu.js';
import { listenOnPreviewImgClick } from './init-gallery.js';
import { listenOnResizeUpdateCanvas } from './init-decor.js';

const initEventListeners = () => {
  listenOnOpenMenuBtnClick();
  listenOnPreviewImgClick();
  listenOnResizeUpdateCanvas();
};

export { initEventListeners };
