import * as React from 'react';

import { Colors } from '../styles/Colors';

import {
  SkeletonContextProps,
  IAuthProviderProps,
  AnimationTypes,
  HighlightTypes,
} from '../components/Skeleton/types';

export const SkeletonContext = React.createContext<SkeletonContextProps>(
  {} as SkeletonContextProps,
);

const SkeletonProvider = ({ children }: IAuthProviderProps): JSX.Element => {
  const [backgroundColor, setBackgroundColor] = React.useState(
    Colors.background,
  );
  const [animation, setAnimation] = React.useState<AnimationTypes>('shimmer');
  const [highlight, setHighlight] = React.useState<
    HighlightTypes | undefined
  >();
  const [animationDuration, setAnimationDuration] = React.useState(1);

  const changeBackgroundColor = React.useCallback((color: string) => {
    setBackgroundColor(color);
  }, []);

  const changeAnimation = React.useCallback((anim: AnimationTypes) => {
    setAnimation(anim);
  }, []);

  const changeHighlight = React.useCallback((high: HighlightTypes) => {
    setHighlight(high);
  }, []);

  const changeAnimationDuration = React.useCallback((duration: number) => {
    setAnimationDuration(duration);
  }, []);

  return (
    <SkeletonContext.Provider
      value={{
        backgroundColor,
        changeBackgroundColor,
        animation,
        changeAnimation,
        highlight,
        changeHighlight,
        animationDuration,
        changeAnimationDuration,
      }}
    >
      {children}
    </SkeletonContext.Provider>
  );
};

function useSkeleton(): SkeletonContextProps {
  const context = React.useContext(SkeletonContext);

  if (!context) {
    throw new Error('useSkeleton must be used within an SkeletonProvider');
  }

  return context;
}

export { SkeletonProvider, useSkeleton };
