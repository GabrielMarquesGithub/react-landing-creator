import styled, { css } from 'styled-components';

const BackgroundActivate = (theme) => css`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    padding: ${theme.spacing.xhuge};
    ${background && BackgroundActivate(theme)}

    //alinhamentos
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
