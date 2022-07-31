import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Menu } from '.';

import linksMock from '../NavLinks/mock';
import { theme } from '../../styles/theme';
const logoData = {
  text: 'text',
  link: '#target1',
  imageUrl: 'assets/images/logo.svg',
};
import 'jest-styled-components';

describe('<Menu />', () => {
  it('should render a logo and a main menu nav', () => {
    const { container } = renderTheme(
      <Menu logoData={logoData} links={linksMock} />,
    );
    expect(screen.getByRole('heading', { name: 'text' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
  it('should render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu logoData={logoData} links={linksMock} />);
    const button = screen.getByLabelText('Open/Close menu');

    expect(button).toHaveStyle({ display: 'none' });
    expect(button).toHaveStyleRule('display', 'flex', {
      media: `(${theme.media.lessMedium})`,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(button.nextSibling).toHaveStyleRule('opacity', '0', {
      media: `(${theme.media.lessMedium})`,
    });

    fireEvent.click(button);
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    expect(button.nextSibling).toHaveStyleRule('opacity', '1', {
      media: `(${theme.media.lessMedium})`,
    });

    fireEvent.click(button.nextSibling);
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(button.nextSibling).toHaveStyleRule('opacity', '0', {
      media: `(${theme.media.lessMedium})`,
    });
  });
});
