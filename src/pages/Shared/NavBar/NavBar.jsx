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
                            <li><Link to={'#'}>Home</Link></li>
                            <li><Link to={'#'}>About</Link></li>
                            <li><Link to={'#'}>Blog</Link></li>
                            <li><Link to={'#'}>Contact</Link></li>
                            <li><Link to={'#'}>Details</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;