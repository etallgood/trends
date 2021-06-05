import { newE2EPage } from '@stencil/core/testing';

describe('trends-chart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<trends-chart></trends-chart>');

    const element = await page.find('trends-chart');
    expect(element).toHaveClass('hydrated');
  });
});
