import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { title, img, description } = props.service;
    return (
        <div className="col-lg-4 gy-3 d-flex justify-content-center">
            <Card border="info" className="h-100" style={{ width: '18rem' }}>
                <Card.Img
                    className="fixed-size text-center mx-auto my-3"
                    roundedCircle
                    variant="top"
                    src={img}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button className="book-btn">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;
