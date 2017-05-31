import React from 'react';
import { Button } from 'react-bootstrap'
import ExerciseNameForm from './exercise_name_form.js'

class NewExercise extends React.Component {

  renderForm() {
    if(this.props.isNewExerciseClicked) {
      return(
        <ExerciseNameForm onSubmit={this.props.onSubmit} />
      )
    }
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.props.onClick()}>New Exercise</Button>
        {this.renderForm()}
      </div>
    )
  }

}

export default NewExercise;
