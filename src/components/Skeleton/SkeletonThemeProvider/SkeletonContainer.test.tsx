import * as React from 'react';
import { render } from '@testing-library/react';

import { SkeletonProvider } from '../../../context/SkeletonContext';

import { SkeletonThemeProvider } from '.';

const renderWithSkeletonContext = (
  ui: JSX.Element,
  { ...renderOptions }: Record<string, unknown>,
) => {
  return render(<SkeletonProvider>{ui}</SkeletonProvider>, renderOptions);
};

describe('SkeletonThemeProvider Component', () => {
  it('should render correctly', () => {
    const { container } = renderWithSkeletonContext(
      <SkeletonThemeProvider>any children</SkeletonThemeProvider>,
      {},
    );

    expect(container).toBeTruthy();
  });

  it('should render correctly with props', () => {
    const { container } = renderWithSkeletonContext(
      <SkeletonThemeProvider
        animation="opacity"
        animationDuration={2}
        color="#ff1"
        highlight="dark"
      >
        any children
      </SkeletonThemeProvider>,
      {},
    );

    expect(container).toBeTruthy();
  });
});
