import Header from "../../componnet/header/Header";
import Navbar from "../../componnet/navbar/Navbar";
import "./hotel.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import Maillist from "../../componnet/maillist/Maillist";
import Footer from "../../componnet/footer/Footer";
import { useEffect, useState } from "react";

function Hotel() {
  let [showslider, setshowslider] = useState(false);
  let [getid, setgetid] = useState(0);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  let toggleshowslide = (id) => {
    setshowslider(!showslider);
    setgetid(id);
  };

  let liftrightclick = (status) => {
    let counter;
    if (status === "l") {
      counter = getid === 0 ? 5 : getid - 1;
    } else {
      counter = getid === 5 ? 0 : getid + 1;
    }
    setgetid(counter);
  };

  useEffect(() => {
    if (showslider === true) {
      let clear = setInterval((e) => {
        liftrightclick();
      }, 5000);
      return () => {
        clearInterval(clear);
      };
    }
  });

  return (
    <div>
      <Navbar />
      <Header list />
      {showslider && (
        <div className="slider">
          <BsFillArrowLeftCircleFill
            className="left"
            onClick={() => {
              liftrightclick("l");
            }}
          />
          <BsFillArrowRightCircleFill
            className="right"
            onClick={() => {
              liftrightclick("r");
            }}
          />
          <div className="box-img">
            <img src={photos[getid].src} alt="..." />
          </div>
          <AiFillCloseCircle className="close" onClick={toggleshowslide} />
        </div>
      )}
      <div className="hotel-single">
        <div className="container">
          <div className="title-btn">
            <div className="hotel-title-one">
              <h2>Grand Hotel</h2>
              <div className="icon-s">
                <HiLocationMarker />
                <span>Elton st 125 New York</span>
              </div>
              <p>Excellent Location-500m from center</p>
              <span>
                Book a stay over $114 at this property and get a free airport
                taxi
              </span>
            </div>
            <button className="btn btn-primary">Reserve or Book Now!</button>
          </div>
          <div className="row">
            {photos.map((e, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div
                  className="img-box"
                  onClick={() => {
                    toggleshowslide(index);
                  }}
                >
                  <img src={e.src} alt="..." />
                </div>
              </div>
            ))}
          </div>
          <div className="hotel-title-two">
            <div className="dec-title">
              <h2>Stay in the heart of krakow</h2>
              <p>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="box-dec">
              <h5>Perfect fro a 9-night stay!</h5>
              <p>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </p>
              <span>
                <span className="fw-bold">$945</span>(9nights)
              </span>
              <button className="btn btn-primary">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <Maillist />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
