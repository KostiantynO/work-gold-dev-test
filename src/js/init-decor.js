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

    starsArray.forEach(({ color, width, left, top, angle }) => {
      const starObj = {
        cx: parseInt(left) + parseInt(width) * 0.5,
        cy: parseInt(top) - (domEl.clientWidth > 760 ? 605 : 545),
        outerRadius: parseInt(width) * 0.58,

        innerRadius: parseInt(width) * 0.28,
        numPoints: 5,
        lineWidth: 0,
        stroke: `transparent`,
        fill: `${color}`,
        rotate: angle,
      };

      drawJS.drawStar(domEl, starObj);
    });
  }
};

const canvasRef = document.querySelector('[decor-stars-container]');

const setUpCanvas = el => {
  if (el) {
    // Feed the size back to the canvas.
    el.width = el.clientWidth;
    el.height = el.clientHeight;
  }
};

setUpCanvas(canvasRef);

if (window.matchMedia('(min-width: 768px)').matches) {
  populateCanvas(canvasRef, decorStarsDesktop);
} else {
  populateCanvas(canvasRef, decorStarsMobile);
}

const onResizeUpdateCanvas = () => {
  setUpCanvas(canvasRef);

  if (canvasRef) {
    const redrawCondition =
      window.matchMedia('(min-width: 768px)').matches && canvasRef.width >= 768;

    if (redrawCondition) {
      populateCanvas(canvasRef, decorStarsDesktop);
    } else {
      populateCanvas(canvasRef, decorStarsMobile);
    }
  }
};

window.addEventListener('resize', throttle(onResizeUpdateCanvas, 500), {
  passive: true,
});
