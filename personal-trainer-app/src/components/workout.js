import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

class Workout extends React.Component {

  render() {
    return (
      <Button>
          {this.props.id}
      </Button>
    )
  }

}

export default Workout;
