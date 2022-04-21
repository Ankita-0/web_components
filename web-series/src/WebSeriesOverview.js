import { LitElement, html, css } from 'lit';
import { WebSeries } from './WebSeries.js';
import '@lion/button/define';

export class WebSeriesOverview extends LitElement {
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
            background-color: rgb(88, 88, 88);
            color: rgb(240, 213, 248);
            height: 250px;
            overflow: scroll;
            cursor: pointer;
            width: 300px;
            float : left;
            /*padding: 0 10px;*/
            margin: 5%;
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
    
    _successMsg(msg) {
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
                /*z-index:1;*/
            }
        </style>
        ${msg}
        `;

        //displaying the msg for 4 sec
        setTimeout(() => document.querySelector("body").removeChild(document.querySelector("#success_div")), 4000)
    }

    _errorMsg(msg) {
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
                /*z-index:1;*/
            }
        </style>
        ${msg}
        `;

        //displaying the error msg for 4 sec
        setTimeout(() => document.querySelector("body").removeChild(document.querySelector("#error_div")), 4000)    
    }


    render() {
        return html`
            ${this.data.map(series => html`
                <div class = "card_column">
                    <web-series-card .data=${series}>
                    </web-series-card>
                    <lion-button class = "Delete-button" id = "${this.i++}" @click = ${this._deleteCard}> 
                    Delete 
                    </lion-button>
                </div>             
            `)}
        `;
    }

    _deleteCard(e){
        e.target.parentElement.remove();
        this._successMsg("Successfully deleted")
    }
}
