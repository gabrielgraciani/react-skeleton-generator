type DisplayTypes =
  | 'block'
  | 'flex'
  | 'none'
  | 'inline'
  | 'inline-block'
  | 'inline-flex';
type AlignItemsTypes = 'flex-start' | 'center' | 'flex-end';
type JustifyContentTypes =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface SkeletonContainerProps {
  /**
   * Skeleton display, you can change the display of the div
   */
  display?: DisplayTypes;

  /**
   * Skeleton width, set the width.
   */
  width?: string;

  /**
   * Skeleton height, set the height.
   */
  height?: string;

  /**
   * Skeleton alignItems, you can change the alignItems of the div
   */
  alignItems?: AlignItemsTypes;

  /**
   * Skeleton justifyContent, you can change the justifyContent of the div
   */
  justifyContent?: JustifyContentTypes;

  /**
   * Skeleton style, you can add any style here.
   */
  style?: React.CSSProperties;

  /**
   * Skeleton children, you will add the skeleton's children here.
   */
  children: React.ReactNode;

  /**
   * Skeleton dataTestId, used for test component
   */
  dataTestId?: string;
}

export interface SkeletonContainerStyledProps {
  display?: DisplayTypes;
  alignItems?: AlignItemsTypes;
  justifyContent?: JustifyContentTypes;
  width?: string;
  height?: string;
}
