import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Link } from '.';

describe('<Link />', () => {
  it('should render a Link', () => {
    renderTheme(<Link link="http://localhost:3000">Children</Link>);
    const link = screen.getByRole('link', { name: 'Children' });

    expect(link).toHaveAttribute('target', '_self');
  });

  it('should render a Link with correct atribute', () => {
    renderTheme(
      <Link link="http://localhost:3000" newTab={true}>
        Children
      </Link>,
    );
    const link = screen.getByRole('link', { name: 'Children' });

    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Link link="http://localhost:3000">Children</Link>,
    );
    expect(container).toMatchSnapshot();
  });
});
