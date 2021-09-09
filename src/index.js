import React from 'react';
import ReactDOM from 'react-dom';

import '@material/react-text-field/dist/text-field.css';
import '@material/react-material-icon/dist/material-icon.css';

import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

