import "./header.css";
import { FaBed } from "react-icons/fa";
import { MdOutlineLocalAirport, MdOutlineDateRange } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { RiPoliceCarFill } from "react-icons/ri";
import { GiPerson } from "react-icons/gi";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Fragment, useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Header({ list }) {
  const [destination, setdestination] = useState("");

  const [opendate, setopendate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  let [option, setoption] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });

  let haundelclick = (name, status) => {
    setoption((prev) => {
      return {
        ...prev,
        [name]: status === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  let [openOption, setOpenOption] = useState(false);

  let navigate = useNavigate();

  let navifunc = () => {
    if (destination.length > 0) {
      navigate("./list", { state: { destination, date, option } });
    }
  };

  return (
    <div className="header">
      <div className="container">
        <div className="box-icon">
          <div className="icon-title active">
            <FaBed size={30} />
            <span>Stays</span>
          </div>
          <div className="icon-title">
            <MdOutlineLocalAirport size={30} />
            <span>Flights</span>
          </div>
          <div className="icon-title">
            <AiFillCar size={30} />
            <span>Car rentals</span>
          </div>
          <div className="icon-title">
            <FaBed size={30} />
            <span>Attractions</span>
          </div>
          <div className="icon-title">
            <RiPoliceCarFill size={30} />
            <span>Airport taxis</span>
          </div>
        </div>

        {!list && (
          <Fragment>
            <div className="dec-title">
              <h1>A Lifetime of discounts? it's Genius</h1>
              <p>
                Get rewarded fro your travels - unlock instanst saving of 10% or
                more with a free merobooking account
              </p>
              <button className="btn btn-primary">sign in / Register</button>
            </div>
            <div className="bar-rel">
              <div className="header-bar">
                <div className="header-search">
                  <FaBed size={20} />
                  <input
                    type="text"
                    required
                    placeholder="Where are you going"
                    value={destination}
                    onChange={(e) => {
                      setdestination(e.target.value);
                    }}
                  />
                </div>
                <div className="header-search ">
                  <MdOutlineDateRange size={20} />
                  <span
                    onClick={() => {
                      setopendate(!opendate);
                    }}
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {opendate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      minDate={new Date()}
                      className="date"
                    />
                  )}
                </div>
                <div className="header-search">
                  <GiPerson size={20} />
                  <span
                    onClick={() => {
                      setOpenOption(!openOption);
                    }}
                  >{`Adults: ${option.adults} Children: ${option.children} Room: ${option.room}`}</span>

                  {openOption && (
                    <div className="option-box">
                      <div className="item-option">
                        <span>Adults</span>
                        <div className="option-btn">
                          <button
                            onClick={() => {
                              haundelclick("adults", "d");
                            }}
                            disabled={option.adults <= 1}
                          >
                            -
                          </button>
                          <span>{`${option.adults}`}</span>
                          <button
                            onClick={() => {
                              haundelclick("adults", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="item-option">
                        <span>Children</span>
                        <div className="option-btn">
                          <button
                            onClick={() => {
                              haundelclick("children", "d");
                            }}
                            disabled={option.children <= 0}
                          >
                            -
                          </button>
                          <span>{`${option.children}`}</span>
                          <button
                            onClick={() => {
                              haundelclick("children", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="item-option">
                        <span>Room</span>
                        <div className="option-btn">
                          <button
                            onClick={() => {
                              haundelclick("room", "d");
                            }}
                            disabled={option.room <= 1}
                          >
                            -
                          </button>
                          <span>{`${option.room}`}</span>
                          <button
                            onClick={() => {
                              haundelclick("room", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="header-search">
                  <button className="btn btn-primary" onClick={navifunc}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Header;
