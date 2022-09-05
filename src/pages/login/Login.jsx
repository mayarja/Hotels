import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="box-login">
        <h5>Log In To Your ACCOUNT</h5>
        <div className="inp">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <a href="..">Forget Your password?</a>
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

export default Login;
