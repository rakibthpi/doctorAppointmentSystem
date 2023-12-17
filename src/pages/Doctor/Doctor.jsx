import { Row } from "react-bootstrap";
import useDoctor from "../../hooks/useDoctor";
import SingleDoctor from "../Shared/SingleDoctor/SingleDoctor";


const Doctor = () => {
    const [doctors] = useDoctor();

    return (
        <div className="doctorArea">
            <div className="container">
                <div className="doctorText">
                    <Row className="g-5">
                        {
                            doctors.map((doctor) => <SingleDoctor
                                key={doctor.id}
                                doctor={doctor}
                            ></SingleDoctor>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Doctor;