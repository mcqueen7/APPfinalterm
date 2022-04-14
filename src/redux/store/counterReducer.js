import {SET_ART_COUNTER} from"../constants";
//part 3 REDUCER DEF
const initialCounter = { counter: 0 };


const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {

    case SET_ART_COUNTER:
      return { counter: action.payload };

    default:
      return state;
  }
}
export default counterReducer;