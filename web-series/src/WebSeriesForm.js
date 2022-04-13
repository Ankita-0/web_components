import { LitElement, html, css } from 'lit';

var template = document.createElement("template");
template.id = "form-template";
template.innerHTML = `
<style>
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
</style>
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
</form>
<button type = "button" form = "webseries_form" id="add_button">
Add
</button>
`;

export class WebSeriesForm extends HTMLElement{
        constructor() {
            super();
            const shadowRoot = this.attachShadow({mode:"open"});
            shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }