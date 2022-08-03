import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    width: 4rem;
    height: 4rem;

    right: 2rem;
    bottom: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.secondary};
    color: ${theme.colors.primary};

    opacity: 0.7;
    border-radius: 100%;

    transition: opacity 300ms ease-in-out;
    &:hover {
      opacity: 1;
    }
  `}
`;
