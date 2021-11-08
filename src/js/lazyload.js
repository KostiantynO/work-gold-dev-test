const addSrcToLazyImages = addClass => {
  const nativeLoadingLazyImages = document.querySelectorAll(
    'img[loading="lazy"]',
  );

  nativeLoadingLazyImages.forEach(img => {
    img.src = img.dataset.src;
    img.classList.add(addClass);
  });
};

const addLazySizesScript = () => {
  import 'lazysizes';
};

export const initLazyload = ({ addClass }) => {
  if ('loading' in HTMLImageElement.prototype) {
    addSrcToLazyImages(addClass);
  } else {
    addLazySizesScript();
  }

  const onImageLoaded = e => e.target.classList.add(addClass);

  const lazysizesImages = document.querySelectorAll('img[data-src]');

  lazysizesImages.forEach(img => {
    img.addEventListener('load', onImageLoaded, { once: true });
  });
};
