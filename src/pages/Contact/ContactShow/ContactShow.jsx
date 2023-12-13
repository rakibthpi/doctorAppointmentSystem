
import { Col, Row } from 'react-bootstrap';

const ContactShow = () => {
    return (
        <div className='contactShow'>
            <div className="container">
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        1 of 3
                    </Col>
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">
                        3 of 3
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ContactShow;