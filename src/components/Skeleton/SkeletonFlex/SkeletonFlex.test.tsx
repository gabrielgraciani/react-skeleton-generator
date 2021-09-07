import * as React from 'react';
import { render } from '@testing-library/react';

import { SkeletonFlex } from '.';

describe('SkeletonFlex Component', () => {
  it('should render correctly', () => {
    const { container } = render(<SkeletonFlex>any children</SkeletonFlex>);

    expect(container).toBeTruthy();
  });

  it('should render correctly with all props', () => {
    const { container } = render(
      <SkeletonFlex
        alignItems="center"
        justifyContent="center"
        style={{ opacity: '0.5' }}
      >
        any children
      </SkeletonFlex>,
    );

    expect(container).toBeTruthy();
  });
});
