import styled from 'styled-components';

import { SkeletonFlexStyledProps } from './types';

const Container = styled.div<SkeletonFlexStyledProps>`
  display: flex;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`;

export { Container };
