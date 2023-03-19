const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { _id, amount, singleProduct } = action.payload;

    // Here we are creating new variabe and in this variable we add only those data which user will click

    let cartProducts;

    cartProducts = {
      _id,
      name: singleProduct.name,
      image: singleProduct.image,
      price: singleProduct.price,
      amount,
    };

    return {
      ...state,
      cart: [...state.cart, cartProducts],
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      cart: [],
    };
  }
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem._id === action.payload) {
        return {
          ...cartItem,
          amount: cartItem.amount + 1,
        };
        // if you not write this else statement then it will give a error which is not identifiable which took me 12 hours to identify
      } else {
        return cartItem;
      }
    });

    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem._id === action.payload) {
          return {
            ...cartItem,
            amount: cartItem.amount + -1,
          };
          // if you not write this else statement then it will give a error which is not identifiable which took me 12 hours to identify
        } else {
          return cartItem;
        }
      })
      .filter((cartItem) => cartItem.amount !== 0);

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem._id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  throw new Error("no matching action type");
};

export default cartReducer;
