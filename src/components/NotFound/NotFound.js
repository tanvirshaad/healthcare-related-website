import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound pt-5">
            <h1 className="mt-5">Page Not Found</h1>
            <h2>404</h2>
            <div style={{ marginBottom: '400px' }}>
                <Link to="/home">Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
