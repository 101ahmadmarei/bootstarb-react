import React from "react";
import "./Section1.css";

const Section1 = () => {
  return (
    <div className="p-4">
      <section className="container-fluid section1">
        <div className="mainImage">
          <img src="/assets/images/Rectangle 31.png" alt="" />
        </div>

        <div className="content">
          <div
            // className="row d-flex justify-content-between"
            style={{
              padding: "30px 40px",
              display: "flex",
              justifyContent: "space-between",

              flexWrap: "wrap",
            }}
          >
            <div className="start d-none d-sm-flex justify-content-sm-center mb-sm-2">
              <span>
                <img src="/assets/images/Vector.png" alt="" /> Find Flight
              </span>
              <span>
                <img src="/public/assets/images/Vector (1).png" alt="" /> Find
                Stays
              </span>
            </div>
            <div className="logo">
              <img src="/assets/images/Logo.png" alt="" />
            </div>
            <div className="button">
              <button
                type="button"
                className="btn btn-outline-light"
                style={{ border: "none" }}
              >
                Login
              </button>
              <button type="button" className="btn btn-light">
                Sign up
              </button>
            </div>
          </div>
          <div className="text-center mt-2 text">
            <h4>Helping Others</h4>
            <h1>Live & Travel</h1>
            <p>Special offers to suit your plan</p>
          </div>
        </div>
        <div className="card col-md-12 col-lg-10">
          <div
            className="start2 "
            style={{
              display: "flex",
            }}
          >
            <span style={{ color: "black" }}>
              <img src="./assets/images/Vector (11).png" alt="" /> Flights
            </span>

            <span style={{ color: "black" }}>
              <img src="./assets/images/Vector (12).png " alt="" /> Stays
            </span>
          </div>
          <form className="row">
            <div className="input-wrapper mb-3 col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <label for="first" className="label">
                From - To
              </label>
              <div className="iconImage">
                <input
                  type="text"
                  className="input"
                  placeholder="Lahore - Karachi"
                />
                <span className="input-group-text">
                  <img src="./assets/images/Vector (10).png" alt="" />
                </span>
              </div>
            </div>

            <div className="input-wrapper mb-3 col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <label for="first" className="label">
                Trip
              </label>
              <div className="iconImage">
                <input type="text" className="input" placeholder="Return" />
                <span className="input-group-text">
                  <i className="bi bi-caret-down-fill"></i>
                </span>
              </div>
            </div>

            <div className="input-wrapper mb-3 col-12 col-sm-6 col-md-4 col-lg-3">
              <label for="first" className="label">
                Depart- Return
              </label>
              <input
                type="date"
                className="input"
                placeholder="07 Nov 22 - 13 Nov 22"
              />
            </div>
            <div className="input-wrapper mb-3 col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <label for="first" className="label">
                Passenger - Class
              </label>
              <input
                type="text"
                className="input"
                placeholder="1 Passenger, Economy"
              />
            </div>
            <div className="button1 d-flex justify-content-sm-center justify-content-md-end">
              <button
                type="button"
                className="btn btn-outline-light"
                style={{ color: "black" }}
              >
                + Add Promo Code
              </button>
              <button type="button" className="btn btn-green">
                <img src="./assets/images/Vector (9).png" alt="" /> Show Flights
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Section1;
