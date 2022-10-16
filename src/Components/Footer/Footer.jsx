import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-grid">
                        <div className="section">
                            <h4>Quick links</h4>
                            <ul>
                                <li><Link to="/portfolio">Portfolio</Link></li><li><Link to="/resume">Resume</Link></li><li><Link to="/skills">All Skills</Link></li>
                            </ul>
                        </div>
                        <div className="section">
                            <h4>Skills</h4>
                            <ul>
                                <li><Link to="/skills#FE">Front End Development</Link></li><li><Link to="/skills#BE">Backend End Development</Link></li><li><Link to="/skills#SEO">SEO Optimization</Link></li>
                            </ul>
                        </div>
                        <div className="section">
                            <h4>Contacts</h4>
                            <ul>
                                <li><Link to="https://twitter.com/felixkpt" target="_blank" rel="noreferrer">Twitter</Link></li><li><Link to="https://linkedin/in/felixkpt" target="_blank" rel="noreferrer">LinkedIn</Link></li><li><Link to="https://facebook.com/felixkpt" target="_blank" rel="noreferrer">Facebook</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer