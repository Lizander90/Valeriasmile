import React from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Banner_nav_comp = ({ logotipo = null }) => {
    return <>
        <Navbar bg="pink" expand="md" id="headerTOPnav"> 
            
            <Container >
                <Navbar.Brand href="#home" >
                    {(logotipo)
                        ? <img src={logotipo} alt='logo'></img>
                        : <div> Valeria Smile</div>
                    }
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" id="btn_toogle" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link href="#home" className="navlink_header">INICIO</Nav.Link>
                        <Nav.Link href="#link1" className="navlink_header">SERVICIOS</Nav.Link>
                        <Nav.Link href="#link2" className="navlink_header">CLINICA</Nav.Link>
                        <Nav.Link href="#link3" className="navlink_header">NOSOTROS</Nav.Link>
                        <Nav.Link href="#link4" className="navlink_header">AGENDAR</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    </>
}

export default Banner_nav_comp;