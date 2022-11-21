import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = (props) => {
    const [formState, setFormState] = useState({ userName: "", password: "" });
    const [loginUser] = useMutation(LOGIN_USER);

    // handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({...formState, [name]: value });
    };

    // handle form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await loginUser({ variables: formState });
            const { token, userName } = data.login;

            console.log(userName);

            Auth.login(token);
        } catch (err) {
            console.error(err);
        }

        //clear form
        setFormState({
            userName: "",
            password: "",
        });
    };

    return (
        <main>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            name="userName"
                            type="text"
                            value={formState.userName}
                            placeholder="ex: johndoe"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            name="password"
                            type="password"
                            value={formState.password}
                            placeholder="*********"
                        />
                    </Form.Group>
                    <Button
                        className="login-btn"
                        type="submit"
                    >
                        Login
                    </Button>
                </Form>
        </main>
    );
};
export default LoginForm;
