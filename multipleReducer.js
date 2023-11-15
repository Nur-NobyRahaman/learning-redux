const { createStore, combineReducers } = require("redux");
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

const productsInitialState = {
  products: ["sugar","salt"],
  numberOfProducts: 2,
};
const cartInitialState = {
  carts: ["mouse","keyboard"],
  numberOfCart: 2,
};

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};
const getCart = () => {
  return {
    type: GET_CART,
  };
};
const addCart = (cart) => {
  return {
    type: ADD_CART,
    payload: cart,
  };
};

const productReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        ...state,
          products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1
      };

    default:
      return state;
  }
};
const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        ...state,
          carts: [...state.carts, action.payload],
        numberOfCart: state.numberOfCart + 1
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
    productsR: productReducer,
    cartR: cartReducer
})

const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProducts());
store.dispatch(addProducts('rice'))

store.dispatch(getCart());
store.dispatch(addCart('monitor'))
