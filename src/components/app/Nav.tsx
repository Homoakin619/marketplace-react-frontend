import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../utility";

const Nav = () => {
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.clear();
    navigate("/auth/login");
    axios
      .post(API_BASE_URL + "/auth/logout")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <nav className="navbar shadow navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          HomePage Logged In
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Stores
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/store/create">
                    Create Store
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/store">
                    All Stores
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/product/create">
                    Create Product
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/product">
                    All Products
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/create">
                User
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-danger m-1" onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
