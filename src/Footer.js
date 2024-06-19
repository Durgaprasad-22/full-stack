import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center d-flex align-items-center justify-content-center" style={{ height: '20vh'}}>
            <div>
                <h5 className="text-uppercase">&copy; 2024 All rights reserved</h5>
                <div>
                    <a href="https://www.facebook.com" className="btn btn-outline-light btn-floating m-1" role="button">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com" className="btn btn-outline-light btn-floating m-1" role="button">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com" className="btn btn-outline-light btn-floating m-1" role="button">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
