import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import DeleteWorkout from './delete_workout.js';
import axios from 'axios';
import ExerciseList from './exercise_list.js';
import NewExercise from './new_exercise.js'

class Workout extends React.Component {
  constructor() {
    super();
    this.state = {
      isWorkoutClicked: false,
      isNewExerciseClicked: false,
      exercises: []
    }
  }

  componentWillUnmount() {
    return(
      axios({
        method: 'delete',
        url: 'http://localhost:8080/workouts/' + this.props.data.id
      })
    )
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
    return (
      <DeleteWorkout
        className='delete'
        workoutId = {this.props.data.id}
        onClick={this.props.onClick}
      />
    )
  }

  handleWorkoutClick = () => {
    this.setState({
      isWorkoutClicked: !(this.state.isWorkoutClicked)
    })
  }

  getExercises() {
    return axios({
        method: 'get',
        url: 'http://localhost:8080/workouts/' + this.props.data.id + '/exercises'
      }).then((exercises) => {
        this.setState({ exercises: exercises.data });
      });
  }

  renderNewExercise() {
    if(this.state.isWorkoutClicked) {
      return(
        <NewExercise
          onClick={this.handleNewExercise}
          isNewExerciseClicked={this.state.isNewExerciseClicked}
          onSubmit={this.handleNewExerciseSubmit} />
      )
    }
  }

  renderExerciseList() {
    if(this.state.isWorkoutClicked) {
      return (
        <ExerciseList exercises={this.state.exercises}/>
      );
    };
  }

  render() {
    const {data} = this.props;
    const date = new Date(data.created_at).toString().slice(0,10);

    return (
      <ButtonGroup>
        <Button onClick={this.handleWorkoutClick}>
            {date}
            {this.renderDeleteWorkout()}
        </Button>
          {this.renderNewExercise()}
          {this.renderExerciseList()}
      </ButtonGroup>
    )
  }

}

export default Workout;
