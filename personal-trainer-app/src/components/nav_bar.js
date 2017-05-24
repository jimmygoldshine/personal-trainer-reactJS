import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar } from 'react-bootstrap';

class NavBar extends React.Component {


  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Fiery Leaf</Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}

export default NavBar;
