import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1 className="fw-bold fs-1 text-black">Services</h1>
                    </Col>
                </Row>
                <Row>
                    {services.map((service) => (
                        <Service key={service.id} service={service}></Service>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Services;
