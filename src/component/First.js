import React, { Component } from 'react';
import {Navbar, Container, Nav,Offcanvas,Row} from 'react-bootstrap';
import './Frist.css';
import androidstudio from './image/androidstudio.svg';
import react from './image/reacticon.svg';
import bootstrap from './image/bootstrap.svg';
import iconjs from './image/iconjs.svg';
import css from './image/css.svg';
import git from './image/git.svg';
import google from './image/google.svg';
import vscode from './image/vscode.svg';
import html from './image/html.svg';
import flutter from './image/flutter.svg';



export default class First extends Component {
  render() {
    return (
        <>
        <div id='full'>
        <Navbar expand="lg" id='desktop' sticky="top" >
        <Container>
            <Navbar.Brand id='vij' href="#home">Vij</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                    <Nav.Link id='nav-word' href="#let">Service</Nav.Link>
                    <Nav.Link id='nav-word' href="#line-box">Project</Nav.Link>
                    <Nav.Link id='nav-word' href="#see">About me</Nav.Link>
                    <Nav.Link id='nav-word' href="#lins">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className="ms-auto" href="#home">Collaboration</Navbar.Brand>
        </Container>
        </Navbar>
        <Navbar id='mobile' expand={false} class="shadow p-3 mb-5 bg-white rounded" sticky="top">
        <Container fluid>
            <Navbar.Brand id='vij' href="#">Vij</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Vij</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link id='nav-word' href="#let">Service</Nav.Link>
                    <Nav.Link id='nav-word' href="#line-box">Project</Nav.Link>
                    <Nav.Link id='nav-word' href="#see">About me</Nav.Link>
                    <Nav.Link id='nav-word' href="#lins">Contact</Nav.Link>
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
        </Navbar>
        <Container fluid='true' id='main'>
        <Container sm="true" id='main-box'>
            <img id='me' src={require('./image/mainimage.png')} alt="" />
            <img id='androidstudio' src={androidstudio} alt="" />
            <img id='react' src={react} alt="" />
            <img id='bootstrap' src={bootstrap} alt="" />
            <img id='iconjs' src={iconjs} alt="" />
            <img id='css' src={css} alt="" />
            <img id='git' src={git} alt="" />
            <img id='google' src={google} alt="" />
            <img id='vscode' src={vscode} alt="" />
            <img id='html' src={html} alt="" />
            <img id='flutter' src={flutter} alt="" />
            </Container>
            <Container sm='true' id='vijeeth'>
                <Row id='name'>
                    I'm Vijeeth
                </Row>
                <a href="./Social.js">Login with Google</a>
            </Container>
        </Container>
        
        </div>
        </>
    );
  }
}
