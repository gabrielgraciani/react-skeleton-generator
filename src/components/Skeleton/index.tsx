import * as React from 'react';

import { lightOrDark } from '../../helpers/lightOrDark';
import { useSkeleton } from '../../context/SkeletonContext';

import { SkeletonContainer } from './SkeletonContainer';
import { SkeletonFlex } from './SkeletonFlex';

import { StyledSkeletonContainer } from './styles';
import { SkeletonProps } from './types';

const Skeleton = ({
  height = '30px',
  width = '100%',
  borderRadius,
  style,
  count = 1,
  spaceBetween = '10px',
  widthMultiple,
  heightMultiple,
  dataTestId = 'Skeleton',
}: SkeletonProps): JSX.Element => {
  const { backgroundColor, animation, highlight, animationDuration } =
    useSkeleton();
  const [isLighten, setIsLighten] = React.useState(true);

  React.useEffect(() => {
    if (highlight) {
      setIsLighten(highlight === 'light');
    } else {
      const isColorLight = lightOrDark(backgroundColor);

      setIsLighten(isColorLight === 'light');
    }
  }, [highlight, backgroundColor]);

  const renderSkeleton = Array.from(Array(count).keys()).map((_, index) => {
    const key = (Math.random() * 100000).toFixed(5);

    const witdthSkeleton = widthMultiple?.length ? widthMultiple[index] : width;
    const heightSkeleton = heightMultiple?.length
      ? heightMultiple[index]
      : height;
    return (
      <StyledSkeletonContainer
        isLighten={isLighten}
        backgroundColor={backgroundColor}
        animation={animation}
        animationDuration={animationDuration}
        width={witdthSkeleton}
        height={heightSkeleton}
        borderRadius={borderRadius}
        style={style}
        spaceBetween={spaceBetween}
        key={key}
        data-testid={`${dataTestId}-${index}`}
      />
    );
  });

  return <>{renderSkeleton}</>;
};

Skeleton.Container = SkeletonContainer;
Skeleton.Flex = SkeletonFlex;

export { Skeleton };
