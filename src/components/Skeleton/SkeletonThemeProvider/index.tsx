import * as React from 'react';

import { useSkeleton } from '../../../context/SkeletonContext';
import { withSkeletonContext } from '../../../helpers/withSkeletonContext';
import { Colors } from '../../../styles/Colors';

import { SkeletonThemeProviderProps } from './types';
import { StyledContainer } from './styles';

const BaseSkeletonThemeProvider = ({
  color = Colors.background,
  animation = 'shimmer',
  animationDuration = 1,
  style,
  highlight,
  children,
  dataTestId = 'SkeletonThemeProvider',
}: SkeletonThemeProviderProps): JSX.Element => {
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

export const SkeletonThemeProvider = withSkeletonContext(
  BaseSkeletonThemeProvider,
) as ({
  color,
  animation,
  animationDuration,
  style,
  highlight,
  children,
  dataTestId,
}: SkeletonThemeProviderProps) => JSX.Element;
