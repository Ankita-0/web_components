import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/WebSeriesOverview.js';

describe('WebSeriesOverview', () => {
    let element;
    let series;
    series = [
      {
        "id": 0,
        "Title": "guardian: the lonely and great god",
        "Directors": "Lee Eung-bok, Kwon Hyuk-chan",
        "Stars": "Song Joong-ki, Song Hye-kyo, Jin Goo, Kim Ji-won",
        "Streaming Platform": "Netflix"
      },
      {
        "id": 1,
        "Title": "descendants of the sun",
        "Directors": "Lee Eung-bok",
        "Stars": "Song Joong-ki, Song Hye-kyo, Jin Goo, Kim Ji-won",
        "Streaming_Platform": "Netflix"
      }];

    beforeEach(async () => {
      element = await fixture(html`<web-series-overview .data=${series} class="DynamicCards"></web-series-overview>`);
    });

    it('has a static shadow dom', async () => {
      expect(element.shadowRoot.innerHTML).to.equalSnapshot();
    })
  
    it('has a property and a class', async() => {
      expect(element).to.have.property('data').to.deep.equal(series);
      expect(element).to.have.attribute('class').to.equal('DynamicCards');
      //expect(element.getAttribute("class")).to.equal('DynamicCards');
    })

    it('calls deleteCard function when a button is clicked', async() => {
      const _deleteCardStub = stub(element, '_deleteCard');
      element.requestUpdate();
      await element.updateComplete;
      element.shadowRoot.querySelector(".Delete-button").click();
      expect(_deleteCardStub).to.have.callCount(1);
    });

});
  