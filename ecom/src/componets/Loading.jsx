import React from "react";
import styled from "styled-components";
const Loading = () => {
  return (
    <Container>
      <h2 className="loading">...Loading</h2>
    </Container>
  );
};

const Container = styled.div`
  .loading {
    text-transform: uppercase;
    color: white;
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.4rem;
  }
`;
export default Loading;
