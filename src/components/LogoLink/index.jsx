import P from 'prop-types';

import { Heading } from '../Heading/index';

import * as Styled from './style';

export const LogoLink = ({ text, link, imageUrl = '' }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!imageUrl && <img src={imageUrl} alt={text} />}
        {!imageUrl && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  link: P.string.isRequired,
  imageUrl: P.string,
};
