// import React from 'react';

import Slider from "react-slick";
import img1 from "../../../assets/doctors/doctor-01.jpg";
import img2 from "../../../assets/doctors/doctor-02.jpg";
import img3 from "../../../assets/doctors/doctor-03.jpg";
import img4 from "../../../assets/doctors/doctor-04.jpg";
import img5 from "../../../assets/doctors/doctor-05.jpg";
// import doctor from "../../../assets/banner-img.png";
import { Link } from "react-router-dom";


const Banner = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        autoplay: true,
    };
    return (
        <div className="bannerMain">
            <div className="container">
                <div className="bannerMainText">
                    <div className="bannerLeft">
                        <Slider {...settings}>
                            <div className="singleSiderBannerMain">
                                <div className="singleSiderBannerMainSub">
                                    <div className="singleSiderBannerLeft">
                                        <h1>Consult <span>Best Doctors</span> Your Nearby Location.</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                        <Link to={'/appointment'}> Appointment</Link>
                                    </div>
                                    <div className="singleSiderBanner">
                                        <img src={img1} alt="photos" />
                                    </div>
                                </div>
                            </div>
                            <div className="singleSiderBannerMain">
                                <div className="singleSiderBannerMainSub">
                                    <div className="singleSiderBannerLeft">
                                        <h1>Consult <span>Best Doctors</span> Your Nearby Location.</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                        <Link to={'/appointment'}> Appointment</Link>
                                    </div>
                                    <div className="singleSiderBanner">
                                        <img src={img2} alt="photos" />
                                    </div>
                                </div>
                            </div>
                            <div className="singleSiderBannerMain">
                                <div className="singleSiderBannerMainSub">
                                    <div className="singleSiderBannerLeft">
                                        <h1>Consult <span>Best Doctors</span> Your Nearby Location.</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                        <Link to={'/appointment'}> Appointment</Link>
                                    </div>
                                    <div className="singleSiderBanner">
                                        <img src={img3} alt="photos" />
                                    </div>
                                </div>
                            </div>
                            <div className="singleSiderBannerMain">
                                <div className="singleSiderBannerMainSub">
                                    <div className="singleSiderBannerLeft">
                                        <h1>Consult <span>Best Doctors</span> Your Nearby Location.</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                        <Link to={'/appointment'}> Appointment</Link>
                                    </div>
                                    <div className="singleSiderBanner">
                                        <img src={img4} alt="photos" />
                                    </div>
                                </div>
                            </div>
                            <div className="singleSiderBannerMain">
                                <div className="singleSiderBannerMainSub">
                                    <div className="singleSiderBannerLeft">
                                        <h1>Consult <span>Best Doctors</span> Your Nearby Location.</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                        <Link to={'/appointment'}> Appointment</Link>
                                    </div>
                                    <div className="singleSiderBanner">
                                        <img src={img5} alt="photos" />
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;