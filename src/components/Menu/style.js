import styled, { css } from 'styled-components';
import { Container as sectionContainer } from '../SectionContainer/style.js';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;

    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};

    transition: all 300ms;
    ${sectionContainer} {
      padding: 0 ${theme.spacing.large};
    }
    @media (${theme.media.lessMedium}) {
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible}

      bottom: 0;
      > ${sectionContainer} {
        max-height: 100vh;
        overflow-y: auto;
      }
    }
  `}
`;
export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (${theme.media.lessMedium}) {
      flex-direction: column;
      justify-content: center;
      gap: ${theme.spacing.large};
      padding: ${theme.spacing.large};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;

    width: 4rem;
    height: 4rem;

    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    border: none;

    display: none;

    @media (${theme.media.lessMedium}) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > svg {
      width: 3rem;
      height: 3rem;
    }
  `}
`;
