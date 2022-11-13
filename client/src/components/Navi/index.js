import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navi() {
    return (
        <Navbar className="nav-container" variant="light">
            <Container>
                <Nav className="me-auto my-3">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#signup">SignUp!</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
