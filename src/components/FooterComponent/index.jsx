import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { Text } from '../Text';
import * as Styled from './style';

export const FooterComponent = ({ html }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Text>{html}</Text>
      </SectionContainer>
    </Styled.Container>
  );
};

FooterComponent.propTypes = {
  html: P.string.isRequired,
};
