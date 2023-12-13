// import React from 'react';

import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Login = () => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, checked } = e.target;
        console.log(formData)
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Your login logic here
    };

    return (
        <div className="loginMain">
            <div className="container">
                <div className="loginText row">
                    <div className='col-md-6 col-lg-4 offset-md-3 offset-lg-4 cardArea'>
                        <h2>Login</h2>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    l never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Check me out"
                                    name="checked"
                                    checked={formData.checked}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" disabled={!formData.checked}>
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;