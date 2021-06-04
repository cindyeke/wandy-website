import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'
import 'font-awesome/css/font-awesome.min.css'

function Footer({ links, socialLinks }) {

    const socLinksArray = [0,1]

    return (
        <footer className="footer">
            <div className="footer-section">
                <p>Category</p>
                <ul>
                    { links.map((link) => (
                        <li key={link.id}><Link to={`/category/${link.pathname}`}>{link.name}</Link><span className="count">({link.count})</span></li>
                    ))}
                </ul>
            </div>
            <div className="footer-section">
                <p>Archives</p>
                <ul>
                <li>
                    January 2021
                    <span className="count">(1)</span>
                </li>
                <li>February 2021<span className="count">(7)</span></li>
                <li>March 2021<span className="count">(3)</span></li>

                <li>April 2021<span className="count">(2)</span></li>
                </ul>
            </div>
            <div className="footer-section">
                <p>Wanna Contact Me?</p>
                <ul className="contact">
                {
                    socialLinks.map((socialLink, index) =>(
                        socLinksArray.map(linkIndex =>(
                            linkIndex === index &&
                                <li key={index}><i className={socialLink.class}></i><span>{socialLink.description}</span></li>
                        ))
                    ))
                }
                {/* <li><i className="fa fa-phone"></i><span>+234 (0) 708 0000000</span></li>
                <li><i className="fa fa-envelope"></i><span>contact@wandoo.com</span></li> */}
                </ul>
            </div>
        </footer>
    )
}

export default Footer
