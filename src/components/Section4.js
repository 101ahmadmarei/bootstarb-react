import React from "react";
import "./Section4.css";
import { Container } from "@mui/material";
const Section4 = () => {
  const data = [
    {
      title: "“A real sense of community, nurtured”",
      text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
      writer: "Oiga",
      desc: "Weave Studios – Kai Tak",
      img: "/assets/images/Rectangle 36 (2).png",
    },
    {
      title: "“The facilities are superb. Clean, slick, bright.”",
      text: "“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View",
      writer: "Thomas",
      desc: "Weave Studios – Olympic",
      img: "/assets/images/Rectangle 36 (1).png",
    },
    {
      title: "“The facilities are superb. Clean, slick, bright.”",
      text: "“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View",
      writer: "Eliot",
      desc: "Weave Studios – Olympic",
      img: "/assets/images/Rectangle 36.png",
    },
  ];
  return (
    <Container maxWidth="lg" sx={{ mt: "50px", ml: { sm: "auto" } }}>
      <section className="container section4">
        <header className="d-flex justify-content-between">
          <div className="text">
            <h1>Reviews</h1>
            <p>What people says about Golobe facilities</p>
          </div>
          <button
            type="button"
            className="btn btn-outline-dark"
            style={{ height: "40px" }}
          >
            See more places
          </button>
        </header>
        <div className="row d-flex justify-content-between justify-content-sm-center">
          {data.map((item, i) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text" style={{ height: "120px" }}>
                  {item.text}
                </p>
                <div className="d-flex justify-content-between">
                  <div className="rating">
                    <i className="bi bi-star-fill custom-color"></i>
                    <i className="bi bi-star-fill custom-color"></i>
                    <i className="bi bi-star-fill custom-color"></i>
                    <i className="bi bi-star-fill custom-color"></i>
                    <i className="bi bi-star-fill custom-color"></i>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    style={{ color: "black" }}
                  >
                    View More
                  </button>
                </div>
                <div className="userName">
                  <h4>{item.writer}</h4>
                  <p>{item.desc}</p>
                  <div>
                    <img
                      src="./assets/images/flat-color-icons_google.png"
                      alt=""
                    />
                    <span>Google</span>
                  </div>
                </div>
                <img src={item.img} className="card-img-bottom" alt="..." />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Section4;
