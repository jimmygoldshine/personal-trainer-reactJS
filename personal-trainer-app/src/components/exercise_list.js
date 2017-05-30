import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import Exercise from './exercise.js'

class ExerciseList extends React.Component {

  render() {

    const {exercises} = this.props;

    console.log(exercises)

    return (
      <div>
        <ButtonGroup>
          {exercises.slice().map((exercise) => {
            return (
              <Exercise key={exercise.id}
                        exercise={exercise} />
              )
            })
          }
        </ButtonGroup>
      </div>
    )
  }

}

export default ExerciseList;
