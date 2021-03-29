import React from "react";

const footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:hartn001@gmail.com" className="footer__link">
        hartn001@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a href="https://codepen.io/bob-vader" className="social-list__link">
            <i className="fab fa-codepen"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://www.linkedin.com/in/nicholas-hartman-86201050/"
            className="social-list__link"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://twitter.com/nich_hart" className="social-list__link">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://github.com/Hartman-Nicholas"
            className="social-list__link"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default footer;
