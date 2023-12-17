
import img1 from "../../../assets/blog/blog-11.jpg";
import img2 from "../../../assets/blog/blog-12.jpg";
import img3 from "../../../assets/blog/blog-13.jpg";
import img4 from "../../../assets/blog/blog-14.jpg";
// import img5 from "../../../assets/doctors/doctor-05.jpg";

import { Card } from "react-bootstrap";



const Articles = () => {
    return (
        <div className="articlesMain">
            <div className="container">
                <div className="articlesMainText">
                    <h1 className="text-center">Latest Articles</h1>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3 ">
                            <Card>
                                <Card.Img variant="top" src={img1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the s content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <Card>
                                <Card.Img variant="top" src={img2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the s content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <Card>
                                <Card.Img variant="top" src={img3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the s content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <Card>
                                <Card.Img variant="top" src={img4} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the s content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;