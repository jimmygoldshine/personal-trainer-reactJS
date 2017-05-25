import React from 'react'
import { Button } from 'react-bootstrap'

class NewWorkout extends React.Component {

  render() {
    return (
      <Button onClick={this.props.onClick}>
        New Workout
      </Button>
    )
  }

}

export default NewWorkout
