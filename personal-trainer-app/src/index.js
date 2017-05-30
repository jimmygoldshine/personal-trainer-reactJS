import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import NavBar from './components/nav_bar.js'
import WorkoutList from './components/workout_list.js'
import NewWorkout from './components/new_workout.js'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      workouts: [],
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
      }).then(() => {this.getWorkouts()})
    )
  }

  handleDeleteWorkout = () => {
    const editedWorkouts = this.state.workouts.pop()
    this.setState({ workouts: editedWorkouts })

    // return(
    //   axios({
    //     method: 'delete',
    //     url: 'http://localhost:8080/workouts/41'
    //   }).then(() => {this.getWorkouts()})
    // )
  }

  getWorkouts() {
    return axios({
      method: 'get',
      url: 'http://localhost:8080/workouts'
    }).then((workouts) => {
        this.setState({workouts: workouts.data});
      });
  }

  render() {
    return(
    <div>
      <div className = 'nav-bar'>
        <NavBar />
      </div>
      <div>
        <NewWorkout onClick={this.handleNewWorkout}/>
      </div>
      <WorkoutList
        workouts={this.state.workouts}
        onClick={this.handleDeleteWorkout.bind(this)}
        clickedWorkout={this.state.clickedWorkout}
        />
    </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
