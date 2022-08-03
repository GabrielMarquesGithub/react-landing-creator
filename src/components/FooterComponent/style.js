import styled, { css } from 'styled-components';
import { Text } from '../Text/style';

export const Container = styled.footer`
  text-align: center;
  ${({ theme }) => css`
    background: ${theme.colors.white};
    ${Text} {
      font-size: ${theme.font.size.small};
    }
  `}
`;
