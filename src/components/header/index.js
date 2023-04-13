import React from "react";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "./../../constants";
import styles from "./header.module.css";
import logo from "../../assets/images/ai-logo.svg";
const Header = () => {
  return (
    <div className="bg-white fixed-top">
      <header className="container pt-4 pb-4">
        <div className="row align-items-center py-2 bg-body">
          <div className="col-md-3 col-6">
            <Link
              to={HOME_ROUTE}
              className={`text-decoration-none ${styles.logo}`}
            >
              <img src={logo} alt="ai-logo" />
              <span></span>
            </Link>
          </div>
          <div className="col-md-9 col-6 text-end">
            <nav>
              <ul className="list-inline mb-0">
                <li className="list-inline-item px-2">
                  <Link
                    className={`text-decoration-none ${styles.menu}`}
                    to={HOME_ROUTE}
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
