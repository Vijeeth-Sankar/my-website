import React, { Component,useEffect, useRef } from 'react';
import {Navbar, Container, Nav,Offcanvas,Row,Col} from 'react-bootstrap';
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
import sa from './image/sa.png';
import clock from './image/clock.jpg';
import website from './image/website.jpg';
import VanillaTilt from 'vanilla-tilt';
import me from './image/me.png';


function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }



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
            <Navbar.Brand className="ms-auto" href="#contact">Collaboration</Navbar.Brand>
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
                <Row id='let'>
                <a href="https://linktr.ee/Vijeeth_Sankar">Lets' see</a>
                </Row>
                <Row id='line'>
                  <div id='line-one'></div>
                </Row>
                <Row id='ser'>
                Service
                </Row>
            </Container>
            <Container>
              <Row xs={1} md={2}  id='Service'>
                {/* most */}
                {/* most */}
                <Col id='most'>
                  <Row id='cre'>
                  The  most creative
                    <Row id='int'>
                    Intuitive Workmate.
                    </Row>
                  </Row>
                  <Row id='most-img'>
                  <img id='sa' src={sa} alt="" />
                  </Row>
                </Col>
                {/* most */}
                <Col id='devs'>
                  {/* devs */}
                  {/* devs */}
                  <Row id='webs'>
                    <h3>Web Developnment</h3>
                    <p>With React js, Html, css, Bootstrap, Git, 
                    Github(for hosting)</p>
                  </Row>
                  <Row id='webs'>
                    <h3>App Developnment</h3>
                    <p>With help of flutter build Clock app and 
                      some social media apps UI</p>
                  </Row>
                  {/* devs */}
                </Col>
                <Col md={{ span: 6, offset: 6 }} id='line-box'>
                  <Row id='line-two'><span id='dot'>.</span></Row>
                </Col>
                <Row id='secont-line'>
                  <div id='secont-dotn'></div>
                </Row>
              </Row>
              </Container>
              <Container>
              <Row id='ser'>
                Project
                </Row>
                <Row id='projects'>
                <Col>
                <a href="https://github.com/Vijeeth143/clock-app">
                <Tilt><Row><img  src={clock} alt="" /></Row></Tilt>
                </a>
                  
                </Col>
                <Col>
                <a href="https://vijeeth143.github.io/updateweb/">
                <Tilt><Row><img src={website} alt="" /></Row></Tilt>
                </a>
                </Col>
                <Row id='see'>
                  <a href="https://github.com/Vijeeth143">
                  <div id='pro'>See More Projects</div>
                  </a>
                  </Row>
                </Row>
              </Container>
              <Container>
              <Row id='line'>
                  <div id='line-one'></div>
                </Row>
              <Row id='ser'>
                About me
                </Row>
                <Row id='wel'>
                Welcome to Vijeeth World.
                </Row>
                <Row id='aobut'>
                <Col id='me-img'>
                  <img src={me} alt="" />
                  </Col>
                  <Col id='abeme'>
                  <Row id='web-one'>
                    <h3>Education</h3>
                    <p>Non-Certificated as a front-end developer 
                    because its' just a docunment. so I near belive 
                    that..
                    </p>
                  </Row>
                  <Row id='web-two'>
                    <h3>Networking</h3>
                    <p>Created a Platform on Social Media to 
                    share my journey and connect with everyone..
                    </p>
                  </Row>
                  </Col>
                  <Col id='abeme'>
                  <Row id='web-three'>
                    <h3>Movies</h3>
                    <p>Marvels movie and Comics thats give 
                    by more creatitivelearning..</p>
                  </Row>
                  <Row id='web-four'>
                    <h3>Foodie</h3>
                    <p>Basically I'm Foodies, because I did't 
                    know why?, I love more foods..</p>
                  </Row>
                  </Col>
                  
                </Row>
              </Container>
              <Container id='contact'>
              <Row id='line'>
                  <div id='line-one'></div>
                </Row>
              <Row id='ser'>
              Let's Work together.
                </Row>
                <Row id='wel'>
                <a href="https://linktr.ee/Vijeeth_Sankar">Contact me</a>
                </Row>
              </Container>
              <Container>
                <Row id="feee">
                  <Col id='front'>
                  @2022 Vijeeth Front-end developer
                  </Col>
                  <Col>
                  <Row id='lins'>
                    <a href="https://github.com/Vijeeth143">Github</a>
                    <a href="mailto:thisisvijeeth@gmail.com">Email</a>
                    <a href="https://www.linkedin.com/in/vijeeth-sankar-2123b1201/">Linkedin</a>
                    <a href="https://instagram.com/vijeeth_sankar?utm_medium=copy_link">Instagram</a>
                  </Row>
                  </Col>
                </Row>
              </Container>
        </Container>
        
        </div>
        </>
    );
  }
}
