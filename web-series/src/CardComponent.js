import { LitElement, html, css } from 'lit';
import { localize, LocalizeMixin } from '@lion/localize'

export class CardComponent extends LocalizeMixin(LitElement) {

    static get localizeNamespaces(){
        return [
            {
                'lang-demo': locale => import(`../translations/${locale}.js`)
            },
            ...super.localizeNamespaces
        ];
    }

    static get properties() {
        return {
            data : {
                type : Object
            }
        };
    }

    static get styles() {
        return css`
        /*.card {
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

        }*/

        .card::-webkit-scrollbar {
            width: 2px;
        }

        .card:hover {
            color: aqua;
            background-color: blueviolet;
        }

        #card_heading:hover {
            background-color: blueviolet;
            color: aqua;
            text-decoration: underline;
        }
        #card_para {
            text-align: justify;
        }
        b {
            color: black;
            font-weight: bold;
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
        }

        .Delete-button:hover {
            background-color: rgb(218, 0, 0);
            color: black;
        }
        
        /* Responsive layout
        @media only screen and (max-width: 950px) {
            .card {
                width: 80%;
                display: block;
                margin: 10%;
            }
        }*/
    `;
    }

    render() {
       return html`
       <div class = "card">
            <h2 id = "card_heading"><b>${localize.msg('lang-demo:title')}: </b>${this.data.Title.toUpperCase()}</h2>
            <p id = "card_para">
            <b>${localize.msg('lang-demo:directors')}: </b>${this.data.Directors}
            <br>
            <b>${localize.msg('lang-demo:stars')}: </b>${this.data.Stars}
            <br>
            <b>${localize.msg('lang-demo:streamingPlatform')}: </b>${this.data.Streaming_Platform}</p>
       </div>
       `;   
    }
}

customElements.define('web-series-card', CardComponent);
