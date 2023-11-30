const Footer = () => {
    return (
        <footer className="footerMain">
            <div className="container">
                <div className="footerText">
                    <div className="footerTop row g-5">
                        <div className="col-lg-5">
                            <div className="footerLogo">
                                <a href="index.html">Logo</a>
                                <p>Sign up below and get the greatest deals straight to your inbox.</p>

                                <p>By subscribing you agree to with our <a href="#">Privacy Policy</a> and provide
                                    consent
                                    to
                                    receive updates
                                    from our company.</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="browserMenu browserMenu1">
                                        <h3>Browse By</h3>
                                        <ul>
                                            <li><a href="#">Countries</a></li>
                                            <li><a href="#">Regions</a></li>
                                            <li><a href="#">Cities</a></li>
                                            <li><a href="#">Districts</a></li>
                                            <li><a href="#">Airports</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="browserMenu browserMenu2">
                                        <h3>Top Destinations</h3>
                                        <ul>
                                            <li><a href="#">Dubai</a></li>
                                            <li><a href="#">Brisbane</a></li>
                                            <li><a href="#">Acapulco</a></li>
                                            <li><a href="#">Rome</a></li>
                                            <li><a href="#">Salzburg</a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="browserMenu browserMenu3">
                                        <h3>How It Works</h3>
                                        <p>We search availability and prices for <a href="#">Hotels</a> from hundreds of
                                            travel
                                            websites
                                            and hotel
                                            chains around the world, including <a href="#">Booking.com</a>, <a href="#">
                                                Hotels.com</a>,
                                            <a href="#">Expedia</a>,
                                            more.ll display the best information, hotel rates and deals for any
                                            destination,
                                            in an
                                            instant.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footerBottom">
                                <div className="footerBottomLeft">
                                    <p>© 2023 Get Rates. All rights reserved.</p>
                                </div>
                                <div className="footerBottomRight">
                                    <ul>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms of Service</a></li>
                                        <li><a href="#">Cookies Settings</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;