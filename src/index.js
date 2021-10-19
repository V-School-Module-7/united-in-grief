import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-TCJN7J5'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

