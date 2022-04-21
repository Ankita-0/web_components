import { WebSeriesForm } from './WebSeriesForm.js';
import { WebSeriesOverview } from './WebSeriesOverview.js';
import { CardComponent } from './CardComponent.js';
import '@lion/tabs/define';
import { LitElement, html, css } from 'lit';
import { WebSeries } from './WebSeries.js';
import '@lion/input/define';
import '@lion/form/define';

class Webseries extends LitElement {
    static get properties(){
        return{
            series : {
                type:Array
            }
        };
    }
    constructor () {
        super();
        this.series = [new WebSeries("guardian: the lonely and great god", "Lee Eung-bok, Kwon Hyuk-chan", 
        8.6,"Netflix"),
        new WebSeries("descendants of the sun","Lee Eung-bok",9.8,"Netflix"), 
        new WebSeries("money heist", "Lee Eung-bok, Kwon Hyuk-chan", 
        8.2,"Netflix"),
        new WebSeries("shadow and bone", "Eric Heisserer", 
        7.7,"Netflix"),
        new WebSeries("it's okay to not be okay", "Park Shin-woo", 
        8.7,"Netflix"),
        new WebSeries("all of us are dead","Lee Jae-kyoo",7.5,"Netflix")];
    }

    connectedCallback(){
        super.connectedCallback();
    }

    static get styles() {
        return css`
        .formbtn, .overviewbtn {
            background-color:blueviolet;
            color:azure;
            height:30px;
        }
        `;
    }

    render () {
        return html`
        <lion-tabs>
          <button slot="tab" class = "formbtn">Web Series Form</button>
          <p slot="panel">
            <web-series-form  @data = ${this._addSeries}></web-series-form>
            </p>
          <button slot="tab" class = "overviewbtn">Web Series Overview</button>
            <p slot="panel">       
                <web-series-overview .data=${this.series} class="DynamicCards"> </web-series-overview>
            </p>
        </lion-tabs>
        `;  
    }

    _addSeries(event){
        this.series = [...this.series, event.detail]
    }
}

customElements.define('web-series', Webseries);
customElements.define('web-series-form', WebSeriesForm);
customElements.define('web-series-overview', WebSeriesOverview);
customElements.define('web-series-card', CardComponent);


