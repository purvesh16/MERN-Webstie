import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CategoryItem = (curElem) => {
  const { id, name, image, category } = curElem;

  return (
    <Container key={id}>
      <Image src={image} />
      <Info>
        <Title>{name}</Title>
        <NavLink to={`/${category}`} className="btn">
          Shop Now
        </NavLink>
      </Info>
    </Container>
  );
};

const Container = styled.section`
  flex: 1;
  width: 30vw;
  height: auto;
  object-fit: cover;
  position: relative;
  padding: 0 1rem;
  margin: 4rem 0;

  .cards-container {
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: black;
    opacity: 0.5;
    transition: all 1.2s ease;
  }

  &:hover:after {
    width: 100%;
  }

  .btn {
    z-index: 1;
    width: 40%;
    height: 3rem;
    border: none;
    outline: none;
    border-radius: 0.6rem;
    font-size: 1.2vw;
    font-weight: 500;
    letter-spacing: 0.3rem;
    transition: all 0.3s ease;
    text-transform: uppercase;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      width: 50%;
      border-radius: 2rem;
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const Info = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-transform: uppercase;
`;
const Title = styled.h1`
  font-size: 4vw;
  color: white;
  margin: 1rem 0;
`;

export default CategoryItem;
