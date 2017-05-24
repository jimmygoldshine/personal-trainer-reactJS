import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/nav_bar.js'

class App extends React.Component {

  render() {
    return(
    <NavBar />
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
