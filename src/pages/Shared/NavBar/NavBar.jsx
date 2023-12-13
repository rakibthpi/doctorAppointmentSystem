import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbarMain">
            <div className="container">
                <div className="navbarMainText">
                    <div className="Logo">
                        <div className="logoSub">
                            <Link>RSNT</Link>
                        </div>
                    </div>
                    <div className="NavBarMenu">
                        <ul>
                            <li><Link to={'/registration'}>Sign Up</Link></li>
                            <li><Link to={'/login'}>Sign in</Link></li>
                            <li><Link to={'/doctor'}>Doctors</Link></li>
                            <li><Link to={'/appointment'}>appointment</Link></li>
                            <li><Link to={'/aboutus'}>About Us</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;