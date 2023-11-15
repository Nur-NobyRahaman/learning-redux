const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
//constant

const GET_REQUEST = "GET_REQUEST";
const GET_SUCCESS = "GET_SUCCESS";
const GET_Failed = "GET_Failed ";
const url = "https://jsonplaceholder.typicode.com/todos";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

const getTodoRequest = () => {
  return {
    type: GET_REQUEST,
  };
};
const getTodoSuccess = (todo) => {
  return {
    type: GET_SUCCESS,
    payload: todo,
  };
};
const getTodoError = (error) => {
  return {
    type: GET_Failed,
    payload: error,
  };
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_Failed:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodoRequest());
    axios.get(url).then((res) => {
      const title = res.data.map((todo) => todo.title);
      dispatch(getTodoSuccess(title));
    })
        .catch((error) => {
          dispatch(getTodoError(error.message))
      })
    
  };
};

const store = createStore(todoReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchData());
