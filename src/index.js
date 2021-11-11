// @ts-check
import 'modern-normalize/modern-normalize.css';
import './sass/main.scss';
import { initEventListeners } from './js/event-listeners.js';
import { initGallery } from './js/gallery/init-gallery.js';
import { initModal } from './js/gallery/modal.js';
import { refs } from './js/refs.js';
import './js/decor-stars/init-decor.js';

initGallery();
refs.modal = initModal('.gallery__list a');
initEventListeners();
