import { Link } from "react-router-dom";
import "./Searchitem.css";

function Searchitem() {
  return (
    <div className="searchitem">
      <div className="img-box">
        <img
          src="https://images.pexels.com/photos/7061663/pexels-photo-7061663.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="..."
        />
      </div>
      <div className="paln-b">
        <div className="title-center">
          <h4>Tower Street Apartments</h4>
          <span>500m from center</span>
          <span className="span-color">free airport taxi</span>
          <p>Studio Apartments with Ari conditioning</p>
          <span>Entire studio .1 bathroom 21 m full bed </span>
          <span className="span-color-3">Free cancellation</span>
          <span className="span-color-2">
            You can cancel later, so lock in this great price today!{" "}
          </span>
        </div>

        <div className="title-right w-100-lg">
          <div className="title-one">
            <span className="one">Excellent</span>
            <span className="two">8.9</span>
          </div>
          <div className="title-two">
            <p>$123</p>
            <span>includes taxes and free</span>
            <button className="btn btn-primary">
              <Link className="link" to="/Hotels/hotels/2">
                See avilability
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchitem;
