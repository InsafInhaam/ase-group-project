import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logo, profileImg } from "../assets/images";



const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const history = useNavigate();

  return (
    <header>
      {/* header inner */}
      <div className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Logo" className="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              {/* ----------------------  */}
              {!user ? (
                <>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/login"}>
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/register"}>
                        Register
                      </Link>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <div className="btn-group mr-4">
                    {/* <button type="button" className="btn btn-primary">
                      Name
                    </button> */}
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle dropdown-toggle-split navbar-profile-img-btn-dropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      {/* <span className="visually-hidden">Toggle Dropdown</span> */}
                      <img
                        src={user.profile ? user.profile : profileImg}
                        className="rounded-circle navbar-profile-img"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/userdashboard">
                          Profile
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => {
                            localStorage.clear();
                            dispatch({ type: "LOGOUT" });
                            history("/login");
                          }}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {/* ------------------------  */}
            </div>
          </div>
        </nav>
      </div>
      {/* end header inner */}
    </header>
  );
};

export default Navbar;
