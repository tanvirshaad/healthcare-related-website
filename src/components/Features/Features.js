import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1 className="fw-bold fs-1 text-black">
                            Find the right care right at your fingertips
                        </h1>
                        <p>
                            Healthgrades gives you the tools and information you
                            need to
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={4} className="d-flex justify-content-center">
                        <Card className="p-4 h-100" style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src="https://hg-cdn.s3.amazonaws.com/homeimages/choose-your-doctor.webp"
                            />
                            <Card.Body>
                                <Card.Title>Choose</Card.Title>
                                <Card.Text>
                                    Find doctors and hospitals based on the
                                    factors that matter most to you.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="p-4 h-100" style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src="https://hg-cdn.s3.amazonaws.com/homeimages/connect-online.webp"
                            />
                            <Card.Body>
                                <Card.Title>Connect</Card.Title>
                                <Card.Text>
                                    Conveniently schedule your appointment by
                                    phone or online when available.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="p-4 h-100" style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src="https://hg-cdn.s3.amazonaws.com/homeimages/prepare-for-your-appointment.webp"
                            />
                            <Card.Body>
                                <Card.Title>Prepare</Card.Title>
                                <Card.Text>
                                    Learn what you need to know and which
                                    questions to ask your doctor.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Features;
