import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <h1 className="fw-bold text-white large-text">
                            Feel Better About Finding Health Care
                        </h1>
                        <h5>Find the care you need</h5>
                    </Col>
                    <Col lg={6}>
                        <img
                            src="https://photos.healthgrades.com/homeimages/doctorsgroup1.webp"
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
