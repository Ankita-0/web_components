import { html } from 'lit';
import '../src/web-series.js';

export default {
  title: 'WebSeries',
  component: 'web-series',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {

  return html`

  <web-series></web-series>

  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
