import React from 'react'
import Workout from './workout.js'

class WorkoutList extends React.Component {

  render() {
    return (
      <ul>
      {this.props.workouts.map((workout) => {
        return <Workout key={workout.id} id={workout.id} />;
      })}
      </ul>
    )
  }
}

export default WorkoutList;
