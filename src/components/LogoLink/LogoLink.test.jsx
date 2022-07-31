import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render a text', () => {
    renderTheme(<LogoLink text="teste de texto" link="#target" />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.queryByText('teste de texto')).toBeInTheDocument();
    expect(screen.queryByAltText('teste de texto')).toBeFalsy();
  });
  it('should render a img', () => {
    renderTheme(
      <LogoLink text="teste de texto" link="#target" imageUrl="./mock.svg" />,
    );
    expect(screen.getByAltText('teste de texto')).toBeInTheDocument();
  });
});
