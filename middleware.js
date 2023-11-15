const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

const productsInitialState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
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
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const store = createStore(productReducer,applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("rice"));
