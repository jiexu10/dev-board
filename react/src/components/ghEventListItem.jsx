import React from 'react';

export default class GhEventListItem extends React.Component {
  constructor(props){
    super(props);

    this.pullRequestClass = this.pullRequestClass.bind(this);
    this.reviewClass = this.reviewClass.bind(this);
  }

  pullRequestClass(){
    var pullRequestClassName
    if (this.props.data.merged == true) {
      pullRequestClassName = "merged";
    } else {
      pullRequestClassName = this.props.data.state;
    }
    return pullRequestClassName;
  }

  reviewClass(){
    return this.props.data.review ? "visible" : "invisible";
  }

  render(){
    return (
      <li key={this.props.data.name} className="accordion-item" data-accordion-item>
        <a href='#' className='accordion-title'>
          {this.props.data.title}
          <svg className={"octicon octicon-git-pull-request " + this.pullRequestClass()} viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fillRule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
          <svg className={"octicon octicon-eye " + this.reviewClass()} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
          <svg className="octicon octicon-comment" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"/></svg>
          <span className="text-bold">{this.props.data.comments}</span>
        </a>
        <div className='accordion-content' data-tab-content>
          <p>{this.props.data.body}</p>
        </div>
      </li>
    )
  }
}
