import { lightOrDark } from './lightOrDark';

describe('LightOrDark Helper', () => {
  it('should return light if the color is light', () => {
    const color1 = '#ffffff';
    const color2 = '#C0C0C0';
    const color3 = 'red';
    const isLightOrDark1 = lightOrDark(color1);
    const isLightOrDark2 = lightOrDark(color2);
    const isLightOrDark3 = lightOrDark(color3);

    expect(isLightOrDark1).toBe('light');
    expect(isLightOrDark2).toBe('light');
    expect(isLightOrDark3).toBe('light');
  });

  it('should return dark if the color is dark', () => {
    const color1 = '#000000';
    const color2 = '#333333';
    const color3 = '#666666';
    const isLightOrDark1 = lightOrDark(color1);
    const isLightOrDark2 = lightOrDark(color2);
    const isLightOrDark3 = lightOrDark(color3);

    expect(isLightOrDark1).toBe('dark');
    expect(isLightOrDark2).toBe('dark');
    expect(isLightOrDark3).toBe('dark');
  });
});
