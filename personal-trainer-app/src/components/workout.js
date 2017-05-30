import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import DeleteWorkout from './delete_workout.js';
import axios from 'axios';
import ExerciseList from './exercise_list.js';

class Workout extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      exercises: []
    }
  }

  componentDidMount() {
    this.getExercises();
  }

  renderDeleteWorkout(id) {
    return (
      <DeleteWorkout
        className='delete'
        workoutId = {this.props.id}
        onClick={(workoutId) => {this.props.onClick(workoutId)}}
      />
    )
  }

  handleWorkoutClick = () => {
    this.setState({
      isClicked: !(this.state.isClicked)
    })
  }

  getExercises() {
    return axios({
        method: 'get',
        url: 'http://localhost:8080/workouts/' + this.props.id + '/exercises'
      }).then((exercises) => {
        this.setState({ exercises: exercises.data });
      });
  }

  renderExerciseList() {
    if(this.state.isClicked) {
      return (
        <ExerciseList exercises={this.state.exercises}/>
      );
    };
  }

  render() {
    const {id} = this.props;

    return (
      <ButtonGroup>
        <Button onClick={this.handleWorkoutClick}>
            {id}
            {this.renderDeleteWorkout()}
        </Button>
          {this.renderExerciseList()}
      </ButtonGroup>
    )
  }

}

export default Workout;
