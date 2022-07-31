import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Text } from '.';
import { theme } from '../../styles/theme';

describe('<Text />', () => {
  it('should render a text', () => {
    renderTheme(<Text>text</Text>);
    const text = screen.getByText('text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({ 'font-size': theme.font.size.medium });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Text>text</Text>);
    expect(container).toMatchSnapshot();
  });
});
