import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.size.small};
    padding: ${theme.spacing.small};
    color: ${theme.colors.primary};

    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 0.2rem;

      background: ${theme.colors.secondary};

      transition: all 300ms;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;

export const Container = styled.div`
  display: flex;
`;
