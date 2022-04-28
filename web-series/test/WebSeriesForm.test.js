import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/WebSeriesForm.js';

describe('WebSeriesForm', () => {
    let element;
    beforeEach(async () => {
      element = await fixture(html`<web-series-form></web-series-form>`);
    });
  
    it('has a static shadow dom', async () => {
      expect(element.shadowRoot.innerHTML).to.equalSnapshot();
    })
    
    it('TEST a form Group ELEMENT COUNT', () => {
        const inputElements = element.shadowRoot.querySelectorAll('input');
        const dropdownElements = element.shadowRoot.querySelectorAll('select');
        expect(inputElements.length).to.equal(3);
        expect(dropdownElements.length).to.equal(1);
    })

    it('CHECK INITIAL FORM VALUES', () => {
        expect(element.shadowRoot.querySelector('#title').value).to.equal("");
        expect(element.shadowRoot.querySelector('#directors').value).to.equal("");
        expect(element.shadowRoot.querySelector('#stars').value).to.equal("");
        expect(element.shadowRoot.querySelector('select').value).to.equal("");
    })

    

});
  