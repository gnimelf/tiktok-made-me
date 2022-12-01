import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

export default function Navi(props) {

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    }

    return (
        <Navbar className="nav-container" variant="light">
            <Container>
                <Nav className="me-auto my-3">
                    <Link 
                        className="btn btn-sm btn-dark m-2" 
                        to="/"
                        >
                        Home
                    </Link>

                    {Auth.loggedIn() ? (
                        <>
                            <Link
                                className="btn btn-sm btn-dark m-2"
                                onClick={logout}
                            >
                                Logout
                            </Link>

                            <Link
                                className="btn btn-sm btn-dark m-2"
                                to="/mycomments"
                            >
                                My Comments
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                className="btn btn-sm btn-dark m-2"
                                to="/login"
                            >
                                Login
                            </Link>
                            <Link
                                className="btn btn-sm btn-dark m-2"
                                to="/signup"
                            >
                                Signup
                            </Link>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}
