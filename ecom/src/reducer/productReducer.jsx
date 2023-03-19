const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
        //   here only isLoading value get true
      };

    case "SET_API_DATA":
      const psdata = action.payload.filter((curElem) => {
        return curElem.category === "ps" && curElem.featured === false;
      });
      const xboxdata = action.payload.filter((curElem) => {
        return curElem.category === "xbox" && curElem.featured === false;
      });
      const pcgamesdata = action.payload.filter((curElem) => {
        return curElem.category === "pc" && curElem.featured === false;
      });
      const featuredata = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });
      const featureProductsData = action.payload.filter((curElem) => {
        return curElem.featuredProducts === true;
      });

      return {
        ...state,
        isLoading: false,
        // here we are adding all the data in the empty array
        products: action.payload,
        // here we are adding data where category === ps
        ps: psdata,
        xbox: xboxdata,
        pcgames: pcgamesdata,
        featureCards: featuredata,
        featuredProducts: featureProductsData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        //   here only isLoading value get true
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
        //   here only isSingleLoading value get true
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    case "SINGLE_API_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
        //   here only isLoading value get true
      };
    default:
      return {
        ...state,
      };
  }
};

export default ProductReducer;
