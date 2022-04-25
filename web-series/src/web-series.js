import '@lion/tabs/define';
import { LitElement, html, css } from 'lit';
import { ajax } from '@lion/ajax';
import { localize, LocalizeMixin } from '@lion/localize';

class Webseries extends LocalizeMixin(LitElement) {

    static get localizeNamespaces(){
        return [
            {
                'lang-demo': locale => import(`../translations/${locale}.js`)
            },
            ...super.localizeNamespaces
        ];
    }

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
        sessionStorage.setItem('My_First_Token', 
            JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik15IEZpcnN0IFRva2VuIiwiaWF0IjoxNTE2MjM5MDIyfQ._JQBt_HVynPTYedOBa8iOo1jY9fjD_iwXneVw3YC0qg'));
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
            <web-series-form></web-series-form>
            </p>
          <button slot="tab" class = "overviewbtn">Web Series Overview</button>
            <p slot="panel">       
                <web-series-overview .data=${this.series} class="DynamicCards"> </web-series-overview>
            </p>
        </lion-tabs>
        <div class = "switch_lang">
        ${localize.msg('lang-demo:translateTo')} :: 
            <button @click = ${this._switchToEnglish}> English </button>
            <button @click = ${this._switchToFrench}> French </button>
            <button @click = ${this._switchToGerman}> German </button>
        </div>
        `;  
    }

    _fetchSeries (){
        ajax.fetch("http://localhost:3000/data", {
            headers: {
                'Authorization' : `Bearer ${JSON.parse(sessionStorage.getItem('My_First_Token'))}`,
                'Accept' : 'application/json'
            }
        })
        .then(response => {
            response.json().then((res)=>{
                Object.entries(res).flatMap((elem) => elem[1]).forEach(wSeries => {
                    this.series = [...this.series, wSeries]
                })
            })
        })
        .catch(error => console.log(error));
    }

    _switchToEnglish(e){
        localize.locale = 'en-GB';
    }

    _switchToGerman(e){
        localize.locale = 'de-DE';
    }

    _switchToFrench(e){
        localize.locale = 'fr-FR';
    }
}

customElements.define('web-series', Webseries);
