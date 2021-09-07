import * as React from 'react';

import { Container } from './styles';
import { SkeletonContainerProps } from './types';

export function SkeletonContainer({
  display = 'flex',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  style,
  children,
  width = '100%',
  height,
  dataTestId = 'SkeletonContainer',
}: SkeletonContainerProps): JSX.Element {
  return (
    <Container
      display={display}
      width={width}
      height={height}
      alignItems={alignItems}
      justifyContent={justifyContent}
      style={style}
      data-testid={dataTestId}
    >
      {children}
    </Container>
  );
}
