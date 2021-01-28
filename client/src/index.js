import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App'

// We are using router and turning it into browser to use inside our render() - function
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
