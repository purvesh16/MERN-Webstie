import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { BsBag } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const Header = () => {
  const { amount } = useCartContext();

  return (
    <HeaderSection>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h1 className="logo">
              Game<span className="logo-mid">X</span>store
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Nav />
            </ul>

            <NavLink to="/cart" className="cart">
              <BsBag className="cart-logo" />
              <div className="cart-amount">
                <span>{amount}</span>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </HeaderSection>
  );
};

const HeaderSection = styled.header`
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.2);
  color: white;

  a {
    text-decoration: none;
  }

  .navbar {
    background: #191a19;
  }

  .logo {
    font-weight: 700;
    font-size: 1.8rem;
    margin: 0 1rem;
    text-transform: uppercase;
    color: white;
  }
  .logo-mid {
    font-size: 2.7rem;
    font-style: italic;
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    margin-left: 1rem;
  }

  .navbar-nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-signup {
    width: 7rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    color: black;
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 1rem;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .login-signup:hover {
    background: #191a19;
    color: white;
  }
  .profile-icon {
    margin-right: 1.4rem;
  }

  .cart {
    font-size: 2rem;
    color: white;
    margin: 0 2rem;
    position: relative;
  }

  .cart-amount {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: -0.3rem;
    right: -1.1rem;
    font-weight: 700;
    color: black;
    font-size: 1.7rem;
  }
`;

export default Header;
