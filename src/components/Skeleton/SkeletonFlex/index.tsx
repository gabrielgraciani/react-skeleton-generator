import * as React from 'react';

import { Container } from './styles';
import { SkeletonFlexProps } from './types';

export function SkeletonFlex({
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  style,
  children,
  dataTestId = 'SkeletonFlex',
}: SkeletonFlexProps): JSX.Element {
  return (
    <Container
      alignItems={alignItems}
      justifyContent={justifyContent}
      style={style}
      data-testid={dataTestId}
    >
      {children}
    </Container>
  );
}
