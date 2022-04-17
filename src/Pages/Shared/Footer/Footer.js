import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-white">Teaching Tutor Karim</h5>
                    <p className="small text-muted">The best you can find in affordable price.</p>
                    <p className="small text-muted mb-0">&copy; Copyrights. {year} All rights reserved.</p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/">Youtube</a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://www.programming-hero.com/">Programming Hero</a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://www.google.com/">Google</a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.com/">Stack Over Flow</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 gap">
                    <h5 className="text-white mb-3">Contact Us</h5>
                    <p className="small text-muted">192/C Dhiludia Mor, Kakoli, Bangladesh</p>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;