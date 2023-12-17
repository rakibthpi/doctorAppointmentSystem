// import React from 'react';

import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [formData, setFormData] = useState({});

    const { loginUser } = useContext(AuthContext);
    // loading
    const navigate = useNavigate()
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleInputChange = (event) => {
        const { name, checked } = event.target;
        console.log(formData)
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                navigate(from, { replace: true });
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch(error => {
                console.log(error)
            })
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
                                <Form.Control type="email" name='email' placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    l never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" />
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
                        <p><small>New Here? <Link to={'/registration'}>SingUp</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;