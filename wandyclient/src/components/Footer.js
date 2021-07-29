import React from "react";
import "../scss/Footer.scss";
import "font-awesome/css/font-awesome.min.css";

function Footer({ links, socialLinks }) {
  const contactArray = [0, 1];
  const socLinksArray = [2, 3, 4];

  return (
    <footer className="footer">
      <div className="footer-section">
        <ul className="list">
          {socialLinks.map((socialLink, index) =>
            contactArray.map(
              (linkIndex) =>
                linkIndex === index && (
                  <li key={index}>
                    <i className={socialLink.class}></i>
                    <span>{socialLink.description}</span>
                  </li>
                )
            )
          )}
        </ul>
      </div>
      <div className="footer-section">
        <ul className="list">
          {socialLinks.map((socialLink, index) =>
            socLinksArray.map(
              (linkIndex) =>
                linkIndex === index && (
                  <li key={index}>
                    <i className={socialLink.class}></i>
                    <span>{socialLink.description}</span>
                  </li>
                )
            )
          )}
        </ul>
      </div>
      <div className="footer-section">
        <div>Wandy</div>
      </div>
    </footer>
  );
}

export default Footer;
