import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./counterReducer"

//part 4 combine Reducers and Create Store
const reducer = combineReducers({
    counter: counterReducer,
  });
  
const store = createStore(
    reducer,
    applyMiddleware(thunk)
  );
  export default store;