import "./featured.css";

function Featured() {
  return (
    <div className="featured">
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className="img-title">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt="..."
            />
            <div className="title">
              <span>Dublin</span>
              <span>123 properties</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="img-title">
            <img
              src="https://images.pexels.com/photos/7008276/pexels-photo-7008276.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="..."
            />
            <div className="title">
              <span>Austin</span>
              <span>532 properties</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="img-title">
            <img
              src="https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="..."
            />
            <div className="title">
              <span>Dubai</span>
              <span>320 properties</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
