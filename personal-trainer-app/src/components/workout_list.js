import React from 'react'
import Workout from './workout.js'
import { Button, ButtonGroup } from 'react-bootstrap'
import styles from '../index.css'


class WorkoutList extends React.Component {

  render() {
    return (
      <div className='workout-list'>
        <ButtonGroup vertical block>
          {this.props.workouts.slice().reverse().map((workout) => {
            return (
              <Workout key={workout.id} id={workout.id} />
            );
          })}
        </ButtonGroup>
      </div>

    )
  }
}

export default WorkoutList;
