import * as React from 'react';
import { render } from '@testing-library/react';

import { SkeletonContainer } from '.';

describe('SkeletonContainer Component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <SkeletonContainer display="block">any children</SkeletonContainer>,
    );

    expect(container).toBeTruthy();
  });

  it('should render correctly with all props', () => {
    const { container } = render(
      <SkeletonContainer
        alignItems="center"
        justifyContent="center"
        style={{ opacity: '0.5' }}
      >
        any children
      </SkeletonContainer>,
    );

    expect(container).toBeTruthy();
  });
});
