type AlignItemsTypes = 'flex-start' | 'center' | 'flex-end';
type JustifyContentTypes =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface SkeletonFlexProps {
  /**
   * Skeleton alignItems, you can change the alignItems of flex div
   */
  alignItems?: AlignItemsTypes;

  /**
   * Skeleton justifyContent, you can change the justifyContent of flex div
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

export interface SkeletonFlexStyledProps {
  alignItems?: AlignItemsTypes;
  justifyContent?: JustifyContentTypes;
}
