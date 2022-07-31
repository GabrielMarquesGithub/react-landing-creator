import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { Text } from '../Text';
import * as Styled from './style';

export const GridTwoColumns = ({ title, text, image, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading as="h2" colorDark={!background}>
            {title}
          </Heading>
          <Text>{text}</Text>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <img src={image} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  image: P.string.isRequired,
  background: P.bool,
};
