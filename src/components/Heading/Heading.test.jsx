import { renderTheme } from '../../styles/renderTheme';
import { Heading } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import 'jest-styled-components';

describe('<Heading/>', () => {
  it('Should render Heading component with default values', () => {
    renderTheme(<Heading>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    //teste valores padrão
    expect(heading).toHaveStyle({
      color: theme.colors.primary,
      'font-size': '6.4rem',
      'text-transform': 'none',
    });
  });

  it('Should render with white color', () => {
    renderTheme(<Heading colorDark={false}>text</Heading>);
    //selecionando o elemento heading
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('Should render small Heading', () => {
    renderTheme(<Heading size="small">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.size.medium,
    });
  });
  it('Should render medium Heading', () => {
    renderTheme(<Heading size="medium">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.size.large,
    });
  });
  it('Should render big Heading', () => {
    renderTheme(<Heading size="big">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.size.xlarge,
    });
  });
  it('Should render huge Heading', () => {
    renderTheme(<Heading size="huge">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.size.xhuge,
    });
  });

  it('Should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyleRule('font-size', theme.font.size.xlarge, {
      media: `(${theme.media.lessMedium})`,
    });
  });

  it('Should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({ 'text-transform': 'uppercase' });
  });

  it('Should render correct heading', () => {
    const { container } = renderTheme(<Heading as="h6">text</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading>text</Heading>);
    expect(container).toMatchSnapshot();
  });
});
