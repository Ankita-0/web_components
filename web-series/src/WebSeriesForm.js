import { LitElement, html, css } from 'lit';
import './CardComponent.js';
import { WebSeries } from './WebSeries.js';

export class WebSeriesForm extends LitElement{
    constructor() {
        super();
        
        // this.addEventListener('data', (event) => {
        //     const director = event.detail;
        //     console.log(director)   
        //     const cardComp=this.shadowRoot.host.parentElement.nextElementSibling.firstElementChild.shadowRoot
        //     // .querySelector()
        //     console.log(cardComp) 
        //     //new WebSeries(event.detail.title, director, event.detail.stars, event.detail.streaming) 
        // })
    }
    static get styles() {
        return css`
    #webseries_form {
        margin-top: 20px;
    }
    label {
        color: blueviolet;
        position: absolute;
        /*flex: 30%;*/
    }
    
    input, select {
        margin-left: 50%;
        width: 50%;
        /*flex: 70%;*/
    }
    #add_button {
        box-shadow: 0 4px 8px 0 rgb(174, 133, 212);
        margin-top: 20%;
        background-color: blueviolet;
        margin-left: 65%;
        /*padding: 5px 30px;*/
        height: 30px;
        color: rgb(255, 255, 255);
        width: 25%;
        text-align: center;
        cursor: pointer;
    }
    
    #add_button:hover {
        background-color: green;
        color: black;
    }
    /*@media only screen and (max-width: 950px) {
    
        .flex-container-right, .flex-container-left {
          flex: 100%;
        }
    
        .card_column {
            width: 100%;
            display: block;
            margin-bottom: 20px;
        }
    }*/
    `;
    }
    render(){
      return html`
      <form id="webseries_form">
        <label for="title">Title: </label>
        <input type = "text" id = "title" class="inputs" placeholder="Title">
        <br><br>
        <label for="directors">Directors: </label>
        <input type = "text" id = "directors" class="inputs" placeholder="Directors">
        <br><br>          
        <label for="stars">Stars: </label>
        <input type = "text" id = "stars" class="inputs" placeholder="Stars">
        <br><br>         
        <label for="streaming platforms">Streaming Platform: </label>
        <select id = "streaming platforms" class="inputs" name = "streaming platforms" >
        <option hidden label="Select Platform"></option>
        <option value="Youtube">Youtube</option>
        <option value="Netflix">Netflix</option>
        <option value="Amazon Prime">Amazon Prime</option>
        <option value="Hotstar">Hotstar</option>
        </select>
        <br><br>

        <button type = "button" form = "webseries_form" id="add_button" @click = ${this._test}>
        Add
        </button>
        </form>
      `;
    }
    _test (e) {
        const _b= this.shadowRoot.querySelector('#directors').value;
        //console.log(_b)
        const data = {
            getTitle: this.shadowRoot.querySelector('#title').value,
            getDirector: this.shadowRoot.querySelector('#directors').value,
            getStars: this.shadowRoot.querySelector('#stars').value,
            getStreamingPlatform:this.shadowRoot.querySelector('select').value
        }
        // console.log(new WebSeries(this.shadowRoot.querySelector('#title').value, 
        // this.shadowRoot.querySelector('#directors').value, 
        // this.shadowRoot.querySelector('#stars').value,
        // this.shadowRoot.querySelector('select').value))
        const event =new CustomEvent("data", {
            bubbles:true,
            composed:true,
            detail:
            new WebSeries(this.shadowRoot.querySelector('#title').value, 
            this.shadowRoot.querySelector('#directors').value, 
            this.shadowRoot.querySelector('#stars').value,
            this.shadowRoot.querySelector('select').value)
                // title:this.shadowRoot.querySelector('#title').value,
                // director:this.shadowRoot.querySelector('#directors').value,
                // stars:this.shadowRoot.querySelector('#stars').value,
                // streaming:this.shadowRoot.querySelector('select').value
            //}


        });
        //console.log(event.detail)
        this.dispatchEvent(event)
        e.preventDefault();
    }
}
