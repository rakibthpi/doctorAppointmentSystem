import { useState } from "react";
import { Row } from "react-bootstrap";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SingleDoctor from "../../Shared/SingleDoctor/SingleDoctor";
import useDoctor from "../../../hooks/useDoctor";

const AppointmentTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [doctors] = useDoctor();
    const Pediatrician = doctors.filter(items => items.category === 'Pediatrician')
    const Cardiologist = doctors.filter(items => items.category === 'Cardiologist')
    const Dermatologist = doctors.filter(items => items.category === 'Dermatologist')
    return (
        <div className="appointmentTab">
            <div className="container">
                <div className="appointmentTabText">
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className="tabMenuArea">
                            <Tab>Pediatrician</Tab>
                            <Tab>Cardiologist</Tab>
                            <Tab>Dermatologist</Tab>
                        </TabList>
                        {/* First Tab body area  */}
                        <TabPanel>
                            <Row>
                                {
                                    Pediatrician.map((doctor) => <SingleDoctor
                                        key={doctor.id}
                                        doctor={doctor}
                                    ></SingleDoctor>)
                                }
                            </Row>
                        </TabPanel>
                        {/* Second Tab body area  */}
                        <TabPanel>
                            <Row>
                                {
                                    Cardiologist.map((doctor) => <SingleDoctor
                                        key={doctor.id}
                                        doctor={doctor}
                                    ></SingleDoctor>)
                                }
                            </Row>
                        </TabPanel>
                        {/* Third Tab body area  */}
                        <TabPanel>
                            <Row>
                                {
                                    Dermatologist.map((doctor) => <SingleDoctor
                                        key={doctor.id}
                                        doctor={doctor}
                                    ></SingleDoctor>)
                                }
                            </Row>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default AppointmentTab;