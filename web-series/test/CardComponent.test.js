import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/CardComponent.js';

describe('CardComponent', () => {
    let element;
    let series = {
        "id": 0,
        "Title": "guardian: the lonely and great god",
        "Directors": "Lee Eung-bok, Kwon Hyuk-chan",
        "Stars": "Song Joong-ki, Song Hye-kyo, Jin Goo, Kim Ji-won",
        "Streaming Platform": "Netflix"
      }
      
    beforeEach(async () => {
      element = await fixture(html`<web-series-card .data = ${series}></web-series-card>`);
    });

    it('has a static shadow dom', async () => {
      expect(element.shadowRoot.innerHTML).to.equalSnapshot();
    })

    it('should have a property with some data in it', ()=> {
      expect(element).to.have.property('data').to.deep.equal(series);
    })
  
});
  