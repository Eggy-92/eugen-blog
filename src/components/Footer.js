import React from 'react';
import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <p>Follow me:</p>
      <nav aria-label="Social media links">
        <div className="footer-links">
          <a href="https://www.instagram.com/eugeniu__persic/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
          <a href="https://www.facebook.com/bezedica/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
          <a href="https://www.linkedin.com/in/eugen-bezedica-4078bb330/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
