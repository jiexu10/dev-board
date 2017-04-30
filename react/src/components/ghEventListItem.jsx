import React from 'react';
import Firebase from 'firebase';

export default class GhEventListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li key={this.props.data.name}>
        {this.props.data.action} {this.props.data.title}
      </li>
    )
  }
}
