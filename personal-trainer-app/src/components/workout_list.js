import React from 'react'
import Workout from './workout.js'
import { Button, ButtonGroup } from 'react-bootstrap'
import styles from '../index.css'


class WorkoutList extends React.Component {

  render() {

    const {workouts} = this.props;

    return (
      <div className='workout-list'>
        <ButtonGroup vertical block>
          {workouts.slice().reverse().map((workout) => {
            return (
              <Workout
                key={workout.id}
                data={workout}
                onClick={this.props.onClick}
              />
            );
          })}
        </ButtonGroup>
      </div>

    )
  }
}

export default WorkoutList;
