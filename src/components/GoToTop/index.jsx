import { ArrowDropUp } from '@styled-icons/material-outlined/ArrowDropUp';

import * as Styled from './style';

export const GoToTop = () => {
  return (
    <Styled.Container href="#" aria-label="Go to top" title="Go to top">
      <ArrowDropUp />
    </Styled.Container>
  );
};
