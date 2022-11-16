import React from "react";

import { Form, Button } from "react-bootstrap";

export default function Signup(props) {
    return (
        <main>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicFirst">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="john" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="doe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="john@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="johndoe" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Button className="login-btn" type="submit">
                    Signup
                </Button>
            </Form>
        </main>
    );
}