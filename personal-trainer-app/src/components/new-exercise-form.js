import React from 'react';

class NewExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <form onSubmit={(e, name) => {this.props.onSubmit(e, this.state.value)}}>
        <label>Name:
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }

}

export default NewExerciseForm;
