import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import NavBar from './components/nav_bar.js'
import WorkoutList from './components/workout_list.js'
import New from './components/new-button.js'
import BackgroundImage from './components/background-image.js'
import Workout from './components/workout.js'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      workouts: [],
      selectedWorkout: null,
      isWorkoutClicked: false,
      isNewExerciseClicked: false
    };
  }

  componentDidMount() {
    this.getWorkouts();
  }

  handleNewWorkout = () => {
    return(
      axios({
        method: 'post',
        url: 'http://localhost:8080/workouts'
      }).then(() => {
        this.getWorkouts();
        const workouts = this.state.workouts.slice();
        const selectedWorkout = workouts[workouts.length - 1]
        this.setState({ selectedWorkout: selectedWorkout})
      })
    )
  }

  handleWorkoutClick = (id) => {
    this.setState({
      isWorkoutClicked: !(this.state.isWorkoutClicked),
      selectedWorkout: (this.getSelectedWorkout(id))
    })
  }

  getSelectedWorkout(id) {
    let workouts = this.state.workouts.slice();
    let workout;
    workout = workouts.find((workout) => {
      return workout.id == id
    })
    return workout
  }

  handleDeleteWorkout = (id) => {
    let nextWorkouts = this.state.workouts.filter((workout) => {
      if(workout.id !== id){
        return workout;
      }
    });
    this.deleteWorkout(id)
    this.setState({ workouts: nextWorkouts });
  }

  deleteWorkout(id) {
    return(
      axios({
        method: 'delete',
        url: 'http://localhost:8080/workouts/' + id
      })
    )
  }

  handleSelectedWorkoutClick = (id) => {
    this.setState({
      selectedWorkout: null,
      isWorkoutClicked: false
    })
  }

  getWorkouts() {
    return axios({
      method: 'get',
      url: 'http://localhost:8080/workouts'
    }).then((workouts) => {
        this.setState({workouts: workouts.data});
      });
  }

  renderSelectedWorkout() {
    if(this.state.isWorkoutClicked){
      return (
        <div className='selected-workout'>
          <Workout
            data={this.state.selectedWorkout}
            isSelected={this.state.isWorkoutClicked}
            onWorkoutClick={this.handleSelectedWorkoutClick}
            isNewExerciseClicked={this.state.isNewExerciseClicked}
          />
        </div>
    )}
  }

  renderWorkoutList() {
    if (!this.state.isWorkoutClicked) {
      return (
      <WorkoutList
        workouts={this.state.workouts}
        onClick={this.handleDeleteWorkout}
        onWorkoutClick={this.handleWorkoutClick}
        isWorkoutClicked={this.state.isWorkoutClicked}
      />
    )}
  }

  handleNewExercise = () => {
    this.setState({
      isNewExerciseClicked: !(this.state.isNewExerciseClicked)
    });
  }

  renderNew() {
    if(!this.state.isWorkoutClicked) {
      return (
        <New type='Workout'
          onClick={this.handleNewWorkout}
        />)
    } else {
      return (
        <New type='Exercise'
          onClick={this.handleNewExercise}
        />)
    }
  }

  render() {
    console.log(this.state.selectedWorkout);
    return(
    <div className="container">
      <NavBar />
      <BackgroundImage />
      {this.renderNew()}
      {this.renderWorkoutList()}
      {this.renderSelectedWorkout()}
    </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
