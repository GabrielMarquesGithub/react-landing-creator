import { Base } from './index';
import { renderTheme } from '../../styles/renderTheme';

//mocks
import mock from '../../components/NavLinks/mock';
const logoData = {
  text: 'Alo galera de cowboy',
  link: 'https://www.google.com.br/',
  imageUrl: 'assets/images/logo.svg',
};

describe('<Base/>', () => {
  it('Should render Base component', () => {
    const { container } = renderTheme(
      <Base
        links={mock}
        logoData={logoData}
        footerHtml="Gabriel Marques Magalhães"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
