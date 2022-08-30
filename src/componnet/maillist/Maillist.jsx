import "./maillist.css";

function Maillist() {
  return (
    <div className="maillist text-center">
      <h1>Save time, save money!</h1>
      <p>Sign up and we'll send best deals to you</p>
      <div className="inp-b">
        <input type="email" placeholder="Your Email" />
        <button className="btn btn-primary">Subscribe </button>
      </div>
    </div>
  );
}

export default Maillist;
