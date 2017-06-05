import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import DeleteWorkout from './delete_workout.js';
import axios from 'axios';
import ExerciseList from './exercise_list.js';
import NewExerciseForm from './new-exercise-form.js'

class Workout extends React.Component {
  constructor() {
    super();
    this.state = {
      exercises: []
    }
  }

  componentDidMount() {
    this.getExercises();
  }

  handleNewExercise = () => {
    this.setState({
      isNewExerciseClicked: !(this.state.isNewExerciseClicked)
    });
  }

  handleNewExerciseSubmit = (e, name) => {
    e.preventDefault();
    this.setState({isNewExerciseClicked: false})
    return axios({
      method: 'post',
      url: 'http://localhost:8080/workouts/'+ this.props.data.id + '/exercises/',
      data: {
        name: name
      }}).then(() => {this.getExercises()});
  }

  renderDeleteWorkout(id) {
    if(!this.props.isSelected)
    return (
      <DeleteWorkout
        className='delete'
        workoutId = {this.props.data.id}
        onClick={this.props.onDeleteClick}
      />
    )
  }

  getExercises() {
    return axios({
        method: 'get',
        url: 'http://localhost:8080/workouts/' + this.props.data.id + '/exercises'
      }).then((exercises) => {
        this.setState({ exercises: exercises.data });
      });
  }

  renderNewExerciseForm() {
    if(this.props.isNewExerciseClicked) {
      return(
        <NewExerciseForm
          onSubmit={this.handleNewExerciseSubmit} />
      )
    }
  }

  renderExerciseList() {
    if(this.props.isSelected) {
      return (
        <ExerciseList exercises={this.state.exercises}/>
      );
    };
  }

  render() {
    const {data} = this.props;
    const date = new Date(data.created_at).toString().slice(0,10);

    return (
      <div className='workout'>
        <button onClick={() => {this.props.onWorkoutClick(data.id)}}>
            {date}
        </button>
          {this.renderDeleteWorkout()}
          {this.renderNewExerciseForm()}
          {this.renderExerciseList()}
      </div>
    )
  }

}

export default Workout;
