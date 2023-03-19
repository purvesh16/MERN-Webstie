import React from "react";
import styled from "styled-components";
import { ps } from "../../data";

const Nintendo = () => {
  return (
    <Container>
      <img src="./img/Nintendo/main.jpeg" alt="" className="img" />
    </Container>
  );
};

const Container = styled.div`
  background: black;
  padding: 0 4rem;

  .img {
    margin: 4rem 0;
    width: 100%;
  }
`;

export default Nintendo;
