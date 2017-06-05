import React from 'react'
import { Button } from 'react-bootstrap'

class New extends React.Component {

  render() {
    return (
      <button className="new-workout" onClick={this.props.onClick}>
        New {this.props.type}
      </button>
    )
  }

}

export default New;
