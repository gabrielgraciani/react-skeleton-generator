import styled from 'styled-components';

import { SkeletonContainerStyledProps } from './types';

const Container = styled.div<SkeletonContainerStyledProps>`
  display: ${props => props.display};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  width: ${props => props.width};
  height: ${props => props.height};
`;

export { Container };
