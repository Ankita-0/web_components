import { LitElement, html, css } from 'lit';
import '@lion/button/define';
import { ajax } from '@lion/ajax';
import { localize, LocalizeMixin } from '@lion/localize'

export class WebSeriesOverview extends LocalizeMixin(LitElement) {

    static get localizeNamespaces(){
        return [
            {
                'lang-demo': locale => import(`../translations/${locale}.js`)
            },
            ...super.localizeNamespaces
        ];
    }

    static get properties(){
        return {
            data:{type:Array},
            i:{type:Number}
        };
    }
    constructor() {
        super();
        this.i =0
        this.data =[];
    }

    connectedCallback() {
       super.connectedCallback();
    }

    static get styles() {
        return css`
        .card_column {
            box-shadow: 0 4px 8px 0 rgb(182, 255, 139);
            padding: 10px;
            text-align: center;
            background-color: rgb(180, 180, 180);
            color: blueviolet;
            height: 250px;
            overflow: scroll;
            cursor: pointer;
            width: 300px;
            float : left;
            /*padding: 0 10px;*/
            margin: 7%;
        }

        .card_column::-webkit-scrollbar {
            width: 2px;
        }

        .card_column:hover {
            color: aqua;
            background-color: blueviolet;
        }
        .Delete-button {
            box-shadow: 0 4px 4px 0 rgb(174, 133, 212);
            margin-top: 2%;
            background-color: red;
            margin-left: 65%;
            /* padding: 5px 30px; */
            color: rgb(255, 255, 255);
            height: 30px;
            width: 30%;
            text-align: center;
            cursor: pointer;
            position: relative;
        }

        .Delete-button:hover {
            background-color: rgb(218, 0, 0);
            color: black;
        }

        /* Responsive layout*/
        @media only screen and (max-width: 950px) {
            .card_column {
                width: 80%;
                display: block;
                /*margin: 10%;*/
            }
        }
    `;
    }

    render() 
    {
        if(this.data!== undefined){
            this.data = [...this.data];
        }
        return html`
        <div class = "overview">
            ${this.data.map(series => html`
                <div class = "card_column">
                    <web-series-card .data=${series}>
                    </web-series-card>
                    <lion-button class = "Delete-button" id = "${series.id}" @click = ${(e)=>this._deleteCard(e)}> 
                    ${localize.msg('lang-demo:deletebtn')} 
                    </lion-button>
                </div>             
            `)}
        </div>
        `;
    }

    _deleteCard(e){

        ajax.fetch('http://localhost:3000/data/'+e.target.id, {
            method:'DELETE'
        })
        .then(response => console.log("successfully deleted"))
        .catch(error => console.log(error))
        alert("Successfully deleted");
    }
}

customElements.define('web-series-overview', WebSeriesOverview);
