
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SingleDoctor = ({ doctor }) => {


    // const handleAddappointment = () => {
    //     console.log(dd)
    //     if (user && user.email) {
    //         const orderItem = { doctorId: id, img, name, email }
    //         fetch('http://localhost:5000/appointment', {
    //             method: "POST",
    //             headers: {
    //                 'content-type': 'doctor method'
    //             },
    //             body: JSON.stringify()
    //         })
    //             .then(res => res.json(orderItem))
    //             .then(data => {
    //                 if (data.inseertedId) {
    //                     Swal.fire({
    //                         position: "top-end",
    //                         icon: "success",
    //                         title: "Your work has been saved",
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                     });
    //                 }
    //             })
    //     }
    //     else {
    //         console.log("please login")
    //         navigate('/login')
    //     }
    // }

    const { name, img, content } = doctor;


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
                        <Link className='btnall' to={'/contact'}>Appointment</Link>
                        {/* <Button variant="primary">{category}</Button> */}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleDoctor;