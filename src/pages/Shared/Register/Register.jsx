// import React from 'react';

import { Button, Form } from "react-bootstrap";

const Register = () => {
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        const cpassword = form.cpassword.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const nid = form.nid.value;
        const gender = form.gender.value;
        const blood = form.blood.value;
        const age = form.age.value;
        console.log(name, password, cpassword, phone, email, nid, gender, blood, age)
    }
    return (
        <div className="loginMain">
            <div className="container">
                <div className="loginText row">
                    <div className='col-md-6 col-lg-6 offset-md-3 offset-lg-3 cardArea'>
                        <h2>Register</h2>
                        <Form onSubmit={handleRegister} method="post">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control name="cpassword" type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control name="phone" type="text" placeholder="number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Email" />
                                <Form.Text className="text-muted">
                                    l never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>NID Card</Form.Label>
                                <Form.Control name="nid" type="text" placeholder="NID Number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select size="lg" name="gender" aria-label=" mb-3">
                                    <option>Gender</option>
                                    <option value="1">Man</option>
                                    <option value="2">Feman</option>
                                    <option value="3">Other</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Blood</Form.Label>
                                <Form.Select size="lg" name="blood" aria-label=" mb-3">
                                    <option>Blood</option>
                                    <option value="1">A+</option>
                                    <option value="2">A-</option>
                                </Form.Select>
                            </Form.Group>



                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Age</Form.Label>
                                <Form.Control name="age" type="text" placeholder="Age" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Registration
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;