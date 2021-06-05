import { newSpecPage } from '@stencil/core/testing';
import { TrendsChart } from '../trends-chart';

describe('trends-chart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TrendsChart],
      html: `<trends-chart></trends-chart>`,
    });
    expect(page.root).toEqualHtml(`
      <trends-chart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </trends-chart>
    `);
  });
});
