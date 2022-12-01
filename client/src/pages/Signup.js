import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Signup(props) {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
    });
    const [addProfile] = useMutation(ADD_PROFILE);

    // Handle input change
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(value);

        setFormState({ ...formState, [name]: value });
    };

    // Handle form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addProfile({ variables: formState });
            const { token, userName } = data.addProfile.token;

            console.log(userName);

            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <main>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicFirst">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        placeholder="john"
                        name="firstName"
                        value={formState.firstName}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        placeholder="doe"
                        name="lastName"
                        value={formState.lastName}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        onChange={handleChange}
                        placeholder="john@example.com"
                        name="email"
                        value={formState.email}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        placeholder="johndoe"
                        name="userName"
                        value={formState.userName}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={handleChange}
                        placeholder="password"
                        name="password"
                        value={formState.password}
                    />
                </Form.Group>
                <Button className="login-btn" type="submit">
                    Signup
                </Button>
            </Form>
        </main>
    );
}
