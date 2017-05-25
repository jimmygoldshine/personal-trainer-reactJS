import React from 'react';
import { Navbar } from 'react-bootstrap';

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
