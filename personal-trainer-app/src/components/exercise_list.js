import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import Exercise from './exercise.js'


class ExerciseList extends React.Component {

  render() {
    const {exercises} = this.props;

    return (
      <div className='exercise-list'>
        {exercises.slice().map((exercise) => {
          return (
            <Exercise key={exercise.id}
                      exercise={exercise}
            />)
          })
        }
      </div>
    )
  }

}

export default ExerciseList;
