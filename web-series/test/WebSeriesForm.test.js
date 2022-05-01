import { html } from 'lit';
import { stub } from 'sinon';
import { fixture, expect, triggerFocusFor, triggerBlurFor } from '@open-wc/testing';
import '../src/WebSeriesForm.js';
import { NonNumeric } from '../src/WebSeriesForm.js';

describe('WebSeriesForm', () => {
    let element;
    beforeEach(async () => {
      element = await fixture(html`<web-series-form></web-series-form>`);
    });
  
    // it('has a static shadow dom', async () => {
    //   expect(element.shadowRoot.innerHTML).to.equalSnapshot();
    // })
    
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

    it('calls add function when a button is clicked', () => {
      const _addStub = stub(element, '_add');
      element.requestUpdate();
      element.shadowRoot.querySelector("lion-button-submit").click();
      expect(_addStub).to.have.callCount(1);
    });

    it('should capitalize first letter', () => {
      expect(element.shadowRoot.querySelector('#title').parser('new series')).to.be.equal('New series');
      expect(element.shadowRoot.querySelector('#directors').parser('new series')).to.be.equal('New series');
      expect(element.shadowRoot.querySelector('#stars').parser('new series')).to.be.equal('New series');
    });

});

describe("NonNumeric validator test", ()=>{
  const nonNumeric = new NonNumeric();
  it('should not take non numeric input', ()=>{
    expect(nonNumeric.execute("my web series")).to.be.false;
    expect(nonNumeric.execute("12464")).to.be.true;
  })

  it('has the name as nonNumeric',()=>{
    expect(NonNumeric.validatorName).to.equals("nonNumeric");
  })

  it('should return some message', ()=>{
    expect(NonNumeric.getMessage()).to.equal('Only non numeric characters are allowed..');
  })
})
  