import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
0%{
  transform: translate(-50%, -50%) rotate(0deg);
}
100%{
  transform: translate(-50%, -50%) rotate(360deg);
}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
    background: ${theme.colors.primary};

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-width: 0.5rem;
      border-color: transparent;
      border-style: solid;
      border-radius: 50%;
    }
    &:after {
      animation: ${rotate} 1s linear infinite;

      width: 6rem;
      height: 6rem;
      border-top: 0.5rem solid ${theme.colors.secondary};
      border-left: 0.5rem solid ${theme.colors.secondary};
    }
    &:before {
      animation: ${rotate} 1s linear infinite reverse;

      width: 2rem;
      height: 2rem;
      border-top: 0.5rem solid ${theme.colors.secondary};
      border-left: 0.5rem solid ${theme.colors.secondary};
    }
  `}
`;
