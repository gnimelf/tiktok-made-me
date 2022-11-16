import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Login(props) {
    return (
        <main>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="ex: johndoe" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="ex: password1234" />
                </Form.Group>
                <Button className="login-btn" type="submit">
                    Login
                </Button>
            </Form>
        </main>
    );
}
