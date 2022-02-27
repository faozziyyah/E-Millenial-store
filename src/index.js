import React  from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import Context from './context/Context';

ReactDOM.render(
  <BrowserRouter>
      <Context>
          <App />
      </Context>
  </BrowserRouter>,
  document.getElementById('root')
);
