import styled, { keyframes, css } from 'styled-components';
import { lighten, darken } from 'polished';

import { SkeletonStyledProps } from './types';

const shimmerAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
`;

const opacityAnimation = (
  backgroundColor: string,
  isLighten: boolean,
) => keyframes`
  0% {
    background-color: ${backgroundColor};
  }
  100% {
    background-color: ${
      isLighten ? darken(0.2, backgroundColor) : lighten(0.4, backgroundColor)
    };
  }
`;

const AnimationVariations = (
  backgroundColor: string,
  isLighten: boolean,
  animationDuration: number,
) => ({
  shimmer: css`
    &:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        ${backgroundColor} 0%,
        ${isLighten
            ? darken(0.2, backgroundColor)
            : lighten(0.2, backgroundColor)}
          50%,
        ${backgroundColor} 100%
      );
      background-size: 400% 400%;
      animation: ${shimmerAnimation} ${animationDuration}s linear infinite;
    }
  `,
  opacity: css`
    animation: ${opacityAnimation(backgroundColor, isLighten)}
      ${animationDuration}s linear infinite alternate;
  `,
});

const StyledSkeletonContainer = styled.div<SkeletonStyledProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.backgroundColor};
  position: relative;
  overflow: hidden;
  border-radius: ${props => props.borderRadius};

  &:not(:last-child) {
    margin-bottom: ${props => props.spaceBetween};
  }

  ${props =>
    AnimationVariations(
      props.backgroundColor,
      props.isLighten,
      props.animationDuration,
    )[props.animation]}
`;

export { StyledSkeletonContainer };
