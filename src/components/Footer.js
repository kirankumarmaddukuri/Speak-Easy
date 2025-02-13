import React from "react";
import { Link } from "react-router-dom";
import { footerLinks, footerIcons } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-center">
        <ul className="footer-links">
          {footerLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url} className="footer-link">
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="footer-icons">
          {footerIcons.map((link) => (
            <li key={link.id}>
              <a href={link.url} target="_blank" className="footer-icon">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <p className="copyright">
          copyright &copy; Team 27 
          <span>{new Date().getFullYear}</span>. all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
