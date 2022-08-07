import P from 'prop-types';

import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { Text } from '../Text';

import * as Styled from './style';

export const GridImage = ({
  title,
  description,
  elements,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading as="h2" colorDark={!background} uppercase>
          {title}
        </Heading>
        <Text>{description}</Text>
        <Styled.ElementsContainer>
          {elements.map((element) => (
            <Styled.ElementContainer key={element.srcImg}>
              <Styled.Image src={element.srcImg} alt={element.altText} />
            </Styled.ElementContainer>
          ))}
        </Styled.ElementsContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  elements: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
  sectionId: P.string,
};
