import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeCounterContext } from "../ThemeContext"; // Import the context
import "../Styles/footer.css";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeCounterContext); // Use theme and toggleTheme from context

  return (
    <footer className={`footer ${theme}`}>
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>About Us</h4>
            <p>
              We are a leading company providing top-notch services and
              solutions tailored for your business needs.
            </p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>123 Business Road, City, Country</p>
            <p>Phone: +123 456 7890</p>
            <p>Email: info@business.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Business Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
