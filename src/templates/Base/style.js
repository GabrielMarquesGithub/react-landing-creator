import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    margin-top: 5.4rem;

    @media (${theme.media.lessMedium}) {
      margin-top: 0;
    }
  `}
`;
