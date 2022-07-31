import P from 'prop-types';
import { Link } from '../Link';
import * as Styled from './style';

export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => {
        return <Link key={link.link} {...link} />;
      })}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.node.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
