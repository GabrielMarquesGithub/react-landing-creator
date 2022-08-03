import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ElementsContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing.medium};
  `}
`;
export const ElementContainer = styled.div`
  overflow: hidden;
`;
export const Image = styled.img`
  width: 100%;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.2) rotate(10deg);
  }
`;
