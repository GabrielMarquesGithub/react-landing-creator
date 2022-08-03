import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GoToTop } from '.';

describe('<GoToTop />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GoToTop />);
    const link = screen.getByRole('link', { name: 'Go to top' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
    expect(container).toMatchInlineSnapshot(`
      <div>
        <a
          aria-label="Go to top"
          class="sc-bczRLJ iQoMpW"
          href="#"
          title="Go to top"
        >
          <svg
            aria-hidden="true"
            class="StyledIconBase-ea9ulj-0 lbJwfL"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0h24v24H0V0z"
              fill="none"
            />
            <path
              d="M7 14l5-5 5 5H7z"
            />
          </svg>
        </a>
      </div>
    `);
  });
});
