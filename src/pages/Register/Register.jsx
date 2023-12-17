// import React from 'react';

import { useContext } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Register = () => {

    const { createUser, updateProfileUser, logOut } = useContext(AuthContext)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log("first setep done", user);
                updateProfileUser(data.name, data.nid, data.age, data.gender, data.blood, data.phone)
                console.log(data.name, data.nid, data.age, data.gender, data.blood, data.phone)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your User create Success ",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
                handleLogOut()
                navigate('/login')

            })
    };
    console.log(watch("example"));
    return (
        <div className="loginMain">
            <div className="container">
                <div className="loginText row">
                    <div className='col-md-6 col-lg-6 offset-md-3 offset-lg-3 cardArea'>
                        <h2>Register</h2>
                        <Form onSubmit={handleSubmit(onSubmit)} method="post">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control name="name" {...register("name", { required: true })} type="text" placeholder="Name" />
                                <Form.Text className="text-muted">
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" {...register("password", { required: true, minLength: 8, maxLength: 40 })} type="password" placeholder="Password" />
                                <Form.Text className="text-muted">
                                    {errors.password && <span className="text-danger">At least 8 characters</span>}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control name="phone" {...register("phone")} type="text" placeholder="number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" {...register("email", { required: true })} type="email" placeholder="Email" />
                                <Form.Text className="text-muted">
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>NID Card</Form.Label>
                                <Form.Control name="nid" {...register("nid")} type="text" placeholder="NID Number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select size="lg" name="gender" {...register("gender")} aria-label=" mb-3">
                                    <option>Gender</option>
                                    <option value="female">Male</option>
                                    <option value="male">Female</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Blood</Form.Label>
                                <Form.Select size="lg" name="blood" {...register("blood")} aria-label=" mb-3">
                                    <option>Blood</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </Form.Select>
                            </Form.Group>



                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Age</Form.Label>
                                <Form.Control name="age" {...register("age")} type="text" placeholder="Age" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <input className="btnall" type="submit" value="Sign Up" />
                        </Form>
                        <p><small>Alredy have an account? <Link to={'/login'}>Sing in</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;