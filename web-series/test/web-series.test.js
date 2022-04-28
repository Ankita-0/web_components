import { html } from 'lit';
import { stub } from 'sinon';
import { fixture, expect } from '@open-wc/testing';

import '../src/web-series.js';

describe('WebSeries', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<web-series></web-series>`);
  });

  it('has a static shadow dom', async () => {
    expect(element.shadowRoot.innerHTML).to.equalSnapshot();
  })

  it('calls switchToEnglish function when a button is clicked', () => {
    const _enStub = stub(element, '_switchToEnglish');
    element.requestUpdate();
    element.shadowRoot.querySelector("#en").click();
    expect(_enStub).to.have.callCount(1);
  });

  it('calls switchToGerman function when a button is clicked', () => {
    const _deStub = stub(element, '_switchToGerman');
    element.requestUpdate();
    element.shadowRoot.querySelector("#de").click();
    expect(_deStub).to.have.callCount(1);
  });

  it('calls switchToFrench function when a button is clicked', () => {
    const _frStub = stub(element, '_switchToFrench');
    element.requestUpdate();
    element.shadowRoot.querySelector("#fr").click();
    expect(_frStub).to.have.callCount(1);
  });

});
