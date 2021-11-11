// @ts-check
const galleryItems = [
  {
    preview: './images/photos/gallery-desktop-content-01-141.jpg',
    preview2x: './images/photos/gallery-desktop-content-01@2x-282.jpg',
    original: './images/photos/gallery-modal-01-@4x-564w.jpg',
    description:
      'Young foxy redhead Ekaterina Popova - a fiery girl with a long hair',
    sizes: ['141', '282', '564'],
    name: 'Ekaterina Popova',
    icon: 'triangle',
    decor: 'brand-bag',
  },
  {
    preview: './images/photos/gallery-desktop-content-02-140.jpg',
    preview2x: './images/photos/gallery-desktop-content-02@2x-280.jpg',
    original: './images/photos/gallery-modal-02-@4x-560w.jpg',
    description:
      'Nick Pinsker - a man with handbag in sunglasses walking in a park',
    sizes: ['140', '280', '560'],
    name: 'Nick Pinsker',
    icon: 'half-square-circle',
  },
  {
    preview: './images/photos/gallery-desktop-content-03-139.jpg',
    preview2x: './images/photos/gallery-desktop-content-03@2x-278.jpg',
    original: './images/photos/gallery-modal-03-@4x-556w.jpg',
    description:
      'Young lady Lauren Mazzei with long hair, in a hat, in a gray French-style suit',
    sizes: ['139', '278', '556'],
    name: 'Lauren Mazzei',
    icon: 'circle',
    decor: 'light-bulb',
  },
  {
    preview: './images/photos/gallery-desktop-content-04-142.jpg',
    preview2x: './images/photos/gallery-desktop-content-04@2x-284.jpg',
    original: './images/photos/gallery-modal-04-@4x-568w.jpg',
    description:
      'Young lady Emily Kammeyer with long brunette hair and a chain of white pearls around her ears',
    sizes: ['142', '284', '568'],
    name: 'Emily Kammeyer',
    icon: 'rounded-stick',
  },
  {
    preview: './images/photos/gallery-desktop-content-05-140.jpg',
    preview2x: './images/photos/gallery-desktop-content-05@2x-280.jpg',
    original: './images/photos/gallery-modal-05-@4x-560w.jpg',
    description:
      'Lady Sarah Potter - with blue straight hair and tattoos on shoulders and arms',
    sizes: ['140', '280', '560'],
    name: 'Sarah Potter',
    icon: 'star',
    decor: 'hand-with-magnifier',
  },
  {
    preview: './images/photos/gallery-desktop-content-06-137.jpg',
    preview2x: './images/photos/gallery-desktop-content-06@2x-274.jpg',
    original: './images/photos/gallery-modal-06-@4x-548w.jpg',
    description:
      'Caleb Thill - a man resting on a swimming ring in a large pool',
    sizes: ['137', '274', '548'],
    name: 'Caleb Thill',
    icon: 'pentagon',
  },
];
/* $path-to-sprite: '../images/svg/sprite.svg#icon-';
$gallery-decor: (
  1 'triangle' grey position size,
  2 'half-square-circle' yellow position size,
  3 'circle' pink position size,
  4 'rounded-stick' darkgreen position size,
  5 'star' darkblue position size,
  6 'pentagon' orange position size,
  7 'circle' grey position size,
  8 'rounded-stick' lightgreen position size,
  9 'star' gold position size,
  10 'pentagon' darkblue position size,
  11 'half-square-circle' orange position size,
  12 'triangle' grey position size
);

$path-to-img: '../images/photos/decor-';
$decor-img: (
  1 'brand-bag' 1399.12px 52px 86.98px 95.85px,
  3 'light-bulb' 1368px 897px 105.8px 112px,
  5 'hand-with-magnifier' 1704.33px 337.45px 138.51px 177.67px,
  7 'juggler' 2024px 52px 65.85px 148px,
  11 'circus' 2343.28px 560px 123px 108.88px
); */

const galleryItemsMobile = [
  {
    preview: './images/photos/gallery-mobile-content-01-67.jpg',
    preview2x: './images/photos/gallery-mobile-content-01-@2x-134.jpg',
    original: './images/photos/gallery-modal-02-@4x-560w.jpg',
    description:
      'Nick Pinsker - a man with handbag in sunglasses walking in a park',
    sizes: ['67', '134', '560'],
    name: 'Nick Pinsker',
    icon: 'half-square-circle',
  },
  {
    preview: './images/photos/gallery-mobile-content-02-67.jpg',
    preview2x: './images/photos/gallery-mobile-content-02-@2x-134.jpg',
    original: './images/photos/gallery-modal-03-@4x-556w.jpg',
    description:
      'Young lady Lauren Mazzei with long hair, in a hat, in a gray French-style suit',
    sizes: ['67', '134', '556'],
    name: 'Lauren Mazzei',
    icon: 'circle',
    decor: 'light-bulb',
  },
  {
    preview: './images/photos/gallery-mobile-content-03-67.jpg',
    preview2x: './images/photos/gallery-mobile-content-03-@2x-134.jpg',
    original: './images/photos/gallery-modal-05-@4x-560w.jpg',
    description:
      'Lady Sarah Potter - with blue straight hair and tattoos on shoulders and arms',
    sizes: ['67', '134', '560'],
    name: 'Sarah Potter',
    icon: 'star',
    decor: 'hand-with-magnifier',
  },
  {
    preview: './images/photos/gallery-mobile-content-04-67.jpg',
    preview2x: './images/photos/gallery-mobile-content-04-@2x-134.jpg',
    original: './images/photos/gallery-modal-06-@4x-548w.jpg',
    description:
      'Caleb Thill - a man resting on a swimming ring in a large pool',
    sizes: ['67', '134', '548'],
    name: 'Caleb Thill',
    icon: 'pentagon',
  },
];

const deepCopy = array => JSON.parse(JSON.stringify(array));

const modifiedGalleryItems = deepCopy(galleryItems);

modifiedGalleryItems[0].icon = 'circle'; // 7
modifiedGalleryItems[0].decor = 'juggler'; // 7
modifiedGalleryItems[1].icon = 'rounded-stick'; // 8
modifiedGalleryItems[2].icon = 'star'; // 9
delete modifiedGalleryItems[2].decor; // 9
modifiedGalleryItems[3].icon = 'pentagon'; // 10
modifiedGalleryItems[4].icon = 'half-square-circle'; // 11
modifiedGalleryItems[4].decor = 'circus'; // 11
modifiedGalleryItems[5].icon = 'triangle'; // 12

const modifiedGalleryItemsMobile = deepCopy(galleryItemsMobile);

modifiedGalleryItemsMobile[0].icon = 'rounded-stick'; // 5
modifiedGalleryItemsMobile[1].icon = 'star'; // 6
delete modifiedGalleryItemsMobile[1].decor; // 6

modifiedGalleryItemsMobile[2].icon = 'half-square-circle'; // 7
modifiedGalleryItemsMobile[2].decor = 'circus'; // 7
modifiedGalleryItemsMobile[3].icon = 'triangle'; // 8

export {
  galleryItems,
  galleryItemsMobile,
  modifiedGalleryItems,
  modifiedGalleryItemsMobile,
};
