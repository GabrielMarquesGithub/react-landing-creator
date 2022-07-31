import Home from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Home/>', () => {
  it('Should render home component', () => {
    renderTheme(<Home />);
  });
});
