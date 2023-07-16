import React  from 'react';
import ReactDOM  from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from './App';
import Context from './context/Context';

ReactDOM.render(
  <HashRouter>
      <Context>
          <App />
      </Context>
  </HashRouter>,
  document.getElementById('root')
);
