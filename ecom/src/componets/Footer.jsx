import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <div className="left">
        <h1 className="logo">
          Game<span className="logo-mid">X</span>store
        </h1>
        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          delectus ut magnam quasi, nihil asperiores modi accusamus soluta aut
          tempore.
        </p>
        <div className="social-icons">
          <div className="social-icon">
            <BsFacebook />
          </div>
          <div className="social-icon">
            <AiFillInstagram />
          </div>
          <div className="social-icon">
            <AiFillTwitterCircle />
          </div>
        </div>
      </div>
      <div className="center">
        <div className="title">Useful Links</div>
        <ul className="nav-list">
          <li className="nav-link">
            <a href="">Home</a>
          </li>
          <li className="nav-link">
            <a href="">Pc</a>
          </li>
          <li className="nav-link">
            <a href="">Ps5</a>
          </li>
          <li className="nav-link">
            <a href="">Xbox</a>
          </li>
          <li className="nav-link">
            <a href="">Accessories</a>
          </li>
          <li className="nav-link">
            <a href="">Myaccount</a>
          </li>
          <li className="nav-link">
            <a href="">Order Tracking</a>
          </li>
          <li className="nav-link">
            <a href="">Wishlist</a>
          </li>
          <li className="nav-link">
            <a href="">Terms </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="title">Contact</div>

        <div className="address common-style">
          Nagar Road, East Pune 440032{" "}
        </div>
        <div className="phone-num common-style"> +91 3285256733 </div>
        <div className="email common-style"> cavecart@gmail.com </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem 3rem;
  display: flex;
  background: #191a19;
  color: lightgray;

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
  .logo {
    font-weight: 700;
    font-size: 1.8rem;
    text-transform: uppercase;
    color: white;
  }
  .logo-mid {
    font-size: 2.7rem;
    font-style: italic;
  }
  .description {
    font-size: 1rem;
    margin: 1.5rem 0;
  }

  .social-icons {
    display: flex;
    font-size: 1.8rem;
  }

  .social-icon {
    margin: 0 0.5rem;
  }
  .center {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: flex-start;
    width: 100%;
  }

  .title {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  .nav-list {
    display: flex;
    flex-wrap: wrap;
  }

  .nav-link {
    list-style: none;
    width: 50%;
    margin-bottom: 0.5rem;
  }

  .nav-link a {
    text-decoration: none;
    color: lightgray;
  }
  .right {
    flex: 1;
    padding: 2rem;
  }

  .common-style {
    margin-bottom: 0.6rem;
    padding-left: 1.5rem;
  }
`;
export default Footer;
