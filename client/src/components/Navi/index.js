import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navi(props) {

    function handleNav(e) {
        e.preventDefault();
        if (e.target.name === "Home") {
            props.handlePageChange("Home")
        }
        if (e.target.name === "Login") {
            props.handlePageChange("Login")
        }
        if (e.target.name === "Signup") {
            props.handlePageChange("Signup")
        }
    }

    return (
        <Navbar className="nav-container" variant="light">
            <Container>
                <Nav className="me-auto my-3">
                    <Nav.Link onClick={handleNav} name='Home' href="#home">Home</Nav.Link>
                    <Nav.Link onClick={handleNav} name='Signup' href="#signup">SignUp!</Nav.Link>
                    <Nav.Link onClick={handleNav} name='Login' href="#login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
