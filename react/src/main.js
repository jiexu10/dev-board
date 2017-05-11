import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import BoardApp from './components/boardApp.jsx';

// use React to render components onto page after the page loads
$(function() {
  ReactDOM.render(
    <BoardApp />,
    document.getElementById('app')
  );
});
