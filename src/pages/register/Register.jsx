import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  let [check, setcheck] = useState(true);
  return (
    <div className="register">
      <div className="box-register">
        <h5>CREATE AN ACCOUNT</h5>
        <form className="inp">
          <input type="text" placeholder="name" required />
          <input type="text" placeholder="last name" required />
          <input type="text" placeholder="user name" required />
          <input type="email" placeholder="email" required />
          <input type="password" placeholder="password" required />
          <input type="password" placeholder="confirm password" required />
          <p>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <strong>PRIVACY POLICY</strong>
          </p>
          <div className="btns">
            <button className="btn reg">
              <Link
                className="link3"
                to={check ? "/Hotels" : "/Hotels/register"}
              >
                CREATE
              </Link>
            </button>
            <button className="btn log">
              <Link className="link3" to="/Hotels/login">
                LOG IN
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
