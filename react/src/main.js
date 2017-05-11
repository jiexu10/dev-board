import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import BoardApp from './components/boardApp.jsx';

$(function() {
  ReactDOM.render(
    <BoardApp />,
    document.getElementById('app')
  );
});
