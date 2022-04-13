import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class WebSeries extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--web-series-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.title}</h1>

        <p>Edit <code>src/WebSeries.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
//     static get styles() {
//         return css`
//           * {
//     box-sizing: border-box;
// }

// .flex-container {
//     display: flex;
//     flex-wrap: wrap;
// }

// .flex-container-left {
//     left: 0;
//     padding: 50px;
//     flex: 40%;
// }

// .flex-container-right {
//     right: 0;
//     padding: 50px;
//     flex: 60%;
// }

// body {
//     background-color: black;
// }

// #webseries_form {
//     margin-top: 20px;
// }

// #menu {
//     list-style-type: none;
//     background-color: rgb(114, 36, 187);
//     color: azure;
//     font-family:'Times New Roman', Times, serif;
//     overflow: hidden;
//     margin: 0;
//     padding: 0;
// }

// #menu_items {
//     display: inline-block;
//     text-align: center;
//     text-decoration: none;
//     padding: 10px;
// }

// #menu_items:hover {
//     background-color: black;
//     color: blueviolet;
//     cursor: pointer;
// }

// h1 {                                                                                                                                                                
//     color: blueviolet;
//     background-color: black;
//     position: absolute;
//     left: 43vw;
//     right: 0;
//     margin: 10px auto;

//     /*margin-bottom: 2%;
//     margin-left: 43%;*/
// }

// label {
//     color: blueviolet;
//     position: absolute;
//     /*flex: 30%;*/
// }

// input, select {
//     margin-left: 50%;
//     width: 50%;
//     /*flex: 70%;*/
// }

// #add_button {
//     box-shadow: 0 4px 8px 0 rgb(174, 133, 212);
//     margin-top: 20%;
//     background-color: blueviolet;
//     margin-left: 65%;
//     /*padding: 5px 30px;*/
//     height: 30px;
//     color: rgb(255, 255, 255);
//     width: 25%;
//     text-align: center;
//     cursor: pointer;
// }

// #add_button:hover {
//     background-color: green;
//     color: black;
// }

// .card {
//     box-shadow: 0 4px 8px 0 rgb(182, 255, 139);
//     padding: 10px;
//     text-align: center;
//     background-color: rgb(88, 88, 88);
//     color: rgb(240, 213, 248);
//     height: 250px;
//     overflow: scroll;
//     cursor: pointer;
// }

// .card::-webkit-scrollbar {
//     width: 2px;
// }

// .card:hover {
//     background-color: rgb(110, 110, 110);
//     color: aqua;
//     padding: 12px;
// }

// /* Float two columns side by side */
// .card_column {
//     float: left;
//     width: 50%;
//     padding: 0 10px;
//     margin-top: 20px;
//     color: aliceblue;
// }

// #card_heading:hover {
//     background-color: rgb(110, 110, 110);
//     color: aqua;
//     text-decoration: underline;
// }
// /*
// #card_image {
//     z-index: -1;
// }
// */
// #card_para {
//     text-align: justify;
// }

// b {
//     color: #000;
//     font-weight: bold;
// }

// .Delete-button {
//     box-shadow: 0 4px 4px 0 rgb(174, 133, 212);
//     margin-top: 2%;
//     background-color: blueviolet;
//     margin-left: 65%;
//     /* padding: 5px 30px; */
//     color: rgb(255, 255, 255);
//     height: 30px;
//     width: 30%;
//     text-align: center;
//     cursor: pointer;
// }


// .Delete-button:hover {
//     background-color: rgb(218, 0, 0);
//     color: black;
// }

// /* Responsive layout */
// @media only screen and (max-width: 950px) {

//     .flex-container-right, .flex-container-left {
//       flex: 100%;
//     }

//     .card_column {
//         width: 100%;
//         display: block;
//         margin-bottom: 20px;
//     }
// }

// `;
//  }
//}
    
//       constructor() {
//         super();
//         this.title = 'My app';
//       }

//       render () {
//           return html`            
//           <form id="webseries_form">
//           <label for="title">Title: </label>
//           <input type = "text" id = "title" class="inputs" placeholder="Title">
//           <br><br>
//           <label for="directors">Directors: </label>
//           <input type = "text" id = "directors" class="inputs" placeholder="Directors">
//           <br><br>          
//           <label for="stars">Stars: </label>
//           <input type = "text" id = "stars" class="inputs" placeholder="Stars">
//           <br><br>         
//           <label for="streaming platforms">Streaming Platform: </label>
//           <select id = "streaming platforms" class="inputs" name = "streaming platforms" >
//              <option hidden label="Select Platform"></option>
//              <option value="Youtube">Youtube</option>
//              <option value="Netflix">Netflix</option>
//              <option value="Amazon Prime">Amazon Prime</option>
//              <option value="Hotstar">Hotstar</option>
//           </select>
//           <br><br>
//     </form>`;
//       }
// }
