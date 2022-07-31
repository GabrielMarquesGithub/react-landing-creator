import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridContent } from '.';

import mock from './mock';

describe('<GridContent />', () => {
  it('should render correct', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(
      screen.getByRole('heading', { name: 'Grid Content' }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
