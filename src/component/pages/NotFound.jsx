import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center" style={{ background: '#f7f8fc' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-1 text-danger fw-bold mb-4">404</h1>
                        <h2 className="display-5 text-dark mb-3">Oops! Page Not Found</h2>
                        <p className="lead text-muted mb-5">
                            It seems the page you are looking for does not exist. It might have been moved.
                        </p>
                        <Link to="/" className="btn btn-primary btn-lg px-5 shadow-sm">
                            <i className="fas fa-home me-2"></i> Go Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
