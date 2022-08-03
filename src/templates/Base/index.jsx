import P from 'prop-types';

import { Menu } from '../../components/Menu';
import { FooterComponent } from '../../components/FooterComponent';
import { GoToTop } from '../../components/GoToTop';

import * as Styled from './style';

export const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu logoData={logoData} links={links} />
      <Styled.Container>
        {children}
        <FooterComponent html={footerHtml} />
      </Styled.Container>
      <GoToTop />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
