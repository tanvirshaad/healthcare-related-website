import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then((res) => res.json())
            .then((data) => setServiceDetails(data));
    }, []);

    const found = serviceDetails[serviceId - 1];

    return (
        <div className="details-card">
            <Card
                border="info"
                className="h-100 mt-5 mx-auto"
                style={{ width: '18rem' }}
            >
                <Card.Title>
                    <h3>{found?.title}</h3>
                </Card.Title>
                <Card.Img
                    className="fixed-size text-center mx-auto my-3"
                    roundedCircle
                    variant="top"
                    src={found?.img}
                />
                <Card.Body>
                    <Card.Text>{found?.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Booking;
