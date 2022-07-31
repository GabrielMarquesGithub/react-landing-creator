import { Menu } from '../../components/Menu';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';

import * as Styled from './style';

//mock para testes
import mock from '../../components/NavLinks/mock';
import mock2 from '../../components/GridTwoColumns/mock';
import mock3 from '../../components/GridContent/mock';
import mock4 from '../../components/GridText/mock';

const logoData = {
  text: 'Alo galera de cowboy',
  link: 'https://www.google.com.br/',
  imageUrl: 'assets/images/logo.svg',
};

function Home() {
  return (
    <Styled.Container>
      <Menu logoData={logoData} links={mock} />
      <GridTwoColumns {...mock2} />
      <GridContent {...mock3} />
      <GridText {...mock4} />
    </Styled.Container>
  );
}

export default Home;
