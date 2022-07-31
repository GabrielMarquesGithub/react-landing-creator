import P from 'prop-types';

import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { Text } from '../Text';

import * as Styled from './style';

export const GridText = ({
  title,
  description,
  elements,
  background = false,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading as="h2" colorDark={!background} uppercase>
          {title}
        </Heading>
        <Text>{description}</Text>
        <Styled.ElementsContainer>
          {elements.map((element) => (
            <Styled.ElementContainer key={element.title}>
              <Heading as="h3" size="medium" colorDark={!background}>
                {element.title}
              </Heading>
              <Text>{element.description}</Text>
            </Styled.ElementContainer>
          ))}
        </Styled.ElementsContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  elements: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
};
