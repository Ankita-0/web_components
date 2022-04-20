import { WebSeriesForm } from './WebSeriesForm.js';
import { WebSeriesOverview } from './WebSeriesOverview.js';
import { CardComponent } from './CardComponent.js';
//import '@lion/tabs/define';
import { LitElement, html, css } from 'lit';
import { WebSeries } from './WebSeries.js';

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
        //     document.addEventListener("data", event => {
        //     if(event.detail.getTitle!==""){
        //         //this.series= [...this.series, event.detail]
        //         //this._myArray.push(event.detail)
        //         // this.requestUpdate();
        //         //this._successMsg("Webseries added");
        //     }
        //     // else{
        //     //     this._errorMsg("Please enter the title of the web series");
        //     // }             
        // });
        //this._tabs();
        // const tabs = this.shadowRoot.querySelectorAll('[data-tab-value]')
        // const tabInfos = this.shadowRoot.querySelectorAll('[data-tab-info]')
        // console.log(tabs)
        // this.shadowRoot.querySelector("#tab_1").classList.add('active');

        // tabs.forEach(tab => {
        //     tab.addEventListener('click', () => {
        //         const target = this.shadowRoot
        //             .querySelector(tab.dataset.tabValue);

        //         //const btn = document.getElementById(tab.id);

        //         tabInfos.forEach(tabInfo => {
        //             tabInfo.classList.remove('active');
        //         })
        //         target.classList.add('active');
        //         //console.log(tab.id);
        //     })
        // })
    }

    static get styles() {
        return css`
        #menu {
            list-style-type: none;
            background-color: blueviolet;
            font-size:0;
            overflow: hidden;
            margin: 0;
            padding: 0;
        }
        
        #menu_items {
            display: inline-block;
            text-align: center;
            text-decoration: none;
        }
        
        #menu_items:hover [data-tab-value]:hover {
            background-color: black;
            color: blueviolet;
            cursor: pointer;
        }
        
        h1 {                                                                                                                                                                
            color: blueviolet;
            background-color: black;
            position: absolute;
            width: 100%;
            text-align: center;
            /*left: 40vw;
            right: 0;
           /* margin: 30px auto;*/
        
            /*margin-bottom: 2%;
            margin-left: 43%;*/
        }
        
        #tab_2 {
            margin: 10%;
        }
        
        [data-tab-info] {
            display: block;
        }
          
        .active[data-tab-info] {
            display: flex;
        }
        
        [data-tab-value] {
            position: relative;
            height: 30px;
            background-color: blueviolet;
            border: none;
            color:azure ;
        }
        `;
    }

    render () {
        return html`
        <ul id="menu">
        <lion-tabs>
        <li id="menu_items">
          <button slot="tab" data-tab-value="#tab_1" id="WebSeriesFormbtn" class="tablinks"  >Web Series Form</button>
        </li>
        <li id="menu_items">
          <button slot = "tab" data-tab-value="#tab_2" id="WebSeriesOverviewbtn" class = "tablinks">Web Series Overview</button>
        </li>
      </lion-tabs>
      </ul>
      <div class="tabs__tab tab_1" id="tab_1" data-tab-info>
      <web-series-form @data = ${this._addSeries}></web-series-form>
    </div>
   <div class="tabs__tab" id="tab_2" data-tab-info>       
      <web-series-overview .data=${this.series} class="DynamicCards"> </web-series-overview>
    </div>
        `;
    }

    _addSeries(event){
        this.series = [...this.series, event.detail]
        //console.log(this.series)

    }

    // _tabs(){

    //     const tabs = this.shadowRoot.querySelectorAll('[data-tab-value]')
    //     const tabInfos = document.querySelectorAll('[data-tab-info]')
    //     console.log(tabs)
    //     //document.querySelector("#tab_1").classList.add('active');

    //     tabs.forEach(tab => {
    //         tab.addEventListener('click', () => {
    //             const target = document
    //                 .querySelector(tab.dataset.tabValue);

    //             //const btn = document.getElementById(tab.id);

    //             tabInfos.forEach(tabInfo => {
    //                 tabInfo.classList.remove('active');
    //             })
    //             target.classList.add('active');
    //             //console.log(tab.id);
    //         })
    //     })
    // }

}

customElements.define('web-series', Webseries);
customElements.define('web-series-form', WebSeriesForm);
customElements.define('web-series-overview', WebSeriesOverview);
customElements.define('web-series-card', CardComponent);


