import React from "react";
import "./Section2.css";
import { Container } from "@mui/material";
const Section2 = () => {
  const data = [
    {
      img: "./assets/images/Rectangle 3 (1).png",
      title: "Istanbul, Turkey",
      text: "Flights,Hotels,Resorts",
    },
    {
      img: "./assets/images/Rectangle 4 (2).png",
      title: "Sydney, Australia",
      text: "Flights,Hotels,Resorts",
    },
    {
      img: "./assets/images/Rectangle 4 (3).png",
      title: "Baku, Azerbaijan",
      text: "Flights,Hotels,Resorts",
    },
    {
      img: "./assets/images/Rectangle 4 (2).png",
      title: "Malé, Maldives",
      text: "Flights,Hotels,Resorts",
    },
    {
      img: "./assets/images/Rectangle 3 (2).png",
      title: "Paris, France",
      text: "Flights,Hotels,Resorts",
    },

    {
      img: "./assets/images/Rectangle 4 (1).png",
      title: "New York, USA",
      text: "Flights,Hotels,Resorts",
    },
    {
      img: "./assets/images/Rectangle 3 (4).png",
      title: "London, UK",
      text: "Flights,Hotels,Resorts",
    },
    {
      img: "./assets/images/Rectangle 3 (3).png",
      title: "Tokyo, Japan",
      text: "Flights,Hotels,Resorts",
    },
    {
      img: "./assets/images/Rectangle 4 (3).png",
      title: "Dubai, UAE",
      text: "Flights,Hotels,Resorts",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: "50px", ml: { sm: "auto" } }}>
      <section className="container-lg section2">
        <header className="d-flex justify-content-between">
          <div className="text">
            <h1>Plan your perfect trip</h1>
            <p>Search Flights & Places Hire to our most popular destinations</p>
          </div>
          <button
            type="button"
            className="btn btn-outline-dark"
            style={{ height: "40px" }}
          >
            See more places
          </button>
        </header>
        <ul className="body row">
          {data.map((item, i) => (
            <li key={i} className="col-12 col-sm-5 col-lg-4">
              <div className="div">
                <img src={item.img} alt="" />
                <div>
                  <p>{item.title}</p>
                  <p>{item.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};

export default Section2;
