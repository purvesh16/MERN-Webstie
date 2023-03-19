import React from "react";
import styled from "styled-components";
import CartItem from "./componets/CartItem";
import { useCartContext } from "./context/cartContext";

const Cart = () => {
  const { cart, clearCart, total } = useCartContext();
  if (cart.length === 0) {
    return (
      <Container>
        <section className="wrapper">
          <h2>Your Bag</h2>

          <h4 className="empty-cart">is currently empty</h4>
        </section>
      </Container>
    );
  }
  return (
    <Container>
      <div className="wrapper">
        <h2>Your Bag</h2>

        <div className="item-container">
          <div className="div-items">
            {cart.map((curElem) => {
              return <CartItem key={curElem._id} {...curElem} />;
            })}
          </div>

          <div className="total">
            <h3>Total :</h3>
            <h3 className="total-price"> ${total}</h3>
          </div>

          <div className="btn-div">
            <button className="btn" onClick={() => clearCart()}>
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 4rem;
  background: black;
  display: flex;
  justify-content: center;

  h2 {
    text-align: center;
    color: white;
    font-size: 3.3rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: 600;
    letter-spacing: 0.8rem;
  }

  .empty-cart {
    font-size: 2vw;
    color: lightgray;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.8rem;
  }
  .item-container {
    width: 70vw;
    padding: 2rem;
  }

  .total {
    width: 100%;
    border-top: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    color: grey;
  }

  .btn-div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .btn {
    font-size: 0.8vw;
    letter-spacing: 5px;
    text-transform: uppercase;
    background: lightgray;
    font-weight: 600;
  }
`;

export default Cart;
