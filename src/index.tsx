import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const element = React.createElement('h1', { height: '20px' }, 'Hi!!!');
const root = document.getElementById('root');
const container = React.createElement(
  'div',
  { className: 'container' },
  element,
  <App />
);
ReactDOM.render(container, root);

// ReactDOM.render(element, root);
