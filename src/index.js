// @ts-check
import 'modern-normalize/modern-normalize.css';
import './sass/main.scss';
import { initEventListeners } from './js/event-listeners.js';
import { initGallery } from './js/init-gallery.js';
import { initModal } from './js/modal.js';
import { refs } from './js/menu-focus-catch.js';
import './js/init-decor.js';

initGallery();
refs.modal = initModal('.gallery__list a');
initEventListeners();
