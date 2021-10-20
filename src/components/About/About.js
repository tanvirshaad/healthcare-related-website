import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container>
                <Row className="py-3">
                    <Col lg={12}>
                        <h1 className="fs-1 fw-bold text-black text-center py-5">
                            About Us
                        </h1>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={6}>
                        <img
                            className="img-fluid"
                            src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/Qulity-team1.jpg"
                            alt=""
                        />
                    </Col>
                    <Col lg={6} style={{ textAlign: 'left' }}>
                        <h3 className="fw-medium" style={{ color: '#000173' }}>
                            Story about our hospital
                        </h3>
                        <h5 className="fw-normal">
                            And how we get to this point
                        </h5>
                        <p>
                            One of the first major discoveries relevant to the
                            field of pulmonology was the discovery of pulmonary
                            circulation. Originally, it was thought that blood
                            reaching the right side of the heart passed through
                            small ‘pores’ in the septum.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5 py-3">
                    <Col lg={12}>
                        <h3 className="fw-medium text-black mb-3">
                            Certified by the Joint Commission
                        </h3>
                        <h5 className="fw-normal" style={{ color: '#000173' }}>
                            The largest and most respected accreditation
                            agencies
                        </h5>
                        <p>
                            One of the first major discoveries relevant to the
                            field of pulmonology was the discovery of pulmonary
                            circulation. Originally, it was thought that blood
                            reaching the right side of the heart passed through
                            small
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5 py-3">
                    <Col lg={6} md={12}>
                        <img
                            className="img-fluid"
                            src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/Qulity-Team2-600x642.png"
                            alt=""
                        />
                    </Col>
                    <Col lg={6} md={12} style={{ textAlign: 'left' }}>
                        <h3 className="fw-medium text-black mb-3">
                            Private Care Service
                        </h3>
                        <h5 className="fw-normal" style={{ color: '#000173' }}>
                            Pharmaceuticals or drugs or medicines are classified
                            in various other groups besides their origin on the
                            basis
                        </h5>
                        <p>
                            Surgery of the respiratory tract is generally
                            performed by specialists in cardiothoracic surgery
                            (or thoracic surgery) though minor procedures may be
                            performed by pulmonologists. Pulmonology is closely.
                        </p>
                        <ul>
                            <li>CF-related diabetes (monthly)</li>
                            <li>Gastrointestinal (monthly)</li>
                            <li>CF-related liver disease (monthly)</li>
                            <li>Sweat testing (three times per month)</li>
                            <li>
                                Difficult cystic fibrosis diagnosis (alternate
                                months)
                            </li>
                        </ul>
                        <button className="book-btn rounded p-2">
                            Learn More
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
