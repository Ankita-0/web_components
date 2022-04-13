import { LitElement, html, css } from 'lit';
import { WebSeries } from './WebSeries.js';
//import { deleteCardInOneMinute } from './WebSeries.js';

export class WebSeriesOverview extends LitElement {

    constructor() {
        super();
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

    render() {
        return html`
                <div class = "card_column">
                    <web-series-card></web-series-card>
                </div> 
        `;
    }
}