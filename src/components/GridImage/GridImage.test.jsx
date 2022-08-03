import { renderTheme } from '../../styles/renderTheme';
import { GridImage } from '.';

import mock from './mock';

describe('<GridImage />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
