import { Card, Col, Row } from "react-bootstrap";
import img1 from '../../assets/about/sabid.jpg';
import img2 from '../../assets/about/rakib.jpg';
import img3 from '../../assets/about/nasir.jpg';
import img4 from '../../assets/about/tamanna.jpg';
import img5 from '../../assets/about/ratri.jpg';
import Animation from "./Animation/Animation";


const AboutUs = () => {
    return (
        <div>
            <Animation></Animation>
            <div className="aboutUsMain">
                <div className="container">
                    <div className="aboutText">
                        <div>
                            <Row className="textareaabout">
                                <Col md={{ span: 8, offset: 2 }}>
                                    <p>
                                        Are you looking for information on a specific type of system related to doctors and apartments? For example, are you interested in a system that manages appointments for doctors in apartment buildings, a system for doctors who live in apartments, or something else?

                                        Please provide more details or clarify your request so that I can offer you more accurate and helpful information.</p>
                                </Col>
                            </Row>
                        </div>
                        <Row className="g-5 justify-content-center">
                            <Col md={{ span: 4 }}>
                                <div className="aboutSingleItems">
                                    <Card>
                                        <Card.Img variant="top" src={img1} />
                                        <Card.Body>
                                            <Card.Title>Sabid Rahman  (Shoheb) </Card.Title>
                                            <Card.Text>
                                                Fron-End Designer
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md={{ span: 4 }}>
                                <div className="aboutSingleItems">
                                    <Card>
                                        <Card.Img variant="top" src={img2} />
                                        <Card.Body>
                                            <Card.Title>Sabid Rahman  (Shoheb) </Card.Title>
                                            <Card.Text>
                                                Fron-End Designer
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md={{ span: 4 }}>
                                <div className="aboutSingleItems">
                                    <Card>
                                        <Card.Img variant="top" src={img3} />
                                        <Card.Body>
                                            <Card.Title>Sabid Rahman  (Shoheb) </Card.Title>
                                            <Card.Text>
                                                Fron-End Designer
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md={{ span: 4 }}>
                                <div className="aboutSingleItems">
                                    <Card>
                                        <Card.Img variant="top" src={img4} />
                                        <Card.Body>
                                            <Card.Title>Sabid Rahman  (Shoheb) </Card.Title>
                                            <Card.Text>
                                                Fron-End Designer
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md={{ span: 4 }}>
                                <div className="aboutSingleItems">
                                    <Card>
                                        <Card.Img variant="top" src={img5} />
                                        <Card.Body>
                                            <Card.Title>Sabid Rahman  (Shoheb) </Card.Title>
                                            <Card.Text>
                                                Fron-End Designer
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutUs;