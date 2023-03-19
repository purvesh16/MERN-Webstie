import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Card = (curElem) => {
  const { _id, name, image, price } = curElem;

  return (
    <Container>
      <div className="card-div" key={_id}>
        <NavLink
          to={`/singleproduct/${_id}`}
          className="card-img"
          target="_blank"
        >
          <img src={image} alt="" />
        </NavLink>
        <div className="info">
          <h3 className="info-title">{name}</h3>
          <div className="price-cart">
            <h3 className="price">{price}$</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 2rem;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #333333;
  }

  .card-div {
    flex: 1;
    width: 20%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    object-fit: cover;
  }

  .info {
    width: 100%;
    padding: 0.5rem 0;
    color: grey;
  }
  .card-div .info-title {
    width: 100%;
    height: 5vh;
    font-size: 0.8vw;
    margin: 0.6rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-div .card-img img {
    width: 100%;
    height: auto;
  }

  .card-img {
    background: white;
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }

  .price-cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 0;
  }
  .price {
    font-size: 1.4vw;
    color: whitesmoke;
  }
  .cart {
    font-size: 1.8vw;
    font-weight: 600;
    color: white;
    transition: all 0.3s ease;
  }

  .cart:hover {
    color: black;
  }
`;

export default Card;
