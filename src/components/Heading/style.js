import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.size.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.size.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.size.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.size.xhuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme) => css`
  @media (${theme.media.lessMedium}) {
    font-size: ${theme.font.size.xlarge};
  }
`;

export const title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    color: ${colorDark ? theme.colors.primary : theme.colors.white};
    ${titleSize[size](theme)}
  `}
`;
