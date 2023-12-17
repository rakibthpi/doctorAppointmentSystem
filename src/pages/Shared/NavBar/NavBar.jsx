import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log("User name", user)
    console.log("User is", user)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    console.log(user)
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

                            {
                                user ? <li><Link onClick={handleLogOut}>Sign Out</Link></li> : <li><Link to={'/login'}>Sign in</Link></li>
                            }
                            <li><Link to={'/doctor'}>Doctors</Link></li>
                            <li><Link to={'/appointment'}>appointment</Link></li>
                            <li><Link to={'/aboutus'}>About Us</Link></li>
                            {user ? <li ><Link className="text-primary">Welcome {user.displayName
                            }!</Link></li> : <></>}
                            <li><Link to={'/profile'}>Profile</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;