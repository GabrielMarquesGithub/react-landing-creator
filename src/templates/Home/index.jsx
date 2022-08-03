import { Base } from '../Base/index';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import * as Styled from './style';

//mock para testes
import mock from '../../components/NavLinks/mock';
import mock2 from '../../components/GridTwoColumns/mock';
import mock3 from '../../components/GridContent/mock';
import mock4 from '../../components/GridText/mock';
import mock5 from '../../components/GridImage/mock';

const logoData = {
  text: 'Alo galera de cowboy',
  link: 'https://www.google.com.br/',
  imageUrl: 'assets/images/logo.svg',
};

function Home() {
  return (
    <Styled.Container>
      <Base
        links={mock}
        logoData={logoData}
        footerHtml="Gabriel Marques Magalhães"
      >
        <GridTwoColumns {...mock2} />
        <GridContent {...mock3} />
        <GridText {...mock4} />
        <GridImage {...mock5} />
      </Base>
    </Styled.Container>
  );
}

export default Home;
