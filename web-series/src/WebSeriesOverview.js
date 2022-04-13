import { LitElement, html, css } from 'lit';
import { WebSeries } from './WebSeries.js';

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
            width: 50%;
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
    `;
    }

    render() {
        return html`
            ${this.myArray.map(series => html`
            <div class = "card_row">
                <div class = "card_column">
                    <div class = "card">
                        <h2 id = "card_heading"><b>Title: </b>${series.getTitle.toUpperCase()}</h2>
                        <p id = "card_para">
                        <b>Directors:</b>${series.getDirector}
                        <br>
                        <b>Stars:</b>${series.getStars}
                        <br>
                        <b>Streaming Platform:</b>${series.getStreamingPlatform}</p>
                    </div>
                </div>
            </div>`)}
        `;
    }
}

// let i = 0;
// var row_div;
// var container = document.querySelector(".DynamicCards");
// function cardGenerator(series) {

//     if(i%2==0){
//         //console.log(i);
//         var new_row_div = document.createElement('div');
//         row_div=new_row_div;
//         row_div.className = "card_row";
//     }

//     container.appendChild(row_div);

//     var column_div = document.createElement('div');
//     column_div.className = "card_column";

//     var column_div = document.createElement('div');
//     column_div.className = "card_column";

//     var card_div = document.createElement('div');
//     card_div.className = "card";

//     var card_heading_h2 = document.createElement("h2");
//     card_heading_h2.id = "card_heading";

//     var b0 = document.createElement("b");
//     b0.append("Title ");
//     card_heading_h2.appendChild(b0);
//     card_heading_h2.append(`${series.getTitle.toUpperCase()}`);

//     //card_heading_h2.innerHTML = `<b>Title:</b>${series.getTitle.toUpperCase()}`;

//     var card_para_p = document.createElement('p');
//     card_para_p.id = "card_para";

//     var b1 = document.createElement("b");
//     b1.append("Directors: ")
//     card_para_p.appendChild(b1);
//     card_para_p.append(`${series.getDirector}`);
//     card_para_p.appendChild(document.createElement("br"));
//     var b2 = document.createElement("b");
//     b2.append("Stars: ")
//     card_para_p.appendChild(b2);
//     card_para_p.append(`${series.getStars}`);
//     card_para_p.appendChild(document.createElement("br"));
//     var b3 = document.createElement("b");
//     b3.append("Streaming Platform: ");
//     card_para_p.appendChild(b3);
//     card_para_p.append(`${series.getStreamingPlatform}`);

//     // card_para_p.innerHTML = `<b>Directors:</b>${series.getDirector}
//     //             <br>
//     //             <b>Stars:</b>${series.getStars}
//     //             <br>
//     //             <b>Streaming Platform:</b>${series.getStreamingPlatform}`;

//     var delete_button = document.createElement("button");
//     delete_button.type = "button" ;
//     delete_button.className = "Delete-button";
//     delete_button.id = `Delete-button_${i}`;
//     delete_button.textContent = "Delete";
//     delete_button.onclick = function()  {
//         deleteCardInOneMinute(delete_button.id)
//     };

//     column_div.appendChild(card_div);
//     card_div.appendChild(card_heading_h2);
//     card_div.appendChild(card_para_p);
//     card_div.appendChild(delete_button);

//     row_div.appendChild(column_div);
//     container.appendChild(row_div);
//     i=i+1;
// }
