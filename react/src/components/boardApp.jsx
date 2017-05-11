import BaseComponent from './base.jsx';
import React from 'react';
import GhEventList from './ghEventList.jsx';

export default class BoardApp extends BaseComponent {
  constructor(props){
    super(props);
  }

  // render the board
  render(){
    return(
      <div id='board-app' className='board-app-main-container'>
        <GhEventList/>
      </div>
    )
  }
}
