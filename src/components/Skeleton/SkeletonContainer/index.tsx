import * as React from 'react';

import { useSkeleton } from '../../../context/SkeletonContext';
import { withSkeletonContext } from '../../../helpers/withSkeletonContext';

import { SkeletonContainerProps } from './types';
import { StyledContainer } from './styles';


const BaseSkeletonContainer = ({
  color = '#F1EFF1',
  animation = 'shimmer',
  animationDuration = 1,
  style,
  highlight,
  children,
  dataTestId = 'SkeletonContainer',
}: SkeletonContainerProps): JSX.Element => {
  const {
    changeBackgroundColor,
    changeAnimation,
    changeHighlight,
    changeAnimationDuration,
  } = useSkeleton();

  React.useEffect(() => {
    changeBackgroundColor(color);
  }, [color, changeBackgroundColor]);

  React.useEffect(() => {
    changeAnimation(animation);
  }, [animation, changeAnimation]);

  React.useEffect(() => {
    if (highlight) {
      changeHighlight(highlight);
    }
  }, [highlight, changeHighlight]);

  React.useEffect(() => {
    changeAnimationDuration(animationDuration);
  }, [animationDuration, changeAnimationDuration]);

  return (
    <StyledContainer style={style} data-testid={dataTestId}>
      {children}
    </StyledContainer>
  );
};

export const SkeletonContainer = withSkeletonContext(BaseSkeletonContainer);

