import { LitElement, html, css } from 'lit';
import { WebSeries } from './WebSeries.js';

export class WebSeriesOverview extends LitElement {
    static get properties(){
        return {
            _myArray: {
                type: Array
            },
            data: {
                type: Array
            }
        };
    }
    constructor() {
        super();
        this._myArray = [new WebSeries("guardian: the lonely and great god", "Lee Eung-bok, Kwon Hyuk-chan", 
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
        this.data =[];


    }


    connectedCallback() {
        super.connectedCallback();
        const cardComp=document.querySelector("web-series-form").shadowRoot.querySelector("form")
        //this.shadowRoot.host.parentNode.parentNode
        //.firstElementChild.shadowRoot
        // .querySelector()
        console.log(cardComp) 

        document.addEventListener("data", event => {
            const director = event.detail;
            console.log(director) 
            this._myArray.push(director)
            console.log(this._myArray)
            //console.log(this.setAttribute(".data", director))

            
            // var l= this.shadowRoot.querySelectorAll("web-series-card")
            // console.log(this.shadowRoot.querySelectorAll("web-series-card")[l.length])

        });
  
            // .querySelector()
            //console.log(cardComp) 
            //new WebSeries(event.detail.title, director, event.detail.stars, event.detail.streaming) 
        //})
    }

    static get styles() {
        return css`
        .card_column {
            padding: 0 10px;
            margin-top: 20px;
            color: aliceblue;
        }
    `;
    }

    update_myArray(){

    }

    render() {
        console.log(this._myArray)
        // console.log(this.getAttribute(".data"))
        return html`
            ${this._myArray.map(series => html`
                <div class = "card_column">
                    <web-series-card .data=${series}></web-series-card>
                </div>             
            `)}
        `;
    }

}
