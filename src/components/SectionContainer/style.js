import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xsmall};
`;
