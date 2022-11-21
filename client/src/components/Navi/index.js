import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Auth from "../../utils/auth";

export default function Navi(props) {
    function handleNav(e) {
        e.preventDefault();
        if (e.target.name === "Home") {
            props.handlePageChange("Home");
        }
        if (e.target.name === "Login") {
            props.handlePageChange("Login");
        }
        if (e.target.name === "Signup") {
            props.handlePageChange("Signup");
        }
        if (e.target.name === "Logout") {
            Auth.logout();
        }
    }

    return (
        <Navbar className="nav-container" variant="light">
            <Container>
                <Nav className="me-auto my-3">
                    <Nav.Link onClick={handleNav} name="Home" href="#">
                        Home
                    </Nav.Link>

                    {Auth.loggedIn() ? (
                        <>
                            <Nav.Link
                                onClick={handleNav}
                                name="Logout"
                                href="#"
                            >
                                Logout
                            </Nav.Link>

                            <Nav.Link
                                onClick={handleNav}
                                name="MyComments"
                                href="#"
                            >
                                My Comments
                            </Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link
                                onClick={handleNav}
                                name="Signup"
                                href="#"
                            >
                                SignUp!
                            </Nav.Link>
                            <Nav.Link onClick={handleNav} name="Login" href="#">
                                Login
                            </Nav.Link>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}
