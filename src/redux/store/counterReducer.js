import { SET_COUNTER } from "../constans";
//part 3 REDUCER DEF
const initCounter={counter:0};

const counterReducer=(state=initCounter, action)=>{
    switch (action.type){
        case SET_COUNTER:
            return {counter:action.payload};
        default:
            return state;
    }
}

export default counterReducer;