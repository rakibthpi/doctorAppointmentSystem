
import { Button, Col, Form, Row } from "react-bootstrap";
const Contact = () => {

    // const { user } = useContext(AuthContext);
    // const { register, handleSubmit } = useForm();

    // const onSubmit = data => {
    //     const orderItem = { doctorId: data.id, img, name, email }
    //     fetch('http://localhost:5000/appointment', {
    //         method: "POST",
    //         headers: {
    //             'content-type': 'doctorMethod'
    //         },
    //         body: JSON.stringify()
    //     })
    //         .then(res => res.json(orderItem))
    //         .then(data => {
    //             if (data.inseertedId) {
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: "Your work has been saved",
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    //             }
    //         })

    // };



    return (
        <div className="containerMain">
            <div className="container">
                <Row>
                    <Col xs md={{ span: 8, offset: 2 }} className="ofset-md-2" >
                        <Form className="contact"  >
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="Number" placeholder="Number" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default Contact;