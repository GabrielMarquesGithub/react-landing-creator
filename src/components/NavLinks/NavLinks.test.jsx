import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { NavLinks } from '.';

import mock from './mock';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock}>Children</NavLinks>);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks>Children</NavLinks>);
    expect(screen.queryAllByText('Link')).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks>Children</NavLinks>);
    expect(container).toMatchSnapshot();
  });
});
