import React from 'react'
import Workout from './workout.js'
import { Button, ButtonGroup } from 'react-bootstrap'
import styles from '../index.css'


class WorkoutList extends React.Component {

  render() {

    const {workouts} = this.props;

    let className;

    if(this.props.isWorkoutClicked) {
      className = 'workout-list-clicked'
    } else {
      className = 'workout-list'
    }

    return (
      <div className={className}>
          {workouts.slice().reverse().map((workout) => {
            return (
              <Workout
                key={workout.id}
                data={workout}
                onDeleteClick={this.props.onClick}
                onWorkoutClick={this.props.onWorkoutClick}
                isWorkoutClicked={this.props.isWorkoutClicked}
              />
            );
          })}
      </div>

    )
  }
}

export default WorkoutList;
