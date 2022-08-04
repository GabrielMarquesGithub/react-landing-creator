import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { Text } from '../Text';
import * as Styled from './style';

export const FooterComponent = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Text>{footerHtml}</Text>
      </SectionContainer>
    </Styled.Container>
  );
};

FooterComponent.propTypes = {
  footerHtml: P.string.isRequired,
};
