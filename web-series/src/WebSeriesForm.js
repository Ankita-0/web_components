import { LitElement, html, css } from 'lit';
import { WebSeries } from './WebSeries.js';
import '@lion/input/define';
//import '@lion/form/define';
//import '@lion/select/define';
//import '@lion/button/define';

export class WebSeriesForm extends LitElement{
    constructor() {
        super();
    }
    static get styles() {
        return css`
        #webseries_form {
            margin-top: 100px;
            margin-left:10px;
        }
        label {
            color: blueviolet;
            position: absolute;
            /*flex: 30%;*/
        }

        input{
            width: 40%;
            position: absolute;
            margin-left: 35%;

        }
        
        select {
            width: 40.5%;
            position: absolute;
            height: 25px;
            margin-left: 35%;
            /*flex: 70%;*/
        }

        #add_button {
            box-shadow: 0 4px 8px 0 rgb(174, 133, 212);
            margin-top: 40%;
            background-color: blueviolet;
            /*margin-left: 250%;
            padding: 5px 30px;*/
            height: 30px;
            color: rgb(255, 255, 255);
            width: 100px;
            text-align: center;
            cursor: pointer;
            overflow:hidden;
        }
        
        #add_button:hover {
            background-color: green;
            color: black;
        }
        `;
    }
    render(){
      return html`
      <form id="webseries_form">
        <!--<label for="title">Title: </label>-->
        <lion-input label = "Title:" id = "title" class="inputs" placeholder="Title"></lion-input>
        <br><br>
        <!--<label for="directors">Directors: </label>-->
        <lion-input label = "Directors:" type = "text" id = "directors" class="inputs" placeholder="Directors"></lion-input>
        <br><br>          
        <!--<label for="stars">Stars: </label>-->
        <lion-input label = "Stars:" type = "text" id = "stars" class="inputs" placeholder="Stars"></lion-input>
        <br><br>         
        <label for="streaming platforms">Streaming Platform: </label>
        <lion-select name="streaming platforms" id= "streaming platforms"  class = "inputs">
            <select slot="input">
                <option selected hidden value>Please select</option>
                <option value="Youtube">Youtube</option>
                <option value="Netflix">Netflix</option>
                <option value="Amazon Prime">Amazon Prime</option>
                <option value="Hotstar">Hotstar</option>
            </select>
        </lion-select>
        <br><br>

        <button type = "button" form = "webseries_form" id="add_button" @click = ${this._test}>
        Add
        </button>
        </form>
      `;
    }
    _test (e) {
        const event =new CustomEvent("data", {
            bubbles:true,
            composed:true,
            detail:
            new WebSeries(this.shadowRoot.querySelector('#title').value, 
            this.shadowRoot.querySelector('#directors').value, 
            this.shadowRoot.querySelector('#stars').value,
            this.shadowRoot.querySelector('select').value)
        });
        this.dispatchEvent(event)
        Array.from(this.shadowRoot.querySelectorAll("input")).forEach(input => input.value="");
        this.shadowRoot.querySelector("select").value ="";
        e.preventDefault();
    }
}
