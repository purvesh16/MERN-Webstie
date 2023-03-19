import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const Api = "http://localhost:3000/products";

const intialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureCards: [],
  featuredProducts: [],
  pcgames: [],
  ps: [],
  xbox: [],
  nintendo: [],
  amount: [],
  isSingleLoading: "false",
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const getProducts = async (url) => {
    // Calling Loading before getting API data
    dispatch({ type: "SET_LOADING" });

    // try and catch for error handling
    try {
      const res = await axios.get(url);
      const products = res.data;
      // console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // My 2nd call for singleproduct

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };

  useEffect(() => {
    // fetching api using function
    getProducts(Api);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
