import { html } from 'lit';
import { stub } from 'sinon';
import { fixture, expect, defineCE } from '@open-wc/testing';
import '../src/web-series.js';
import { Webseries } from '../src/web-series.js';

describe('WebSeries', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<web-series></web-series>`);
  });

  it('has a static shadow dom', async () => {
    expect(element.shadowRoot.innerHTML).to.equalSnapshot();
  })

  it('should call _fetchSeries function', async() =>{
    let checkCalled = false;
    const tag = defineCE(
      class extends Webseries{
        _fetchSeries(){
          checkCalled = true;
        }
      },
    );
    await fixture (`<${tag}></${tag}>`);
    expect(checkCalled).to.be.true;
  });

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
