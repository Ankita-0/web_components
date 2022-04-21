import { LitElement, html, css } from 'lit';
import { WebSeries } from './WebSeries.js';
import { WebSeriesOverview } from './WebSeriesOverview.js';
import '@lion/input/define';
import '@lion/form/define';

// import '@lion/input/define';
// import '@lion/button/define';
//import '@lion/form/define';


export class WebSeriesForm extends LitElement{
    constructor() {
        super();
    }

    static get styles() {
        return css`
        form, #webseries_form {
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
            margin-top: 10%;
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
      <lion-form>
      <form name="webseries_form" id="webseries_form" @submit = ${this._test}>
        <lion-input  name="title" label = "Title:" id = "title" class="inputs" placeholder="Title" .modelValue=${'hi'}  style:"border:red"  @keyup= ${this._capitalize}></lion-input>
        <br><br>
        <lion-input label = "Directors:" type = "text" id = "directors" name="directors" class="inputs" placeholder="Directors" @keyup= ${this._capitalize}></lion-input>
        <br><br>          
        <!--<label for="stars">Stars: </label>-->
        <lion-input name="stars" label = "Stars:" type = "text" id = "stars" class="inputs" placeholder="Stars"></lion-input>
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

        <button type = "submit" id="add_button"><strong>
        Add
        </strong></button>
        </form>
        </lion-form>
      `;
    }

    _capitalize(e){
        e.target.value = e.target.value.slice(0,1).toUpperCase()+e.target.value.slice(1,e.target.value.length);
    }

    _test (e) {
        const msg_div = new WebSeriesOverview;
        const title = this.shadowRoot.querySelector('#title').value;
        const director = this.shadowRoot.querySelector('#directors').value;
        const stars = this.shadowRoot.querySelector('#stars').value;
        const select = this.shadowRoot.querySelector('select').value;

        if(select === null || select === "" ){
            msg_div._errorMsg("Please enter all the details of the Web series")
        }

        if(!this._validator(title)||!this._validator(director)){
            msg_div._errorMsg("Please enter a valid name");
        }
        else if(!this._numericValidator(stars)) {
            msg_div._errorMsg("values between 0 and 10 are allowed")
        }
        else{
        const event =new CustomEvent("data", {
            bubbles:true,
            composed:true,
            detail:
            new WebSeries(title, director, stars, select)
        });
        this.dispatchEvent(event)
        Array.from(this.shadowRoot.querySelectorAll("input")).forEach(input => input.value="");
        this.shadowRoot.querySelector("select").value ="";
    }
        e.preventDefault();
    }

    _validator(value) {
        const re = /^[A-Za-z. ]+[A-Za-z. ]$/;
        if(!re.test(value)){
            return false;
        }
        else{
            return true;
        }
    }

    _numericValidator(value){
        const re = /^10$|^[0-9]$|^[0-9]\.[0-9]$/;
        if(!re.test(value)){
            return false;
        }
        else{
            return true;
        }
    }
}
