import { LitElement, html, css } from 'lit';
import { WebSeries } from './WebSeries.js';
import { WebSeriesOverview } from './WebSeriesOverview.js';
import '@lion/select/define';
import '@lion/input/define';
import { Required } from '@lion/form-core';
import { Pattern } from '@lion/form-core';
import '@lion/form/define';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import '@lion/button/define';

export class WebSeriesForm extends LitElement{
    constructor() {
        super();
    }

    static get styles() {
        return css`
        #webseries_form {
            margin-top: 100px;
            margin:10% 25vw;
            border-color: blueviolet;
        }

        label {
            color: darkpurple;
        }
            /*position: absolute;
            flex: 30%;
        }

        lion-input{
            width: 30%;
            /*position: absolute;
            margin-left: 35%;

        }
        
        select {
            width: 40.5%;
            position: absolute;
            height: 25px;
            margin-left: 35%;
            /*flex: 70%;
        }*/

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
        loadDefaultFeedbackMessages();
        return html`
        <lion-form>
        <form name="webseries_form" id="webseries_form" @submit = ${this._test}>
            <lion-input  name="title" label = "Title:" id = "title" class="inputs" placeholder="Title" .modelValue=${'Goblin'} .validators=${[new Required(), new Pattern(/^[A-Za-z. ]+[A-Za-z. ]$/)]} .parser = "${viewValue => viewValue.replace(/^[a-z]/, str => str.toUpperCase())}"></lion-input>
            <br><br>
            <lion-input label = "Directors:" type = "text" id = "directors" name="directors" class="inputs" placeholder="Directors" .validators=${[new Required(), new Pattern(/^[A-Za-z. ]+[A-Za-z. ]$/)]} .parser = "${viewValue => viewValue.replace(/^[a-z]/, str => str.toUpperCase())}"></lion-input>
            <br><br>          
            <!--<label for="stars">Stars: </label>-->
            <lion-input name="stars" label = "Stars:" type = "text" id = "stars" class="inputs" placeholder="Stars" .validators=${[new Required(), new Pattern(/^10$|^[0-9]$|^[0-9]\.[0-9]$/)]}></lion-input>
            <br><br>         
            <label for="streaming platforms">Streaming Platform: </label>
            <lion-select name="streaming platforms" id= "streaming platforms"  class = "inputs" .validators=${[new Required()]}>
            <br>
                <select slot="input">
                    <option selected hidden value>Please select</option>
                    <option value="Youtube">Youtube</option>
                    <option value="Netflix">Netflix</option>
                    <option value="Amazon Prime">Amazon Prime</option>
                    <option value="Hotstar">Hotstar</option>
                </select>
            </lion-select>
            <br><br>

            <lion-button-submit id="add_button"><strong>
            Add
            </strong></lion-button-submit>
            </form>
            </lion-form>
        `;
    }

    _clickHandler(e){
        e.target.dispatchEvent(new Event('submit', {bubbles:true,
        cancelable:true}))
    }

    _test (e) {
        const msg_div = new WebSeriesOverview;
        const title = this.shadowRoot.querySelector('#title').value;
        const director = this.shadowRoot.querySelector('#directors').value;
        const stars = this.shadowRoot.querySelector('#stars').value;
        const select = this.shadowRoot.querySelector('select').value;

        if(!this._validator(title)||!this._validator(director)||!this._numericValidator(stars)||select === null || select === ""){
            msg_div._errorMsg("Please fill all the fields properly");
        }
        else{
            const event =new CustomEvent("data", {
                bubbles:true,
                composed:true,
                detail:
                new WebSeries(title, director, stars, select)
            });
            this.shadowRoot.querySelector('#webseries_form').dispatchEvent(event)

            this.shadowRoot.querySelector('#webseries_form').reset();
            // Array.from(this.shadowRoot.querySelectorAll("input")).forEach(input => input.value="");
            // this.shadowRoot.querySelector("select").value ="";
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
