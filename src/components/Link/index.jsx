import P from 'prop-types';
import * as Styled from './style';

export const Link = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Container>
      <Styled.Link href={link} target={target}>
        {children}
      </Styled.Link>
    </Styled.Container>
  );
};

Link.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
