import { render } from '@testing-library/react';

import { SkeletonProvider } from '../../../context/SkeletonContext';

import { SkeletonContainer } from '.';

const renderWithSkeletonContext = (
  ui: JSX.Element,
  { ...renderOptions }: Record<string, unknown>,
) => {
  return render(<SkeletonProvider>{ui}</SkeletonProvider>, renderOptions);
};

describe('SkeletonContainer Component', () => {
  it('should render correctly', () => {
    const { container } = renderWithSkeletonContext(
      <SkeletonContainer>any children</SkeletonContainer>,
      {},
    );

    expect(container).toBeTruthy();
  });

  it('should render correctly with props', () => {
    const { container } = renderWithSkeletonContext(
      <SkeletonContainer
        animation="opacity"
        animationDuration={2}
        color="#ff1"
        highlight="dark"
      >
        any children
      </SkeletonContainer>,
      {},
    );

    expect(container).toBeTruthy();
  });
});
