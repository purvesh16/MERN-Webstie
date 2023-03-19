import React from "react";
import styled from "styled-components";
import { useProductContext } from "../context/productContext";
import Card from "../componets/Card";
import Loading from "../componets/Loading";
const PcGames = () => {
  const { isLoading, pcgames } = useProductContext();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <img src="./img/pc/main.jpg" alt="" className="img" />
      <div className="products">
        {pcgames.map((curElem) => {
          return <Card key={curElem._id} {...curElem} />;
        })}
      </div>
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

  .products {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    padding: 3rem 0;
    align-items: center;
    justify-content: center;
  }
`;

export default PcGames;
