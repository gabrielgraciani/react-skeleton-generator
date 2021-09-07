import * as React from 'react';

import { SkeletonProvider } from '../context/SkeletonContext';

export function withSkeletonContext(
  WrappedComponent: React.ElementType,
): React.ElementType {
  const Wrapper = (props: unknown) => {
    return (
      <SkeletonProvider>
        <WrappedComponent {...props} />
      </SkeletonProvider>
    );
  };

  return Wrapper;
}
