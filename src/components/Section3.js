import React from "react";
import "./Section3.css";
import { Container } from "@mui/material";
const Section3 = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: "50px", ml: { sm: "auto" } }}>
      {" "}
      <section
        class="container d-flex justify-content-center section3 row"
        style={{ margin: "auto" }}
      >
        <div class="col-sm-10 col-lg-6 cont">
          <img src="./assets/images/Rectangle 40.png" alt="" />
          <div class="text">
            <h2>Flights</h2>
            <p>Search Flights & Places Hire to our most popular destinations</p>
            <button
              type="button"
              class="btn btn-green"
              style={{ backgroundColor: "#8dd3bb", borderColor: "#8dd3bb" }}
            >
              <img
                src="./assets/images/Vector (9).png"
                alt=""
                style={{ width: 14 }}
              />
              Show Flights
            </button>
          </div>
        </div>
        <div class="col-sm-10 col-lg-6 cont">
          <div class="image2">
            <img src="./assets/images/Rectangle 41.png" alt="" />
          </div>

          <div class="text">
            <h2>Hotels</h2>
            <p>Search hotels & Places Hire to our most popular destinations</p>
            <button
              type="button"
              class="btn btn-green"
              style={{ backgroundColor: "#8dd3bb", borderColor: "#8dd3bb" }}
            >
              <img
                src="./assets/images/Vector (9).png"
                alt=""
                style={{ width: 14 }}
              />
              Show Hotels
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Section3;
