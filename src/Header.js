import React from "react";
import { Link } from "react-router-dom";
import logo from './images.jpg';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'skyblue' }}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" style={{ position: 'relative', left: '60px', color: 'black' }} to="/">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Logo"
                    style={{borderRadius:'50%'}}
                />
                {' eHOME'}
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto" style={{ position: 'relative', left: '1100px' }}>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
