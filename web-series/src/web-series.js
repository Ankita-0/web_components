import { WebSeriesForm } from './WebSeriesForm.js';
import { WebSeriesOverview } from './WebSeriesOverview.js';
import { CardComponent } from './CardComponent.js';
import '@lion/tabs/define';
import { LitElement, html, css } from 'lit';
import { ajax } from '@lion/ajax';

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
        this.series = [];
        this._fetchSeries();
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
            z-index:1;
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
        <button id="test" @click = ${this.fetchSeries}> get </button>
        `;  
    }

    _fetchSeries () {
        ajax.fetch("http://localhost:3000/data")
        .then(response => {
            response.json().then((res)=>{
                Object.entries(res).flatMap((elem) => elem[1]).forEach(wSeries => {
                    this.series = [...this.series, wSeries]
                })
            })
        })
        .catch(error => console.log(error));
    }

    _addSeries(event){
        this.series = [...this.series, event.detail]
    }
}

customElements.define('web-series', Webseries);
customElements.define('web-series-form', WebSeriesForm);
customElements.define('web-series-overview', WebSeriesOverview);
customElements.define('web-series-card', CardComponent);


