import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridText } from '.';

describe('<GridText />', () => {
  it('should render', () => {
    renderTheme(<GridText>Children</GridText>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
