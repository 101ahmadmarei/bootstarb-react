import React from "react";
import "./Section6.css";
const Section6 = () => {
  return (
    <section className="section61 s22">
      <div>
        <h1>Subscribe Newsletter</h1>
        <h5>The Travel</h5>
        <p>
          Get inspired! Receive travel discounts, tips and behind the scenes
          stories.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  style={{ width: "100px" }}
                />
                <button
                  className="btn btn-dark"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="d-none d-sm-block"
        src="./assets/images/pro-removebg-preview.png"
        alt=""
      />
    </section>
  );
};

export default Section6;
