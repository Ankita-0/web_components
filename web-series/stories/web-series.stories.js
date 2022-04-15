import { html } from 'lit';
import '../src/web-series.js';

export default {
  title: 'WebSeries',
  component: 'web-series-form>',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {

  return html`

    <web-series-form></web-series-form>
    <web-series-overview class="DynamicCards"> </web-series-overview>

  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
