import Header from "../../componnet/header/Header";
import Navbar from "../../componnet/navbar/Navbar";
import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Searchitem from "../../componnet/searchitem/Searchitem";

function List() {
  let location = useLocation();
  let [destination, setdestination] = useState(location.state.destination);
  let [option, setoption] = useState(location.state.option);
  let [date, setDate] = useState(location.state.date);
  let [opendata, setopendate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header list />
      <div className="list">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="search-box">
                <div className="title-date">
                  <h3 className="fw-bold">Search</h3>
                  <label>Destination</label>
                  <input
                    type="text"
                    placeholder={destination}
                    className="form-control"
                  />
                  <label>Cheack-in-date</label>
                  <span
                    onClick={() => {
                      setopendate(!opendata);
                    }}
                    className="ss"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {opendata && (
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
                <div className="optin-box">
                  <label>Options</label>
                  <div className="optin-title">
                    <span>
                      Min price <small>pre night</small>
                    </span>
                    <input type="number" />
                  </div>
                  <div className="optin-title">
                    <span>
                      Max price <small>pre night</small>
                    </span>
                    <input type="number" />
                  </div>
                  <div className="optin-title">
                    <span>Adults</span>
                    <input type="number" min={1} placeholder={option.adults} />
                  </div>
                  <div className="optin-title">
                    <span>Children</span>
                    <input
                      type="number"
                      min={0}
                      placeholder={option.children}
                    />
                  </div>
                  <div className="optin-title">
                    <span>Room</span>
                    <input type="number" min={1} placeholder={option.room} />
                  </div>
                </div>
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>

            <div className="col-lg-8 col-md-6">
              <div className="result-box">
                <Searchitem />
                <Searchitem />
                <Searchitem />
                <Searchitem />
                <Searchitem />
                <Searchitem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
