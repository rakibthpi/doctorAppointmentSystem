
import { Button, Card, Col } from 'react-bootstrap';

const SingleDoctor = ({ doctor }) => {
    const { name, img, content, category } = doctor;

    return (
        <Col md={{ span: 4 }}>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                    <div className='bottomAreaDoctor'>
                        <Button variant="primary">Appointment</Button>
                        {/* <Button variant="primary">{category}</Button> */}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleDoctor;