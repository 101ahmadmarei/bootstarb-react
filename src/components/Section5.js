import React from "react";
import "./Section5.css";
const Section5 = () => {
  return (
    <footer className="container-fluid pt-5">
      <section className="section6 s11">
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
        <img src="./assets/images/pro-removebg-preview.png" alt="" />
      </section>
      <div
        className="container  allItems"
        //   style={{display:"flex",flexWrap:"wrap"}}
      >
        <div>
          <div className="logo">
            <img src="./assets/images/Logo (1).png" alt="" />
          </div>
          <div>
            <img src="./assets/images/Vector (13).png" alt="" />
            <img src="./assets/images/Vector (14).png" alt="" />
            <img src="./assets/images/Vector (15).png" alt="" />
            <img src="./assets/images/Vector (16).png" alt="" />
          </div>
        </div>
        <div>
          <h4>Our Destinations</h4>
          <ul>
            <li>Canada</li>
            <li>Alaksa</li>
            <li>France</li>
            <li>Iceland</li>
          </ul>
        </div>
        <div>
          <h4>Our Activities</h4>
          <ul>
            <li>Northern Lights</li>
            <li>Cruising & sailing</li>
            <li>Multi-activities</li>
            <li>Kayaing</li>
          </ul>
        </div>
        <div>
          <h4>Travel Blogs</h4>
          <ul>
            <li>Bali Travel Guide</li>
            <li>Sri Lanks Travel Guide</li>
            <li>Peru Travel Guide</li>
            <li>Bali Travel Guide</li>
          </ul>
        </div>
        <div>
          <h4>About Us</h4>
          <ul>
            <li>Our Story</li>
            <li>Work with us</li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li>Our Story</li>
            <li>Work with us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Section5;
