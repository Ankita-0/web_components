import { LitElement, html, css } from 'lit';
import { WebSeries } from './WebSeries.js';
//import { deleteCardInOneMinute } from './WebSeries.js';

export class WebSeriesOverview extends LitElement {
    static get properties(){
        return {
            i : {
                type: Number
            },
            myArray: {
                type: Array
            }
        };
    }

    constructor() {
        super();
        this.myArray = [new WebSeries("guardian: the lonely and great god", "Lee Eung-bok, Kwon Hyuk-chan", 
        "Gong Yoo, Kim Go-eun, Lee Dong-wook, Yoo In-na, Yook Sung-jae","Netflix"), 
        new WebSeries("money heist", "Lee Eung-bok, Kwon Hyuk-chan", 
        "Úrsula Corberó, Álvaro Morte, Itziar Ituño, Pedro Alonso, Paco Tous, Alba Flores, Miguel Herrán,"+
        " Jaime Lorente, Esther Acebo, Enrique Arce, María Pedraza, Darko Perić, Kiti Mánver, Hovik Keuchkerian,"+
        " Luka Peroš, Belén Cuesta, Fernando Cayo, Rodrigo de la Serna, Najwa Nimri","Netflix"),
        new WebSeries("shadow and bone", "Eric Heisserer", 
        "Jessie Mei Li, Archie Renaux, Freddy Carter, Amita Suman, Kit Young, Ben Barnes, Zoë Wanamaker, Lewis Tan,"+
        "Patrick Gibson, Anna Leong Brophy, Jack Wolfe, Daisy Head, Danielle Galligan, Calahan Skogman","Netflix"),
        new WebSeries("it's okay to not be okay", "Park Shin-woo", 
        "Kim Soo-hyun, Seo Yea-ji, Oh Jung-se, Park Gyu-young","Netflix"),
        new WebSeries(";)","abc","def","ghi"),
        new WebSeries(":D","ijk","lmn","opq")];

        this.i = 0;
    }

    static get styles() {
        return css`
        .card {
            box-shadow: 0 4px 8px 0 rgb(182, 255, 139);
            padding: 10px;
            text-align: center;
            background-color: rgb(88, 88, 88);
            color: rgb(240, 213, 248);
            height: 250px;
            overflow: scroll;
            cursor: pointer;
        }

        .card::-webkit-scrollbar {
            width: 2px;
        }

        .card:hover {
            background-color: rgb(110, 110, 110);
            color: aqua;
            padding: 12px;
        }

        /* Float two columns side by side */
        .card_column {
            float: left;
            width: 40%;
            padding: 0 10px;
            margin-top: 20px;
            color: aliceblue;
        }
        #card_heading:hover {
            background-color: rgb(110, 110, 110);
            color: aqua;
            text-decoration: underline;
        }
        #card_para {
            text-align: justify;
        }
        b {
            color: #000;
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
        
        /* Responsive layout */
        @media only screen and (max-width: 950px) {

            .flex-container-right, .flex-container-left {
            flex: 100%;
            }

            .card_column {
                width: 100%;
                display: block;
                margin-bottom: 20px;
            }
        }
    `;
    }

    render() {
        return html`
            ${this.myArray.map(series => html`
                <div class = "card_column">
                    <div class = "card">
                        <h2 id = "card_heading"><b>Title: </b>${series.getTitle.toUpperCase()}</h2>
                        <p id = "card_para">
                        <b>Directors:</b>${series.getDirector}
                        <br>
                        <b>Stars:</b>${series.getStars}
                        <br>
                        <b>Streaming Platform:</b>${series.getStreamingPlatform}</p>
                        <button type = "button" class = "Delete-button" id = Delete-button_${this.i}  @click = "${this.deleteCardInOneMinute(`Delete-button_${this.i}`)}">
                        Delete</button>
                    </div>
                </div> 
                ${this.i++}

            `)}
        `;
    }

    deleteCardInOneMinute(e) {

        console.log(e)
        var shadow = this.shadowRoot;
        console.log(shadow.host)
        // var host = shadow.host
        // var card_c = host.shadowRoot.querySelector("div.card_column")
        // console.log(card_c)
    }
}