import React from "react";
import styled from "styled-components";
import Swipper from "./Swipper";
import WideCards from "./WideCards";
const Carousal = ({ arr }) => {
  return (
    <Container>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {arr.map((item, personIndex) => {
            const { id, url } = item;

            let position = "carousel-item";
            if (personIndex === 0) {
              position = "carousel-item active";
            }

            return (
              <div className={position} key={id}>
                <a href="/">
                  <img
                    src={url}
                    className="d-block w-100 carousel-img"
                    alt="..."
                  />
                </a>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <WideCards />
    </Container>
  );
};

const Container = styled.section`
  padding: 4rem 0;
  background: black;
  display: flex;
  width: 100%;

  #carouselExampleAutoplaying {
    width: 70%;
    z-index: 1;
    margin-right: 4rem;
  }

  .card-item {
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    opacity: 1;
  }
`;

export default Carousal;
