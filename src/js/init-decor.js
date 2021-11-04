// @ts-check
import throttle from 'lodash/throttle';
import { decorStarsDesktop, decorStarsMobile } from './decor-stars.js';
const drawJS = {};

(pen => {
  pen.drawStar = (domEl = {}, obj = {}) => {
    // get canvas
    const canvas = domEl;

    // get the context
    if (canvas) {
      const context = canvas.getContext('2d');

      // set shape properties
      const numPoints = obj.numPoints || 5;

      // set inner and outer radius
      const outerRadius = obj.outerRadius || 40; // from center to outermost point
      const innerRadius = obj.innerRadius || 20;

      // obtain center point coordinates
      const cx = obj.cx || 0;
      const cy = obj.cy || 0;

      // get starting rotation angle - default is star's 3 o'clock position
      const rotate = obj.rotate || 0;

      // get stroke width and color
      context.lineWidth = obj.lineWidth || 1;
      context.strokeStyle = obj.stroke || '#000';

      // start the path
      context.beginPath(); // to change color between draw stars

      // moveTo moves the pen to the start position.
      // lineTo keeps the penDown.
      const draw = (radius, angle, action) => {
        const x = cx + Math.cos(angle) * radius; // use cos for horizontal coordinate
        const y = cy + Math.sin(angle) * radius; // use sin to get vertical coordinate
        context[action](x, y); // go there with either moveTo or lineTo
      };

      draw(outerRadius, rotate, 'moveTo');

      const angle = (2 * Math.PI) / numPoints;

      for (let i = 0; i <= numPoints; i += 1) {
        const outerAngle = i * angle + rotate;
        const innerAngle = outerAngle + angle / 2;

        draw(outerRadius, outerAngle, 'lineTo');
        draw(innerRadius, innerAngle, 'lineTo');
      }
      context.closePath();

      // add the outline
      context.stroke();

      // add the fill
      if (obj.fill) {
        context.fillStyle = obj.fill;
        context.fill();
      }
    }
  };
})(drawJS);

const populateCanvas = (domEl, starsArray) => {
  if (domEl && starsArray) {
    domEl
      .getContext('2d')
      .clearRect(0, 0, domEl.clientWidth, domEl.clientHeight);

    starsArray.forEach(({ color, width, left, top }) => {
      const starObj = {
        cx: parseInt(left),
        cy: parseInt(top) - (domEl.clientWidth > 760 ? 599 : 545),
        outerRadius: parseInt(width) * 0.6,

        innerRadius: parseInt(width) * 0.3,
        numPoints: 5,
        lineWidth: 1,
        stroke: 'transparent',
        fill: `${color}`,
        rotate: 0,
      };
      console.log('starsArray.forEach ~ outerRadius', starObj.outerRadius);

      drawJS.drawStar(domEl, starObj);
    });
  }
};

const canvas = document.querySelector('[decor-stars-container]');

const setUpCanvas = el => {
  if (el) {
    // Feed the size back to the canvas.
    el.width = el.clientWidth;
    el.height = el.clientHeight;
  }
};

setUpCanvas(canvas);

if (window.matchMedia('min-width: 768px').matches) {
  populateCanvas(canvas, decorStarsDesktop);
} else {
  populateCanvas(canvas, decorStarsMobile);
}

const onResizeUpdateCanvas = () => {
  setUpCanvas(canvas);

  if (window.matchMedia('min-width: 768px').matches) {
    populateCanvas(canvas, decorStarsDesktop);
  } else {
    populateCanvas(canvas, decorStarsMobile);
  }
};

window.addEventListener('resize', throttle(onResizeUpdateCanvas, 250), {
  passive: true,
});
