# d3-curve-circlecorners

[d3-curve-circlecorners](https://github.com/carpiediem/d3-curve-circlecorners/tree/master) is a [curve function](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curves) that can be passed to the [d3.js](https://d3js.org/) [line.curve](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#line_curve) and [area.curve](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_curve) functions.

By passing it a data series and (npm publish --access publicoptionally) a corner radius, it will output a string that can be used to draw an SVG path. If no radius is specified,

[Try an interactive demo in your browser.](https://observablehq.com/@carpiediem/svg-paths-with-circular-corners)

```javascript
const lineFn = d3.line().curve(circleCorners.radius(0.5));
const string = lineFn(data);
path.setAttribute('d', string);
```

## Installing

If you use NPM, `npm install d3-curve-circlecorners`. Otherwise, you can reference the latest code through [the Unpackage CDN](https://unpkg.com/d3-curve-circlecorners).

## Using with node.js

Once you've imported the code, you can use it like any other d3 curve function.

```javascript
const { line } = require('d3-shape');
const circleCorners = require('d3-curve-circlecorners');

const data = [
  [0, 1],
  [1, 3],
  [2, 1],
];
const oneUnitRadius = line().curve(circleCorners)(data);
const halfUnitRadius = line().curve(circleCorners.radius(0.5))(data);

console.log(oneUnitRadius);
// "M0,1L0.10557280900008392,1.2111456180001683A1,1,0,0,0,1.8944271909999157,1.2111456180001683L2,1"
```

## Using on the web

When accessing the packaged code meant for the web, be sure that you get the necessary d3 dependencies as well. You can reference the entire library or limit yourself to the d3-path and d3-shape modules.

```html
<script src="https://unpkg.com/d3-path"></script>
<script src="https://unpkg.com/d3-shape"></script>
<script src="https://unpkg.com/d3-curve-circlecorners"></script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  version="1.0"
  width="100%"
  viewBox="0 0 10 10"
>
  <style>
    path {
      fill: none;
      stroke: red;
      stroke-width: 0.1;
    }
  </style>
  <path id="curvy" />
</svg>

<script>
  window.addEventListener('load', () => {
    const data = [
      [2, 1],
      [3, 4],
      [1, 6],
    ];
    const drawing = d3.line().curve(circleCorners.radius(0.5))(data);
    document.getElementById('curvy').setAttribute('d', drawing);
  });
</script>
```
