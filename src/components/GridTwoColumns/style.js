import styled, { css } from 'styled-components';
import { title } from '../Heading/style';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing.large};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.large};
    align-items: center;

    @media (${theme.media.lessMedium}) {
      grid-template-columns: 1fr;
    }
  `}
`;
export const TextContainer = styled.div`
  text-align: center;
  ${({ theme }) => css`
    @media (${theme.media.lessMedium}) {
      margin-bottom: ${theme.spacing.large};
      ${title} {
        margin-bottom: ${theme.spacing.large};
      }
    }
  `}
`;
export const ImageContainer = styled.div`
  ${({ theme }) => css``}
`;
