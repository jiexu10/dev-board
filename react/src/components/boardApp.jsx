import BaseComponent from './base.jsx';
import React from 'react';
import GhEventList from './ghEventList.jsx';

export default class BoardApp extends BaseComponent {
  constructor(props){
    super(props);
    this.state = {
      message: 'hello world'
    }
  }

  render(){
    return(
      <div id='board-app' className='board-app-main-container'>
        <GhEventList/>
      </div>
    )
  }
}
