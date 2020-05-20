import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

const patch = "/test"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
