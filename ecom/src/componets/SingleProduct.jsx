import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import { useCartContext } from "../context/cartContext";

const API = "http://localhost:3000/products/";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { addToCart } = useCartContext();
  // console.log(singleProduct);

  const { _id } = useParams();
  // console.log(_id);

  const { name, price, descrption, image, amount } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${_id}`);
  }, []);

  return (
    <Container>
      <div className="wrapper">
        <div className="img">
          <div className="images">
            <img src={image} alt="" className="sub-img" />
            <img src={image} alt="" className="sub-img" />
            <img src={image} alt="" className="sub-img" />
          </div>
          <img src={image} alt="" className="main-img" />
        </div>
        <div className="info">
          <h2 className="title">{name}</h2>
          <p className="desc">{descrption}</p>
          <h2 className="price">{price}$</h2>
          <h4 className="warranty">
            Warranty <span className="duration">1 year</span>{" "}
          </h4>
          <div className="btns">
            <button className="btn1 btn">Buy Now</button>
            <button
              className="btn2 btn"
              onClick={() => addToCart(_id, amount, singleProduct)}
            >
              Add To Cart
            </button>
          </div>

          <div className="offers">
            <h3>Offers</h3>

            <div className="offer-container">
              <h4>Bank OfferPay with UPI and Get ₹15 discount T&C</h4>
              <h4>
                Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order
                Value ₹1000. Valid once per Paytm accountT&C
              </h4>
              <h4>Bank OfferPay with UPI and Get ₹15 discount T&C</h4>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 4rem;
  background: black;
  .wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .img {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    gap: 2rem;
    object-fit: cover;
  }

  .main-img {
    width: 30vw;
    object-fit: cover;
  }
  .images {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10vw;
    padding: 2rem 1rem;
    gap: 2rem;
  }

  .sub-img {
    width: 60%;
  }
  .info {
    width: 100%;
    height: auto;
    flex: 1;
    color: white;
    align-items: flex-end;
    padding: 3rem;
    background: #191a19;
  }
  .info .title {
    font-size: 2vw;
    margin-bottom: 2rem;
  }

  .info .desc {
    margin: 1rem 0;
  }

  .info .price {
    font-size: 2.5vw;
  }

  .warranty {
    color: grey;
    font-size: 1rem;
    margin: 1rem 0 2rem 0;
  }

  .duration {
    margin-left: 2rem;
  }

  .btns {
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
  }
  .btn {
    width: 12vw;
    background: green;
    font-size: 1.2vw;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: white;
    font-weight: 400;
  }

  .btn:hover {
    background: #155c00;
  }

  .offers {
    color: grey;
  }
  .offers h3 {
    font-size: 1.5vw;
    margin-bottom: 2rem;
  }

  .offers h4 {
    font-size: 1vw;
    font-weight: 400;
    margin: 0.9rem 0;
    color: lightgray;
  }
`;
export default SingleProduct;
