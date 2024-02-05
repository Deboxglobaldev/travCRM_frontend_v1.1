import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="text-center d-lg-none w-100">
            <button
              type="button"
              className="navbar-toggler dropdown-toggle"
              data-toggle="collapse"
              data-target="#navbar-footer"
            >
              <i className="icon-unfold mr-2"></i>
              Footer
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar-footer">
            <span className="navbar-text">
              &copy; 2015 - 2018.{" "}
              <NavLink to="#">Limitless Web App Kit</NavLink> by{" "}
              <NavLink to="http://themeforest.net/user/Kopyov" target="_blank">
                Eugene Kopyov
              </NavLink>
            </span>

            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                <NavLink
                  to="https://kopyov.ticksy.com/"
                  className="navbar-nav-link"
                  target="_blank"
                >
                  <i className="icon-lifebuoy mr-2"></i> Support
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="http://demo.interface.club/limitless/docs/"
                  className="navbar-nav-link"
                  target="_blank"
                >
                  <i className="icon-file-text2 mr-2"></i> Docs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="https://themeforest.net/item/limitless-responsive-web-application-kit/13080328?ref=kopyov"
                  className="navbar-nav-link font-weight-semibold"
                >
                  <span className="text-pink-400">
                    <i className="icon-cart2 mr-2"></i> Purchase
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
};

export default Footer;
