import React from 'react';

export default class GhEventListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li key={this.props.data.name} className={'accordion-item ' + this.props.data.state} data-accordion-item>
        <a href='#' className='accordion-title'>
          <div>
            {this.props.data.action} {this.props.data.title}
          </div>
          <div>
            <i className='fi-comments' />
            {this.props.data.comments}
          </div>
        </a>
        <div className='accordion-content' data-tab-content>
          <p>some thing here</p>
        </div>
      </li>
    )
  }
}
