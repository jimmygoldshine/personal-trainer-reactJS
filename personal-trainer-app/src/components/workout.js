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
      isClicked: !(this.state.isClicked)
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

  renderExerciseList() {
    if(this.state.isClicked) {
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
          {this.renderExerciseList()}
      </ButtonGroup>
    )
  }

}

export default Workout;
