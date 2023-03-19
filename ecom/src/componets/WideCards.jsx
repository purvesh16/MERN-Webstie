import React from "react";
import styled from "styled-components";
const cards = [
  {
    id: 1,
    url: "/img/Carousel/cards/img1.jpg",
    text: "Keyboard & Mouse",
  },
  {
    id: 2,
    url: "/img/Carousel/cards/img2.jpg",
    text: "Monitor",
  },
];

const WideCards = () => {
  return (
    <Container className="wrapper">
      {cards.map((item) => {
        const { id, url, text } = item;

        return (
          <div className="wide-card" key={id}>
            <img src={url} alt="" className="wide-card-img" />
            <div className="text">
              <h3>{text}</h3>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  .wide-card {
    position: relative;
    margin: auto;
    overflow: hidden;
  }
  .wide-card-img {
    width: 100%;
    border-radius: 1rem;
    max-width: 100%;
    transition: all 0.3s;
    display: block;
    transform: scale(1);
  }

  .wide-card-img:hover {
    transform: scale(1.1);
    border-radius: 1rem;
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }

  .text h3 {
    font-size: 2.5vw;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }
`;

export default WideCards;
