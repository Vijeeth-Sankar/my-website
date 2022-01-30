import React, { Component } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './Frist.css';

export default class First extends Component {
  render() {
    return (
        <>
        <div id='full'>
            <Navbar  id='navbar' expand="lg" sticky="top">
              <Container>
                <Navbar.Brand id='vij' href="#">Vij</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                  <Nav className="mx-auto">
                    <Nav.Link id='nav-word' href="#let">Service</Nav.Link>
                    <Nav.Link id='nav-word' href="#line-box">Project</Nav.Link>
                    <Nav.Link id='nav-word' href="#see">About me</Nav.Link>
                    <Nav.Link id='nav-word' href="#lins">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                <Navbar.Brand id='colla'  href="#">Collaboration</Navbar.Brand>
              </Container>
            </Navbar>
        </div>
        </>
    );
  }
}
