import { LitElement, html, css } from 'lit';
import { WebSeries } from './WebSeries.js';

export class CardComponent extends LitElement {
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

    render() {
        return html`
            ${this.myArray.map(series => html`
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
                ${this.i++}

            `)}
        `;
    }

}