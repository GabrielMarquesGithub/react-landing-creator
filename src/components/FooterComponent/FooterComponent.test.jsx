import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { FooterComponent } from './index';

describe('<FooterComponent />', () => {
  it('should render', () => {
    const { container } = renderTheme(<FooterComponent html="<h1>test</h1>" />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <footer
          class="sc-dkzDqf FBdpO"
        >
          <section
            class="sc-bczRLJ eEOUOS"
          >
            <p
              class="sc-gsnTZi bRHHAv"
            >
              <h1>
                test
              </h1>
            </p>
          </section>
        </footer>
      </div>
    `);
  });
});
