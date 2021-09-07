/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-bitwise */
/* eslint-disable prefer-destructuring */

export function lightOrDark(color: any): 'light' | 'dark' {
  // Variables for red, green, blue values
  let r;
  let g;
  let b;

  let colorTemp = color;

  // Check the format of the color, HEX or RGB?
  if (colorTemp.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    colorTemp = colorTemp.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
    );

    r = colorTemp[1];
    g = colorTemp[2];
    b = colorTemp[3];
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    colorTemp = +`0x${colorTemp
      .slice(1)
      .replace(colorTemp.length < 5 && /./g, '$&$&')}`;

    r = colorTemp >> 16;
    g = (colorTemp >> 8) & 255;
    b = colorTemp & 255;
  }
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return 'light';
  }

  return 'dark';
}
