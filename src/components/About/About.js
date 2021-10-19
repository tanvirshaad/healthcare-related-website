import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container>
                <Row>
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
            </Container>
        </div>
    );
};

export default About;
