import { Link } from "react-router-dom";
import img1 from "../../../assets/doctors/doctor-01.jpg";
import img2 from "../../../assets/doctors/doctor-02.jpg";
import img3 from "../../../assets/doctors/doctor-03.jpg";
import img4 from "../../../assets/doctors/doctor-04.jpg";
import img5 from "../../../assets/doctors/doctor-05.jpg";
import Slider from "react-slick";

const BestDoctor = () => {
    var bestDoctor = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        autoplay: true,
        margin: '20',
        initialSlide: 0,
        edgeFriction: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="bestDoctor">
            <div className="container">
                <div className="bestDoctorContent">
                    <h1>Best Doctors</h1>
                    <div className="bestDoctorContentSub">
                        <Slider {...bestDoctor}>
                            <div className="singleBestDoctor">
                                <div className="singleBestDoctorImg">
                                    <img src={img1} alt="photos" />
                                </div>
                                <div className="singleBestDoctorText">
                                    <h3>Doctor Name</h3>
                                    <p>Urology</p>
                                    <Link to={"#"}>Dhaka, BNG</Link>
                                </div>
                            </div>
                            <div className="singleBestDoctor">
                                <div className="singleBestDoctorImg">
                                    <img src={img2} alt="photos" />
                                </div>
                                <div className="singleBestDoctorText">
                                    <h3>Doctor Name</h3>
                                    <p>Urology</p>
                                    <Link to={"#"}>Dhaka, BNG</Link>
                                </div>
                            </div>
                            <div className="singleBestDoctor">
                                <div className="singleBestDoctorImg">
                                    <img src={img3} alt="photos" />
                                </div>
                                <div className="singleBestDoctorText">
                                    <h3>Doctor Name</h3>
                                    <p>Urology</p>
                                    <Link to={"#"}>Dhaka, BNG</Link>
                                </div>
                            </div>
                            <div className="singleBestDoctor">
                                <div className="singleBestDoctorImg">
                                    <img src={img4} alt="photos" />
                                </div>
                                <div className="singleBestDoctorText">
                                    <h3>Doctor Name</h3>
                                    <p>Urology</p>
                                    <Link to={"#"}>Dhaka, BNG</Link>
                                </div>
                            </div>
                            <div className="singleBestDoctor">
                                <div className="singleBestDoctorImg">
                                    <img src={img5} alt="photos" />
                                </div>
                                <div className="singleBestDoctorText">
                                    <h3>Doctor Name</h3>
                                    <p>Urology</p>
                                    <Link to={"#"}>Dhaka, BNG</Link>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDoctor;