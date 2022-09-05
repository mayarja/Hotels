import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return (
    <div className="register">
      <div className="box-register">
        <h5>CREATE AN ACCOUNT</h5>
        <div className="inp">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="last name" />
          <input type="text" placeholder="user name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
        </div>
        <p>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <strong>PRIVACY POLICY</strong>
        </p>
        <div className="btns">
          <Link className="btn reg" to="/Hotels/register">
            CREATE
          </Link>
          <Link className="btn log" to="/Hotels/login">
            LOG IN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
