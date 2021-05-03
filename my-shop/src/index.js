import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import Root from './Root';

import './index.scss';

ReactDOM.render(
  
  <Root>
    <App />
    </Root>
  ,
  document.getElementById('root')
);

