import React from "react";

import { Link, NavLink } from "react-router-dom";

const publicNavigationLinks = [
  { linkName: "Signin", linkTo: "/signin" },
  { linkName: "Signup", linkTo: "/signup" },
  { linkName: "ForgotPassword", linkTo: "/ForgotPassword" },
];

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand text-success p-3" to="/">
            UrlShortsApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              {publicNavigationLinks.map(({ linkName, linkTo }) => {
                return (
                  <NavLink
                    key={linkName}
                    className={(nav) =>
                      nav.isActive ? "active nav-link text-primary" : "nav-link"
                    }
                    to={linkTo}
                  >
                    {linkName}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
