import React from 'react';
import { Card } from 'react-bootstrap';

const Expert = (props) => {
    const { name, img, speciality } = props.expert;
    return (
        <div className="col-lg-4 gy-3 d-flex justify-content-center">
            <Card className="h-100" style={{ width: '18rem' }}>
                <Card.Img roundedCircle variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{speciality}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Expert;
