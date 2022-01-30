import React, { Component } from 'react';
import {Navbar, Container, Nav,Offcanvas} from 'react-bootstrap';
import './Frist.css';

export default class First extends Component {
  render() {
    return (
        <>
        <div id='full'>
        <Navbar expand="lg" id='desktop'>
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className="ms-auto" href="#home">React-Bootstrap</Navbar.Brand>
        </Container>
        </Navbar>
        <Navbar id='mobile' bg="light" expand={false}>
        <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
        </Navbar>
        </div>
        </>
    );
  }
}
