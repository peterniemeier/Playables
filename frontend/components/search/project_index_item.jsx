import React from 'react';
import { withRouter } from 'react-router-dom';

import ProjectShowContainer from '../project_show/project_show_container';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const benchId = this.props.bench.id;
    this.props.history.push(`/projects/${projectId}`);
  }

  render() {
    const { average_rating, description, picture_url } = this.props.project;
    return (
      <div
        className="project-index-item"
        onClick={this.handleClick}
      >
        <div className="index-item-info">
          <span className="index-item-category">Rating:</span>
          <span className="index-item-copy">
            {average_rating || 'No reviews yet'}
          </span>
          <span className="index-item-category">Description:</span>
          <span className="index-item-copy">{description}</span>
        </div>
        <img src={picture_url}/>
      </div>
    );
  }
}

export default withRouter(IndexItem);
