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
            <button className="btn btn-primary btn-reg">Register</button>
            <button className="btn btn-primary btn-log">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
