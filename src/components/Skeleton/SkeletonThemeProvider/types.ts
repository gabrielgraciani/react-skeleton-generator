import { AnimationTypes, HighlightTypes } from '../types';

export interface SkeletonThemeProviderProps {
  /**
   * Skeleton color, the animation color will be generated automatically depending on the past color, it can be lighter or darker.
   */
  color?: string;

  /**
   * Skeleton animation, shimmer is like an wave and opacity will appear and disappear.
   */
  animation?: AnimationTypes;

  /**
   * Skeleton animation duration, how long it takes do one cycle of the skeleton animation.
   */
  animationDuration?: number;

  /**
   * Skeleton style, you can add any style here.
   */
  style?: React.CSSProperties;

  /**
   * Skeleton Highlight, if passed the 'light' or 'dark' value it will override the skeleton
   * color value, and the animation color will be based on this prop.
   */
  highlight?: HighlightTypes;

  /**
   * Skeleton children, you will add the skeleton's children here.
   */
  children: React.ReactNode;

  /**
   * Skeleton dataTestId, used for test component
   */
  dataTestId?: string;
}
