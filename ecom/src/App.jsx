import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import SingleProduct from "./componets/SingleProduct";
import Ps5 from "./pages/Ps5";
import PcGames from "./pages/PcGames";
import Xbox from "./pages/Xbox";
import Contact from "./componets/Contact";
import GlobalStyles from "./GlobalStlyes";
import Cart from "./Cart";
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Sections>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pc" element={<PcGames />} />
          <Route path="/ps" element={<Ps5 />} />
          <Route path="/xbox" element={<Xbox />} />
          {/* <Route path="/nintendo" element={<Nintendo />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleProduct/:_id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Sections>
      <Footer />
    </Router>
  );
}

const Sections = styled.section`
  padding-top: 4.5rem;
`;

export default App;
