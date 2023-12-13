import { Row } from "react-bootstrap";
import useDoctor from "../../hooks/useDoctor";
import SingleDoctor from "../Shared/SingleDoctor/SingleDoctor";


const Doctor = () => {
    const [doctors] = useDoctor();
    const Pediatrician = doctors.filter(items => items.category === 'Pediatrician')
    const Dermatologist = doctors.filter(items => items.category === 'Dermatologist')
    const Cardiologist = doctors.filter(items => items.category === 'Pediatrician')

    return (
        <div className="doctorArea">
            <div className="container">
                <div className="doctorText">
                    <Row>
                        {
                            Pediatrician.map((doctor) => <SingleDoctor
                                key={doctor.id}
                                doctor={doctor}
                            ></SingleDoctor>)
                        }
                    </Row>
                </div>
                <div className="doctorText">
                    <Row>
                        {
                            Dermatologist.map((doctor) => <SingleDoctor
                                key={doctor.id}
                                doctor={doctor}
                            ></SingleDoctor>)
                        }
                    </Row>
                </div>
                <div className="doctorText">
                    <Row>
                        {
                            Cardiologist.map((doctor) => <SingleDoctor
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