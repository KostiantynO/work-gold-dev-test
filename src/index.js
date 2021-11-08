// @ts-check
import 'modern-normalize/modern-normalize.css';
import './sass/main.scss';
import { initEventListeners } from './js/event-listeners.js';
import { initGallery } from './js/init-gallery.js';
import { initModal } from './js/modal.js';
import './js/init-decor.js';

initGallery();
setTimeout(() => initModal('.gallery__list a'), 1000);
initEventListeners();
