import React from "react";
import styled from "styled-components";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useCartContext } from "../context/cartContext";

const CartItem = (curElem) => {
  const { _id, amount, image, name, price } = curElem;
  const { increase, decrease, removeItem } = useCartContext();

  // console.log(_id);
  return (
    <Container>
      <img src={image} alt="" />
      <div className="item-info">
        <div>
          <h3>{name}</h3>
          <h3>{price}$</h3>
        </div>

        <button className="btn" onClick={() => removeItem(_id)}>
          remove
        </button>
      </div>
      <div className="counter">
        <AiOutlinePlusCircle className="icons" onClick={() => increase(_id)} />
        <span>{amount}</span>
        <AiOutlineMinusCircle className="icons" onClick={() => decrease(_id)} />
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  margin: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  justify-content: space-between;
  img {
    height: 10rem;
  }

  .item-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 2rem;
    color: lightgray;
    padding: 0 2rem;
  }
  h3 {
    font-size: 1.2vw;
  }
  .btn {
    width: 10rem;
    background: lightgray;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 5px;
  }

  .btn:hover {
    color: black;
  }
  .counter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
  }
  .icons {
    cursor: pointer;
  }
`;
export default CartItem;
