import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const auth = useSelector((state) => state.auth);

  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a className="header__login" href="/auth/google">
              <i className="fab fa-google"></i> Login
            </a>
          </li>
        );

      default:
        return (
          <div className="header__logout">
            <li className="header__logout--item">
              <Link to="/checkoutForm">Add Credits</Link>
            </li>
            <li className="header__logout--item">Credits: {auth.credits}</li>
            <li className="header__logout--item">
              <a href="/api/logout">Logout</a>
            </li>
          </div>
        );
    }
  };

  return (
    <nav className="header">
      <Link className="header__logo" to={auth ? "/surveys" : "/"}>
        Emaily
      </Link>
      <ul>{renderContent()}</ul>
    </nav>
  );
};

export default Header;
