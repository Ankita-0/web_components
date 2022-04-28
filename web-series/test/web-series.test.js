import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/web-series.js';

describe('WebSeries', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<web-series></web-series>`);
  });

  // it('passes the a11y audit', async () => {
  //   await expect(element).shadowDom.to.be.accessible();
  // });

  it('has a static shadow dom', async () => {
    expect(element.shadowRoot.innerHTML).to.equalSnapshot();
  })

});
