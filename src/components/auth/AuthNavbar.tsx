import { Link } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <nav className="navbar shadow navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Authentication Page
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
        
          <div>
            <Link className="btn btn-outline-success m-1" to="login">Login</Link>
            <Link className="btn btn-outline-primary m-1" to="register">Register</Link>
          </div>
        </div>
      
    </nav>
  );
};

export default AuthNavbar;
