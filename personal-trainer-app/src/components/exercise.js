import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

class Exercise extends React.Component {

  render() {

    const {exercise} = this.props;

    return (<Button>{exercise.name}</Button>)
  }

}

export default Exercise;
