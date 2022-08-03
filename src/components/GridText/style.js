import styled, { css } from 'styled-components';
import { title } from '../Heading/style';
import { Text } from '../Text/style';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ElementsContainer = styled.div`
  //contador de elementos
  counter-reset: grid-element;
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing.medium};
  `}
`;
export const ElementContainer = styled.div`
  counter-increment: grid-element;
  ${({ theme }) => css`
    margin-top: ${theme.font.size.huge};
    ${title} {
      position: relative;
      margin-left: 6rem;

      &::before {
        content: counter(grid-element);
        position: absolute;
        font-size: ${theme.font.size.huge};
        left: -5rem;
        top: -1.5rem;

        transform: rotate(5deg);
      }
    }
  `}
`;
