import React from 'react'
import { Button } from 'react-bootstrap'

class DeleteWorkout extends React.Component {

  render() {

    return (
      <span
      className='delete'
      onClick={() => this.props.onClick(this.props.workoutId)}>
      x
      </span>
    )
  }



}

export default DeleteWorkout;
