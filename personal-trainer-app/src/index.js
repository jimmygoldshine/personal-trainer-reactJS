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
      workouts: []
    };
  }

  componentWillMount() {
    this.getWorkouts();
  }

  handleClick = () => {
    return(
      axios({
        method: 'post',
        url: 'http://localhost:8080/workouts'
      }).then(() => {this.getWorkouts()})
    )
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
        <NewWorkout onClick={this.handleClick}/>
      </div>
      <WorkoutList workouts={this.state.workouts}/>
    </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
