import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { useProductContext } from "../context/productContext";
import Loading from "./Loading";

const Categorie = () => {
  const { isLoading, featureCards } = useProductContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      {featureCards.map((curElem) => {
        return <CategoryItem key={curElem.id} {...curElem} />;
      })}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  .loading-div {
    width: 100%;
    color: white;
  }
  .loading {
    text-align: center;
    color: white;
    margin: 2rem;
  }
`;
export default Categorie;
