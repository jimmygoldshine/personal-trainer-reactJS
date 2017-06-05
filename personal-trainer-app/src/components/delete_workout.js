import React from 'react'
import { Button } from 'react-bootstrap'

class DeleteWorkout extends React.Component {

  render() {

    return (
      <div
      className='delete'
      onClick={() => this.props.onClick(this.props.workoutId)}>
      x
      </div>
    )
  }



}

export default DeleteWorkout;
