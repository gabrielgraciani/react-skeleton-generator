export type AnimationTypes = 'opacity' | 'shimmer';
export type HighlightTypes = 'light' | 'dark';

export interface SkeletonProps {
  /**
   * Skeleton width, set the width.
   */
  width?: string;

  /**
   * Skeleton height, set the height.
   */
  height?: string;

  /**
   * Skeleton borderRadius, set the borderRadius.
   */
  borderRadius?: string;

  /**
   * Skeleton style, you can add any style here.
   */
  style?: React.CSSProperties;

  /**
   * Skeleton count, how many lines will be generate.
   */
  count?: number;

  /**
   * Skeleton spaceBetween, space that will be generate each lines if count > 1
   */
  spaceBetween?: string;

  /**
   * Skeleton widthMultiple, width for each skeleton if count > 1
   */
  widthMultiple?: string[];

  /**
   * Skeleton heightMultiple, height for each skeleton if count > 1
   */
  heightMultiple?: string[];

  /**
   * Skeleton dataTestId, used for test component
   */
  dataTestId?: string;
}

export interface SkeletonStyledProps {
  isLighten: boolean;
  backgroundColor: string;
  animation: AnimationTypes;
  animationDuration: number;

  width: string;
  height: string;
  borderRadius?: string;
  spaceBetween: string;
}

export interface SkeletonContextProps {
  backgroundColor: string;
  changeBackgroundColor: (color: string) => void;
  animation: AnimationTypes;
  changeAnimation: (animation: AnimationTypes) => void;
  highlight?: HighlightTypes;
  changeHighlight: (highlight: HighlightTypes) => void;
  animationDuration: number;
  changeAnimationDuration: (duration: number) => void;
}

/* Begin Context Types */
export interface IAuthProviderProps {
  children: React.ReactNode;
}
/* End Context types */
