import Carousal from "../componets/Carousel";
import styled from "styled-components";
import { categories } from "../data";
import Categorie from "../componets/Categorie";
import { useProductContext } from "../context/productContext";
import Swipper from "../componets/Swipper";
import Card from "../componets/Card";
const arr = [
  {
    id: 1,
    url: "./img/Carousel/img2.jpg",
  },
  {
    id: 2,
    url: "./img/Carousel/img1.jpg",
  },
  {
    id: 3,
    url: "./img/Carousel/img3.jpg",
  },
  {
    id: 4,
    url: "./img/Carousel/img4.jpg",
  },
  {
    id: 5,
    url: "./img/Carousel/ps5.png",
  },
  {
    id: 6,
    url: "./img/Carousel/img5.jpg",
  },
];

const Home = () => {
  const { featuredProducts } = useProductContext();
  return (
    <Container>
      <Carousal arr={arr} />
      <Swipper arr={arr} />
      <Categorie arr={categories} />

      <div className="products">
        {featuredProducts.map((curElem) => {
          return <Card key={curElem.id} {...curElem} />;
        })}
      </div>
    </Container>
  );
};

const Container = styled.section`
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
    gap: 1rem;
    padding: 3rem 0;
    align-items: center;
    justify-content: center;
  }
`;
export default Home;
