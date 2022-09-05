import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="navbar">
          <div className="logo-nav">
            <span>Merobooking</span>
          </div>
          <div className="login-box">
            <button className="btn btn-primary btn-reg">
              <Link to="/Hotels/register" className="link2">
                Register
              </Link>
            </button>
            <button className="btn btn-primary btn-log">
              <Link to="/Hotels/login" className="link2">
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
