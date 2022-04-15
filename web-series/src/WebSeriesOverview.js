import { LitElement, html, css } from 'lit';
import { WebSeries } from './WebSeries.js';

export class WebSeriesOverview extends LitElement {
    static get properties(){
        return {
            _myArray: {
                type: Array
            },
            i:{type:Number}
        };
    }
    constructor() {
        super();
        this._myArray = [new WebSeries("guardian: the lonely and great god", "Lee Eung-bok, Kwon Hyuk-chan", 
        8.6,"Netflix"),
        new WebSeries("descendants of the sun","Lee Eung-bok",9.8,"Netflix"), 
        new WebSeries("money heist", "Lee Eung-bok, Kwon Hyuk-chan", 
        8.2,"Netflix"),
        new WebSeries("shadow and bone", "Eric Heisserer", 
        7.7,"Netflix"),
        new WebSeries("it's okay to not be okay", "Park Shin-woo", 
        8.7,"Netflix"),
        new WebSeries("all of us are dead","Lee Jae-kyoo",7.5,"Netflix"),];
        this.i =0
    }

    connectedCallback() {
       super.connectedCallback();
        document.addEventListener("data", event => {
            if(event.detail.getTitle!==""){
                this._myArray.push(event.detail)
                this.requestUpdate();
                this._successMsg();
            }
            else{
                this._errorMsg();
            }            
        });
    }

    static get styles() {
        return css`
        .card_column {
            box-shadow: 0 4px 8px 0 rgb(182, 255, 139);
            padding: 10px;
            text-align: center;
            background-color: rgb(88, 88, 88);
            color: rgb(240, 213, 248);
            height: 250px;
            overflow: scroll;
            cursor: pointer;
            width: 35%;
            float : left;
            padding: 0 10px;
            margin: 20px;
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
            background-color: blueviolet;
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
                margin: 10%;
            }
        }
    `;
    }
    
    _successMsg() {
        const success_div = document.querySelector("body")
        .insertBefore(document.createElement("div"), document.querySelector("#menu"));

        success_div.id = "success_div";

        success_div.innerHTML = `
        <style>
            #success_div {
                color : white;
                background-color: green;
                text-align: center;
                height: 20px;
                width:100%;
                position: fixed;
            }
        </style>
        Webseries added
        `;

        //displaying the msg for 4 sec
        setTimeout(() => document.querySelector("body").removeChild(document.querySelector("#success_div")), 10000)
    }

    _errorMsg() {
        const error_div = document.querySelector("body")
        .insertBefore(document.createElement("div"), document.querySelector("#menu"));

        error_div.id = "error_div";

        error_div.innerHTML = `
        <style>
            #error_div {
                color : white;
                background-color: red;
                text-align: center;
                height: 20px;
                width:100%;
                position: fixed;
            }
        </style>
        Please enter the title of the web series
        `;

        //displaying the error msg for 4 sec
        setTimeout(() => document.querySelector("body").removeChild(document.querySelector("#error_div")), 4000)    
    }

    render() {
        return html`
            ${this._myArray.map(series => html`
                <div class = "card_column">
                    <web-series-card .data=${series}>

                    </web-series-card>
                    <button class = "Delete-button" id = "${this.i++}" type = button @click = ${this._deleteCard}> 
                    Delete 
                    </button>
                </div>             
            `)}
        `;
    }
    
    _deleteCard(id){
        const deleteB = this.shadowRoot.querySelectorAll("button")
        console.log(deleteB)
    }

}
