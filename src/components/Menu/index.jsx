import P from 'prop-types';
import { useState } from 'react';

import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { SectionContainer } from '../SectionContainer';

import * as Styled from './style';

export const Menu = ({ links = [], logoData }) => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => setMenuOpen((s) => !s);

  return (
    <>
      <Styled.Button onClick={handleOpenMenu} aria-label="Open/Close menu">
        {MenuOpen ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={MenuOpen} onClick={handleOpenMenu}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
