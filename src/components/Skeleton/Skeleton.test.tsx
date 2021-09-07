import { render } from '@testing-library/react';

import { SkeletonContext } from '../../context/SkeletonContext';

import { Skeleton } from '.';
import { SkeletonContextProps } from './types';

const contextData = {
  backgroundColor: '#F1EFF1',
} as SkeletonContextProps;

const renderWithSkeletonContext = (
  ui: JSX.Element,
  {
    providerProps,
    ...renderOptions
  }: { providerProps: Partial<SkeletonContextProps> },
) => {
  return render(
    <SkeletonContext.Provider value={{ ...contextData, ...providerProps }}>
      {ui}
    </SkeletonContext.Provider>,
    renderOptions,
  );
};

describe('Skeleton Component', () => {
  it('should render correctly', () => {
    const { container, getByTestId } = renderWithSkeletonContext(<Skeleton />, {
      providerProps: {},
    });

    const skeleton = getByTestId('Skeleton-0');

    expect(skeleton).not.toHaveStyle(
      'animation: jTpgNv 3s linear infinite alternate',
    );

    expect(container).toBeTruthy();
  });

  it('should render with modify width and height', () => {
    const { getByTestId } = renderWithSkeletonContext(
      <Skeleton width="200px" height="100px" borderRadius="20px" />,
      { providerProps: { highlight: 'dark' } },
    );

    const skeleton = getByTestId('Skeleton-0');

    expect(skeleton).toHaveStyle('width: 200px');
    expect(skeleton).toHaveStyle('height: 100px');
  });

  it('should render a list of 5 skeletons with different sizes', () => {
    const { getByTestId } = renderWithSkeletonContext(
      <Skeleton
        count={5}
        widthMultiple={['100%', '90%', '80%', '70%', '60%']}
        heightMultiple={['100px', '90px', '80px', '70px', '60px']}
        spaceBetween="20px"
      />,
      { providerProps: {} },
    );

    const firstSkeleton = getByTestId('Skeleton-0');
    const secondSkeleton = getByTestId('Skeleton-1');
    const thirstSkeleton = getByTestId('Skeleton-2');
    const fourthSkeleton = getByTestId('Skeleton-3');
    const fifthSkeleton = getByTestId('Skeleton-4');

    expect(firstSkeleton).toHaveStyle('width: 100%');
    expect(firstSkeleton).toHaveStyle('height: 100px');

    expect(secondSkeleton).toHaveStyle('width: 90%');
    expect(secondSkeleton).toHaveStyle('height: 90px');

    expect(thirstSkeleton).toHaveStyle('width: 80%');
    expect(thirstSkeleton).toHaveStyle('height: 80px');

    expect(fourthSkeleton).toHaveStyle('width: 70%');
    expect(fourthSkeleton).toHaveStyle('height: 70px');

    expect(fifthSkeleton).toHaveStyle('width: 60%');
    expect(fifthSkeleton).toHaveStyle('height: 60px');
  });

  it('should render with animation and duration', () => {
    const { getByTestId, debug } = renderWithSkeletonContext(
      <Skeleton width="200px" height="100px" borderRadius="20px" />,
      {
        providerProps: {
          highlight: 'dark',
          animation: 'opacity',
          animationDuration: 3,
        },
      },
    );

    debug();

    const skeleton = getByTestId('Skeleton-0');

    expect(skeleton).toHaveStyle(
      'animation: jTpgNv 3s linear infinite alternate',
    );
  });
});
