import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('experts.json')
            .then((res) => res.json())
            .then((data) => setExperts(data));
    }, []);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1 className="fw-bold fs-1 py-5 text-black">
                            Our Experts
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {experts.map((expert) => (
                        <Expert key={expert.id} expert={expert}></Expert>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Experts;
