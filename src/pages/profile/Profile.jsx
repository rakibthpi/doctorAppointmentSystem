import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Col, Row } from "react-bootstrap";


const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div className="profile">
            <div className="container">
                <div className="profileText">
                    {/* displayName: name, photoURL: nid, tenantId: age, reloadListener: gender, providerId: blood, phoneNumber: phone */}
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                            <div className="profileCard">
                                <h2>Name: {user.displayName}</h2>
                                <h2>uid: {user.uid}</h2>
                                <h2>Email: {user.email}</h2>
                                <p>Nid: {user.photoURL}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Profile;