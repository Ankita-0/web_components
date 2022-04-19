//import { WebSeries } from './WebSeries.js';
import { WebSeriesForm } from './WebSeriesForm.js';
import { WebSeriesOverview } from './WebSeriesOverview.js';
import { CardComponent } from './CardComponent.js';
import { LionTabs } from '@lion/tabs';

//customElements.define('web-series', WebSeries);
customElements.define('web-series-form', WebSeriesForm);
customElements.define('web-series-overview', WebSeriesOverview);
customElements.define('web-series-card', CardComponent);

const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')

document.querySelector("#tab_1").classList.add('active');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document
            .querySelector(tab.dataset.tabValue);

        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active')
        })
        target.classList.add('active');
    })
})
