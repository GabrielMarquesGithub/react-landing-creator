import styled, { css } from 'styled-components';
import { title } from '../Heading/style';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 58rem;

    margin: 0 auto;

    ${title} {
      margin-bottom: ${theme.spacing.large};
    }
  `}
`;
